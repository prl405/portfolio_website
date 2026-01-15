import '../sections.css'
import './Projects.css'
import ProjectCard from '../ProjectCard'

const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard',
    image: 'https://via.placeholder.com/300x200',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://via.placeholder.com/300x200',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing my work and skills',
    image: 'https://via.placeholder.com/300x200',
    tags: ['HTML', 'CSS', 'jQuery'],
  },
]

export default function Projects() {
  return (
    <section className="content-section active" id="projects" data-testid="projects-section">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
