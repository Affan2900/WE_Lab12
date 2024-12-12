import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Resume from './components/Resume';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

