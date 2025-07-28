import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { 
  UserPlus, 
  LayoutDashboard, 
  FileText, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  ArrowDown,
  Target,
  Zap,
  Settings
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import step1Image from "@/assets/step-1-signup.jpg";
import step2Image from "@/assets/step-2-dashboard.jpg";
import step3Image from "@/assets/step-3-builder.jpg";
import step4Image from "@/assets/step-4-ai-optimization.jpg";

export const CaraMembuatCV = () => {
  const steps = [
    {
      number: 1,
      icon: <UserPlus className="h-12 w-12 text-primary" />,
      title: "🚀 Akses Instan",
      description: "Langsung masuk dengan Google - Zero ribet, maksimal hasil!",
      details: "Daftar sekali klik dengan Google dan langsung terhubung ke dashboard canggih kami. Tidak perlu mengingat password atau mengisi formulir panjang!",
      image: step1Image
    },
    {
      number: 2,
      icon: <LayoutDashboard className="h-12 w-12 text-primary" />,
      title: "🎯 Command Center Pribadi",
      description: "Dashboard pintar dengan 20+ template premium dan panduan ahli untuk setiap industri",
      details: "Pilih bahasa (Indonesia/English), template yang sesuai profesi, dan dapatkan panduan khusus untuk industri target Anda. Semua tersedia dalam satu tempat!",
      image: step2Image
    },
    {
      number: 3,
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "✨ AI Writing Assistant",
      subtitle: "Transform Your Experience",
      description: "Tulis pengalaman apa adanya → Klik tombol AI → Boom! Jadi bullet point yang memukau HRD",
      details: "Cukup ceritakan pengalaman Anda secara natural. AI kami akan mengubahnya menjadi kalimat-kalimat powerful dengan action verbs dan keywords yang tepat sasaran!",
      image: step3Image
    },
    {
      number: 4,
      icon: <Sparkles className="h-12 w-12 text-primary" />,
      title: "🎉 CV Optimization Station",
      description: "Sidebar AI memberikan saran real-time: keyword matching, format fixes, dan impact boosters - semua dengan 1-click apply!",
      details: "Preview CV langsung dengan sidebar AI yang memberikan saran pintar untuk meningkatkan kekuatan CV Anda. Tinggal klik 'Apply' dan CV jadi sempurna!",
      image: step4Image
    }
  ];

  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Template Khusus Industri",
      description: "Setiap template dirancang khusus untuk industri tertentu dengan panduan lengkap"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Optimasi AI Real-time",
      description: "AI menganalisis dan memberikan saran perbaikan secara real-time saat Anda mengetik"
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Kustomisasi Penuh",
      description: "Ubah warna, font, layout, dan elemen lainnya sesuai keinginan Anda"
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
                📚 Panduan Lengkap
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                CV Otomatis dengan{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Kekuatan AI
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Ikuti panduan step-by-step untuk membuat CV profesional yang menarik perhatian HRD 
                dengan bantuan teknologi AI terdepan
              </p>
              <Button size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300" asChild>
                <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                  Mulai Membuat CV <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proses Pembuatan CV yang Mudah
              </h2>
              <p className="text-xl text-muted-foreground">
                Hanya 4 langkah untuk CV profesional yang siap kerja
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <div className="relative">
                  
                  <Card className="gradient-card border-0 shadow-elegant hover-lift overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <CardHeader className="lg:p-12">
                        <div className="flex items-center gap-4 mb-6">
                          <div>
                            <CardTitle className="text-2xl">{step.title}</CardTitle>
                            {step.subtitle && (
                              <Badge className="mt-2 bg-accent/10 text-accent">
                                {step.subtitle}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardDescription className="text-base whitespace-pre-line mb-6">
                          {step.description}
                        </CardDescription>
                        <p className="text-muted-foreground">
                          {step.details}
                        </p>
                        <div className="mt-6">
                          <Button className="gradient-primary text-white" asChild>
                            <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                              Coba Langkah Ini
                            </a>
                          </Button>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="lg:p-0 flex items-center justify-center relative overflow-hidden">
                        {step.image && (
                          <div className="w-full h-80 lg:h-full">
                            <img 
                              src={step.image} 
                              alt={step.title}
                              className="w-full h-full object-cover rounded-r-lg"
                            />
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Fitur Unggulan ResumeKu
              </h2>
              <p className="text-xl text-muted-foreground">
                Teknologi canggih untuk hasil CV yang maksimal
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <Card className="gradient-card border-0 hover-lift text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Process Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div>
                <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20">
                  ⚡ Keunggulan Proses
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Mengapa Proses Kami Berbeda?
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "AI-Guided Writing",
                      description: "Setiap kalimat dioptimalkan AI untuk dampak maksimal"
                    },
                    {
                      title: "Industry-Specific Templates",
                      description: "Template disesuaikan dengan standar industri target Anda"
                    },
                    {
                      title: "Real-time Feedback",
                      description: "Saran perbaikan langsung saat Anda mengetik"
                    },
                    {
                      title: "ATS-Optimized",
                      description: "CV dijamin lolos screening sistem ATS perusahaan"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
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
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    Hasil dalam 5 Menit
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Dari data mentah menjadi CV profesional yang siap kirim dalam hitungan menit
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">5</div>
                      <div className="text-sm text-muted-foreground">Menit</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">20+</div>
                      <div className="text-sm text-muted-foreground">Template</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">AI</div>
                      <div className="text-sm text-muted-foreground">Powered</div>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Siap Membuat CV Profesional?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ikuti proses yang telah membantu 50,000+ pencari kerja sukses
            </p>
            <Button size="lg" className="gradient-primary text-white hover:shadow-glow transition-all duration-300" asChild>
              <a href="https://app.resumeku.id" target="_blank" rel="noopener noreferrer">
                Mulai Proses Sekarang <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ✅ Gratis untuk template dasar • ✅ Hasil profesional dalam 5 menit
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};