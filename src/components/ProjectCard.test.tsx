import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProjectCard from './ProjectCard'

describe('ProjectCard', () => {
  const mockProject = {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution',
    image: 'https://via.placeholder.com/300x200',
    tags: ['React', 'Node.js', 'MongoDB'],
  }

  it('renders project card with title and description', () => {
    render(<ProjectCard {...mockProject} />)

    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
    expect(
      screen.getByText('A full-stack e-commerce solution')
    ).toBeInTheDocument()
    expect(screen.getByTestId('project-card-1')).toBeInTheDocument()
  })

  it('renders project image', () => {
    render(<ProjectCard {...mockProject} />)

    const image = screen.getByAltText('E-Commerce Platform')
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/300x200')
  })

  it('renders all project tags', () => {
    render(<ProjectCard {...mockProject} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('MongoDB')).toBeInTheDocument()
  })

  it('handles empty tags array', () => {
    const projectNoTags = { ...mockProject, tags: [] }
    render(<ProjectCard {...projectNoTags} />)

    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
  })

  it('handles different project IDs', () => {
    const project2 = { ...mockProject, id: '2' }
    render(<ProjectCard {...project2} />)

    expect(screen.getByTestId('project-card-2')).toBeInTheDocument()
  })
})
