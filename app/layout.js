import './globals.css'
import { Poppins, PT_Serif, Montserrat } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

const ptserif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pt-serif'
})

const montserrat = Montserrat({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'My team page - Erika',
  description: 'This is a React.js project building a page about my team work',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${ptserif.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}
