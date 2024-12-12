import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
  

  return (
    <header>
      <div className="header-content">
        <h1>Muhammad Affan Amir</h1>
        <h2>Software Engineer</h2>
        
        <nav>
          <ul>
            <li><Link to="/">Projects</Link></li>
            <li><Link to="/resume">Resume </Link></li>
            <li><Link to="/hobbies">Hobbies</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
            <li><Link to="/skills">Personal Skills</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

