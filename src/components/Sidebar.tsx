import type { SectionType } from '../types'
import './Sidebar.css'
import ProfileHeader from './ProfileHeader'
import NavigationMenu from './NavigationMenu'
import SocialLinks from './SocialLinks'

interface SidebarProps {
  activeSection: SectionType
  onSectionChange: (section: SectionType) => void
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="sidebar" data-testid="sidebar">
      <ProfileHeader />
      <NavigationMenu activeSection={activeSection} onSectionChange={onSectionChange} />
      <SocialLinks />
    </aside>
  )
}
