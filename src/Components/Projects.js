import React from "react";
import Projects_data from "./projects.json";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="proj_details">
        {Projects_data.map((project,index) => (
        <div className="weather_app" key={index}>
          <div className="image-container">
            <img className="project_img" src={project.ProjectImage} alt={project.ProjectName} />
            <div className="overlay">
              <div className="text">
                <a
                  href={project.Project_source_Link}
                  rel="noreferrer noopener"
                  target="__blank"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="project_desc">
            <a
              href={project.ProjectDemoLink}
              rel="noreferrer noopener"
              target="__blank"
            >
              {project.ProjectName}
            </a>
            <p>
              {project.ProjectDescription}
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
