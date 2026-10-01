import type { Metadata, Viewport } from 'next'
import { Caveat, Special_Elite, Kalam } from 'next/font/google'
import './globals.css'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hand',
})

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-type',
})

const kalam = Kalam({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-kalam',
})

export const metadata: Metadata = {
  title: 'HawTea — The Taste of Nostalgia',
  description:
    'HawTea — a 90s-nostalgia tea spot in Khanapur, Hyderabad. Good tea, good people, slow evenings.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${caveat.variable} ${specialElite.variable} ${kalam.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
