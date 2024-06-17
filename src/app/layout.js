// 'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar/page'
import Footer from '@/components/footer/page'
import { AuthContextProvider } from './context/AuthContext'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Space-Con',
  description: 'Created by Team Fast Five at SpaceHack 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className={inter.className}>
        <AuthContextProvider>
          <NavBar />
          {children}
          {/* <Footer /> */}
        </AuthContextProvider>
      </body>
    </html>
  )
}
