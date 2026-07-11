import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KAOPOLIKAN VIP | Ofertas Virales de Amazon 2026',
  description: 'Selección Maestra de Juan: E-Bikes, Energía Solar y los Gadgets más virales de TikTok al mejor precio. ¡No te pierdas las ofertas del día!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}