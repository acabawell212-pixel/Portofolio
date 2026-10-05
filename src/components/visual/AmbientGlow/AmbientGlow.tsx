import type { CSSProperties } from 'react'

import { colors } from '../../../styles/colors'
import { ornaments } from '../../../styles/ornaments'

type GlowVariant = keyof typeof colors.glow
type GlowIntensity = 'soft' | 'medium' | 'bright'

export type AmbientGlowProps = {
  variant?: GlowVariant
  intensity?: GlowIntensity
  size?: number
  position?: string
  className?: string
}

const intensityOpacity: Record<GlowIntensity, number> = {
  soft: ornaments.glow.soft,
  medium: ornaments.glow.medium,
  bright: ornaments.glow.bright,
}

export function AmbientGlow({
  variant = 'gold',
  intensity = 'soft',
  size = 320,
  position = '50% 50%',
  className = '',
}: AmbientGlowProps) {
  const style: CSSProperties = {
    background: `radial-gradient(circle, ${colors.glow[variant]} 0%, transparent 70%)`,
    height: size,
    left: position.split(' ')[0],
    opacity: intensityOpacity[intensity],
    top: position.split(' ')[1],
    transform: 'translate(-50%, -50%)',
    width: size,
  }

  return (
    <div
      aria-hidden="true"
      className={['pointer-events-none absolute rounded-full blur-2xl', className].join(' ')}
      style={style}
    />
  )
}
