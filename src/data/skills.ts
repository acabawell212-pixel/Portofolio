export type SkillCategory = {
  title: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Development',
    items: ['TypeScript', 'JavaScript', 'React', 'Luau', 'Roblox', 'Git'],
  },
  {
    title: 'Design',
    items: ['UI/UX', 'Motion Design', 'Visual Systems', 'Prototyping'],
  },
  {
    title: 'Tools',
    items: ['VS Code', 'Figma', 'Blender', 'GitHub'],
  },
]
