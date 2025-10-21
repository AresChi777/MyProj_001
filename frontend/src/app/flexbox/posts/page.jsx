'use client'

import Link from 'next/link'

import { POSTS } from '@/constants/mock'

export default function PostsPage() {
  return (
    <main className={'flex flex-1 flex-col gap-y-4 p-4'}>
      {POSTS.map((post, index) => (
        <PostCard key={index} item={post} />
      ))}
    </main>
  )
}

const PostCard = ({ item }) => {
  return <Link href={`/posts/${item.id}`}>{item.title}</Link>
}
