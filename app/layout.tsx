import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.scss'

const openSans = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Authentification process',
  description: 'Registration + Login + Role + SSO',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}

export default RootLayout