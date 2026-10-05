const assetUrl = (path: string) => new URL(path, import.meta.url).href

export const visualAssets = {
  textures: {
    grain: assetUrl('../assets/textures/soft-grain.svg'),
    parchment: assetUrl('../assets/textures/parchment.svg'),
    fabric: assetUrl('../assets/textures/fabric.svg'),
    cloudy: assetUrl('../assets/textures/cloudy.svg'),
    stone: assetUrl('../assets/textures/stone.svg'),
  },
  patterns: {
    celestial: assetUrl('../assets/patterns/celestial.svg'),
    geometry: assetUrl('../assets/patterns/geometry.svg'),
    constellation: assetUrl('../assets/patterns/constellation.svg'),
    architecture: assetUrl('../assets/patterns/architecture.svg'),
  },
  ornaments: {
    corners: assetUrl('../assets/ornaments/corner-piece.svg'),
  },
  frames: {
    inset: assetUrl('../assets/frames/inset-frame.svg'),
  },
  decorations: {
    rosette: assetUrl('../assets/decorations/rosette.svg'),
  },
  particles: {
    dust: assetUrl('../assets/particles/dust.svg'),
  },
} as const
