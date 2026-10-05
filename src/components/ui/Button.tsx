import { ArrowRight, type LucideIcon } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: LucideIcon
  children: ReactNode
}

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    'border border-amber-100/80 bg-[linear-gradient(135deg,#f3dda5,#dfc17d)] text-[#27302a] shadow-[0_8px_26px_rgba(231,199,126,0.18)] hover:-translate-y-0.5 hover:border-white hover:bg-[linear-gradient(135deg,#fae9bd,#e9ce91)] hover:shadow-[0_10px_28px_rgba(245,190,95,0.25)]',
  secondary:
    'border border-sky-100/40 bg-sky-100/[0.08] text-sky-50 hover:-translate-y-0.5 hover:border-sky-100/70 hover:bg-sky-100/[0.15] hover:shadow-[0_10px_24px_rgba(15,23,42,0.42)]',
  ghost:
    'border border-transparent bg-transparent text-slate-200 hover:-translate-y-0.5 hover:border-slate-500/60 hover:bg-slate-900/70',
  icon: 'border border-slate-500/70 bg-slate-900/70 p-2 text-slate-100 hover:-translate-y-0.5 hover:border-slate-300/80 hover:bg-slate-800/80',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-10 px-3 text-xs',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-sm md:text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.16em] uppercase transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50',
        buttonStyles[variant],
        sizeStyles[size],
        className,
      ].join(' ')}
      {...props}
    >
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4" /> : variant !== 'icon' ? <ArrowRight className="h-4 w-4" /> : null}
    </button>
  )
}
