import { Metadata } from 'next'
import { Briefcase, Heart, Zap, Users, Star, ArrowRight, Mail, Linkedin, Instagram } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Karir di ResumeKu - Bergabung dengan Tim CV Builder Terdepan Indonesia',
  description: 'Temukan peluang karir di ResumeKu! Meski saat ini tidak ada lowongan, kami selalu terbuka untuk talenta terbaik Gen Z dan profesional muda yang passionate tentang dunia karir dan teknologi.',
  keywords: 'karir resumeku, lowongan kerja cv builder, kerja di startup indonesia, karir gen z, teknologi hr indonesia, remote work indonesia, startup jakarta',
  openGraph: {
    title: 'Karir di ResumeKu - Join Tim CV Builder #1 Indonesia',
    description: 'Walaupun belum ada lowongan, kami selalu mencari talenta exceptional yang ingin mengubah cara Indonesia membuat CV.',
    url: 'https://resumeku.id/karir',
    type: 'website',
  },
  alternates: {
    canonical: 'https://resumeku.id/karir'
  }
}

const benefits = [
  {
    icon: Zap,
    title: 'Remote-First Culture',
    description: 'Kerja dari mana saja dengan fleksibilitas penuh. Work-life balance yang Gen Z banget!'
  },
  {
    icon: Heart,
    title: 'Impact-Driven Mission',
    description: 'Langsung berkontribusi membantu ribuan fresh graduate Indonesia dapat kerja impian'
  },
  {
    icon: Users,
    title: 'Tim Kolaboratif',
    description: 'Bekerja dengan talenta terbaik Indonesia dalam environment yang supportive'
  },
  {
    icon: Star,
    title: 'Growth & Learning',
    description: 'Unlimited learning budget, konferensi internasional, dan mentorship 1-on-1'
  }
]

const futureRoles = [
  {
    title: 'Frontend Developer (React/Next.js)',
    department: 'Engineering',
    type: 'Full-time',
    description: 'Membangun interface yang user-friendly untuk CV builder terdepan Indonesia',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Content Creator & Social Media Specialist',
    department: 'Marketing',
    type: 'Full-time',
    description: 'Membuat konten viral tentang tips karir dan cara membuat CV untuk Gen Z',
    skills: ['Content Strategy', 'TikTok', 'Instagram', 'Video Editing']
  },
  {
    title: 'Career Coach & HR Consultant',
    department: 'Product',
    type: 'Part-time/Freelance',
    description: 'Memberikan guidance dan review CV untuk user ResumeKu',
    skills: ['HR Experience', 'Career Counseling', 'Psychology', 'Communication']
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    type: 'Full-time',
    description: 'Mendesain experience yang intuitive untuk platform CV builder',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems']
  }
]

const values = [
  {
    title: '🚀 Innovation First',
    description: 'Selalu mencari cara baru dan lebih baik untuk membantu orang membuat CV yang outstanding'
  },
  {
    title: '💙 Empathy & Care',
    description: 'Memahami struggle fresh graduate dan young professional dalam mencari kerja'
  },
  {
    title: '⚡ Fast & Agile',
    description: 'Move fast, fail fast, learn fast. Seperti startup pada umumnya tapi dengan purpose'
  },
  {
    title: '🎯 Data-Driven',
    description: 'Setiap keputusan berdasarkan data dan feedback user, bukan asumsi semata'
  },
  {
    title: '🌟 Excellence',
    description: 'Tidak puas dengan yang biasa-biasa saja. Selalu aim for the best quality'
  },
  {
    title: '🤝 Transparency',
    description: 'Open communication, honest feedback, dan no hidden agenda dalam bekerja'
  }
]

