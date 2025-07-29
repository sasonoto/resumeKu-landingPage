'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, CreditCard, Smartphone, Building2, Star } from "lucide-react"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const packages = [
  {
    id: 'starter',
    name: "Starter",
    price: "Rp 15,000",
    priceValue: 15000,
    tokens: 25,
    popular: false,
    features: [
      "25 token untuk berbagai fitur",
      "Download PDF CV (1 token)",
      "AI Optimization (2 token)",
      "AI Generation (3 token)",
      "Akses template dasar",
      "Support email 24/7"
    ]
  },
  {
    id: 'professional',
    name: "Professional", 
    price: "Rp 35,000",
    priceValue: 35000,
    tokens: 75,
    popular: true,
    features: [
      "75 token untuk berbagai fitur",
      "Download PDF CV (1 token)",
      "AI Optimization (2 token)", 
      "AI Generation (3 token)",
      "Premium Template Access (5-8 token)",
      "Template khusus industri",
      "Priority support",
      "Unlimited revisions"
    ]
  },
  {
    id: 'enterprise',
    name: "Enterprise",
    price: "Rp 75,000", 
    priceValue: 75000,
    tokens: 200,
    popular: false,
    features: [
      "200 token untuk berbagai fitur",
      "Download PDF CV (1 token)",
      "AI Optimization (2 token)",
      "AI Generation (3 token)", 
      "Premium Template Access (5-8 token)",
      "Semua template premium",
      "Advanced AI features",
      "1-on-1 career consultation",
      "CV review by experts"
    ]
  },
  {
    id: 'ultimate',
    name: "Ultimate",
    price: "Rp 150,000",
    priceValue: 150000,
    tokens: 500, 
    popular: false,
    features: [
      "500 token untuk berbagai fitur",
      "Download PDF CV (1 token)",
      "AI Optimization (2 token)",
      "AI Generation (3 token)",
      "Premium Template Access (5-8 token)",
      "Unlimited everything",
      "VIP support 24/7",
      "Custom template design", 
      "LinkedIn profile optimization",
      "Cover letter generator"
    ]
  }
]

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState('professional')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: ''
  })

  // Handle URL parameters to pre-select package
  useEffect(() => {
    const packageId = searchParams.get('package')
    if (packageId && packages.find(pkg => pkg.id === packageId)) {
      setSelectedPlan(packageId)
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      if (!selectedPlanData) {
        throw new Error('No package selected')
      }

      const paymentData = {
        packageId: selectedPlan,
        packageName: selectedPlanData.name,
        amount: selectedPlanData.priceValue,
        tokens: selectedPlanData.tokens,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
      }

      const response = await fetch('/api/payment/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to create payment')
      }

      // Redirect to Xendit payment page
      if (result.data?.paymentUrl) {
        window.location.href = result.data.paymentUrl
      } else {
        throw new Error('Payment URL not received')
      }

    } catch (error: any) {
      console.error('Payment error:', error)
      alert(`Terjadi kesalahan: ${error.message}. Silakan coba lagi atau hubungi support di shf.niagautama@gmail.com`)
    } finally {
      setIsLoading(false)
    }
  }

  const selectedPlanData = packages.find(plan => plan.id === selectedPlan)

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 gradient-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              💳 Checkout
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pilih Paket{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Token Anda
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lengkapi pesanan dan lakukan pembayaran untuk mendapatkan token ResumeKu
            </p>
          </div>

          {/* Package Selection */}
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`relative cursor-pointer transition-all duration-300 hover-lift ${
                  selectedPlan === pkg.id
                    ? 'ring-2 ring-primary shadow-glow gradient-card border-0'
                    : 'gradient-card border-0'
                } ${pkg.popular ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedPlan(pkg.id)}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-2">
                      <Star className="h-4 w-4 mr-1" />
                      Terpopuler
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl mb-2">{pkg.name}</CardTitle>
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-foreground">{pkg.price}</span>
                  </div>
                  <Badge className="mx-auto bg-accent/10 text-accent px-3 py-1">
                    {pkg.tokens} Token
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <ul className="space-y-2">
                    {pkg.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-center pt-4">
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      selectedPlan === pkg.id
                        ? 'bg-primary border-primary'
                        : 'border-muted-foreground/30'
                    }`}>
                      {selectedPlan === pkg.id && (
                        <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Checkout Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {selectedPlanData && (
                  <>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{selectedPlanData.name} Package</h3>
                        <p className="text-muted-foreground">{selectedPlanData.tokens} Token</p>
                      </div>
                      <span className="font-bold text-lg">{selectedPlanData.price}</span>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t">
                      <h4 className="font-semibold">Yang Anda Dapatkan:</h4>
                      <ul className="space-y-2">
                        {selectedPlanData.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total Pembayaran</span>
                        <span className="text-2xl font-bold text-primary">{selectedPlanData.price}</span>
                      </div>
                    </div>
                  </>
                )}
                
                {/* Payment Methods */}
                <div className="space-y-4 pt-6 border-t">
                  <h4 className="font-semibold">Metode Pembayaran</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center space-x-3 p-3 border border-muted-foreground/20 rounded-lg">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <span className="text-sm">Kartu Kredit/Debit</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border border-muted-foreground/20 rounded-lg">
                      <Building2 className="h-5 w-5 text-primary" />
                      <span className="text-sm">Transfer Bank</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 border border-muted-foreground/20 rounded-lg">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <span className="text-sm">E-Wallet (GoPay, OVO, DANA)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-foreground mb-1">Pembayaran Aman</p>
                      <p className="text-muted-foreground">
                        Transaksi Anda dienkripsi dan diproses dengan aman menggunakan teknologi terdepan dari Xendit.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Information */}
            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Informasi Pembeli</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="email@example.com"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Token akan dikirim ke email ini
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      placeholder="+62812345678"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full gradient-primary text-white hover:shadow-glow transition-all duration-300 py-4 text-lg"
                  >
                    {isLoading ? 'Memproses...' : 'Lanjutkan ke Pembayaran'}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Dengan melanjutkan, Anda menyetujui{' '}
                    <a href="/terms" className="text-primary hover:underline">Syarat & Ketentuan</a>
                    {' '}dan{' '}
                    <a href="/privacy" className="text-primary hover:underline">Kebijakan Privasi</a>
                  </p>
                  
                  <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>SSL Terenkripsi</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Garansi Refund</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      <span>Support 24/7</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}