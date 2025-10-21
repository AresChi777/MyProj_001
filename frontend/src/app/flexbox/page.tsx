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

'use client';

import { useState } from 'react';
import Sidebar from './_components/Sidebar';
import Preview from './_components/Preview';

export default function FlexboxPlaygroundPage() {
  // 容器層屬性
  const [direction, setDirection] = useState<'row' | 'row-reverse' | 'column' | 'column-reverse'>('row');
  const [justify, setJustify] = useState<'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'>('flex-start');
  const [alignItems, setAlignItems] = useState<'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline'>('stretch');
  const [wrap, setWrap] = useState<'nowrap' | 'wrap' | 'wrap-reverse'>('nowrap');
  const [gap, setGap] = useState<number>(12);

  // 子項屬性（套用到所有 item；後續可改成每個 item 獨立）
  const [grow, setGrow] = useState<number>(0);
  const [shrink, setShrink] = useState<number>(1);
  const [basis, setBasis] = useState<string>('auto');

  // Demo 資料
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5]);

  return (
    <div className="min-h-[calc(100vh-64px)] px-4 py-6 md:px-8">
      <h1 className="text-2xl font-semibold mb-4">Flexbox Playground</h1>

      {/* 3:7 版面 — 在 md 以上用 3fr:7fr，手機直向改為一欄 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[3fr_7fr]">
        <Sidebar
          direction={direction} setDirection={setDirection}
          justify={justify} setJustify={setJustify}
          alignItems={alignItems} setAlignItems={setAlignItems}
          wrap={wrap} setWrap={setWrap}
          gap={gap} setGap={setGap}
          grow={grow} setGrow={setGrow}
          shrink={shrink} setShrink={setShrink}
          basis={basis} setBasis={setBasis}
          items={items} setItems={setItems}
        />
        <Preview
          direction={direction}
          justify={justify}
          alignItems={alignItems}
          wrap={wrap}
          gap={gap}
          grow={grow}
          shrink={shrink}
          basis={basis}
          items={items}
        />
      </div>
    </div>
  );
}