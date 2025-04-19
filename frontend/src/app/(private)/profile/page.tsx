'use client'

import { useAuthStore } from '@/store/auth'

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user)

  return (
    <main className={'flex flex-1 flex-col gap-y-4 p-4'}>
      <div className={'flex flex-col gap-y-2 rounded bg-gray-900 p-4 text-white'}>
        <h1 className={'font-mono text-xl font-bold'}>{'Profile'}</h1>
        <span className={'font-mono whitespace-pre'}>{JSON.stringify(user, null, 2)}</span>
      </div>
    </main>
  )
}
