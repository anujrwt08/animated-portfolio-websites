import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
// MatrixRain is now global in App.jsx
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background is handled globally */}

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto"
        >
          <h2 className="text-cyber-blue font-mono text-lg mb-4 tracking-widest">
            &lt;SYSTEM_ONLINE /&gt;
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-neon-purple animate-pulse">Anuj Rawat</span>
          </h1>

          <div className="h-1 w-24 bg-cyber-blue mx-auto mb-6 rounded-full shadow-neon-blue"></div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            B.Tech Cybersecurity Student | Ethical Hacking | Network Security | Malware Analysis
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects"
              className="px-8 py-3 bg-cyber-blue/10 border border-cyber-blue text-cyber-blue rounded-md hover:bg-cyber-blue hover:text-black transition-all duration-300 shadow-neon-blue flex items-center group"
            >
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/resume.pdf"
              className="px-8 py-3 bg-neon-purple/10 border border-neon-purple text-neon-purple rounded-md hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-neon-purple flex items-center"
            >
              Download Resume
              <Download className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
