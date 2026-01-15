import type { Project } from '../types'
import './ProjectCard.css'

export default function ProjectCard({ id, title, description, image, tags }: Project) {
  return (
    <div className="project-card" data-testid={`project-card-${id}`}>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
