import type { SectionType } from '../types'
import './NavigationMenu.css'

interface NavigationMenuProps {
  activeSection: SectionType
  onSectionChange: (section: SectionType) => void
}

const sections: { id: SectionType; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function NavigationMenu({ activeSection, onSectionChange }: NavigationMenuProps) {
  return (
    <nav className="sidebar-nav" data-testid="navigation-menu">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href="#"
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                onSectionChange(section.id)
              }}
              data-testid={`nav-link-${section.id}`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
