import { ParticleField, type ParticleFieldProps } from '../ParticleField/ParticleField'

export type ParticleProps = ParticleFieldProps

export function Particle(props: ParticleProps) {
  return <ParticleField {...props} />
}
