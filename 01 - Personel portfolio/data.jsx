import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaBootstrap  } from 'react-icons/fa';
import { TbBrandTailwind, TbBrandRedux } from "react-icons/tb";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='react-skill-icon' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='react-skill-icon' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='react-skill-icon' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'redux',
    icon: <TbBrandRedux className='react-skill-icon' />,
    text: `I have a decent understanding of Redux, including its core concepts such as actions, reducers, and the store. Additionally, I'm familiar with advanced Redux concepts like middleware, specifically Redux Thunk, which enables asynchronous actions in Redux.`,
  },

  {
    id: nanoid(),
    title: 'tailwind css',
    icon: <TbBrandTailwind className='react-skill-icon' />,
    text: 'I know the fundamentals of Tailwind CSS and am also aware of its utility-first approach, which simplifies styling by providing a vast array of utility classes.',
  },
  {
    id: nanoid(),
    title: 'bootstrap',
    icon: <FaBootstrap className='react-skill-icon' />,
    text: `I have a decent knowledge of Bootstrap, including its grid system, components, and utility classes. I understand how to leverage Bootstrap's pre-designed elements to quickly create responsive and visually appealing web interfaces`,
  },

  
];

export const aboutData = [
 //about btn
    [
      {AboutBtnText: 'about'},
    {AboutBtnText: 'education'},
    {AboutBtnText: 'achievement'}
  ],
// about text
 [
  { id: 0,
    aboutText: `Hello! I'm Keerti kumar shakya, a passionate web developer dedicated to crafting exceptional digital experiences.`
  },
  
  {  id: 1,
    aboutText: `I am a fresher right now, but I am eager to contribute my skills to companies and want to enhance my skills by working on challenging projects.` 
  },

  {  id: 2,
    aboutText: `My skill set includes proficiency in HTML5, CSS3, JavaScript (ES6+), frameworks like react.js, and other relevant skills like Git incorporating which I have built dynamic and interactive web applications.`  
  },

  {  id: 3,
    aboutText: `I am deeply passionate about translating innovative ideas into functional and visually appealing websites. My goal is to create seamless user experiences that leave a lasting impression.`
  },

  {   id: 4,
    aboutText: `I take pride in my work on projects like YouTube clones, portfolios, e-commerce websites, and other capstone projects where I successfully overcame the challenges through constant practice. These experiences have honed my ability to strengthen my web developer skills.`
  },

  {  id: 5,
    aboutText: `I am dedicated to staying at the forefront of web development trends. Constantly exploring new technologies and methodologies, I strive to bring the latest and best practices to every project.`
  },

  {  id: 6,
    aboutText: `I thrive in collaborative environments, valuing open communication and teamwork. I believe that successful projects are built on strong collaboration and a shared commitment to excellence.`
  },

  {  id: 7,
    aboutText: `Beyond coding, I enjoy exploring the intersection of technology and art. I firmly believe that creativity fuels innovation, and I bring this philosophy into both my work and daily life. Whether I'm crafting a sleek user interface or experimenting with a new painting technique, I find that embracing creativity enhances my problem-solving skills and brings a unique perspective to everything I do.`
  }

 ],

 {

 },

 {
  eduBtn:[
    {
     id: 0,
     eduBtnText: 'post graduation'
    },
    {
      id: 1,
      eduBtnText: 'graduation'
     },
     {
      id: 2,
      eduBtnText: 'senior secondary'
     },
     {
      id: 3,
      eduBtnText: 'high school'
     }
    
  ]
,
  education: [
    { id:0,
      subject: 'human resource & administration',
      year: '2014 - 2016',
      mark: '67%',
      Division: 'First'
    },

    { id:1,
      subject: 'bachelor of commerce',
      year: '2011 - 2014',
      mark: '54%',
      Division: 'Second'
    },

    { id:2,
      subject: 'commerce',
      year: '2009 - 2011',
      mark: '55%',
      Division: 'Second'
    },

    {id:3,
      subject: 'general high school',
      year: '2009',
      mark: '55%',
      Division: 'First'

    }

  ]
 }
]



