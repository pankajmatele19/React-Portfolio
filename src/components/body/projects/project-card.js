import React from "react";
import "./project-card.css";
import {FaGithub} from 'react-icons/fa'
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
            {project.github&& (
              <a className="project-link" href={project.github} target="_blank">
                <div className="link-button">
                <FaGithub style={{'margin-right' : "6px"}}/>Github
              </div>
            </a>
            )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag)=> {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;