import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',  // Add this for better loading performance
  adjustFontFallback: true  // Add this for better font fallback
})

export const metadata = {
  title: 'MSK Art Portfolio',
  description: 'Digital Artist / Gyal Culture Addict',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}