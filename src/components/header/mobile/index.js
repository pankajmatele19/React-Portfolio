import React from "react";
import './mobile.css'
import {GrFormClose} from 'react-icons/gr'
// import { FaUser,FaEdit, FaLaptop } from "react-icons/fa";
function Mobile({ isOpen, setIsOpen}) {
  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <GrFormClose/>
    </div>
    <div className="mobile-option">
        <a href="#about">
        About
        </a>
    </div>
    <div className="mobile-option">
        <a href="#skills">
        Skills
        </a>
    </div>
    <div className="mobile-option">
    <a href="#projects" >
          Projects
        </a>
    </div>
    <div className="mobile-option">
        <a href="#contact">
        ontact
        </a>
    </div>
  </div>
  );
}

export default Mobile;