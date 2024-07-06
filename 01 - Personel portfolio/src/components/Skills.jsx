import SkillsCard from "./SkillsCard"
import { skills } from "../../data"

import { useState } from "react"


const Skills = ({text}) => {
const [data, setData] = useState(0)

const paginate = () => {
  const itemsPerPage = 3
  const numberOfPages = Math.ceil(skills.length / itemsPerPage)

  const newSkill = Array.from({ length: numberOfPages }, (_, index) => {
  
    const start = index * itemsPerPage
    return skills.slice(start, start + itemsPerPage)
  })

  return newSkill;
}

const newData = paginate();
 const finalData = newData[data];

 const handleOnClick = (e) => {

  const setNewData = e.target.dataset.index;
  
  // document.querySelector('.active-btn')?.classList.remove('active-btn');
  // e.target.classList.add('active-btn');

 setData(setNewData)

 }

//const matchingResult = handleOnClick()

  return (
    
    <div className="skill-section" id="skills">
      <p className="skill-heading">{text}</p>
      <hr />
      <div className="skillsCard-container">
        {finalData.map((skill) => {
       
          return <SkillsCard key={skill.id} {...skill}/>
        })}
         
      </div> 

      <div className="btn-paginate-container">
        {newData.map((_, index) => {
          
          return <button 
          key={index} 
          className= {`btn-skill ${data === index? 'active-btn' : 'null'}`}
          onClick={handleOnClick}
          data-index = {index}
          
          >{index + 1}</button>
        })}
       </div> 

    </div>
  )
}

export default Skills
