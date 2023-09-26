import './globals.css'
// These styles apply to every route in the application
import "@/styles/global.css"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { dir } from 'i18next'
import { FC } from 'react';
import { languages } from '@/app/i18n/settings';
import { I18nProvider } from '@/app/i18n/provider';

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const metadata: Metadata = {
  title: 'Calendar Money App',
  description: 'Manage your money ',
}

type RootLayoutProps = {
  children: React.ReactNode,
  params: { lng: string }
}

const RootLayout:FC<RootLayoutProps> = ({
  children,
  params
}) => {


  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout;
