import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import heroSvg from '../assets/hero.svg'
import resume from '../assets/keerti_shakya_latest.pdf'

const Heros = () => {
  return (
    <div className='heros-section'>
      <div className="intro-container">

        <article className='introduction'>
          <h1 className='name'>i'm keerti kumar shakya</h1>
          <h2 className="occupation">Front-End Developer</h2>
          <p className='motto'>I design and code beautifully simple things, and I love what I do. "Every great developer you know got there by solving problems they were unqualified to solve until they did it." Patrick McKenzie. This quote inspires me to push every day and try every aspect to achieve the hardest designs.</p>

      <div className="contact-social-link">

         <a target='_blank' href="https://github.com/Keerti-kumar-shakya">
         <FaGithubSquare className='github-btn'/>
         </a>

         <a target='_blank' href="https://www.linkedin.com/in/keerti-kumar-shakya-789a75114/">
         <FaLinkedin className='linkedin-btn'/>
         </a>
        
       </div>
       <a className='btn-resume-link' href={resume} target="_blank" rel="noopener noreferrer">
       <button className='btn-resume-heros'>resume</button>
       </a>
       
        </article>

        <article className='img-section'>
          <img className='image-heroSvg' src= {heroSvg} />
        </article>

      </div>
    </div>
  )
}

export default Heros
