import { NextRequest, NextResponse } from 'next/server'
import { XenditService } from '@/lib/xendit'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-xendit-signature') || ''
    
    // Verify webhook signature
    if (!XenditService.verifyWebhookSignature(body, signature)) {
      console.error('Invalid webhook signature')
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    const webhookData = JSON.parse(body)
    
    console.log('Received Xendit webhook:', webhookData)

    // Handle different webhook events
    switch (webhookData.status) {
      case 'PAID':
        await handleSuccessfulPayment(webhookData)
        break
      case 'EXPIRED':
        await handleExpiredPayment(webhookData)
        break
      case 'FAILED':
        await handleFailedPayment(webhookData)
        break
      default:
        console.log(`Unhandled payment status: ${webhookData.status}`)
    }

    return NextResponse.json({ received: true })

  } catch (error: any) {
    console.error('Webhook processing error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleSuccessfulPayment(webhookData: any) {
  try {
    console.log(`Payment successful for invoice: ${webhookData.external_id}`)
    
    // Here you would typically:
    // 1. Update your database to mark the payment as complete
    // 2. Add tokens to the user's account
    // 3. Send confirmation email
    // 4. Log the transaction
    
    // Example database update (you'll need to implement this):
    // await database.updatePayment(webhookData.external_id, {
    //   status: 'PAID',
    //   paid_at: new Date(),
    //   xendit_id: webhookData.id
    // })
    
    // Example: Add tokens to user account
    // await database.addTokensToUser(webhookData.customer.email, tokens)
    
    console.log('Successfully processed payment completion')
    
  } catch (error) {
    console.error('Error processing successful payment:', error)
  }
}

async function handleExpiredPayment(webhookData: any) {
  try {
    console.log(`Payment expired for invoice: ${webhookData.external_id}`)
    
    // Update payment status to expired
    // await database.updatePayment(webhookData.external_id, {
    //   status: 'EXPIRED',
    //   expired_at: new Date()
    // })
    
  } catch (error) {
    console.error('Error processing expired payment:', error)
  }
}

async function handleFailedPayment(webhookData: any) {
  try {
    console.log(`Payment failed for invoice: ${webhookData.external_id}`)
    
    // Update payment status to failed
    // await database.updatePayment(webhookData.external_id, {
    //   status: 'FAILED',
    //   failed_at: new Date(),
    //   failure_reason: webhookData.failure_code
    // })
    
  } catch (error) {
    console.error('Error processing failed payment:', error)
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Xendit webhook endpoint is active' },
    { status: 200 }
  )
}