import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.details}</p>
      <h3>Technologies Used:</h3>
      <ul>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      
      <br />
      <Link to="/" className="back-link">Back to Projects</Link>
    </div>
  );
};

export default ProjectDetails;

