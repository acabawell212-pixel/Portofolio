type GlowProps = {
  className?: string
}

export function Glow({ className = '' }: GlowProps) {
  return <div className={['pointer-events-none absolute rounded-full blur-3xl', className].join(' ')} />
}
