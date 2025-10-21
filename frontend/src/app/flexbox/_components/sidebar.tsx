'use client'

type Props = {
  direction: any
  setDirection: (v: any) => void
  justify: any
  setJustify: (v: any) => void
  alignItems: any
  setAlignItems: (v: any) => void
  wrap: any
  setWrap: (v: any) => void
  gap: number
  setGap: (v: number) => void
  grow: number
  setGrow: (v: number) => void
  shrink: number
  setShrink: (v: number) => void
  basis: string
  setBasis: (v: string) => void
  items: number[]
  setItems: (v: number[]) => void
}

export default function Sidebar(p: Props) {
  const addItem = () => p.setItems([...p.items, p.items.length + 1])
  const removeItem = () => p.setItems(p.items.slice(0, -1))

  return (
    <aside className="rounded-2xl border bg-white/5 p-4 md:p-5">
      <h2 className="mb-3 text-lg font-medium">控制面板</h2>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold tracking-wide uppercase opacity-80">Container</h3>

        <label className="block">
          <span className="text-sm">flex-direction</span>
          <select
            className="mt-1 w-full rounded border bg-transparent px-2 py-1"
            value={p.direction}
            onChange={(e) => p.setDirection(e.target.value)}
          >
            <option value="row">row</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column">column</option>
            <option value="column-reverse">column-reverse</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm">justify-content</span>
          <select
            className="mt-1 w-full rounded border bg-transparent px-2 py-1"
            value={p.justify}
            onChange={(e) => p.setJustify(e.target.value)}
          >
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm">align-items</span>
          <select
            className="mt-1 w-full rounded border bg-transparent px-2 py-1"
            value={p.alignItems}
            onChange={(e) => p.setAlignItems(e.target.value)}
          >
            <option value="stretch">stretch</option>
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
            <option value="baseline">baseline</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm">flex-wrap</span>
          <select
            className="mt-1 w-full rounded border bg-transparent px-2 py-1"
            value={p.wrap}
            onChange={(e) => p.setWrap(e.target.value)}
          >
            <option value="nowrap">nowrap</option>
            <option value="wrap">wrap</option>
            <option value="wrap-reverse">wrap-reverse</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm">gap: {p.gap}px</span>
          <input
            type="range"
            min={0}
            max={40}
            step={2}
            value={p.gap}
            onChange={(e) => p.setGap(parseInt(e.target.value))}
            className="w-full"
          />
        </label>
      </section>

      <hr className="my-4 opacity-40" />

      <section className="space-y-3">
        <h3 className="text-sm font-semibold tracking-wide uppercase opacity-80">Item (套用到所有)</h3>

        <label className="block">
          <span className="text-sm">flex-grow: {p.grow}</span>
          <input
            type="range"
            min={0}
            max={5}
            value={p.grow}
            onChange={(e) => p.setGrow(parseInt(e.target.value))}
            className="w-full"
          />
        </label>

        <label className="block">
          <span className="text-sm">flex-shrink: {p.shrink}</span>
          <input
            type="range"
            min={0}
            max={5}
            value={p.shrink}
            onChange={(e) => p.setShrink(parseInt(e.target.value))}
            className="w-full"
          />
        </label>

        <label className="block">
          <span className="text-sm">flex-basis</span>
          <input
            placeholder='例如 "150px" 或 "auto" 或 "30%"'
            value={p.basis}
            onChange={(e) => p.setBasis(e.target.value)}
            className="mt-1 w-full rounded border bg-transparent px-2 py-1"
          />
        </label>
      </section>

      <hr className="my-4 opacity-40" />

      <section className="flex items-center gap-2">
        <button onClick={addItem} className="rounded-md border px-3 py-1.5">
          + Add item
        </button>
        <button
          onClick={removeItem}
          className="rounded-md border px-3 py-1.5 disabled:opacity-50"
          disabled={p.items.length <= 1}
        >
          − Remove
        </button>
        <span className="ml-auto text-sm opacity-70">Items: {p.items.length}</span>
      </section>
    </aside>
  )
}
