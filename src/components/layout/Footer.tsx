import { profile } from '../../data/profile'
import { socialLinks } from '../../data/social'

export function Footer() {
  return (
    <footer className="border-t border-sky-100/15 bg-[#122237]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{profile.name}</p>
          <p className="mt-2 text-sm text-slate-300">{profile.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-slate-300">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-amber-200" aria-label={link.ariaLabel}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
