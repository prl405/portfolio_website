import '../sections.css'
import './About.css'
import Card from '../Card'

const aboutCards = [
  {
    title: 'Web Development',
    description: 'Creating responsive and performant web applications',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive user interfaces',
  },
  {
    title: 'Problem Solving',
    description: 'Finding creative solutions to complex problems',
  },
]

export default function About() {
  return (
    <section className="content-section active" id="about" data-testid="about-section">
      <h1>About Me</h1>
      <div className="about-content">
        <p>I'm a full-stack developer with 5+ years of experience in web development. I specialize in creating responsive, user-friendly applications using modern technologies.</p>
        <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the great outdoors.</p>
        <div className="about-grid">
          {aboutCards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
