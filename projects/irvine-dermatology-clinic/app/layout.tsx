import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Gary Lee MD | Board Certified Dermatologist in Irvine, CA',
    template: '%s | Gary Lee MD Dermatology',
  },
  description: 'Dr. Gary Lee is a board-certified dermatologist in Irvine, California specializing in medical dermatology, cosmetic dermatology, and skin cancer treatment. Serving Orange County patients with expert skin care.',
  keywords: [
    'dermatologist',
    'dermatologist Irvine',
    'dermatologist Orange County',
    'skin doctor Irvine CA',
    'Gary Lee MD',
    'board certified dermatologist',
    'medical dermatology',
    'cosmetic dermatology',
    'skin cancer treatment',
    'skin cancer screening',
    'acne treatment Irvine',
    'eczema treatment',
    'psoriasis treatment',
    'Botox Irvine',
    'dermal fillers',
    'mole removal',
    'skin biopsy',
  ],
  authors: [{ name: 'Gary Lee MD' }],
  creator: 'Gary Lee MD Dermatology',
  publisher: 'Gary Lee MD Dermatology',
  generator: 'v0.app',
  metadataBase: new URL('https://garyleemd.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'zh-CN': '/chinese',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://garyleemd.com',
    siteName: 'Gary Lee MD Dermatology',
    title: 'Gary Lee MD | Board Certified Dermatologist in Irvine, CA',
    description: 'Dr. Gary Lee is a board-certified dermatologist in Irvine, California specializing in medical dermatology, cosmetic dermatology, and skin cancer treatment.',
    images: [
      {
        url: '/images/doctor-portrait.jpg',
        width: 800,
        height: 600,
        alt: 'Dr. Gary Lee - Board Certified Dermatologist in Irvine, CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gary Lee MD | Board Certified Dermatologist in Irvine, CA',
    description: 'Dr. Gary Lee is a board-certified dermatologist in Irvine, California specializing in medical dermatology, cosmetic dermatology, and skin cancer treatment.',
    images: ['/images/doctor-portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
