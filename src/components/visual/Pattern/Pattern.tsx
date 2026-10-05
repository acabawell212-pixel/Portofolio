import { PatternLayer, type PatternLayerProps } from '../PatternLayer/PatternLayer'

export type PatternProps = Omit<PatternLayerProps, 'variant'> & {
  variant?: PatternLayerProps['variant']
}

export function Pattern(props: PatternProps) {
  return <PatternLayer {...props} />
}
