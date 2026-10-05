import type { CSSProperties } from 'react'

import { textures } from '../../../styles/textures'

type NoiseOverlayProps = {
  opacity?: number
  blendMode?: CSSProperties['mixBlendMode']
  className?: string
}

export function NoiseOverlay({ opacity = textures.grain.opacity, blendMode = textures.grain.blendMode, className = '' }: NoiseOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={['pointer-events-none absolute inset-0', className].join(' ')}
      style={{
        backgroundImage: `url("${textures.grain.source}")`,
        backgroundSize: textures.grain.size,
        mixBlendMode: blendMode,
        opacity,
      }}
    />
  )
}
