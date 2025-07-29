import { Metadata } from 'next'
import { Shield, Lock, Eye, FileText, Users, Database, AlertTriangle, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: 'Kebijakan Privasi ResumeKu - Perlindungan Data CV dan Informasi Pribadi',
  description: 'Kebijakan privasi lengkap ResumeKu. Pelajari bagaimana kami melindungi data CV, informasi pribadi, dan memastikan keamanan saat Anda membuat CV profesional di platform kami.',
  keywords: 'kebijakan privasi resumeku, perlindungan data cv, keamanan informasi pribadi, gdpr compliance, data security cv builder',
  openGraph: {
    title: 'Kebijakan Privasi ResumeKu - Keamanan Data Terjamin',
    description: 'Transparansi penuh tentang bagaimana ResumeKu melindungi data dan privasi Anda saat membuat CV profesional.',
    url: 'https://resumeku.id/privacy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://resumeku.id/privacy'
  }
}

const dataTypes = [
  {
    icon: Users,
    title: 'Data Identitas Pribadi',
    items: ['Nama lengkap', 'Email address', 'Nomor telepon', 'Alamat rumah', 'Tanggal lahir']
  },
  {
    icon: FileText,
    title: 'Data CV & Resume',
    items: ['Pengalaman kerja', 'Pendidikan', 'Skill dan keahlian', 'Portofolio', 'Template yang dipilih']
  },
  {
    icon: Database,
    title: 'Data Teknis',
    items: ['IP Address', 'Browser information', 'Device information', 'Usage analytics', 'Performance metrics']
  }
]

