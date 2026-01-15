import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Projects from './Projects'

describe('Projects', () => {
  it('renders projects section', () => {
    render(<Projects />)

    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
  })

  it('displays projects title', () => {
    render(<Projects />)

    expect(screen.getByText('My Projects')).toBeInTheDocument()
  })

  it('renders all project cards', () => {
    render(<Projects />)

    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Task Management App')).toBeInTheDocument()
    expect(screen.getByText('Portfolio Website')).toBeInTheDocument()
  })

  it('renders project descriptions', () => {
    render(<Projects />)

    expect(
      screen.getByText(/A full-stack e-commerce solution/)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/A collaborative task management application/)
    ).toBeInTheDocument()
  })

  it('renders project tags', () => {
    render(<Projects />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('MongoDB')).toBeInTheDocument()
    expect(screen.getByText('Vue.js')).toBeInTheDocument()
    expect(screen.getByText('Firebase')).toBeInTheDocument()
  })
})
