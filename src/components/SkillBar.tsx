import './SkillBar.css'

interface SkillBarProps {
  name: string
  proficiency: number
}

export default function SkillBar({ name, proficiency }: SkillBarProps) {
  return (
    <div className="skill-item" data-testid={`skill-item-${name}`}>
      <span>{name}</span>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${proficiency}%` }}
          data-testid={`skill-progress-${name}`}
        />
      </div>
    </div>
  )
}
