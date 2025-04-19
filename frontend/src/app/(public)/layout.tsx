'use client'

import type { ReactNode } from 'react'
import { LoaderCircle } from 'lucide-react'

import { cn } from '@/utils/cn'
import { useAuthStore } from '@/store/auth'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function PublicLayout({ children }: { children: ReactNode }) {
  const isHydrated = useAuthStore((state) => state.isHydrated)

  try {
    if (!isHydrated) throw new Error('Hydrating')
    console.log('PublicLayout: Ready')
    return (
      <div
        className={cn(
          'flex min-h-screen flex-col items-stretch',
          '[&>main]:container [&>main]:mx-auto [&>main]:basis-[85vh]'
        )}
      >
        <Header />
        {children}
        <Footer />
      </div>
    )
  } catch (e) {
    e instanceof Error && console.log(`PublicLayout: Blocking [${e.message}]`)
    return (
      <div className={'flex min-h-screen flex-col items-stretch'}>
        <Header />
        <main className={'flex flex-1 basis-[85vh] flex-col items-center justify-center'}>
          <LoaderCircle className={'size-8 animate-spin'} />
        </main>
        <Footer />
      </div>
    )
  }
}
