import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { 
  CheckCircle, 
  ArrowRight,
  Download,
  Sparkles,
  Zap,
  Crown,
  Star
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: 'Harga & Paket - ResumeKu CV Builder',
  description: 'Pilih paket yang sesuai kebutuhan Anda. Mulai gratis atau upgrade ke premium untuk fitur AI dan template eksklusif.',
  keywords: 'harga cv builder, paket premium, pricing resumeku, biaya membuat cv',
  openGraph: {
    title: 'Harga & Paket - ResumeKu CV Builder',
    description: 'Pilih paket yang sesuai kebutuhan Anda. Mulai gratis atau upgrade ke premium untuk fitur AI dan template eksklusif.',
    url: 'https://resumeku.vercel.app/harga',
    siteName: 'ResumeKu',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harga & Paket - ResumeKu CV Builder',
    description: 'Pilih paket yang sesuai kebutuhan Anda. Mulai gratis atau upgrade ke premium.',
  },
}

export default function HargaPage() {
  const packages = [
    {
      name: "Starter",
      price: "Rp 15,000",
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
      name: "Professional", 
      price: "Rp 35,000",
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
      name: "Enterprise",
      price: "Rp 75,000", 
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
      name: "Ultimate",
      price: "Rp 150,000",
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
  ];

  const usageBreakdown = [
    {
      icon: <Download className="h-6 w-6 text-primary" />,
      feature: "Download PDF",
      cost: "1 token",
      description: "Export CV Anda dalam format PDF berkualitas tinggi"
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      feature: "AI Optimization", 
      cost: "2 token",
      description: "Perbaikan otomatis bullet points dan struktur kalimat"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      feature: "AI Generation",
      cost: "3 token", 
      description: "Generate konten CV secara otomatis dari input data"
    },
    {
      icon: <Crown className="h-6 w-6 text-primary" />,
      feature: "Premium Template",
      cost: "5-8 token",
      description: "Akses template eksklusif dengan desain profesional"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center">
              <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                💰 Paket Token
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Pilih Paket yang{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Sesuai Kebutuhan
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Sistem token fleksibel yang memungkinkan Anda menggunakan fitur sesuai kebutuhan. 
                Mulai dari template gratis hingga AI generation canggih.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Token Usage Explanation */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Cara Kerja Sistem Token
              </h2>
              <p className="text-xl text-muted-foreground">
                Gunakan token untuk mengakses berbagai fitur AI dan premium
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usageBreakdown.map((usage, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="gradient-card border-0 hover-lift text-center">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                      {usage.icon}
                    </div>
                    <CardTitle className="text-lg">{usage.feature}</CardTitle>
                    <Badge className="mx-auto bg-primary text-white">
                      {usage.cost}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {usage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Paket Token ResumeKu
              </h2>
              <p className="text-xl text-muted-foreground">
                Pilih paket yang paling sesuai dengan kebutuhan pembuatan CV Anda
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <Card className={`relative gradient-card border-0 hover-lift ${
                  pkg.popular ? 'ring-2 ring-primary shadow-glow' : ''
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white px-6 py-2">
                        <Star className="h-4 w-4 mr-1" />
                        Terpopuler
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    </div>
                    <Badge className="mx-auto bg-accent/10 text-accent text-lg px-4 py-2">
                      {pkg.tokens} Token
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full mt-6 ${
                        pkg.popular 
                          ? 'gradient-primary text-white hover:shadow-glow' 
                          : 'border-primary text-primary hover:bg-primary hover:text-white'
                      }`}
                      variant={pkg.popular ? 'default' : 'outline'}
                      asChild
                    >
                      <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                        Pilih Paket Ini <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20">
                  💎 Nilai Terbaik
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Investasi Terbaik untuk Karir Anda
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Dengan biaya kurang dari satu kali makan di restoran, Anda bisa mendapatkan 
                  CV profesional yang berpotensi meningkatkan gaji hingga 30-50%.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "ROI Hingga 10,000%",
                      description: "Investasi Rp 35,000 berpotensi meningkatkan gaji jutaan rupiah"
                    },
                    {
                      title: "Hemat Waktu 10+ Jam",
                      description: "Bandingkan dengan membuat CV manual yang memakan waktu berhari-hari"
                    },
                    {
                      title: "Kualitas Konsultan Profesional",
                      description: "Setara dengan jasa konsultan karir yang biayanya jutaan rupiah"
                    }
                  ].map((value, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="gradient-card border-0 shadow-elegant p-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                    <Crown className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    Garansi Kepuasan 100%
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Tidak puas dengan hasilnya? Kami berikan refund penuh tanpa pertanyaan
                  </p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Refund 100% dalam 7 hari</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Support 24/7</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Update gratis selamanya</span>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pertanyaan Umum
              </h2>
              <p className="text-xl text-muted-foreground">
                Jawaban untuk pertanyaan yang paling sering ditanyakan
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            {[
              {
                question: "Bagaimana cara kerja sistem token?",
                answer: "Token adalah mata uang digital dalam platform ResumeKu. Setiap fitur memiliki biaya token yang berbeda. Token tidak expired dan bisa digunakan kapan saja."
              },
              {
                question: "Apakah ada biaya tambahan selain token?",
                answer: "Tidak ada biaya tambahan. Sekali beli token, Anda bisa menggunakan semua fitur sesuai dengan token yang dimiliki."
              },
              {
                question: "Bisakah saya upgrade atau downgrade paket?",
                answer: "Ya, Anda bisa membeli token tambahan kapan saja. Token akan terakumulasi di akun Anda."
              },
              {
                question: "Apakah ada trial gratis?",
                answer: "Ya, setiap user baru mendapat beberapa token gratis untuk mencoba fitur dasar platform kami."
              }
            ].map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <Card className="gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Mulai Perjalanan Karir Baru Anda
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Bergabung dengan 50,000+ profesional yang telah meningkatkan karir mereka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300" asChild>
                <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                  Pilih Paket Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Coba Gratis Dulu
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ✅ Mulai dengan token gratis • ✅ Garansi refund 7 hari
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}