import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from './Button'
import { vi } from 'vitest'

describe('Button', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('applies correct variant classes', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-primary')

    rerender(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('btn-secondary')
  })

  it('calls onClick handler when clicked', () => {
    const mockClick = vi.fn()
    render(<Button onClick={mockClick}>Click</Button>)

    screen.getByRole('button').click()
    expect(mockClick).toHaveBeenCalled()
  })

  it('handles submit type correctly', () => {
    render(<Button type="submit">Submit</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('does not call onClick when disabled', () => {
    const mockClick = vi.fn()
    render(
      <Button onClick={mockClick} disabled>
        Disabled
      </Button>
    )

    screen.getByRole('button').click()
    expect(mockClick).not.toHaveBeenCalled()
  })
})
