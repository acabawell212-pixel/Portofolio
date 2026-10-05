import { colors } from './colors'

export const gradients = {
  atmosphere: {
    sky: `radial-gradient(ellipse at 50% 0%, ${colors.glow.sky} 0%, transparent 65%)`,
    gold: `radial-gradient(ellipse at 50% 0%, ${colors.glow.gold} 0%, transparent 68%)`,
    page: `radial-gradient(ellipse at 50% -10%, ${colors.glow.softSky}, transparent 38%), radial-gradient(ellipse at 92% 14%, ${colors.glow.goldAtmosphere}, transparent 24%), radial-gradient(ellipse at 6% 46%, ${colors.glow.distantBlue}, transparent 28%), linear-gradient(180deg, ${colors.base.backgroundSky} 0%, ${colors.base.backgroundMid} 36%, ${colors.base.backgroundNight} 100%)`,
  },
  decorative: {
    goldLine: `linear-gradient(90deg, transparent, ${colors.base.gold}, transparent)`,
    pearlLine: `linear-gradient(90deg, transparent, ${colors.base.pearl}, transparent)`,
    celestial: `radial-gradient(circle, ${colors.glow.gold} 0%, transparent 70%)`,
  },
  projects: {
    amber: `radial-gradient(circle at 24% 18%, ${colors.base.gold}55, transparent 38%), linear-gradient(145deg, ${colors.base.projectAmber}, ${colors.base.projectShadow} 72%)`,
    blue: `radial-gradient(circle at 24% 18%, ${colors.glow.sky}55, transparent 38%), linear-gradient(145deg, ${colors.base.projectBlue}, ${colors.base.projectShadow} 72%)`,
    violet: `radial-gradient(circle at 24% 18%, ${colors.glow.violet}55, transparent 38%), linear-gradient(145deg, ${colors.base.projectViolet}, ${colors.base.projectVioletShadow} 72%)`,
  },
} as const
