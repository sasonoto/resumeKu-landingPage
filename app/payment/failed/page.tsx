import { Metadata } from 'next'
import { XCircle, ArrowRight, RotateCcw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'Pembayaran Gagal - ResumeKu',
  description: 'Pembayaran Anda tidak berhasil diproses. Silakan coba lagi atau hubungi support.',
}

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="gradient-card border-0 shadow-glow">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
                <XCircle className="h-12 w-12 text-red-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Pembayaran Gagal
              </CardTitle>
              <p className="text-xl text-muted-foreground">
                Maaf, pembayaran Anda tidak berhasil diproses. Jangan khawatir, tidak ada biaya yang dikenakan.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Kemungkinan penyebab:</h3>
                <div className="space-y-3 text-left text-red-800">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm">Saldo kartu atau e-wallet tidak mencukupi</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm">Koneksi internet terputus saat transaksi</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm">Batas waktu pembayaran sudah habis</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm">Informasi kartu atau rekening tidak valid</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Apa yang bisa Anda lakukan?</h3>
                <div className="space-y-3 text-left text-blue-800">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm">Periksa saldo dan coba lagi dengan metode pembayaran yang sama</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm">Gunakan kartu kredit/debit atau e-wallet yang berbeda</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm">Hubungi support kami jika masalah terus berlanjut</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Butuh bantuan? Hubungi support kami di{' '}
                  <a href="mailto:shf.niagautama@gmail.com" className="text-primary hover:underline">
                    shf.niagautama@gmail.com
                  </a>
                  {' '}atau melalui{' '}
                  <a href="/kontak" className="text-primary hover:underline">
                    halaman kontak
                  </a>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="gradient-primary text-white hover:shadow-glow transition-all duration-300" asChild>
                    <a href="/checkout">
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Coba Lagi
                    </a>
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                    <a href="/harga">
                      Lihat Paket Lain <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}