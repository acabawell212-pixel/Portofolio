import type { CSSProperties } from 'react'

import { textures } from '../../../styles/textures'

export type TextureName = keyof typeof textures

type TextureLayerProps = {
  variant?: TextureName
  texture?: TextureName
  opacity?: number
  blendMode?: CSSProperties['mixBlendMode']
  className?: string
}

export function TextureLayer({
  texture,
  variant,
  opacity,
  blendMode,
  className = '',
}: TextureLayerProps) {
  const config = textures[variant ?? texture ?? 'grain']
  return (
    <div
      aria-hidden="true"
      className={['pointer-events-none absolute inset-0', className].join(' ')}
      style={{
        backgroundImage: `url("${config.source}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: config.size,
        mixBlendMode: blendMode ?? config.blendMode,
        opacity: opacity ?? config.opacity,
      }}
    />
  )
}
