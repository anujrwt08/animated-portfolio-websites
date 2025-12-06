import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import MatrixRain from './components/MatrixRain';

const App = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-white overflow-x-hidden selection:bg-cyber-blue selection:text-black">
      {/* Matrix Rain - Global Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <MatrixRain />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        
        <footer className="py-6 text-center text-gray-500 text-sm bg-black border-t border-white/10">
          <p>© 2025 Anuj Rawat. All systems operational.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
