import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectList = () => {
  return (
    <div className="project-list">
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

