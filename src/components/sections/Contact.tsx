import { useState } from 'react'
import '../sections.css'
import './Contact.css'
import Button from '../Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } else {
      alert('Please fill in all fields.')
    }
  }

  return (
    <section className="content-section active" id="contact" data-testid="contact-section">
      <h1>Get In Touch</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's connect!</h2>
          <p>I'm always interested in hearing about new projects and opportunities.</p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="label">Email:</span>
              <span className="value">john@example.com</span>
            </div>
            <div className="contact-item">
              <span className="label">Phone:</span>
              <span className="value">+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="label">Location:</span>
              <span className="value">San Francisco, CA</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} data-testid="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              data-testid="form-input-name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              data-testid="form-input-email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              data-testid="form-textarea-message"
              required
            />
          </div>
          <Button type="submit" variant="primary">
            Send Message
          </Button>
          {submitted && <div className="success-message" data-testid="success-message">Thank you! I'll get back to you soon.</div>}
        </form>
      </div>
    </section>
  )
}
