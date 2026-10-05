import { DecorativeLine } from '../DecorativeLine/DecorativeLine'
import { Ornament } from '../Ornament/Ornament'
import { ornaments } from '../../../styles/ornaments'

type DividerProps = {
  className?: string
}

export function Divider({ className = '' }: DividerProps) {
  return (
    <div aria-hidden="true" className={['flex items-center justify-center', className].join(' ')} style={{ gap: ornaments.divider.gap }}>
      <DecorativeLine className="max-w-[38%]" />
      <Ornament variant="diamond" size={ornaments.sizes.particle} opacity={ornaments.divider.opacity} />
      <DecorativeLine variant="pearl" className="max-w-[38%]" />
    </div>
  )
}
