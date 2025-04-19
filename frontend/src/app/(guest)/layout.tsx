'use client'

import { useEffect, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { LoaderCircle } from 'lucide-react'

import { cn } from '@/utils/cn'
import { useAuthStore } from '@/store/auth'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function GuestLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const isHydrated = useAuthStore((state) => state.isHydrated)
  const user = useAuthStore((state) => state.user)

  useEffect(() => {
    if (isHydrated && !!user) router.replace('/')
  }, [isHydrated, user, router])

  try {
    if (!isHydrated) throw new Error('Hydrating')
    if (!!user) throw new Error('Already logged in')
    console.log('GuestLayout: Ready')
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
    e instanceof Error && console.log(`GuestLayout: Blocking [${e.message}]`)
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
