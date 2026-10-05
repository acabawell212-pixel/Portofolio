import type { CSSProperties } from 'react'

import { ornaments, type OrnamentTone } from '../../../styles/ornaments'

type ShapeVariant = 'arc' | 'circle' | 'diamond' | 'cross' | 'star' | 'dot'

type DecorativeShapeProps = {
  variant?: ShapeVariant
  tone?: OrnamentTone
  size?: number
  opacity?: number
  rotation?: number
  className?: string
}

export function DecorativeShape({
  variant = 'circle',
  tone = 'pearl',
  size = ornaments.sizes.medium,
  opacity,
  rotation = 0,
  className = '',
}: DecorativeShapeProps) {
  const config = ornaments[tone]
  const style: CSSProperties = {
    borderColor: config.color,
    color: config.color,
    height: size,
    opacity: opacity ?? config.opacity,
    transform: `rotate(${rotation}deg)`,
    width: size,
  }

  if (variant === 'star' || variant === 'cross') {
    return (
      <svg aria-hidden="true" viewBox="0 0 100 100" className={['pointer-events-none absolute', className].join(' ')} style={style}>
        <path d={variant === 'star' ? ornaments.symbols.star : ornaments.symbols.cross} fill={config.color} />
      </svg>
    )
  }

  if (variant === 'arc') {
    return (
      <svg aria-hidden="true" viewBox="0 0 100 100" className={['pointer-events-none absolute', className].join(' ')} style={style}>
        <path d={ornaments.symbols.arc} fill="none" stroke={config.color} strokeWidth={ornaments.shape.stroke} />
      </svg>
    )
  }

  return (
    <span
      aria-hidden="true"
      className={[
        'pointer-events-none absolute',
        variant === 'circle' ? 'rounded-full border' : '',
        variant === 'diamond' ? 'border [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]' : '',
        variant === 'dot' ? 'rounded-full' : '',
        className,
      ].join(' ')}
      style={{
        ...style,
        backgroundColor: variant === 'dot' ? config.color : 'transparent',
        borderWidth: variant === 'circle' || variant === 'diamond' ? ornaments.shape.stroke : 0,
      }}
    />
  )
}