const protectionMeasures = [
  {
    icon: Lock,
    title: 'Enkripsi End-to-End',
    description: 'Semua data CV dan informasi pribadi dienkripsi menggunakan standar industri AES-256'
  },
  {
    icon: Shield,
    title: 'Server Security',
    description: 'Server berlokasi di data center tersertifikasi ISO 27001 dengan monitoring 24/7'
  },
  {
    icon: Eye,
    title: 'Access Control',
    description: 'Akses terbatas hanya untuk authorized personnel dengan two-factor authentication'
  },
  {
    icon: AlertTriangle,
    title: 'Regular Audits',
    description: 'Security audit berkala oleh third-party untuk memastikan standar keamanan tertinggi'
  }
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20">
            🔒 Kebijakan Privasi
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privasi & Keamanan{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Data Anda
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Di ResumeKu, kami memahami betapa pentingnya <strong>privasi dan keamanan data CV</strong> Anda. 
            Halaman ini menjelaskan secara detail bagaimana kami mengumpulkan, menggunakan, dan melindungi 
            informasi pribadi Anda.
          </p>
          <div className="mt-8">
            <Badge className="bg-green-500/10 text-green-600">
              <CheckCircle className="h-4 w-4 mr-2" />
              Terakhir diperbarui: 29 Juli 2025
            </Badge>
          </div>
        </div>
      </section>

      {/* Data Collection Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent">
              📊 Data yang Kami Kumpulkan
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transparansi <span className="text-primary">100%</span> Data Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berikut adalah jenis data yang kami kumpulkan untuk memberikan layanan terbaik dalam 
              <strong> cara membuat CV</strong> yang profesional dan sesuai kebutuhan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dataTypes.map((type, index) => (
              <Card key={index} className="gradient-card border-0 hover-lift">
                <CardHeader>
                  <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground text-center">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">
              🎯 Penggunaan Data
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Untuk Apa Data Anda <span className="text-primary">Digunakan?</span>
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <span>Layanan CV Builder</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Primary Uses:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Membuat dan menyimpan CV Anda</li>
                      <li>• Personalisasi template dan konten</li>
                      <li>• Saran optimasi CV dengan AI</li>
                      <li>• Export CV dalam berbagai format</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Additional Benefits:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Tips karir yang relevan</li>
                      <li>• Notifikasi lowongan kerja</li>
                      <li>• Analytics performa CV</li>
                      <li>• Backup otomatis data</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Database className="h-6 w-6 text-accent" />
                  <span>Analisis & Peningkatan Layanan</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kami menggunakan data aggregate (tanpa identitas pribadi) untuk:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Menganalisis tren template CV yang populer</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Meningkatkan akurasi AI recommendations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Optimasi user experience platform</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Research industri dan job market trends</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Pengembangan fitur baru yang relevan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span>Peningkatan security dan performance</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/10 text-green-600">
              🛡️ Keamanan Data
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Langkah <span className="text-primary">Keamanan</span> yang Kami Terapkan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Keamanan data CV dan informasi pribadi Anda adalah prioritas utama kami. 
              Berikut teknologi dan prosedur yang kami gunakan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protectionMeasures.map((measure, index) => (
              <Card key={index} className="gradient-card border-0 text-center hover-lift">
                <CardHeader>
                  <div className="p-4 bg-green-500/10 rounded-full w-fit mx-auto mb-4">
                    <measure.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{measure.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{measure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rights & Control */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent">
              ⚖️ Hak Anda
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kontrol Penuh atas <span className="text-primary">Data Pribadi</span> Anda
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="gradient-card border-0">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-primary" />
                  Hak Akses & Transparansi
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Yang Dapat Anda Lakukan:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Request copy lengkap data pribadi Anda</li>
                      <li>• Melihat log aktivitas akun</li>
                      <li>• Export semua CV yang pernah dibuat</li>
                      <li>• Download data dalam format JSON/PDF</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Cara Mengakses:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Melalui dashboard "My Data"</li>
                      <li>• Email request ke privacy@resumeku.id</li>
                      <li>• Live chat dengan customer service</li>
                      <li>• Response maksimal 72 jam</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Lock className="h-5 w-5 mr-2 text-primary" />
                  Hak Koreksi & Penghapusan
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Update Data:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Edit informasi pribadi kapan saja</li>
                      <li>• Update preferensi privacy</li>
                      <li>• Koreksi data yang tidak akurat</li>
                      <li>• Sync otomatis ke semua CV</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Delete Data:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Hapus CV individual</li>
                      <li>• Delete seluruh akun & data</li>
                      <li>• Permanent deletion dalam 30 hari</li>
                      <li>• Konfirmasi via email required</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Data Portability & Objection
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Portability:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Export data dalam format standar</li>
                      <li>• Transfer ke platform CV lain</li>
                      <li>• Backup personal yang aman</li>
                      <li>• API access untuk developers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Objection Rights:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Opt-out dari email marketing</li>
                      <li>• Reject data analytics processing</li>
                      <li>• Limit AI personalization</li>
                      <li>• Custom privacy settings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-500/10 text-red-600">
              🤝 Data Sharing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kapan Kami <span className="text-primary">Share</span> Data Anda?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparansi penuh tentang dengan siapa dan dalam kondisi apa data Anda dibagikan.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="gradient-card border-0 border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                  Yang BOLEH Kami Lakukan
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Share dengan <strong>service providers</strong> terpercaya untuk operasional platform (hosting, email, analytics)</li>
                  <li>• Provide data aggregate <strong>tanpa identitas</strong> untuk research industri dan trend analysis</li>
                  <li>• Share dengan <strong>legal authorities</strong> jika diwajibkan oleh hukum Indonesia</li>
                  <li>• Transfer dalam proses <strong>merger/acquisition</strong> dengan notifikasi sebelumnya</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="gradient-card border-0 border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
                  Yang TIDAK PERNAH Kami Lakukan
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>JUAL</strong> data pribadi atau CV Anda ke pihak ketiga</li>
                  <li>• Share informasi dengan <strong>recruiter/company</strong> tanpa consent explicit</li>
                  <li>• Gunakan data untuk <strong>spam marketing</strong> dari pihak lain</li>
                  <li>• Bagikan dengan <strong>competitor</strong> atau platform CV lain</li>
                  <li>• Simpan data setelah Anda <strong>delete account</strong></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Updates */}
      <section className="py-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ada Pertanyaan tentang <span className="text-primary">Privacy?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tim privacy kami ready membantu Anda memahami dan mengontrol data pribadi Anda di ResumeKu.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="gradient-card border-0">
              <CardContent className="pt-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Data Protection Officer</h3>
                <p className="text-sm text-muted-foreground">privacy@resumeku.id</p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-0">
              <CardContent className="pt-6 text-center">
                <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Customer Support</h3>
                <p className="text-sm text-muted-foreground">support@resumeku.id</p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-0">
              <CardContent className="pt-6 text-center">
                <div className="p-3 bg-green-500/10 rounded-full w-fit mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Security Issues</h3>
                <p className="text-sm text-muted-foreground">security@resumeku.id</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-2">📋 Policy Updates</h3>
            <p className="text-muted-foreground text-sm">
              Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Kami akan memberitahu Anda melalui 
              email dan notifikasi in-app untuk setiap perubahan material. Perubahan minor akan diupdate 
              langsung dengan tanggal revisi terbaru.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}