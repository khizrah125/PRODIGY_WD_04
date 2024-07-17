import React from 'react'
import './Contact.css'
import mail from '../../assets/mail-logo.png'
import linkedin from '../../assets/linkedin.png'
import copyright from '../../assets/copyright.png'

const Contact = () => {
  return (
    <div className='container-fluid' id="contact">
        
        <div className="row align-items-center">
            <div className="col-4">
                <hr style={{ backgroundColor: '#cdb970', height: '3px' }} />
            </div>
            <div className="col-4 text-center">
                <h2 className="text-light">Contact Me</h2>
            </div>
            <div className="col-4">
                <hr style={{ backgroundColor: '#cdb970', height: '3px' }} />
            </div>
        </div>

        <div className="container con">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center">
          <div className="d-flex  p-2 contact ">
            <img src={mail} alt="Mail Icon" width={30} height={30} className='mt-3' />
            <a className="mail-link link pt-3 ps-1" href="mailto:khizranaseem06@gmail.com">khizranaseem06@gmail.com</a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
          <div className="d-flex p-2 contact">
            <img src={linkedin} alt="LinkedIn Icon" width={30} height={30} className="mt-3" />
            <p className="pt-3 ps-2">
              <a className="link" href="https://www.linkedin.com/in/khizra-naseem-1b3531278">Click for my LinkedIn Profile</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr style={{ backgroundColor: '#cdb970', height: '3px' , marginTop:'50px' }} />
    <h1 className='text-center thn'>"Thanks for scrolling"</h1>
    <hr style={{ backgroundColor: '#cdb970', height: '3px' , marginTop:'10px' }} />
    <span className='d-flex justify-content-center'>
        <img src={copyright} alt="" height={30} width={30} />
        <p className='ps-2 pt-1' style={{ color: '#cdb970' }}>Made By Khizra</p>
    </span>

      
    </div>
  )
}

export default Contact
