import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Top Gadgets 2026 | Tu Guía de Compras Inteligente',
  description: 'Descubre los productos más vendidos y recomendados de Amazon analizados por expertos.',
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