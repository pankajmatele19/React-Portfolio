import React from "react";
import './web.css';
// import { FaLaptop } from "react-icons/fa";
// import { FaBriefcase } from "react-icons/fa";
// import { FaEdit } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
// import { LiaDev } from "react-icons/lia";
// import {SiAboutdotme} from 'react-icons/si'

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#about">
        About
        </a>
    </div>
    <div className="web-option">
        <a href="#skills">
        Skills
        </a>
    </div>
    <div className="web-option">
        <a href="#projects" >
       Projects
        </a>
    </div>
    <div className="web-option">
        <a href="#contact">
        Contact
        </a>
    </div>
  </div>;
}


export default Web;