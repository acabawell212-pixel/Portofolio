import { Section } from '../../components/ui/Section'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { skillCategories } from '../../data/skills'
import { Ornament } from '../../components/visual'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A toolkit built for creative systems." description="My work sits at the intersection of product thinking, visual craft, and technical implementation.">
      <div className="grid gap-5 md:grid-cols-3">
        {skillCategories.map((group) => (
          <Card key={group.title} className="p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-amber-200/80">{group.title}</p>
              <Ornament variant="seal" position="center" size={30} opacity={0.75} />
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <Badge key={item} className="border-slate-500/80 bg-slate-900/70 text-slate-200">
                  {item}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
