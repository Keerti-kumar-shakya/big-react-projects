import { useEffect, useState } from 'react'
import personalImg from '../assets/keerti-image-2.jpg'
import { aboutData } from '../../data'
import Education from './Education'
import { nanoid } from 'nanoid'
import Achievement from './Achievement';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const About = () => {
 const [data, setData] = useState(aboutData);
const [matchingData, setMatchingData] = useState(0);
const [aboutParaText, setAboutParaText] = useState(0)
//const currentAboutText = JSON.stringify(data[1][0].aboutText)

const about = 0;
const education = 1;
const achievement = 2;



 const displayData = (e) => {

  const datasetId = parseInt(e.target.dataset.id);
  console.log(datasetId);
  setMatchingData(datasetId)
 }


 const prevBtn = () => {
  
  if (0 < aboutParaText) {
    setAboutParaText(prev => prev - 1)
  }

  if (0 === aboutParaText) {
    setAboutParaText(data[1].length - 1)
  }
 
 }

 const nextBtn = () => {
  
  if (data[1].length - 1 > aboutParaText) {
    setAboutParaText(prev => prev + 1)
  }
  if (data[1].length - 1 === aboutParaText) {
    setAboutParaText(0)
  }
 }

 useEffect(() => {
  let sliderId = setInterval(() => {
    nextBtn();
  }, 5000);
  return () => {
    clearInterval(sliderId);
  };
}, [aboutParaText]);


  return (
    <div className='about-section' id='about'>

      <div className="about-inner-section-container">
      <article className="personal-image">
        <img src= {personalImg} alt="" />
      </article>

      <article className="about-myself">

        <div className="btn-about-main-container">

        {data[0].map((texts, index) =>{ 
          const id = nanoid();
        return <button 
        className= {`btn-about-main ${matchingData === index ? 'active-about-main': 'null'}`}
        key={id} 
        data-id = {index} 
        onClick={displayData}
        >
          {texts.AboutBtnText}
          </button>})}   
        </div>
            <hr />

       {matchingData === about && <><div className="about-container">

          <div className='about-inner-container'>
          
          {
          
          data[1].filter((value) =>value.id === aboutParaText).map((text) => <p key={text.id} className='about-my-self'>{text.aboutText}</p>)
           
          }
         
       </div>
       <div className="btn-about-container">

       <button className='left-arrow-btn' 
          onClick={prevBtn}>
          <FaAngleLeft />
          </button>
        
        {
          data[1].map((_, index) => <button 
          className= {`btn-about ${index === aboutParaText? 'active-btn-about' : 'null'}`} 
          key={index}
          >
            {index + 1}
            </button>)
        }

         <button 
          className='right-arrow-btn'
          onClick={nextBtn}
          >
          <FaAngleRight />
          </button>
       </div>
      </div>
       </>
       }
       {
        matchingData === education && <Education/>
       }

       {
         matchingData === achievement && <Achievement/>
       }
      </article>
      </div>
    </div>
  )
}

export default About
