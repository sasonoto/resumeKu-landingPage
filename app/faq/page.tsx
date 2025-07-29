import { Metadata } from 'next'
import { ChevronDown, Search, FileText, Lightbulb, Users, Zap, Star, HelpCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ - Cara Membuat CV Profesional | Panduan Lengkap CV Builder ResumeKu',
  description: 'Temukan jawaban lengkap tentang cara membuat CV yang menarik, tips CV untuk fresh graduate, template ATS-friendly, dan panduan lengkap menggunakan ResumeKu. Khusus untuk Gen Z dan profesional muda Indonesia.',
  keywords: 'faq cara membuat cv, tips cv profesional, cv untuk fresh graduate, cara bikin cv yang bagus, template cv gratis, cv ats friendly, resume builder indonesia, panduan cv lengkap',
  openGraph: {
    title: 'FAQ Cara Membuat CV - Panduan Lengkap ResumeKu',
    description: 'Semua yang perlu Anda tahu tentang cara membuat CV profesional yang menarik HRD. Panduan khusus Gen Z dan fresh graduate.',
    url: 'https://resumeku.id/faq',
    type: 'website',
  },
  alternates: {
    canonical: 'https://resumeku.id/faq'
  }
}

const faqCategories = [
  {
    icon: FileText,
    title: 'Cara Membuat CV',
    color: 'bg-primary/10 text-primary',
    count: 12
  },
  {
    icon: Lightbulb,
    title: 'Tips & Tricks',
    color: 'bg-accent/10 text-accent', 
    count: 8
  },
  {
    icon: Zap,
    title: 'Fitur Platform',
    color: 'bg-green-500/10 text-green-600',
    count: 10
  },
  {
    icon: Users,
    title: 'Untuk Fresh Graduate',
    color: 'bg-purple-500/10 text-purple-600',
    count: 6
  }
]

