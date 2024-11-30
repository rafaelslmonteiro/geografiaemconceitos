import '@/app/globals.css'
import { Poppins } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Geografia em Conceitos',
  description: 'Aprenda conceitos geográficos de forma interativa e divertida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        <Header />
        <AnimatePresence mode="wait">
          <main className="flex-grow">
            {children}
          </main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}
