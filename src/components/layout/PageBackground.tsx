import { Glow, ParticleField, Pattern, Texture } from '../visual'
import { colors } from '../../styles/colors'
import { gradients } from '../../styles/gradients'

export function PageBackground() {
  return (
    <div className="ambient-depth-scene pointer-events-none fixed inset-0 -z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 -z-10" style={{ backgroundColor: colors.base.night }} />
      <div className="ambient-atmosphere-depth absolute inset-0" style={{ backgroundImage: gradients.atmosphere.page }} />
      <div className="ambient-haze absolute -inset-[20%]" />
      <Texture variant="paper" opacity={0.28} className="ambient-paper-drift" />
      <Pattern variant="celestial" opacity={0.026} scale={1.8} className="ambient-pattern-drift" />
      <Glow variant="sky" intensity="soft" size={460} position="22% 24%" className="ambient-glow-drift" />
      <Glow variant="gold" intensity="soft" size={360} position="82% 18%" className="ambient-glow-drift-reverse" />
      <Glow variant="sky" intensity="soft" size={400} position="72% 78%" className="ambient-glow-drift-slow" />
      <ParticleField count={24} opacity={0.5} className="ambient-particle-field" />
    </div>
  )
}
