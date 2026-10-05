import { visualAssets } from '../../../data/visualAssets'
import { ornaments } from '../../../styles/ornaments'

export type ParticleFieldProps = {
  count?: number
  opacity?: number
  className?: string
}

export function ParticleField({
  count = ornaments.particle.count,
  opacity = ornaments.particle.opacity,
  className = '',
}: ParticleFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={['pointer-events-none absolute inset-0 overflow-hidden', className].join(' ')}
      style={{ opacity, transformStyle: 'preserve-3d' }}
    >
      {Array.from({ length: count }, (_, index) => {
        const size = ornaments.particle.minSize + ((index * 7) % ornaments.particle.sizeRange)
        return (
          <span
            key={index}
            className="absolute animate-[floatParticle_8s_ease-in-out_infinite]"
            style={{
              backgroundImage: `url("${visualAssets.particles.dust}")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              height: size,
              left: `${(index * 37 + 9) % 100}%`,
              animationDelay: `${(index % 8) * -0.8}s`,
              animationDuration: `${ornaments.particle.minDuration + (index % 5) * 1.5}s`,
              top: `${(index * 29 + 8) % 100}%`,
              translate: `0 0 ${(index % 7 - 3) * 18}px`,
              width: size,
            }}
          />
        )
      })}
    </div>
  )
}
