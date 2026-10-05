import type { HTMLAttributes, ReactNode } from 'react'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

export function Badge({ children, className = '', ...props }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border border-sky-100/25 bg-[#1b324c]/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}