export default function KarirPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
            💼 Karir di ResumeKu
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Join Tim{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CV Builder #1
            </span>{" "}
            Indonesia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Saat ini <strong>belum ada posisi yang tersedia</strong>, tapi kami selalu terbuka untuk 
            <strong> talenta exceptional</strong> yang passionate mengubah cara Indonesia membuat CV. 
            Be the first to know ketika ada opening!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-primary hover:shadow-glow text-white px-8 py-3">
              <Mail className="h-5 w-5 mr-2" />
              Subscribe Job Updates
            </Button>
            <Button variant="outline" className="px-8 py-3">
              <Linkedin className="h-5 w-5 mr-2" />
              Follow LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="gradient-card border-0 p-8">
            <div className="mb-6">
              <div className="w-20 h-20 bg-amber-500/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <Briefcase className="h-10 w-10 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                🚧 Saat Ini Tidak Ada Lowongan Tersedia
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                ResumeKu sedang dalam fase <strong>rapid growth</strong>! Kami sedang membangun tim yang solid 
                dan akan segera membuka posisi-posisi menarik untuk <strong>Gen Z dan young professional</strong> 
                yang ingin berkontribusi dalam dunia karir Indonesia.
              </p>
              <Badge className="bg-primary/10 text-primary px-4 py-2">
                Expected Opening: Q2 2025
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent">
              ✨ Why ResumeKu?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa <span className="text-primary">Gen Z</span> Akan Love Bekerja di Sini?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami bukan sekadar startup biasa. Kami membangun culture yang benar-benar mendukung 
              growth dan happiness setiap team member.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="gradient-card border-0 text-center hover-lift">
                <CardHeader>
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Roles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              🔮 Coming Soon
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Posisi yang Akan <span className="text-primary">Segera Dibuka</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ini adalah beberapa role yang sedang kami persiapkan. Want to be the first to apply? 
              Subscribe job updates kami!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {futureRoles.map((role, index) => (
              <Card key={index} className="gradient-card border-0 hover-lift">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-accent/10 text-accent">{role.department}</Badge>
                    <Badge variant="outline">{role.type}</Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground">{role.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{role.description}</p>
                  <div>
                    <div className="text-sm font-medium text-foreground mb-2">Skills yang dibutuhkan:</div>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Interested? Get Notified
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent">
              💎 Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Values yang <span className="text-primary">Kami Junjung</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ini bukan cuma slogan di dinding. Ini adalah prinsip yang benar-benar kami practice 
              setiap hari dalam bekerja.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gradient-card border-0 hover-lift">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speculative Application */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-card border-0 p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <Star className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Punya Skill Exceptional? Let's Talk!
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Kalau kamu merasa punya <strong>skill dan passion</strong> yang align dengan misi kami, 
                jangan tunggu sampai ada job posting. Send us your <strong>speculative application</strong> 
                dan tunjukkan kenapa kamu should be part of ResumeKu family!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground mb-4">
                <strong>What to include:</strong>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
                <div className="flex items-start space-x-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">CV yang dibuat pakai ResumeKu (of course! 😄)</span>
                </div>
                <div className="flex items-start space-x-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Portfolio atau project yang kamu proud of</span>
                </div>
                <div className="flex items-start space-x-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Cover letter yang personal dan genuine</span>
                </div>
                <div className="flex items-start space-x-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Ideas tentang bagaimana improve ResumeKu</span>
                </div>
              </div>
              
              <Button className="gradient-primary hover:shadow-glow text-white px-8 py-3">
                <Mail className="h-5 w-5 mr-2" />
                Send Speculative Application
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Email: <strong>karir@resumeku.id</strong>
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stay Connected dengan <span className="text-primary">ResumeKu</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow social media kami untuk update terbaru tentang company growth, 
            behind-the-scenes, dan tentunya job openings!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="px-8 py-3">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn @ResumeKu
            </Button>
            <Button variant="outline" className="px-8 py-3">
              <Instagram className="h-5 w-5 mr-2" />
              Instagram @ResumeKu.id
            </Button>
            <Link href="/tentang">
              <Button variant="outline" className="px-8 py-3">
                <Users className="h-5 w-5 mr-2" />
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}