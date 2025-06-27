
import React from 'react';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Education from '../components/portfolio/Education';
import Projects from '../components/portfolio/Projects';
import Experience from '../components/portfolio/Experience';
import Skills from '../components/portfolio/Skills';
import Certifications from '../components/portfolio/Certifications';
import Activities from '../components/portfolio/Activities';
import Contact from '../components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Activities />
      <Contact />
    </div>
  );
};

export default Index;
