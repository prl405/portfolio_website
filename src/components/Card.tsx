import './Card.css'

interface CardProps {
  title: string
  description: string
  className?: string
}

export default function Card({ title, description, className = '' }: CardProps) {
  return (
    <div className={`card ${className}`} data-testid="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
