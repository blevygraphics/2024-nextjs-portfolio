
import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Poppins } from 'next/font/google'
import './globals.css'
import PageTransitionEffect from './PageTransitionEffect'

const poppins = Poppins({ weight: ['400', '700', '900'], subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <PageTransitionEffect>{children}</PageTransitionEffect>
      </body>
      <GoogleTagManager gtmId='GTM-56VBLDR9' />
    </html>
  )
}
