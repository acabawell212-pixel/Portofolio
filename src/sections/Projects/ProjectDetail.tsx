import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import type { Project } from '../../data/projects'
import { Ornament, Pattern } from '../../components/visual'

type ProjectDetailProps = {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const navigate = useNavigate()

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 lg:px-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => navigate(-1)}>
          Back
        </Button>
        <Link to="/#projects">
          <Button variant="secondary" size="sm">
            View All Projects
          </Button>
        </Link>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-950/70">
        <div className="relative h-72 md:h-80" style={{ background: project.image }}>
          <Pattern variant="celestial" opacity={0.11} scale={0.9} />
          <Ornament variant="seal" position="center" size={210} opacity={0.16} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="absolute left-5 top-5 flex items-center gap-3">
            <Ornament variant="rosette" position="top-left" size={32} opacity={0.8} className="left-0 top-0" />
            <Badge className="border-slate-500/80 bg-slate-950/70 text-[0.58rem]">{project.category}</Badge>
          </div>
        </div>

        <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.28em] text-amber-200/80">{project.year}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.07em] text-slate-50 md:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{project.overview}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} className="border-slate-500/80 bg-slate-900/70 text-slate-200">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Card className="p-5">
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-slate-400">Challenge</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.challenge}</p>
            </Card>
            <Card className="p-5">
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-slate-400">Solution</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.solution}</p>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="p-6">
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-amber-200/80">Features</p>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-200" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <p className="text-[0.6rem] uppercase tracking-[0.28em] text-amber-200/80">Development notes</p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
            <p>
              The project was shaped around the idea of clarity first: memorable forms, restrained motion, and systems that support the story rather than distract from it.
            </p>
            <p>
              The approach balances player readability with atmosphere, ensuring the experience feels premium, thoughtful, and intentionally composed.
            </p>
          </div>
        </Card>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a href={project.repoUrl} aria-label={`View repository for ${project.title}`}>
          <Button variant="primary" size="md" icon={ArrowUpRight}>
            Repository
          </Button>
        </a>
        <a href={project.demoUrl} aria-label={`View demo for ${project.title}`}>
          <Button variant="secondary" size="md" icon={ArrowUpRight}>
            Live Preview
          </Button>
        </a>
      </div>
    </section>
  )
}
