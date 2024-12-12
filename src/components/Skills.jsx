import React from 'react';

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Python", level: "Beginner" }
  ];

  return (
    <div className="skills">
      <h2>Personal Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

