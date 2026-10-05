import { visualAssets } from '../data/visualAssets'

export const textures = {
  grain: {
    source: visualAssets.textures.grain,
    size: '180px 180px',
    opacity: 0.045,
    blendMode: 'soft-light',
  },
  paper: {
    source: visualAssets.textures.parchment,
    size: '768px 768px',
    opacity: 0.55,
    blendMode: 'screen',
  },
  fabric: {
    source: visualAssets.textures.fabric,
    size: '320px 320px',
    opacity: 0.16,
    blendMode: 'soft-light',
  },
  cloudy: {
    source: visualAssets.textures.cloudy,
    size: '320px 320px',
    opacity: 0.03,
    blendMode: 'screen',
  },
  stone: {
    source: visualAssets.textures.stone,
    size: '180px 180px',
    opacity: 0.025,
    blendMode: 'soft-light',
  },
} as const

export type TextureVariant = keyof typeof textures
