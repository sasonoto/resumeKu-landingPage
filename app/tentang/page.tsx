import { Metadata } from 'next'
import { CheckCircle, Users, Target, Award, Zap, Heart, Sparkles, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tentang ResumeKu - Platform Cara Membuat CV Terbaik Indonesia | CV Builder AI',
  description: 'Pelajari cara membuat CV profesional dengan ResumeKu. Platform terdepan untuk Gen Z dan profesional muda Indonesia. Template ATS-friendly, tips karir, dan panduan lengkap cara bikin CV yang menarik HRD.',
  keywords: 'cara membuat cv, cara bikin cv, cv builder indonesia, template cv profesional, cv untuk fresh graduate, cv ats friendly, cara membuat resume, tips cv menarik, cv kreatif gen z, panduan membuat cv',
  openGraph: {
    title: 'Tentang ResumeKu - Cara Membuat CV Profesional untuk Gen Z',
    description: 'Platform terpercaya untuk cara membuat CV yang menarik. Khusus untuk generasi muda Indonesia yang ingin sukses berkarir.',
    url: 'https://resumeku.id/tentang',
    type: 'website',
  },
  alternates: {
    canonical: 'https://resumeku.id/tentang'
  }
}

const stats = [
  { number: '50K+', label: 'CV Dibuat', icon: Target },
  { number: '95%', label: 'Tingkat Penerimaan', icon: TrendingUp },
  { number: '500+', label: 'Template Premium', icon: Sparkles },
  { number: '24/7', label: 'Support Tim', icon: Heart }
]

const values = [
  {
    icon: Zap,
    title: 'Mudah & Cepat',
    description: 'Cara membuat CV dalam hitungan menit dengan AI yang memahami kebutuhan Gen Z dan profesional muda'
  },
  {
    icon: Target,
    title: 'ATS-Optimized',
    description: 'Setiap template dirancang khusus agar CV Anda lolos sistem ATS perusahaan modern Indonesia'
  },
  {
    icon: Users,
    title: 'Gen Z Friendly',
    description: 'Interface modern dan intuitif yang sesuai dengan gaya hidup digital generasi Z'
  },
  {
    icon: Award,
    title: 'Profesional Terpercaya',
    description: 'Dipercaya ribuan fresh graduate dan young professional untuk memulai karir impian'
  }
]

const team = [
  {
    name: 'Sarah Fitri',
    role: 'CEO & Co-Founder',
    description: 'Ex-HRD Google Indonesia, ahli dalam cara membuat CV yang menarik HRD',
    experience: '8 tahun pengalaman recruitment'
  },
  {
    name: 'Dimas Pratama',
    role: 'CTO & Co-Founder', 
    description: 'Tech enthusiast yang memahami kebutuhan digital Gen Z modern',
    experience: 'Ex-Engineering Lead Tokopedia'
  },
  {
    name: 'Anisa Rahman',
    role: 'Head of Content',
    description: 'Career coach profesional, spesialis panduan karir untuk generasi muda',
    experience: 'Certified Career Development Facilitator'
  }
]

export default function TentangPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              🌟 Tentang ResumeKu
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Platform Terdepan{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cara Membuat CV
              </span>{" "}
              di Indonesia
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ResumeKu hadir sebagai solusi terpercaya untuk <strong>cara membuat CV profesional</strong> yang 
              menarik HRD. Khusus dirancang untuk <strong>Gen Z dan profesional muda</strong> Indonesia yang 
              ingin memulai karir dengan percaya diri.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="gradient-card border-0 text-center hover-lift">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent">
                💡 Misi Kami
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Memberdayakan Generasi Muda Indonesia Dalam{" "}
                <span className="text-primary">Cara Membuat CV</span> Profesional
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Kami percaya setiap <strong>fresh graduate</strong> dan <strong>young professional</strong> Indonesia 
                berhak mendapat kesempatan karir terbaik. Namun, banyak yang masih bingung tentang 
                <strong> cara bikin CV yang menarik</strong> dan sesuai standar perusahaan modern.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                ResumeKu hadir dengan <strong>template CV ATS-friendly</strong>, panduan lengkap 
                <strong> cara membuat resume</strong> yang profesional, dan fitur AI yang membantu 
                mengoptimalkan setiap section CV Anda.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Template Khusus Gen Z:</span>
                    <span className="text-muted-foreground ml-1">Desain modern yang mencerminkan kepribadian generasi digital</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Panduan Cara Membuat CV:</span>
                    <span className="text-muted-foreground ml-1">Step-by-step tutorial dari expert HRD Indonesia</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">ATS-Optimized:</span>
                    <span className="text-muted-foreground ml-1">CV yang dijamin lolos screening otomatis HRD</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                <Button className="gradient-primary hover:shadow-glow text-white px-8 py-3">
                  Mulai Buat CV Sekarang
                </Button>
              </Link>
            </div>
            
            <div className="space-y-6">
              <Card className="gradient-card border-0 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Fokus pada Hasil</h3>
                    <p className="text-sm text-muted-foreground">CV yang benar-benar meningkatkan peluang diterima kerja</p>
                  </div>
                </div>
              </Card>
              
              <Card className="gradient-card border-0 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">AI-Powered</h3>
                    <p className="text-sm text-muted-foreground">Teknologi AI terdepan untuk optimasi CV otomatis</p>
                  </div>
                </div>
              </Card>
              
              <Card className="gradient-card border-0 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Heart className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dibuat dengan ❤️</h3>
                    <p className="text-sm text-muted-foreground">Untuk kesuksesan karir generasi muda Indonesia</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              ⭐ Nilai-Nilai Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa Gen Z & Profesional Muda{" "}
              <span className="text-primary">Memilih ResumeKu?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami memahami tantangan unik yang dihadapi generasi muda dalam <strong>cara membuat CV</strong> 
              yang standout di era digital ini.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gradient-card border-0 text-center hover-lift">
                <CardHeader>
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent">
              👥 Tim Ahli
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert dalam <span className="text-primary">Cara Membuat CV</span> Profesional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tim berpengalaman yang memahami seluk-beluk dunia karir Indonesia dan kebutuhan Gen Z modern.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="gradient-card border-0 text-center hover-lift">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
                  <Badge className="mx-auto bg-primary/10 text-primary">{member.role}</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{member.description}</p>
                  <div className="text-sm font-medium text-accent">{member.experience}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Siap Memulai <span className="text-primary">Cara Membuat CV</span> Profesional Anda?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Bergabung dengan ribuan <strong>Gen Z dan young professional</strong> Indonesia yang sudah 
            berhasil mendapat pekerjaan impian dengan CV dari ResumeKu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout">
              <Button className="gradient-primary hover:shadow-glow text-white px-8 py-3">
                Buat CV Sekarang - Gratis Trial
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline" className="px-8 py-3">
                Pelajari Cara Membuat CV
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}