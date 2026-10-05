import type { CSSProperties } from 'react'

import { visualAssets } from '../../../data/visualAssets'
import { ornaments } from '../../../styles/ornaments'

type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

type CornerFrameProps = {
  position?: CornerPosition
  opacity?: number
  size?: number
  className?: string
}

const transforms: Record<CornerPosition, string> = {
  'top-left': '',
  'top-right': 'scaleX(-1)',
  'bottom-left': 'scaleY(-1)',
  'bottom-right': 'scale(-1)',
}

const placements: Record<CornerPosition, string> = {
  'top-left': 'left-0 top-0',
  'top-right': 'right-0 top-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
}

export function CornerFrame({ position = 'top-left', opacity = ornaments.frame.opacity, size = ornaments.sizes.corner, className = '' }: CornerFrameProps) {
  const style: CSSProperties = {
    backgroundColor: ornaments.gold.color,
    opacity,
    transform: transforms[position],
    height: size,
    width: size,
    maskImage: `url("${visualAssets.ornaments.corners}")`,
    maskPosition: 'left top',
    maskRepeat: 'no-repeat',
    maskSize: `${size}px ${size}px`,
    WebkitMaskImage: `url("${visualAssets.ornaments.corners}")`,
    WebkitMaskPosition: 'left top',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: `${size}px ${size}px`,
  }

  return (
    <span
      aria-hidden="true"
      className={['pointer-events-none absolute', placements[position], className].join(' ')}
      style={style}
    />
  )
}
