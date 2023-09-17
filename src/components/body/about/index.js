import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import rs from '../../../assets/Pankaj_Matele_resume.pdf'


function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There ✋,I am,
          <br /> <span className="info-name">Pankaj Matele</span>.
          <br /> Full Stack Developer <br />
          <a href={rs} target="_blank" ><button className="btn">About Me</button></a>
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
