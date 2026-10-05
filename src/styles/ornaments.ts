import { colors } from './colors'
import { gradients } from './gradients'

export const ornaments = {
  gold: {
    color: colors.base.gold,
    gradient: gradients.decorative.goldLine,
    opacity: 0.42,
  },
  pearl: {
    color: colors.base.pearl,
    gradient: gradients.decorative.pearlLine,
    opacity: 0.22,
  },
  celestial: {
    color: colors.glow.gold,
    gradient: gradients.decorative.celestial,
    opacity: 0.1,
  },
  sizes: {
    corner: 76,
    cardCorner: 28,
    small: 12,
    medium: 28,
    large: 64,
    particle: 8,
    lineLength: 120,
  },
  symbols: {
    diamond: 'M50 0 100 50 50 100 0 50Z',
    cross: 'M44 0h12v44h44v12H56v44H44V56H0V44h44z',
    star: 'M50 0 61 38 100 50 61 62 50 100 39 62 0 50 39 38Z',
    arc: 'M10 55a40 40 0 0 1 80 0',
  },
  line: {
    thickness: 1,
    width: 120,
  },
  frame: {
    opacity: 0.52,
    cardOpacity: 0.32,
    inset: '0.75rem',
  },
  shape: {
    stroke: 1,
  },
  divider: {
    opacity: 0.58,
    gap: '0.75rem',
  },
  glow: {
    soft: 0.09,
    medium: 0.22,
    bright: 0.32,
  },
  particle: {
    opacity: 0.4,
    count: 20,
    minSize: 5,
    sizeRange: 8,
    minDuration: 7,
    durationRange: 5,
  },
  ray: {
    color: 'rgba(255, 235, 188, 0.3)',
    opacity: 0.35,
    width: 180,
    rotation: 18,
  },
} as const

export type OrnamentTone = 'gold' | 'pearl' | 'celestial'
