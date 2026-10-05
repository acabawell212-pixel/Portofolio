import { visualAssets } from '../data/visualAssets'

export const patterns = {
  celestial: {
    source: visualAssets.patterns.celestial,
    opacity: 0.08,
    size: 320,
    blendMode: 'soft-light',
  },
  geometry: {
    source: visualAssets.patterns.geometry,
    opacity: 0.035,
    size: 160,
    blendMode: 'soft-light',
  },
  constellation: {
    source: visualAssets.patterns.constellation,
    opacity: 0.025,
    size: 240,
    blendMode: 'screen',
  },
  architecture: {
    source: visualAssets.patterns.architecture,
    opacity: 0.03,
    size: 240,
    blendMode: 'soft-light',
  },
} as const

export type PatternName = keyof typeof patterns
