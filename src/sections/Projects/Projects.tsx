import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Ornament } from '../../components/visual'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { Section } from '../../components/ui/Section'
import { projects } from '../../data/projects'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work with atmosphere and intent."
      description="A few product and game-inspired builds focused on interaction, visual storytelling, and systems design."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
            <Card
              key={project.slug}
              className="group overflow-hidden p-0 transition-all duration-300 hover:border-amber-300/40 hover:shadow-[0_18px_50px_rgba(15,23,42,0.7),0_0_28px_rgba(245,190,95,0.10)]"
            >
              <Link
                to={`/projects/${project.slug}`}
                className="block h-full transform-gpu transition-transform duration-300 group-hover:scale-[1.01]"
              >
                <div
                  className="relative h-56 overflow-hidden border-b border-sky-100/20"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.17),transparent_36%)] opacity-90 transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(12,27,47,0.54)_100%)]" />
                  <div className="absolute left-4 top-4">
                    <Ornament variant="rosette" position="top-left" size={28} opacity={0.72} className="left-0 top-0" />
                  </div>
                  <div className="absolute right-4 top-4">
                    <Badge className="border-slate-500/80 bg-slate-950/70 text-[0.55rem]">{project.year}</Badge>
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-[0.22em] text-slate-400">{project.category}</p>
                      <h3 className="mt-2 text-2xl font-medium tracking-[-0.05em] text-slate-50">{project.title}</h3>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600/80 text-slate-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-slate-300">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Card>
        ))}
      </div>
    </Section>
  )
}
