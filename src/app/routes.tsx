import { Navigate, Route, Routes, useParams } from 'react-router-dom'

import { About } from '../sections/About/About'
import { Contact } from '../sections/Contact/Contact'
import { Hero } from '../sections/Hero/Hero'
import { ProjectDetail } from '../sections/Projects/ProjectDetail'
import { Projects } from '../sections/Projects/Projects'
import { Skills } from '../sections/Skills/Skills'
import { projects } from '../data/projects'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

function ProjectRoute() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return <ProjectDetail project={project} />
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectRoute />} />
    </Routes>
  )
}
