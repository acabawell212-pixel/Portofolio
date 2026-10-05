type ParticlesProps = {
  count?: number
  className?: string
}

export function Particles({ count = 18, className = '' }: ParticlesProps) {
  const particles = Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${(index * 13 + 9) % 100}%`,
    top: `${(index * 17 + 7) % 100}%`,
    size: `${index % 3 === 0 ? 2 : index % 3 === 1 ? 3 : 1.5}px`,
    delay: `${(index % 5) * 0.4}s`,
    duration: `${6 + (index % 4) * 2}s`,
  }))

  return (
    <div className={['pointer-events-none absolute inset-0 overflow-hidden', className].join(' ')} aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute rounded-full bg-amber-200/60 shadow-[0_0_12px_rgba(251,191,36,0.7)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            animationName: 'floatParticle',
          }}
        />
      ))}
    </div>
  )
}
