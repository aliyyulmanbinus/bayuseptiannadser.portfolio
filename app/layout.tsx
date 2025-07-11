import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bayu Septian Nadser',
  description: 'Created with Next js',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/img/icon-profil.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
