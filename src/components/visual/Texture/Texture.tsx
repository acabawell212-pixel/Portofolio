import type { CSSProperties } from 'react'

import { TextureLayer, type TextureName } from '../TextureLayer/TextureLayer'

type TextureProps = {
  variant?: TextureName | 'parchment'
  opacity?: number
  blendMode?: CSSProperties['mixBlendMode']
  className?: string
}

export function Texture({ variant = 'grain', ...props }: TextureProps) {
  return <TextureLayer variant={variant === 'parchment' ? 'paper' : variant} {...props} />
}
