import { FaGithubSquare} from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { bigProjectData } from '../../projectsData';
import { useState } from 'react';

const BigProjectCard = ({img, projectNumber, techUsed, desc, url, github, projectName,index}) => {
  const [data, setData] = useState(bigProjectData);
  const [readMore, setReadMore] = useState(false);
  
  return (
    <div className="big-project-card">
      <img className='project-image' src= {img} alt="" />

      <div className="project-desc-container">
        <div className="project-number">{projectNumber}</div>
        <p className="project-name"><span>Project name:</span> {projectName}</p>
        <h5 className="technology-used"><span>Technologies used: </span>{techUsed}</h5>
        
        <p  className="project-details"><span>Project description:</span>
        {readMore? desc : `${desc.substring(0,150)}...`}
        <button className='info-btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
       
     
      <div className="project-links-host-container">
        <a href= {url} target="_blank" rel="noopener noreferrer">
          <TbWorldWww className='host-website'/>
        </a>

        <a href= {github} target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className='github-code-base'/>
        </a>
      </div>
    </div>
    </div>
  )
}

export default BigProjectCard
