
const SkillsCard = ({title, icon, text}) => {
  return (
    <article className="skills-card">
      <span className="tech-img">{icon}</span>
       <h3 className="technology-name">{title}</h3>
       <p className="desc-skill-card">{text}</p>
    </article>
  )
}

export default SkillsCard
