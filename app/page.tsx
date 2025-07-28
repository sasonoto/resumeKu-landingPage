import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Star, Users, CheckCircle, Sparkles, Target, Zap, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const heroImage = "/assets/hero-image.jpg";
const aiFeatures = "/assets/ai-features.jpg";
const successStory = "/assets/success-story.jpg";

export const metadata = {
  title: 'ResumeKu - CV Builder Indonesia Terbaik',
  description: 'Buat CV profesional dengan AI dalam hitungan menit. Template premium, optimasi ATS, dan panduan karir untuk mendapatkan pekerjaan impian Anda.',
  keywords: 'cv builder, resume builder indonesia, buat cv, template cv, cv ats, cv professional',
  openGraph: {
    title: 'ResumeKu - CV Builder Indonesia Terbaik',
    description: 'Buat CV profesional dengan AI dalam hitungan menit',
    url: 'https://resumeku.vercel.app',
    siteName: 'ResumeKu',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResumeKu - CV Builder Indonesia Terbaik',
    description: 'Buat CV profesional dengan AI dalam hitungan menit',
  },
}

export default function HomePage() {
  const testimonials = [
    {
      name: "Sari Wijaya",
      job: "Software Engineer di Gojek",
      content: "ResumeKu membantu saya mendapatkan pekerjaan impian di Gojek! CV yang dihasilkan sangat profesional dan menarik perhatian HRD.",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      job: "Product Manager di Tokopedia",
      content: "Fitur AI-nya luar biasa! Bullet points yang dihasilkan sangat tepat sasaran dan sesuai dengan job description yang saya lamar.",
      rating: 5
    },
    {
      name: "Dewi Lestari",
      job: "Data Analyst di Shopee",
      content: "Dalam seminggu setelah menggunakan ResumeKu, saya langsung dipanggil interview oleh 3 perusahaan tech terbaik Indonesia!",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "AI-Powered Optimization",
      description: "Teknologi AI terdepan yang mengoptimalkan setiap bullet point CV Anda untuk menarik perhatian HRD"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Template Profesional",
      description: "Puluhan template CV yang dirancang khusus untuk berbagai industri dan posisi pekerjaan"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Proses Cepat",
      description: "Buat CV profesional hanya dalam 5 menit dengan panduan step-by-step yang mudah diikuti"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Pencari Kerja Terbantu" },
    { number: "1,200+", label: "Perusahaan Top" },
    { number: "95%", label: "Tingkat Keberhasilan" },
    { number: "4.9/5", label: "Rating Pengguna" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollAnimation>
                <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                  ✨ Platform CV Terdepan di Indonesia
                </Badge>
              </ScrollAnimation>
              
              <ScrollAnimation delay={200}>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Buat CV Profesional dengan{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Kekuatan AI
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation delay={400}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  ResumeKu telah membantu <strong>50,000+ pencari kerja</strong> mendapatkan pekerjaan di 
                  perusahaan top seperti Gojek, Tokopedia, dan Shopee. Bergabunglah dengan mereka!
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300" asChild>
                    <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                      Coba Gratis Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Lihat Contoh CV
                  </Button>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={800}>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span>4.9/5 dari 10,000+ pengguna</span>
                </div>
              </ScrollAnimation>
            </div>
            
            <ScrollAnimation delay={400} className="relative">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="ResumeKu AI Platform" 
                  className="rounded-2xl shadow-elegant hover-lift"
                />
                <div className="absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm rounded-full p-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mengapa Memilih ResumeKu?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Platform AI terdepan yang membantu Anda membuat CV profesional yang menarik perhatian HRD
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <Card className="gradient-card border-0 hover-lift cursor-pointer group">
                  <CardHeader>
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Showcase */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20">
                  🚀 Teknologi AI Terdepan
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  AI yang Memahami Kebutuhan Karir Anda
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Teknologi AI kami menganalisis job description dan industri target untuk 
                  mengoptimalkan setiap kalimat dalam CV Anda.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Optimasi keyword otomatis untuk ATS",
                    "Rekomendasi bullet points yang powerful",
                    "Penyesuaian format untuk industri spesifik"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="gradient-primary text-white" asChild>
                  <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                    Mulai Sekarang
                  </a>
                </Button>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <img 
                src={aiFeatures} 
                alt="AI Features" 
                className="rounded-2xl shadow-elegant hover-lift"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Kisah Sukses Pengguna ResumeKu
              </h2>
              <p className="text-xl text-muted-foreground">
                Bergabung dengan ribuan profesional yang telah berhasil
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <Card className="gradient-card border-0 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.job}</div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories with Image */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <img 
                src={successStory} 
                alt="Success Stories" 
                className="rounded-2xl shadow-elegant hover-lift"
              />
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div>
                <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
                  📈 Hasil Nyata
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Diterima di Perusahaan Top Indonesia
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Pengguna ResumeKu telah berhasil diterima di berbagai perusahaan terkemuka 
                  seperti Gojek, Tokopedia, Shopee, Bukalapak, dan masih banyak lagi.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Interview Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">7 Hari</div>
                    <div className="text-sm text-muted-foreground">Rata-rata Diterima</div>
                  </div>
                </div>
                <Button className="gradient-primary text-white" asChild>
                  <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                    Bergabung Sekarang
                  </a>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Siap Mendapatkan Pekerjaan Impian?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Bergabung dengan 50,000+ profesional yang telah mempercayai ResumeKu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300" asChild>
                <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                  Mulai Gratis Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Pelajari Lebih Lanjut
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ✅ Gratis selamanya untuk template dasar • ✅ Tidak perlu kartu kredit
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
}