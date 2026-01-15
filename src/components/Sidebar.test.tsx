import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Sidebar from './Sidebar'
import { vi } from 'vitest'

describe('Sidebar', () => {
  it('renders sidebar with all components', () => {
    const mockOnSectionChange = vi.fn()
    render(
      <Sidebar activeSection="home" onSectionChange={mockOnSectionChange} />
    )

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('navigation-menu')).toBeInTheDocument()
    expect(screen.getByTestId('social-links')).toBeInTheDocument()
  })

  it('passes activeSection to NavigationMenu', () => {
    const mockOnSectionChange = vi.fn()
    render(
      <Sidebar activeSection="projects" onSectionChange={mockOnSectionChange} />
    )

    expect(screen.getByTestId('nav-link-projects')).toHaveClass('active')
  })

  it('calls onSectionChange when navigation link is clicked', () => {
    const mockOnSectionChange = vi.fn()
    render(
      <Sidebar activeSection="home" onSectionChange={mockOnSectionChange} />
    )

    const aboutLink = screen.getByTestId('nav-link-about')
    aboutLink.click()

    expect(mockOnSectionChange).toHaveBeenCalledWith('about')
  })
})
