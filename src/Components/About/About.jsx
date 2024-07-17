import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='container-fluid about' id='about'>
      <h2 className='hiding'>About Me</h2>
      <div className="row">
        <div className="col-2">
        <hr className="" style={{ backgroundColor: '#cdb970', height: '3px'}} />
        </div>
        <div className="col-10 ">
        <p className='content'>I am passionate about web development and technology, with a focus on creating intuitive and impactful digital experiences. As a frontend developer, I specialize in using technologies like HTML, CSS, JavaScript, and React to build responsive and visually appealing interfaces. With a keen eye for design and a knack for problem-solving, I enjoy transforming ideas into functional and user-friendly websites and applications. I am committed to continuous learning, staying updated with industry trends, and collaborating with teams to deliver high-quality solutions that meet both user needs and business objectives. Outside of coding, I enjoy exploring new cuisines, playing guitar, and seeking inspiration from art and nature.</p>
        </div>
      </div>
      <h2 className='hiding'>Education</h2>
      <div className='edu-content'>
      <h4 >University of Engineering And Technology, Lahore</h4>
      <div className="row">
      <p className='col-6 '>
        Bachelors in Computer Sciences
      </p>
      <span className='col-6 d-flex justify-content-end pe-5'>2021-Present</span>
      </div>
      </div>
      <div className='edu-content'>
      <h4 >Lahore College For Women University, Lahore</h4>
      <div className="row">
      <p className='col-6 pb-3'>
        Intermediate in Computer Sciences
      </p>
      <span className='col-6 d-flex justify-content-end pe-5'>2018-2020</span>

      </div>
      </div>
  
      </div>
    
  )
}

export default About;
