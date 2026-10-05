import type { CSSProperties } from 'react'

import { ornaments, type OrnamentTone } from '../../../styles/ornaments'

type DecorativeLineProps = {
  variant?: OrnamentTone
  length?: number
  opacity?: number
  rotation?: number
  className?: string
}

export function DecorativeLine({
  variant = 'gold',
  length = ornaments.line.width,
  opacity,
  rotation = 0,
  className = '',
}: DecorativeLineProps) {
  const config = ornaments[variant]
  const style: CSSProperties = {
    backgroundImage: config.gradient,
    height: ornaments.line.thickness,
    opacity: opacity ?? config.opacity,
    transform: `rotate(${rotation}deg)`,
    width: length,
  }

  return <span aria-hidden="true" className={['pointer-events-none block', className].join(' ')} style={style} />
}
