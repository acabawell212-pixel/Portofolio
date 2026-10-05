import { Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { profile } from '../../data/profile'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Contact', to: '/#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-sky-100/15 bg-[#122237]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-12" aria-label="Main navigation">
        <Link
          to="/"
          className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.24em] text-slate-100 transition-transform duration-200 hover:scale-[1.01]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-amber-200/65 bg-[radial-gradient(circle,_rgba(231,199,126,0.24),_rgba(23,43,65,0.6)_70%)] text-amber-100 shadow-[0_0_22px_rgba(245,190,95,0.16)]">
            <Sparkles className="h-4 w-4" />
          </span>
          {profile.name}
        </Link>

        <div className="hidden items-center gap-1 border-y border-sky-100/20 bg-[#14283a]/55 px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-sm border-x border-transparent px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-300 transition-all duration-200',
                  isActive
                    ? 'border-amber-100/20 bg-[linear-gradient(135deg,rgba(231,199,126,0.24),rgba(137,193,218,0.12))] text-amber-50 shadow-[0_0_24px_rgba(245,190,95,0.16)]'
                    : 'hover:text-slate-100',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-amber-100/25 bg-white/[0.04] text-slate-100 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-sky-100/15 bg-[#122237]/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm uppercase tracking-[0.18em] text-slate-200 hover:bg-slate-900/70"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
