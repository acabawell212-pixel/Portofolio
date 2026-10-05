import type { ReactNode } from 'react'

import { ornaments } from '../../../styles/ornaments'
import { textures, type TextureVariant } from '../../../styles/textures'
import { CornerFrame } from '../CornerFrame/CornerFrame'
import { Texture } from '../Texture/Texture'

type FrameProps = {
  children: ReactNode
  variant?: 'inset' | 'corners'
  opacity?: number
  texture?: TextureVariant
  className?: string
}

export function Frame({ children, variant = 'inset', opacity = ornaments.frame.opacity, texture = 'paper', className = '' }: FrameProps) {
  const cornerSize = variant === 'inset' ? ornaments.sizes.cardCorner : ornaments.sizes.medium

  return (
    <div className={['hero-profile-depth relative isolate', className].join(' ')}>
      <Texture variant={texture} opacity={textures[texture].opacity} className="hero-profile-texture" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute border"
        style={{ inset: ornaments.frame.inset, borderColor: `${ornaments.pearl.color}22` }}
      />
      <CornerFrame position="top-left" size={cornerSize} opacity={opacity} className="left-3 top-3" />
      <CornerFrame position="top-right" size={cornerSize} opacity={opacity} className="right-3 top-3" />
      <CornerFrame position="bottom-left" size={cornerSize} opacity={opacity} className="bottom-3 left-3" />
      <CornerFrame position="bottom-right" size={cornerSize} opacity={opacity} className="bottom-3 right-3" />
      <div className="hero-profile-content relative z-10">{children}</div>
    </div>
  )
}
