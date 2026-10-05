import { Compass, Cpu, Sparkles } from 'lucide-react'

import { Card } from '../../components/ui/Card'
import { Section } from '../../components/ui/Section'
import { profile } from '../../data/profile'

const pillars = [
  {
    icon: Cpu,
    title: 'Engineering',
    description: 'Thoughtful systems, clean architecture, and scalable interfaces built to last.',
  },
  {
    icon: Sparkles,
    title: 'Design',
    description: 'Cinematic composition, clear visual hierarchy, and polished motion language.',
  },
  {
    icon: Compass,
    title: 'Direction',
    description: 'Product clarity and creative intent shaped into memorable digital experiences.',
  },
]

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Crafting interfaces with purpose." description={profile.philosophy}>
      <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-7 md:p-8">
          <p className="text-base leading-8 text-slate-200 md:text-lg">{profile.bio}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-sky-100/15 bg-[#1a2d43]/85 p-4">
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-400">Location</p>
              <p className="mt-3 text-base text-slate-100">{profile.location}</p>
            </div>
            <div className="rounded-xl border border-sky-100/15 bg-[#1a2d43]/85 p-4">
              <p className="text-[0.62rem] uppercase tracking-[0.24em] text-slate-400">Availability</p>
              <p className="mt-3 text-base text-slate-100">{profile.availability}</p>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {pillars.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="p-5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/60 bg-[linear-gradient(145deg,rgba(236,208,141,0.2),rgba(116,177,209,0.12))] text-amber-100 shadow-[0_0_22px_rgba(231,199,126,0.12)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-slate-50">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
