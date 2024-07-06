 import { useState } from "react"
import { aboutData } from "../../data"
import { FaRegCalendarAlt } from "react-icons/fa";
const Education = () => {
  const [data, setData] = useState(aboutData);
  const [active, setActive] = useState(0)

  const handleActiveState = (e) => {
  const dataSetId = parseInt(e.target.dataset.id);
   console.log(dataSetId);
   setActive(dataSetId)

  }


  return (
    <div className="education-container">
     <div className="edu-btn-container">
        {
        data[3].eduBtn.map((text, index) => 
        <button 
        className= {`education-btn ${index === active? 'active-education': 'null'}`}
        key={text.id}
        data-id = {index}
        onClick={handleActiveState}
        >
          {text.eduBtnText}
          </button> )
        }
     </div>
      
      <div className="display-academics-card" >

        {
          data[3].education.filter((value)=> value.id === active).map((text, index) => {

            return(<div className="education-card-container" key={text.id}>
            
            <div className="education-card">
        <FaRegCalendarAlt className="calender-img"/>
        <div className="year-edu">{text.year}</div>
       </div>

        <div className="education-card">
          <div className="subject">subject</div>
          <div className="subject-in">{text.subject}</div>
        </div>

        <div className="education-card">
          <div className="marks">marks obtained</div>
          <div className="marks-in-sub">{text.mark}</div>
        </div>

        <div className="education-card">
          <div className="division">division</div>
          <div className="division-obtained">{text.Division}</div>
        </div>
            </div>
              
            )
          })
        }
    

      </div>
    </div>
  )
}

export default Education
