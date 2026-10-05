import { motion, useScroll, useTransform } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type ParallaxProps = PropsWithChildren<{
  className?: string
  offset?: number
}>

export function Parallax({ children, className = '', offset = 25 }: ParallaxProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}
