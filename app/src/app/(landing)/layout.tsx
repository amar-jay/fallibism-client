import '../globals.css'
import { Inter } from 'next/font/google'
// import localFont from "next/font/local"
import { siteConfig } from '../../site-config'
import { Nav } from './Nav'
import { SiteFooter } from '@/components/ui/footer'


// primary font style
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})


// if primary font is not available, use local Font 
// const secondaryFont = localFont({
//   src: "../assets/fonts/xxx.woff2",
//   variable: "---xxx",
// })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "fallibilism",
    "komrade",
    "amar-jay",
    "Abdel-manan",
    "Abdelmanan",
  ],
  authors: [
    {
      name: "amar-jay",
      url: "https://github.com/amar-jay",
    },
  ],
  creator: "amar-jay",
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
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: siteConfig.handle,
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
    <>
          <Nav />
          {children}
          <SiteFooter />
    </>
  )
}
