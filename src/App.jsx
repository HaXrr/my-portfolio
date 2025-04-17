import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import Project from './pages/Project';
// import Project from './pages/Project';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* <Route path="/projects/:id" element={<Project />} /> */}
          <Route path="/project/:id" element={<Project />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
