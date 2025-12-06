import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Skills3D from './canvas/Skills3D';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-transparent overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 relative z-10"
      >
         <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-neon-purple">&lt;</span> Skills & Arsenal <span className="text-neon-purple">/&gt;</span>
        </h2>
        <p className="text-gray-400">
            Tools and technologies I use to secure the digital frontier.
        </p>
      </motion.div>

      <div className="w-full h-[60vh] md:h-[70vh] cursor-move relative z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
            <Suspense fallback={null}>
                <Skills3D />
            </Suspense>
            <OrbitControls enableZoom={false} enableRotate={false} />
        </Canvas>
      </div>
      
      {/* Skill List for SEO / Accessibility / Mobile backup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {['Python', 'Linux', 'Metasploit', 'Wireshark', 'Burp Suite', 'React', 'Node.js', 'SQL'].map((skill) => (
            <div key={skill} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center text-gray-300 hover:text-cyber-blue hover:border-cyber-blue transition-all">
                {skill}
            </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
