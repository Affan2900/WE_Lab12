import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <section className="personal-info">
        <h1>Muhammad Affan Amir</h1>
        
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>NATIONAL UNIVERSITY OF SCIENCE AND TECHNOLOGY</h3>
          <p>Software Engineering Bachelors | Islamabad, Pakistan</p>
          <p>September 2022 - Present</p>
          <p>GPA: 3.0</p>
        </div>
        <div className="education-item">
          <h3>GOVERNMENT COLLEGE UNIVERSITY</h3>
          <p>Pre-Engineering Intermediate | Lahore, Pakistan</p>
          <p>2019 - 2021</p>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>CODE NINJA | Web Developer Internee</h3>
          <p>Lahore, Pakistan | June 2024 – August 2024</p>
          <ul>
            <li>As a web development internee, I completed several training tasks and got them reviewed by Senior Web Developers</li>
            <li>Work as a backend developer alongside a team on a project using Typescript and NodeJs</li>
          </ul>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> C++, Python, C, Javascript, Typescript</li>
          <li><strong>Libraries/Frameworks:</strong> React, Node, Express, Pandas, Numpy, Matplotlib, Tailwind CSS, Jest</li>
          <li><strong>Tools / Platforms:</strong> Docker, Git, Github</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects / Open-Source</h2>
        <div className="project-item">
          <h3>CAMPHIKE</h3>
          <p><em>Javascript, EJS, Bootstrap</em></p>
          <ul>
            <li>CampHike is platform to share your favourite tourist and camping spots</li>
            <li>It allows users to post detailed descriptions, photos, and reviews of their favorite locations</li>
            <li>The front-end of Camphike is designed using Bootstrap, offering a responsive and visually appealing user interface</li>
            <li>The backend of Camphike is powered by Node.js and Express.js, ensuring a fast, scalable, and efficient server-side environment</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>CRICCRUISER </h3>
          <p><em>React, Bootstrap, MySQL</em></p>
          <ul>
            <li>CricCruiser offers a seamless booking experience for cricket fans, allowing them to reserve transport, match seats, and hotel accommodations all in one place</li>
            <li>The backend of CricCruiser is developed using Node.js and Express.js, providing a robust, scalable, and high-performance server environment</li>
            <li>The front-end of CricCruiser is designed with Bootstrap and HTML, delivering a responsive and easy-to-navigate user interface</li>
          </ul>
        </div>
      </section>

    
    </div>
  );
};

export default Resume;

