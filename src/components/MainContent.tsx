import type { SectionType } from '../types'
import './MainContent.css'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

interface MainContentProps {
  activeSection: SectionType
}

export default function MainContent({ activeSection }: MainContentProps) {
  return (
    <main className="main-content" data-testid="main-content">
      {activeSection === 'home' && <Home />}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'contact' && <Contact />}
    </main>
  )
}
