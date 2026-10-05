import type { ReactNode } from 'react'
import { Divider } from '../visual'

type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={['relative isolate mx-auto w-full max-w-6xl px-5 py-20 md:px-8 lg:px-12', className].join(' ')}>
      <div className="relative z-10">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-amber-200/90 before:h-px before:w-7 before:bg-amber-200/70">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-50 md:text-4xl">
            <span className="bg-gradient-to-r from-slate-50 via-slate-200 to-slate-400 bg-clip-text text-transparent">{title}</span>
          </h2>
          {description ? <p className="mt-4 text-sm text-slate-300 md:text-base">{description}</p> : null}
          <Divider className="mt-7 max-w-sm" />
        </div>
        {children}
      </div>
    </section>
  )
}
