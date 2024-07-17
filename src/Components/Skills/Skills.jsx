import React from 'react'
import './Skills.css'
import logo1 from '../../assets/React-logo.png'
import php from '../../assets/PHP-logo.png'
import html from '../../assets/html-logo.png'
import bootstrap from '../../assets/bootstrap-logo.png'
import js from '../../assets/JS-logo.png'
import python from '../../assets/python-logo.png'
import css from '../../assets/CSS.png'
import mysql from '../../assets/sql-logo.png'
import csharp from '../../assets/csharp.png'
import cpp from '../../assets/c++.png'
import net from '../../assets/net.png'



export const Skills = () => {
  return (
    <div className='container-fluid main' id='skills'>
        <h1 className='hiding text text-center'>
            Skills
        </h1>
        <div className="container skills">
            <div className="row ">
                <div className="col-lg-3 col-md-4 col-sm-6  skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={logo1} alt="" height={70} width={70} className='img-fluid'/>
                   <h4>React</h4>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={html} alt="" height={70} width={70} className='img-fluid'/> 
                   <h4>HTML</h4>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={css} alt="" height={70} width={70} className='img-fluid'/>
                   <h4>CSS</h4>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={js} alt="" height={70} width={70} className='img-fluid'/>
                   <h4>Java Script</h4>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={bootstrap} alt="" height={70} width={70} className='img-fluid'/>
                   <h4>Bootstrap</h4>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6  skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={mysql} alt="" height={90} width={90} className='img-fluid'/>
                   <h4>SQL</h4>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={php} alt="" height={70} width={70} className='img-fluid'/>    
                   <h4>PHP</h4>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={net} alt="" height={70} width={70} className='img-fluid'/>    
                   <h4 className=''>.NET</h4>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={csharp} alt="" height={70} width={70} className='img-fluid'/>
                   <h4>C#</h4>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={cpp} alt="" height={70} width={70} className='img-fluid'/>
                   <h4>C++</h4>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 skill mx-3 my-2 d-flex flex-column justify-content-center align-items-center">
                   <img src={python} alt="" height={70} width={70} className='img-fluid'/>   
                   <h4>Python</h4>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
