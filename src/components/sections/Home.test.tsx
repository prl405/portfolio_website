import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home', () => {
  it('renders home section', () => {
    render(<Home />)

    expect(screen.getByTestId('home-section')).toBeInTheDocument()
  })

  it('displays welcome title', () => {
    render(<Home />)

    expect(screen.getByText('Welcome to My Portfolio')).toBeInTheDocument()
  })

  it('displays subtitle', () => {
    render(<Home />)

    expect(
      screen.getByText(
        "I'm a passionate developer crafting beautiful and functional digital experiences"
      )
    ).toBeInTheDocument()
  })

  it('renders Get Started button', () => {
    render(<Home />)

    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument()
  })
})
