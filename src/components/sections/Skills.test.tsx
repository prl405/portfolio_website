import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  it('renders skills section', () => {
    render(<Skills />)

    expect(screen.getByTestId('skills-section')).toBeInTheDocument()
  })

  it('displays skills title', () => {
    render(<Skills />)

    expect(screen.getByText('My Skills')).toBeInTheDocument()
  })

  it('renders skill categories', () => {
    render(<Skills />)

    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('Tools & Others')).toBeInTheDocument()
  })

  it('renders all skills', () => {
    render(<Skills />)

    expect(screen.getByText('HTML/CSS')).toBeInTheDocument()
    expect(screen.getByText('JavaScript/jQuery')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('Git/GitHub')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
  })

  it('renders skill progress bars with correct proficiency', () => {
    render(<Skills />)

    const htmlProgress = screen.getByTestId('skill-progress-HTML/CSS')
    expect(htmlProgress).toHaveStyle({ width: '95%' })

    const reactProgress = screen.getByTestId('skill-progress-React')
    expect(reactProgress).toHaveStyle({ width: '85%' })

    const dockerProgress = screen.getByTestId('skill-progress-Docker')
    expect(dockerProgress).toHaveStyle({ width: '75%' })
  })
})
