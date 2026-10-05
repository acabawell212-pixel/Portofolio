import { gradients } from '../styles/gradients'

export type Project = {
  slug: string
  title: string
  category: string
  year: string
  description: string
  overview: string
  challenge: string
  solution: string
  technologies: string[]
  features: string[]
  image: string
  repoUrl: string
  demoUrl: string
  accent: keyof typeof gradients.projects
}

export const projects: Project[] = [
  {
    slug: 'pet-project',
    title: 'Pet Project',
    category: 'Roblox Development',
    year: '2026',
    description: 'An interactive creature-focused experience built around progression, motivation loops, and satisfying play feedback.',
    overview:
      'This project explores how a simple pet simulation can feel richer through careful motion, responsive interaction, and polished progression design.',
    challenge:
      'The challenge was creating repeated gameplay loops that stayed engaging without feeling shallow or visually cluttered.',
    solution:
      'I shaped the system around clear feedback, layered progression, and simple but readable UI so each interaction felt rewarding and intentional.',
    technologies: ['Roblox Studio', 'Luau', 'UI Design', 'Game Systems'],
    features: ['Pet progression', 'Reward loops', 'Responsive HUD', 'Gameplay feedback'],
    image: gradients.projects.amber,
    repoUrl: '#',
    demoUrl: '#',
    accent: 'amber',
  },
  {
    slug: 'sound-pet-project',
    title: 'Sound Pet Project',
    category: 'Game Systems',
    year: '2026',
    description: 'A playful audio-driven creature experience with sensory feedback, onboarding, and simple progression structure.',
    overview:
      'The idea was to pair subtle sound design and game feel with accessible interaction layers so the experience feels alive without overwhelming the player.',
    challenge:
      'Making a lightweight playful system feel expressive required careful tuning of timing, feedback, and visual cues.',
    solution:
      'I used concise event-driven interactions and a clean interface layer to turn modest mechanics into a more polished, memorable experience.',
    technologies: ['Roblox Studio', 'Sound Design', 'Luau', 'UI Prototyping'],
    features: ['Audio-driven feedback', 'Accessible onboarding', 'Playful state logic', 'Atmospheric UI'],
    image: gradients.projects.blue,
    repoUrl: '#',
    demoUrl: '#',
    accent: 'blue',
  },
  {
    slug: 'gui-lucht-rblx',
    title: 'Gui Lucht Rblx',
    category: 'UI/UX',
    year: '2025',
    description: 'A polished interface concept focused on readable layout, visual hierarchy, and game-like presentation.',
    overview:
      'This project reflects my interest in interface design as a product experience — where usability, style, and mood all work together in harmony.',
    challenge:
      'The goal was to create a user interface that looked premium without becoming too heavy, confusing, or over-designed.',
    solution:
      'I emphasized clean spacing, restrained ornament, and layered surfaces so the interface feels intentional, flexible, and easy to navigate.',
    technologies: ['UI/UX', 'Roblox UI', 'Design Systems', 'Visual Prototyping'],
    features: ['Clear hierarchy', 'Readability-first UI', 'Premium visual tone', 'Flexible layout'],
    image: gradients.projects.violet,
    repoUrl: '#',
    demoUrl: '#',
    accent: 'violet',
  },
]
