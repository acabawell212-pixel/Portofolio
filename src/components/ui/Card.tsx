import type { HTMLAttributes, ReactNode } from 'react'
import { CornerFrame, Texture } from '../visual'
import { ornaments } from '../../styles/ornaments'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={[
        'ui-depth-card relative isolate overflow-hidden rounded-2xl border border-sky-100/20 bg-slate-900/35 p-5 shadow-[0_12px_32px_rgba(0,0,0,0.16)] backdrop-blur-sm transition-colors duration-200 hover:border-amber-100/35',
        className,
      ].join(' ')}
      {...props}
    >
      <Texture variant="paper" opacity={0.4} className="ui-depth-card-texture" />
      <CornerFrame position="top-left" size={ornaments.sizes.cardCorner} opacity={0.52} className="ui-depth-card-ornament left-2 top-2 z-0" />
      <CornerFrame position="bottom-right" size={ornaments.sizes.cardCorner} opacity={0.52} className="ui-depth-card-ornament bottom-2 right-2 z-0" />
      <div className="ui-depth-card-content relative z-10">{children}</div>
    </div>
  )
}
