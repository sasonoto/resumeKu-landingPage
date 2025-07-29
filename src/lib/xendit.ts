import { Xendit } from 'xendit-node'

// Initialize Xendit client
const getXenditKey = () => {
  if (process.env.NODE_ENV === 'development' || !process.env.XENDIT_SECRET_KEY) {
    return 'xnd_development_dummy_key_for_build'
  }
  return process.env.XENDIT_SECRET_KEY
}

const xendit = new Xendit({
  secretKey: getXenditKey(),
})

export interface PaymentData {
  packageId: string
  packageName: string
  amount: number
  tokens: number
  customerName: string
  customerEmail: string
  customerPhone: string
}

export interface XenditInvoiceResponse {
  id: string
  externalId: string
  invoiceUrl: string
  status: string
  amount: number
  created: string
  updated: string
}

export class XenditService {
  /**
   * Create a payment invoice using Xendit
   */
  static async createInvoice(paymentData: PaymentData): Promise<XenditInvoiceResponse> {
    try {
      // Check if we have a valid Xendit key
      if (!process.env.XENDIT_SECRET_KEY || process.env.XENDIT_SECRET_KEY.includes('dummy')) {
        throw new Error('Xendit secret key not configured properly')
      }
      
      const externalId = `resumeku-${paymentData.packageId}-${Date.now()}`
      
      const invoiceData = {
        externalId: externalId,
        amount: paymentData.amount,
        description: `ResumeKu ${paymentData.packageName} Package - ${paymentData.tokens} tokens`,
        invoiceDuration: 86400, // 24 hours
        customer: {
          givenNames: paymentData.customerName,
          email: paymentData.customerEmail,
          mobileNumber: paymentData.customerPhone,
        },
        currency: 'IDR',
        items: [
          {
            name: `${paymentData.packageName} Package`,
            quantity: 1,
            price: paymentData.amount,
            category: 'Digital Service',
            url: process.env.NEXT_PUBLIC_APP_URL || 'https://resumeku.id',
          }
        ],
        successRedirectUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'https://resumeku.id'}/payment/success?external_id=${externalId}`,
        failureRedirectUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'https://resumeku.id'}/payment/failed?external_id=${externalId}`,
        fees: [
          {
            type: 'ADMIN',
            value: 0,
          }
        ],
        locale: 'id',
        paymentMethods: [
          'BANK_TRANSFER',
          'CREDIT_CARD', 
          'EWALLET',
          'QR_CODE',
          'RETAIL_OUTLET'
        ],
      }

      const response = await xendit.Invoice.createInvoice({
        data: invoiceData
      })
      
      return {
        id: response.id || '',
        externalId: response.externalId || externalId,
        invoiceUrl: response.invoiceUrl || '',
        status: response.status || 'PENDING',
        amount: response.amount || 0,
        created: typeof response.created === 'string'
          ? response.created
          : response.created?.toISOString() || new Date().toISOString(),
        updated: typeof response.updated === 'string'
          ? response.updated
          : response.updated?.toISOString() || new Date().toISOString(),
      }
    } catch (error: any) {
      console.error('Xendit Invoice Creation Error:', error)
      throw new Error(`Failed to create payment invoice: ${error.message}`)
    }
  }

  /**
   * Get invoice status by external_id
   */
  static async getInvoiceStatus(externalId: string) {
    try {
      const response = await xendit.Invoice.getInvoices({
        externalId: externalId,
      })
      
      if (response.length === 0) {
        throw new Error('Invoice not found')
      }
      
      return response[0]
    } catch (error: any) {
      console.error('Xendit Get Invoice Error:', error)
      throw new Error(`Failed to get invoice status: ${error.message}`)
    }
  }

  /**
   * Verify webhook signature
   */
  static verifyWebhookSignature(rawBody: string, signature: string): boolean {
    const crypto = require('crypto')
    const webhookToken = process.env.XENDIT_WEBHOOK_TOKEN || ''
    
    if (!webhookToken) {
      console.error('XENDIT_WEBHOOK_TOKEN not configured')
      return false
    }
    
    const computedSignature = crypto
      .createHmac('sha256', webhookToken)
      .update(rawBody)
      .digest('hex')
    
    return computedSignature === signature
  }
}

export default XenditService