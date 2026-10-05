import type { CSSProperties } from 'react'

import { patterns } from '../../../styles/patterns'
import { ornaments } from '../../../styles/ornaments'

export type PatternVariant = keyof typeof patterns

export type PatternLayerProps = {
  variant?: PatternVariant
  opacity?: number
  scale?: number
  rotation?: number
  position?: string
  blendMode?: CSSProperties['mixBlendMode']
  className?: string
}

export function PatternLayer({
  variant = 'celestial',
  opacity,
  scale = 1,
  rotation = 0,
  position = 'center',
  blendMode = 'soft-light',
  className = '',
}: PatternLayerProps) {
  const config = patterns[variant]
  return (
    <div
      aria-hidden="true"
      className={['pointer-events-none absolute -inset-[8%]', className].join(' ')}
      style={{
        backgroundColor: ornaments.pearl.color,
        maskImage: `url("${config.source}")`,
        maskPosition: position,
        maskRepeat: 'repeat',
        maskSize: `${config.size * scale}px ${config.size * scale}px`,
        WebkitMaskImage: `url("${config.source}")`,
        WebkitMaskPosition: position,
        WebkitMaskRepeat: 'repeat',
        WebkitMaskSize: `${config.size * scale}px ${config.size * scale}px`,
        mixBlendMode: blendMode ?? config.blendMode,
        opacity: opacity ?? config.opacity,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  )
}
