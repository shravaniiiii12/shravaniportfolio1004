
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-400/15 rounded-full blur-2xl animate-pulse delay-3000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400/60 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-cyan-400/40 rounded-full animate-bounce delay-1500"></div>
      </div>
      
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
