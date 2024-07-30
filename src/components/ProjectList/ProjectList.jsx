import React from 'react';
import Project from '../Project/Project';
import projects from '../../assets/projectData';

function ProjectList() {
  return (
    <>
      {projects.map((project, index) => (
        <Project
          key={index}
          project={project}
          isReversed={project.isReversed}
          isReels={project.isReels}
        />
      ))}
    </>
  );
}

export default ProjectList;