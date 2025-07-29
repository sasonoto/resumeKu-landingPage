import { Metadata } from 'next'
import { CheckCircle, ArrowRight, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'Pembayaran Berhasil - ResumeKu',
  description: 'Terima kasih atas pembelian Anda. Token telah ditambahkan ke akun Anda.',
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 gradient-hero">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="gradient-card border-0 shadow-glow">
            <CardHeader className="pb-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Pembayaran Berhasil! 🎉
              </CardTitle>
              <p className="text-xl text-muted-foreground">
                Terima kasih atas pembelian Anda. Token telah berhasil ditambahkan ke akun ResumeKu Anda.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-primary/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Apa yang terjadi selanjutnya?</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Token telah ditambahkan</p>
                      <p className="text-sm text-muted-foreground">Token Anda akan tersedia dalam 1-2 menit</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Email konfirmasi terkirim</p>
                      <p className="text-sm text-muted-foreground">Cek email Anda untuk detail pembelian</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Akses fitur premium</p>
                      <p className="text-sm text-muted-foreground">Mulai gunakan semua fitur ResumeKu sekarang</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Punya pertanyaan? Hubungi support kami di{' '}
                  <a href="mailto:shf.niagautama@gmail.com" className="text-primary hover:underline">
                    shf.niagautama@gmail.com
                  </a>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="gradient-primary text-white hover:shadow-glow transition-all duration-300" asChild>
                    <a href="https://app.resumeku.id">
                      Mulai Buat CV <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white" asChild>
                    <a href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Kembali ke Beranda
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