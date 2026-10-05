import type { CSSProperties } from 'react'

import { visualAssets } from '../../../data/visualAssets'
import { ornaments } from '../../../styles/ornaments'

type OrnamentVariant = 'diamond' | 'rosette' | 'star' | 'cross' | 'dot' | 'line' | 'bracket' | 'seal'
type OrnamentPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'all'
type OrnamentToneName = keyof Pick<typeof ornaments, 'gold' | 'pearl' | 'celestial'>

type OrnamentProps = {
  variant?: OrnamentVariant
  position?: OrnamentPosition
  tone?: OrnamentToneName
  opacity?: number
  size?: number
  rotation?: number
  className?: string
}

const positions: Record<OrnamentPosition, string> = {
  'top-left': 'left-0 top-0',
  'top-right': 'right-0 top-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
  center: 'left-1/2 top-1/2',
  all: 'inset-0',
}

const transforms: Record<OrnamentPosition, string> = {
  'top-left': '',
  'top-right': 'scaleX(-1)',
  'bottom-left': 'scaleY(-1)',
  'bottom-right': 'scale(-1)',
  center: 'translate(-50%, -50%)',
  all: '',
}

export function Ornament({
  variant = 'rosette',
  position = 'center',
  tone = 'gold',
  opacity,
  size = ornaments.sizes.medium,
  rotation = 0,
  className = '',
}: OrnamentProps) {
  const config = ornaments[tone]

  const style: CSSProperties = {
    width: variant === 'line' ? size * 2 : size,
    height: variant === 'line' ? ornaments.line.thickness : variant === 'dot' ? ornaments.sizes.particle : size,
    opacity: opacity ?? config.opacity,
    transform: `${transforms[position]} rotate(${rotation}deg)`,
    backgroundImage: variant === 'line' ? config.gradient : undefined,
    backgroundSize: variant === 'line' ? 'auto' : undefined,
    backgroundRepeat: variant === 'line' ? 'no-repeat' : undefined,
    backgroundColor: variant === 'dot' ? config.color : undefined,
    borderColor: config.color,
    color: config.color,
  }

  if (variant === 'rosette' || variant === 'seal') {
    const image = `url("${visualAssets.decorations.rosette}")`
    style.backgroundColor = config.color
    style.backgroundImage = undefined
    style.maskImage = image
    style.maskSize = 'contain'
    style.maskRepeat = 'no-repeat'
    style.maskPosition = 'center'
    style.WebkitMaskImage = image
    style.WebkitMaskSize = 'contain'
    style.WebkitMaskRepeat = 'no-repeat'
    style.WebkitMaskPosition = 'center'
  }

  return (
    <span
      aria-hidden="true"
      className={[
        'pointer-events-none absolute',
        positions[position],
        variant === 'bracket' ? 'border-l border-t' : '',
        variant === 'diamond' ? 'border border-current [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]' : '',
        variant === 'dot' ? 'rounded-full' : '',
        variant === 'seal' ? 'rounded-full border' : '',
        className,
      ].join(' ')}
      style={style}
    >
      {variant === 'star' || variant === 'cross' ? (
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <path d={variant === 'star' ? ornaments.symbols.star : ornaments.symbols.cross} fill="currentColor" />
        </svg>
      ) : null}
    </span>
  )
}
