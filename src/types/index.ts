export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
}

export interface Skill {
  name: string
  proficiency: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export type SectionType = 'home' | 'about' | 'projects' | 'skills' | 'contact'
