import React from "react";

import { useFetchProjects } from "./FetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, title, url, img } = project;
          return (
            <a
              className="project"
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <img src={img} className="img" alt={title} />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
