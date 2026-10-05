import { Mail, MapPin } from 'lucide-react'

import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Section } from '../../components/ui/Section'
import { profile } from '../../data/profile'
import { socialLinks } from '../../data/social'

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something memorable." description="Available for collaborative product work, immersive interfaces, and design-led engineering.">
      <Card className="p-7 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-base leading-8 text-slate-200 md:text-lg">
              I enjoy projects where design and engineering work together to create experiences that feel deliberate, polished, and full of character.
            </p>
            <div className="mt-6 flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:flex-wrap">
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-200" />
                {profile.email}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-200" />
                {profile.location}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a href={`mailto:${profile.email}`}>
              <Button variant="primary" size="lg" className="w-full justify-center">
                Start a Conversation
              </Button>
            </a>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-xs uppercase tracking-[0.22em] text-slate-300 transition-colors hover:text-amber-200" aria-label={link.ariaLabel}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Section>
  )
}
