'use client'

type Props = {
  direction: string
  justify: string
  alignItems: string
  wrap: string
  gap: number
  grow: number
  shrink: number
  basis: string
  items: number[]
}

export default function Preview(props: Props) {
  const { direction, justify, alignItems, wrap, gap, grow, shrink, basis, items } = props

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction as any,
    justifyContent: justify as any,
    alignItems: alignItems as any,
    flexWrap: wrap as any,
    gap: `${gap}px`,
    width: '100%',
    height: '520px',
    border: '1px dashed rgba(125,125,125,.6)',
    borderRadius: '16px',
    padding: '12px',
    background:
      'repeating-linear-gradient(45deg, rgba(255,255,255,.03) 0, rgba(255,255,255,.03) 10px, rgba(0,0,0,.03) 10px, rgba(0,0,0,.03) 20px)'
  }

  const itemStyle: React.CSSProperties = {
    flexGrow: grow,
    flexShrink: shrink,
    flexBasis: basis || 'auto',
    minWidth: '48px',
    minHeight: '48px',
    borderRadius: '12px',
    display: 'grid',
    placeItems: 'center',
    padding: '8px',
    border: '1px solid rgba(120,120,200,.35)',
    background: 'linear-gradient(180deg, rgba(99,102,241,.25), rgba(99,102,241,.15))',
    color: 'rgba(30,30,60,.9)',
    fontWeight: 600
  }

  return (
    <section className="rounded-2xl bg-white/5 p-3 md:p-5">
      <header className="mb-3 text-sm opacity-80">
        <code className="block whitespace-pre-wrap">
          {`display: flex;
flex-direction: ${direction};
justify-content: ${justify};
align-items: ${alignItems};
flex-wrap: ${wrap};
gap: ${gap}px;
.item { flex: ${grow} ${shrink} ${basis || 'auto'}; }`}
        </code>
      </header>

      <div style={containerStyle}>
        {items.map((n) => (
          <div key={n} style={itemStyle}>
            {n}
          </div>
        ))}
      </div>
    </section>
  )
}
