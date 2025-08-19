import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata: Metadata = {
  title: 'Maxime Bourand - Portfolio',
  description: "Maxime Bourand est un Développeur Front-end chez Free ayant étudié à l'Ecole 42 fondée par Xavier Niel."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body>
        <script>0</script>
        {children}
      </body>
    </html>
  )
}
