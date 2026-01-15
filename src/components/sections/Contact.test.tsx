import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
  it('renders contact section with form', () => {
    render(<Contact />)

    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
  })

  it('renders contact form inputs', () => {
    render(<Contact />)

    expect(screen.getByTestId('form-input-name')).toBeInTheDocument()
    expect(screen.getByTestId('form-input-email')).toBeInTheDocument()
    expect(screen.getByTestId('form-textarea-message')).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<Contact />)

    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument()
  })

  it('updates form fields when user types', () => {
    render(<Contact />)

    const nameInput = screen.getByTestId('form-input-name') as HTMLInputElement
    const emailInput = screen.getByTestId('form-input-email') as HTMLInputElement
    const messageInput = screen.getByTestId('form-textarea-message') as HTMLTextAreaElement

    nameInput.value = 'John'
    nameInput.dispatchEvent(new Event('change', { bubbles: true }))

    emailInput.value = 'john@example.com'
    emailInput.dispatchEvent(new Event('change', { bubbles: true }))

    messageInput.value = 'Hello'
    messageInput.dispatchEvent(new Event('change', { bubbles: true }))

    expect(nameInput.value).toBe('John')
    expect(emailInput.value).toBe('john@example.com')
    expect(messageInput.value).toBe('Hello')
  })

  it('shows success message on form submission', async () => {
    render(<Contact />)

    const nameInput = screen.getByTestId('form-input-name') as HTMLInputElement
    const emailInput = screen.getByTestId('form-input-email') as HTMLInputElement
    const messageInput = screen.getByTestId('form-textarea-message') as HTMLTextAreaElement
    const submitButton = screen.getByRole('button', { name: /send message/i })

    fireEvent.change(nameInput, { target: { value: 'John' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hello' } })

    fireEvent.click(submitButton)

    expect(screen.getByTestId('success-message')).toBeInTheDocument()
    expect(screen.getByText("Thank you! I'll get back to you soon.")).toBeInTheDocument()
  })

  it('clears form after successful submission', async () => {
    render(<Contact />)

    const nameInput = screen.getByTestId('form-input-name') as HTMLInputElement
    const emailInput = screen.getByTestId('form-input-email') as HTMLInputElement
    const messageInput = screen.getByTestId('form-textarea-message') as HTMLTextAreaElement
    const submitButton = screen.getByRole('button', { name: /send message/i })

    fireEvent.change(nameInput, { target: { value: 'John' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hello' } })

    fireEvent.click(submitButton)

    expect(nameInput.value).toBe('')
    expect(emailInput.value).toBe('')
    expect(messageInput.value).toBe('')
  })
})
