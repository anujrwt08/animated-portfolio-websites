import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield, Code, Cpu, Globe, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'About', href: '#about', icon: <Code size={18} /> },
    { title: 'Skills', href: '#skills', icon: <Cpu size={18} /> },
    { title: 'Projects', href: '#projects', icon: <Globe size={18} /> },
    { title: 'Contact', href: '#contact', icon: <Shield size={18} /> },
  ];

  const socialLink = "https://www.linkedin.com/in/anujrawat08/";

  return (
    <nav className="fixed w-full top-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Shield className="w-8 h-8 text-cyber-blue mr-2 animate-pulse-fast" />
            <span className="text-xl font-bold tracking-wider text-white">
              ANUJ<span className="text-cyber-blue"> RAWAT</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex check-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-cyber-blue hover:bg-white/5 transition-all duration-300"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.title}
                </a>
              ))}
              <a 
                href={socialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white bg-cyber-blue/20 border border-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 shadow-neon-blue"
              >
                <Linkedin size={18} className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              >
                <span className="mr-2">{link.icon}</span>
                {link.title}
              </a>
            ))}
            <a
                href={socialLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-cyber-blue hover:text-white hover:bg-white/10"
              >
                <span className="mr-2"><Linkedin size={18} /></span>
                LinkedIn
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
