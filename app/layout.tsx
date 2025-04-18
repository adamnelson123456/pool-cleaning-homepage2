import type { Metadata } from 'next'
import { Poppins, Fredoka } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-fredoka',
})

export const metadata: Metadata = {
  title: 'Ools Pool Cleaning',
  description: 'Houston\'s premier pool cleaning and maintenance service',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${fredoka.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  )
}
