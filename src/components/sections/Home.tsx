import '../sections.css'
import './Home.css'
import Button from '../Button'

export default function Home() {
  const handleCTAClick = () => {
    // This will trigger navigation to projects - handled by parent
    window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 'projects' }))
  }

  return (
    <section className="content-section active" id="home" data-testid="home-section">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a passionate developer crafting beautiful and functional digital experiences</p>
        <Button onClick={handleCTAClick} variant="primary">
          Get Started
        </Button>
      </div>
    </section>
  )
}
