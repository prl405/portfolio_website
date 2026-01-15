import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SkillBar from './SkillBar'

describe('SkillBar', () => {
  it('renders skill item with name', () => {
    render(<SkillBar name="React" proficiency={85} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByTestId('skill-item-React')).toBeInTheDocument()
  })

  it('sets progress width based on proficiency', () => {
    render(<SkillBar name="JavaScript" proficiency={90} />)

    const progress = screen.getByTestId('skill-progress-JavaScript')
    expect(progress).toHaveStyle({ width: '90%' })
  })

  it('handles different proficiency levels', () => {
    const { rerender } = render(
      <SkillBar name="Python" proficiency={50} />
    )

    let progress = screen.getByTestId('skill-progress-Python')
    expect(progress).toHaveStyle({ width: '50%' })

    rerender(<SkillBar name="Python" proficiency={100} />)
    progress = screen.getByTestId('skill-progress-Python')
    expect(progress).toHaveStyle({ width: '100%' })
  })

  it('handles zero proficiency', () => {
    render(<SkillBar name="Rust" proficiency={0} />)

    const progress = screen.getByTestId('skill-progress-Rust')
    expect(progress).toHaveStyle({ width: '0%' })
  })
})
