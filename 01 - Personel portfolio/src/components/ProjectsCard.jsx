import BigProjectCard from "./BigProjectCard"
import SmallProjectCard from "./SmallProjectCard"
import { smallProjectData } from "../../projectsData"
import { bigProjectData } from '../../projectsData';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from 'react';

const ProjectsCard = () => {

const [bigData, setBigData] = useState(bigProjectData);
const [bigNumber, setBigNumber] = useState(0);
const [smallData, setSmallData] = useState(smallProjectData);
const [smallNumber, setSmallNumber] = useState(0);

const paginate = (page, data) => {
  const itemsPerPage = page;
  const numberOfPages = Math.ceil(data.length / itemsPerPage)

  const newData = Array.from({ length: numberOfPages }, (_, index) => {
  
    const start = index * itemsPerPage
    return data.slice(start, start + itemsPerPage)
  })

  return newData;
}

const newBigProjectData = paginate(2, bigData);
const finalNewBigProjectData = newBigProjectData[bigNumber];

const NewSmallProjectData = paginate(2, smallData);
const finalNewSmallProjectData = NewSmallProjectData[smallNumber];

const handleBigSetData = (e) => {
const dataSetId = parseInt(e.target.dataset.id);
setBigNumber(dataSetId);
}


// big project btn
const prevBigPBtn = () => {
  
  if (0 < bigNumber) {
    setBigNumber(prev => prev - 1)
  } 
  else if (0 === bigNumber) {
    setBigNumber(finalNewBigProjectData.length - 1)
  }
 
 }

 const nextBigPBtn = () => {
  
  if (finalNewBigProjectData.length - 1 > bigNumber) {
    setBigNumber(prev => prev + 1)
  } 
  else if (finalNewBigProjectData.length - 1 === bigNumber) {
    setBigNumber(0)
  }
 }

 // small project btn
 const prevSmallPBtn = () => {
  
  if (0 < smallNumber) {
    setSmallNumber(prev => prev - 1)
  } 
  else if (0 === smallNumber) {
    setSmallNumber(finalNewSmallProjectData.length - 1)
  }
 
 }

 const nextSmallPBtn = () => {
  
  if (finalNewSmallProjectData.length - 1 > smallNumber) {
    setSmallNumber(prev => prev + 1)
  } 
  else if (finalNewSmallProjectData.length - 1 === smallNumber) {
    setSmallNumber(0)
  }
 }

const handleSmallSetData = (e) => {
  const dataSetId = parseInt(e.target.dataset.id); 
  setSmallNumber(dataSetId)
}

console.log(finalNewBigProjectData, finalNewSmallProjectData);

  return (
    <div className="project-cards">
      <div className="big-project-cards-container">
      <p className="big-project-heading">big projects</p>
      <hr className="project-card-underline"/>
        <div className="big-project-container">

          {finalNewBigProjectData.map((bigData, index) =>  <BigProjectCard 
          key={bigData.id} 
          {...bigData}
          index = {index}
          />)}

        </div> 

        <div className="big-project-btn-container">

        <button className='left-arrow-project-btn' 
          onClick={prevBigPBtn}>
          <FaAngleLeft />
          </button>

          {
            finalNewBigProjectData.map((_, index) =>
            <button 
            className= {`btn-project ${index === bigNumber? 'active-project-btn' : 'null'}`} 
            key={index}
            data-id = {index}
            onClick={handleBigSetData}
            >
              {index + 1}
            </button>)
          }

        <button 
          className='right-arrow-project-btn'
          onClick={nextBigPBtn}
          >
          <FaAngleRight />
        </button>
        </div>
      </div>
      
        
      <div className="small-project-cards-container">
      <p className="small-project-heading">small projects</p>
      <hr className="project-card-underline"/>
          <div className="small-project-container">
          {finalNewSmallProjectData.map((smallData, index) =>  <SmallProjectCard 
          key={smallData.id} 
              {...smallData}
              index = {index}
          />)}
          </div>
      </div>

      <div className="small-project-btn-container">
    <button className='left-arrow-project-btn' 
          onClick={prevSmallPBtn}>
          <FaAngleLeft />
          </button>

      {
            finalNewSmallProjectData.map((_, index) =>
            <button 
            className= {`btn-project ${index === smallNumber? 'active-project-btn' : 'null'}`} 
            key={index}
            data-id = {index}
            onClick={handleSmallSetData}
            >
              {index + 1}
            </button>)
          }

<button 
          className='right-arrow-project-btn'
          onClick={nextSmallPBtn}
          >
          <FaAngleRight />
        </button>
      </div>
    </div>
  )
}

export default ProjectsCard
