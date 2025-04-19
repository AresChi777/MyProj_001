'use client'

import Link from 'next/link'

import { Button } from '@/components/base/button'

export default function LoginPage() {
  return (
    <main className={'flex flex-1 flex-col gap-y-4 p-4'}>
      <span>{'Login'}</span>
      <div className={'flex gap-x-4'}>
        {['/', 'login', 'profile'].map((path) => (
          <Button key={path} asChild={true}>
            <Link href={path}>
              <span>{`Go to ${path}`}</span>
            </Link>
          </Button>
        ))}
      </div>
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className={'h-12 rounded bg-red-200 p-4'}>
          <span>{`Item ${i + 1}`}</span>
        </div>
      ))}
    </main>
  )
}
