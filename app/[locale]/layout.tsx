import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Resume',
  description: 'Create your resume in 5 minutes.',
}
export function generateStaticParams() {
  return i18nConfig.locales?.map(locale => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale } 
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        

        {children}</body>
    </html>
  )
}
