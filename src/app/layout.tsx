
import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Poppins } from 'next/font/google'
import './globals.css'
import PageTransitionEffect from './PageTransitionEffect'

const poppins = Poppins({ weight: ['400', '700', '900'], subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Blaine Levy | Product Designer and Developer',
  description: 'A personal portfolio showcasing a series of digital products and case studies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={poppins.className}>
        <PageTransitionEffect>{children}</PageTransitionEffect>
      </body>
      <GoogleTagManager gtmId='GTM-56VBLDR9' />
    </html>
  )
}
