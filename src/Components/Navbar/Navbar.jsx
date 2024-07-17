import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import the custom CSS
import logo from '../../assets/K-logo.png'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
 
  return (
    <nav className={`navbar navbar-expand-lg  `}>
      <div className="container">
        <a className="navbar-brand" href="#"><img src={logo} alt="" height={70} width={70} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className={`nav-link ${menu === "about" ? "active" : ""}`} href='#about' onClick={() => setMenu("about")}>About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menu === "skills" ? "active" : ""}`} href='#skills' onClick={() => setMenu("skills")}>Skills</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menu === "projects" ? "active" : ""}`} href='#projects' onClick={() => setMenu("Projects")}>Projects</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${menu === "contact" ? "active" : ""}`} href='#contact' onClick={() => setMenu("contact")}>Contact</a>
            </li>
           
            
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
