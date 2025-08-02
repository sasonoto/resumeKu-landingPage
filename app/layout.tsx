import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleAnalytics from '../src/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ResumeKu - CV Builder Dengan Kekuatan AI',
  description: 'Buat CV profesional dengan AI dalam hitungan menit. Template premium, optimasi ATS, dan panduan karir untuk mendapatkan pekerjaan impian Anda.',
  keywords: 'cv builder, resume builder indonesia, buat cv, template cv, cv ats, cv professional',
  authors: [{ name: 'ResumeKu Team' }],
  openGraph: {
    title: 'ResumeKu - AI CV Builder Indonesia Terbaik',
    description: 'Buat CV profesional dengan AI dalam hitungan menit',
    url: 'https://resumeku.id',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Providers>
          {children}
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}