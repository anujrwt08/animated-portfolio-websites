import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const certs = [
        { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', date: 'Ongoing' },
        { name: 'CompTIA Security+', issuer: 'CompTIA', date: 'Ongoing' },
        { name: 'TryHackMe Top 1%', issuer: 'TryHackMe', date: 'Ongoing' },
        { name: 'Junior Penetration Tester', issuer: 'eLearnSecurity', date: 'Ongoing' },
    ];

    return (
        <section className="py-20 bg-transparent relative">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                        <span className="text-neon-purple">&lt;</span> Certifications <span className="text-neon-purple">/&gt;</span>
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel p-6 rounded-lg border border-white/5 hover:border-cyber-blue transition-all group"
                        >
                            <Award className="w-8 h-8 text-neon-purple mb-4 group-hover:text-cyber-blue transition-colors" />
                            <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                            <p className="text-sm text-gray-400">{cert.issuer}</p>
                            <p className="text-xs text-gray-600 mt-2">{cert.date}</p>
                        </motion.div>
                    ))}
                </div>
             </div>
        </section>
    );
};

export default Certifications;
