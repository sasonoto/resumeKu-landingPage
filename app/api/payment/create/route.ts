import { NextRequest, NextResponse } from 'next/server'
import { XenditService, PaymentData } from '@/lib/xendit'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['packageId', 'packageName', 'amount', 'tokens', 'customerName', 'customerEmail', 'customerPhone']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.customerEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate amount (should be positive number)
    if (typeof body.amount !== 'number' || body.amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      )
    }

    const paymentData: PaymentData = {
      packageId: body.packageId,
      packageName: body.packageName,
      amount: body.amount,
      tokens: body.tokens,
      customerName: body.customerName,
      customerEmail: body.customerEmail,
      customerPhone: body.customerPhone,
    }

    // Create Xendit invoice
    const invoice = await XenditService.createInvoice(paymentData)

    return NextResponse.json({
      success: true,
      data: {
        invoiceId: invoice.id,
        externalId: invoice.externalId,
        paymentUrl: invoice.invoiceUrl,
        status: invoice.status,
        amount: invoice.amount,
      }
    })

  } catch (error: any) {
    console.error('Payment creation error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to create payment',
        message: error.message,
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Payment API is running' },
    { status: 200 }
  )
}