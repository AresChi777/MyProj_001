'use client'

import { useParams } from 'next/navigation'

export default function PostsDetailPage() {
  const { id } = useParams()

  return (
    <main className={'flex flex-1 flex-col gap-y-4 p-4'}>
      <span>{`id: ${id}`}</span>
    </main>
  )
}
