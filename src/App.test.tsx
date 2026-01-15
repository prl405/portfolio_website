import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the app container', () => {
    render(<App />)
    expect(screen.getByTestId('main-content')).toBeInTheDocument()
  })

  it('renders sidebar and main content', () => {
    render(<App />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('main-content')).toBeInTheDocument()
  })

  it('displays home section initially', () => {
    render(<App />)

    expect(screen.getByTestId('home-section')).toBeInTheDocument()
    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument()
  })

  it('navigates between sections when links are clicked', () => {
    render(<App />)

    expect(screen.getByTestId('home-section')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('nav-link-about'))
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.queryByTestId('home-section')).not.toBeInTheDocument()

    fireEvent.click(screen.getByTestId('nav-link-projects'))
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.queryByTestId('about-section')).not.toBeInTheDocument()
  })

  it('highlights active navigation link', () => {
    render(<App />)

    expect(screen.getByTestId('nav-link-home')).toHaveClass('active')

    fireEvent.click(screen.getByTestId('nav-link-skills'))
    expect(screen.getByTestId('nav-link-home')).not.toHaveClass('active')
    expect(screen.getByTestId('nav-link-skills')).toHaveClass('active')
  })

  it('navigates through all sections', () => {
    render(<App />)

    const sections = ['home', 'about', 'projects', 'skills', 'contact']

    sections.forEach((section) => {
      fireEvent.click(screen.getByTestId(`nav-link-${section}`))
      expect(screen.getByTestId(`${section}-section`)).toBeInTheDocument()
    })
  })
})
