import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import type { SectionType } from './types'

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home')

  return (
    <div className="app-container">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <MainContent activeSection={activeSection} />
    </div>
  )
}

export default App
