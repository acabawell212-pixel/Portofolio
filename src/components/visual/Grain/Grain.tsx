import { textures } from '../../../styles/textures'

type GrainProps = {
  opacity?: number
  className?: string
}

export function Grain({ opacity = textures.grain.opacity, className = '' }: GrainProps) {
  return <div aria-hidden="true" className={['pointer-events-none absolute inset-0 bg-repeat', className].join(' ')} style={{ backgroundImage: `url("${textures.grain.source}")`, backgroundSize: textures.grain.size, mixBlendMode: textures.grain.blendMode, opacity }} />
}
