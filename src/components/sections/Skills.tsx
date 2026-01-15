import '../sections.css'
import './Skills.css'
import SkillBar from '../SkillBar'

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML/CSS', proficiency: 95 },
      { name: 'JavaScript/jQuery', proficiency: 90 },
      { name: 'React', proficiency: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', proficiency: 88 },
      { name: 'Python', proficiency: 80 },
      { name: 'Database Design', proficiency: 85 },
    ],
  },
  {
    category: 'Tools & Others',
    skills: [
      { name: 'Git/GitHub', proficiency: 92 },
      { name: 'Docker', proficiency: 75 },
      { name: 'UI/UX Design', proficiency: 82 },
    ],
  },
]

export default function Skills() {
  return (
    <section className="content-section active" id="skills" data-testid="skills-section">
      <h1>My Skills</h1>
      <div className="skills-container">
        {skillCategories.map((category) => (
          <div key={category.category} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skill-list">
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
