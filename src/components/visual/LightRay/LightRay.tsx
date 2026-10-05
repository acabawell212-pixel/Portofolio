import type { CSSProperties } from 'react'
import { ornaments } from '../../../styles/ornaments'

type LightRayProps = {
  color?: string
  opacity?: number
  width?: number
  rotation?: number
  position?: string
  className?: string
}

export function LightRay({
  color = ornaments.ray.color,
  opacity = ornaments.ray.opacity,
  width = ornaments.ray.width,
  rotation = ornaments.ray.rotation,
  position = '58% -10%',
  className = '',
}: LightRayProps) {
  const style: CSSProperties = {
    background: `linear-gradient(180deg, ${color}, transparent 82%)`,
    left: position.split(' ')[0],
    top: position.split(' ')[1],
    opacity,
    transform: `rotate(${rotation}deg)`,
    width,
  }

  return (
    <div
      aria-hidden="true"
      className={['pointer-events-none absolute h-[115%] -translate-x-1/2 blur-2xl', className].join(' ')}
      style={style}
    />
  )
}
