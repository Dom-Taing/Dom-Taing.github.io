import type { Metadata } from 'next'
import { Shippori_Mincho, DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'

const shippori = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-shippori',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Dom Taing — Full Stack Developer',
  description: 'Portfolio of Dom Taing, full stack developer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${shippori.variable} ${dmSerif.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <ProgressBar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
