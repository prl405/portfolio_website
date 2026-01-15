import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders about section', () => {
    render(<About />)

    expect(screen.getByTestId('about-section')).toBeInTheDocument()
  })

  it('displays about title', () => {
    render(<About />)

    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('displays about content paragraphs', () => {
    render(<About />)

    expect(
      screen.getByText(/I'm a full-stack developer with 5\+ years of experience/)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/When I'm not coding, you can find me/)
    ).toBeInTheDocument()
  })

  it('renders about cards', () => {
    render(<About />)

    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getByText('Problem Solving')).toBeInTheDocument()
  })

  it('renders card descriptions', () => {
    render(<About />)

    expect(
      screen.getByText('Creating responsive and performant web applications')
    ).toBeInTheDocument()
    expect(screen.getByText('Designing intuitive user interfaces')).toBeInTheDocument()
    expect(
      screen.getByText('Finding creative solutions to complex problems')
    ).toBeInTheDocument()
  })
})
