import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import NavigationMenu from './NavigationMenu'

describe('NavigationMenu', () => {
  it('renders navigation menu with all sections', () => {
    const mockOnSectionChange = vi.fn()
    render(
      <NavigationMenu activeSection="home" onSectionChange={mockOnSectionChange} />
    )

    expect(screen.getByTestId('navigation-menu')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('highlights the active section', () => {
    const mockOnSectionChange = vi.fn()
    const { rerender } = render(
      <NavigationMenu activeSection="home" onSectionChange={mockOnSectionChange} />
    )

    expect(screen.getByTestId('nav-link-home')).toHaveClass('active')
    expect(screen.getByTestId('nav-link-about')).not.toHaveClass('active')

    rerender(
      <NavigationMenu activeSection="about" onSectionChange={mockOnSectionChange} />
    )

    expect(screen.getByTestId('nav-link-home')).not.toHaveClass('active')
    expect(screen.getByTestId('nav-link-about')).toHaveClass('active')
  })

  it('calls onSectionChange when a link is clicked', () => {
    const mockOnSectionChange = vi.fn()
    render(
      <NavigationMenu activeSection="home" onSectionChange={mockOnSectionChange} />
    )

    fireEvent.click(screen.getByTestId('nav-link-projects'))
    expect(mockOnSectionChange).toHaveBeenCalledWith('projects')

    fireEvent.click(screen.getByTestId('nav-link-contact'))
    expect(mockOnSectionChange).toHaveBeenCalledWith('contact')
  })

  it('prevents default link behavior', () => {
    const mockOnSectionChange = vi.fn()
    render(
      <NavigationMenu activeSection="home" onSectionChange={mockOnSectionChange} />
    )

    const link = screen.getByTestId('nav-link-about') as HTMLAnchorElement
    fireEvent.click(link)
    expect(mockOnSectionChange).toHaveBeenCalledWith('about')
    expect(link.getAttribute('href')).toBe('#')
  })
})
