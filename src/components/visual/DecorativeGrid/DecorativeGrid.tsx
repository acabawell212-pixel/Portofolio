import { PatternLayer, type PatternLayerProps } from '../PatternLayer/PatternLayer'

type DecorativeGridProps = Omit<PatternLayerProps, 'variant'> & {
  variant?: 'geometry' | 'constellation'
}

export function DecorativeGrid({ variant = 'geometry', ...props }: DecorativeGridProps) {
  return <PatternLayer variant={variant} {...props} />
}
