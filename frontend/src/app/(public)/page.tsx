'use client'

export default function HomePage() {
  return (
    <main className={'flex flex-1 flex-col gap-y-4 p-4'}>
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className={'h-12 rounded bg-green-200 p-4'}>
          <span>{`Item ${i + 1}`}</span>
        </div>
      ))}
    </main>
  )
}
