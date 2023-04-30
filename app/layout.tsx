import { siteConfig } from '@/config/site'
import { Analytics } from './analytics'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "women's fashion",
    "affordable clothing",
    "trendy styles",
    "elegant fashion",
    "dresses",
    "accessories",
  ],
  authors: [
    {
      name: "Lavani",
      url: "https://thelavani.co",
    },
  ],
  creator: "Lavani Fashion",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + "font-sans antialiased"}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
