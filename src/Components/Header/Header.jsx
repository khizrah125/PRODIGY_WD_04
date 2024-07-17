import React from 'react'
import './Header.css'
import hero from '../../assets/hero.png'


const Header = () => {
  return (
    <div className='container-fluid '>
        <div className="row">
            <div className="col-6">
                <h1 className='my-name'>
                    I'm Khizra Naseem
                </h1>
                <h3 className='intro'>
                    Front-End-Developer | React Developer
                </h3>
                <button className='btn contact-btn'>Contact Me</button>
            </div>
            <div className="col-6">
                <img  className="my-img img-fluid" src={hero} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Header
