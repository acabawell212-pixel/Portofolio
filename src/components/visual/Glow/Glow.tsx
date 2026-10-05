import { AmbientGlow, type AmbientGlowProps } from '../AmbientGlow/AmbientGlow'

export type GlowProps = AmbientGlowProps

export function Glow(props: GlowProps) {
  return <AmbientGlow {...props} />
}