const popularFAQs = [
  {
    category: 'Cara Membuat CV',
    question: 'Bagaimana cara membuat CV yang menarik untuk fresh graduate?',
    answer: 'Untuk fresh graduate, fokuslah pada: 1) Pendidikan dan prestasi akademik, 2) Pengalaman organisasi/volunteer, 3) Project dan portfolio, 4) Skill yang relevan dengan posisi yang dilamar, 5) Gunakan template modern yang ATS-friendly. ResumeKu menyediakan template khusus fresh graduate dengan panduan step-by-step cara mengisi setiap section.',
    tags: ['fresh graduate', 'template cv', 'tips cv']
  },
  {
    category: 'Tips & Tricks',
    question: 'Apa itu CV ATS-friendly dan kenapa penting?',
    answer: 'ATS (Applicant Tracking System) adalah software yang digunakan perusahaan untuk screening CV otomatis. CV ATS-friendly artinya CV yang bisa dibaca dengan baik oleh sistem ini. Tips membuat CV ATS-friendly: 1) Gunakan format sederhana, 2) Hindari gambar/grafik kompleks, 3) Gunakan keyword yang relevan, 4) Format konsisten, 5) Save dalam format PDF. Semua template ResumeKu sudah dioptimasi untuk ATS.',
    tags: ['ats friendly', 'screening cv', 'tips profesional']
  },
  {
    category: 'Cara Membuat CV',
    question: 'Berapa panjang CV yang ideal untuk Gen Z dan profesional muda?',
    answer: 'Untuk fresh graduate dan young professional (0-3 tahun pengalaman): maksimal 1 halaman. Untuk yang berpengalaman 3-5 tahun: maksimal 2 halaman. Yang penting bukan panjangnya, tapi relevansi konten. Fokus pada achievement dan skill yang sesuai dengan posisi yang dilamar. ResumeKu membantu Anda mengoptimalkan panjang CV dengan AI suggestions.',
    tags: ['panjang cv', 'profesional muda', 'gen z']
  },
  {
    category: 'Fitur Platform',
    question: 'Apakah ResumeKu gratis? Apa saja yang didapat?',
    answer: 'ResumeKu menawarkan free trial dengan fitur: 1) Akses 3 template dasar, 2) 1 kali download PDF, 3) Basic AI suggestions. Untuk fitur premium: 100+ template eksklusif, unlimited download, advanced AI optimization, career coaching, dan priority support. Paket mulai dari Rp 15.000 untuk 25 token.',
    tags: ['harga', 'gratis', 'premium']
  },
  {
    category: 'Tips & Tricks',
    question: 'Skill apa yang wajib ada di CV untuk Gen Z di era digital?',
    answer: 'Skill wajib untuk Gen Z: 1) Digital literacy (MS Office, Google Workspace), 2) Social media marketing, 3) Data analysis basic, 4) Remote collaboration tools, 5) Adaptability & quick learning, 6) Communication skills, 7) Problem solving. Jangan lupa soft skill seperti creativity, critical thinking, dan emotional intelligence yang sangat dihargai employer modern.',
    tags: ['skill gen z', 'digital skills', 'soft skills']
  },
  {
    category: 'Untuk Fresh Graduate',
    question: 'Bagaimana cara menulis pengalaman kerja kalau belum pernah kerja?',
    answer: 'Untuk fresh graduate tanpa pengalaman kerja formal: 1) Tulis pengalaman magang/internship, 2) Organizational experience (BEM, komunitas), 3) Volunteer work, 4) Freelance projects, 5) Academic projects yang relevan, 6) Leadership experience, 7) Competition achievements. Focus pada transferable skills dan achievement yang bisa diukur dengan angka.',
    tags: ['fresh graduate', 'tanpa pengalaman', 'magang']
  },
  {
    category: 'Cara Membuat CV',
    question: 'Template CV mana yang paling cocok untuk industry tech?',
    answer: 'Untuk industry tech, pilih template yang: 1) Clean dan minimalis, 2) Highlight technical skills dengan jelas, 3) Ada section untuk portfolio/projects, 4) Space untuk GitHub/LinkedIn, 5) ATS-optimized. ResumeKu memiliki kategori khusus template tech dengan contoh dari software engineer, product manager, data analyst, dan UI/UX designer yang sudah diterima di perusahaan ternama.',
    tags: ['template tech', 'industry tech', 'portfolio']
  },
  {
    category: 'Tips & Tricks',
    question: 'Haruskah mencantumkan foto di CV untuk perusahaan Indonesia?',
    answer: 'Di Indonesia, foto CV masih umum dan often expected, terutama untuk: 1) Customer-facing roles, 2) Perusahaan tradisional/lokal, 3) Certain industries. Tidak wajib untuk: tech companies, multinational companies, atau remote positions. Tips foto CV: professional attire, background polos, resolusi bagus, dan pastikan sesuai dengan company culture target Anda.',
    tags: ['foto cv', 'indonesia', 'company culture']
  },
  {
    category: 'Fitur Platform',
    question: 'Bagaimana AI di ResumeKu membantu optimasi CV?',
    answer: 'AI ResumeKu membantu dengan: 1) Content suggestions berdasarkan job description, 2) Keyword optimization untuk ATS, 3) Grammar & language improvement, 4) Structure optimization, 5) Industry-specific recommendations, 6) Skill gap analysis, 7) Real-time feedback. AI kami dilatih dengan data dari ribuan CV yang successful dan input dari HR professionals Indonesia.',
    tags: ['ai optimization', 'keyword', 'feedback']
  },
  {
    category: 'Untuk Fresh Graduate',
    question: 'Bagaimana cara highlight achievement tanpa pengalaman kerja?',
    answer: 'Cara highlight achievement untuk fresh graduate: 1) Academic achievement (GPA, dean list, scholarship), 2) Competition results (juara, finalist), 3) Project outcomes (impact, metrics), 4) Leadership positions (team size, budget managed), 5) Volunteer impact (people helped, funds raised), 6) Skill certifications, 7) Publications/research. Selalu quantify achievement dengan angka konkret.',
    tags: ['achievement', 'fresh graduate', 'metrics']
  },
  {
    category: 'Cara Membuat CV',
    question: 'Apa perbedaan CV dan Resume? Mana yang lebih cocok di Indonesia?',
    answer: 'CV (Curriculum Vitae) vs Resume: CV lebih detail dan panjang, mencakup seluruh career history. Resume lebih concise, fokus pada relevansi dengan posisi tertentu. Di Indonesia, istilah "CV" lebih familiar, tapi format yang digunakan sebenarnya lebih mirip resume (1-2 halaman, targeted). Untuk perusahaan Indonesia, gunakan format resume dengan menyebutnya "CV".',
    tags: ['cv vs resume', 'indonesia', 'format']
  },
  {
    category: 'Tips & Tricks',
    question: 'Bagaimana cara customize CV untuk setiap job application?',
    answer: 'Tips customize CV untuk setiap aplikasi: 1) Analyze job description untuk keywords, 2) Adjust skill section sesuai requirements, 3) Reorder experience berdasarkan relevansi, 4) Tailor summary/objective statement, 5) Include relevant projects/achievements, 6) Match tone dan language style. ResumeKu menyediakan multiple version CV dan job description analyzer untuk memudahkan customization.',
    tags: ['customize cv', 'job application', 'keywords']
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
            ❓ Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Panduan Lengkap{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Cara Membuat CV
            </span>{" "}
            Profesional
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Temukan jawaban untuk semua pertanyaan tentang <strong>cara membuat CV yang menarik</strong>, 
            tips untuk <strong>fresh graduate</strong>, dan panduan menggunakan ResumeKu. 
            Khusus untuk <strong>Gen Z dan profesional muda</strong> Indonesia.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Cari pertanyaan tentang cara membuat CV..."
                className="w-full pl-10 pr-4 py-3 border border-muted-foreground/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent">
              📚 Kategori Pertanyaan
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Temukan Jawaban Berdasarkan <span className="text-primary">Kategori</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqCategories.map((category, index) => (
              <Card key={index} className="gradient-card border-0 hover-lift cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className={`p-4 rounded-full w-fit mx-auto mb-4 ${category.color}`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
                  <Badge variant="secondary">{category.count} pertanyaan</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular FAQs */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              🔥 Most Popular
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pertanyaan <span className="text-primary">Paling Sering</span> Ditanyakan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jawaban lengkap untuk pertanyaan terpopuler seputar <strong>cara membuat CV</strong> 
              yang sering ditanyakan oleh Gen Z dan fresh graduate Indonesia.
            </p>
          </div>

          <div className="space-y-4">
            {popularFAQs.map((faq, index) => (
              <Card key={index} className="gradient-card border-0">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/10 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4 text-left">
                          <Badge className="bg-primary/10 text-primary text-xs">{faq.category}</Badge>
                          <div>
                            <CardTitle className="text-lg text-foreground leading-relaxed">
                              {faq.question}
                            </CardTitle>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {faq.tags.slice(0, 3).map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="pl-16">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent">
              💡 Quick Tips
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tips Cepat <span className="text-primary">Cara Membuat CV</span> yang Outstanding
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="gradient-card border-0 hover-lift">
              <CardContent className="pt-6">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Format yang Tepat</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Font: Arial, Calibri, atau Helvetica</li>
                  <li>• Size: 10-12pt untuk body text</li>
                  <li>• Margin: 0.5-1 inch semua sisi</li>
                  <li>• Save sebagai PDF untuk compatibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 hover-lift">
              <CardContent className="pt-6">
                <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Section Wajib</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Contact Information yang lengkap</li>
                  <li>• Professional Summary/Objective</li>
                  <li>• Work Experience (atau Projects)</li>
                  <li>• Education & Skills yang relevan</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 hover-lift">
              <CardContent className="pt-6">
                <div className="p-3 bg-green-500/10 rounded-lg w-fit mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Common Mistakes</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Typos dan grammatical errors</li>
                  <li>• Generic tanpa customization</li>
                  <li>• Terlalu panjang atau terlalu pendek</li>
                  <li>• Missing contact information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 hover-lift">
              <CardContent className="pt-6">
                <div className="p-3 bg-purple-500/10 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Khusus Fresh Graduate</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Focus pada academic achievements</li>
                  <li>• Include relevant coursework</li>
                  <li>• Highlight internship & projects</li>
                  <li>• Show learning agility & potential</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 hover-lift">
              <CardContent className="pt-6">
                <div className="p-3 bg-orange-500/10 rounded-lg w-fit mb-4">
                  <Lightbulb className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">ATS Optimization</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Use keywords from job description</li>
                  <li>• Avoid fancy graphics & tables</li>
                  <li>• Standard section headings</li>
                  <li>• Consistent formatting throughout</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 hover-lift">
              <CardContent className="pt-6">
                <div className="p-3 bg-pink-500/10 rounded-lg w-fit mb-4">
                  <HelpCircle className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">Final Check</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Proofread multiple times</li>
                  <li>• Ask for feedback from others</li>
                  <li>• Test PDF compatibility</li>
                  <li>• Ensure mobile-friendly viewing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Masih Ada Pertanyaan tentang <span className="text-primary">Cara Membuat CV?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tim expert kami siap membantu Anda membuat CV yang outstanding dan meningkatkan 
            peluang diterima kerja di perusahaan impian.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="gradient-card border-0">
              <CardContent className="pt-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Live Chat Support</h3>
                <p className="text-sm text-muted-foreground">Real-time help saat membuat CV</p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-0">
              <CardContent className="pt-6 text-center">
                <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">1-on-1 Consultation</h3>
                <p className="text-sm text-muted-foreground">Personal guidance dari career expert</p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-0">
              <CardContent className="pt-6 text-center">
                <div className="p-3 bg-green-500/10 rounded-full w-fit mx-auto mb-3">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">CV Review Service</h3>
                <p className="text-sm text-muted-foreground">Professional review & feedback</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/checkout">
              <Button className="gradient-primary hover:shadow-glow text-white px-8 py-3">
                Mulai Buat CV Sekarang
              </Button>
            </Link>
            <Link href="/kontak">
              <Button variant="outline" className="px-8 py-3">
                Hubungi Support Team
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>💬 <strong>Quick Contact:</strong> support@resumeku.id | WhatsApp: +62 812-3456-7890</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}