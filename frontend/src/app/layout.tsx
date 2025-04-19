'use client'

import '@/constants/globals.css'
import '@/utils/i18n'

import { Suspense } from 'react'
import { Noto_Sans } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { combineProviders } from 'react-combine-provider'

import { Toaster } from '@/components/base/sonner'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--font-noto-sans'
})

const CombineProvider = combineProviders([NuqsAdapter, Suspense])

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={'en'} className={notoSans.variable} suppressHydrationWarning={true}>
      <head>
        <title>{'Daiski'}</title>
        <meta name={'description'} content={'Daiski - A simple and elegant design system'} />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
        <link rel={'icon'} href={'/favicon.ico'} />
      </head>
      <body className={'bg-background text-text font-light antialiased'}>
        <CombineProvider>
          {children}
          <Toaster />
        </CombineProvider>
      </body>
    </html>
  )
}
