import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders card with title and description', () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
      />
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Card
        title="Test"
        description="Description"
        className="custom-class"
      />
    )

    expect(screen.getByTestId('card')).toHaveClass('custom-class')
  })

  it('always has card class', () => {
    render(
      <Card
        title="Test"
        description="Description"
      />
    )

    expect(screen.getByTestId('card')).toHaveClass('card')
  })
})
