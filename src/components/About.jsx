import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, BookOpen, Terminal } from 'lucide-react';

const About = () => {
    const timeline = [
        {
            year: '2024 - Present',
            title: 'B.Tech Cybersecurity',
            institution: 'Manav Rachna International Institute Of Research And Studies', 
            description: 'Focusing on Network Security, Cryptography, and Ethical Hacking.',
            icon: <BookOpen className="text-cyber-blue" size={20} />
        },
        {
            year: '2024',
            title: 'CIA Triad Certified',
            institution: 'coursera',
            description: 'Certified in Information Security',
            icon: <Terminal className="text-neon-purple" size={20} />
        }
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-cyber-blue">&lt;</span> About Me <span className="text-cyber-blue">/&gt;</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Decoding the matrix of cybersecurity, one packet at a time.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Avatar / Image Side */}
                    <div className="relative flex justify-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-64 h-64 md:w-80 md:h-80"
                        >
                             <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-neon-purple rounded-full blur-2xl opacity-50 animate-pulse"></div>
                             <div className="relative w-full h-full glass-panel rounded-full flex items-center justify-center border-2 border-cyber-blue/30 overflow-hidden">
                                <User size={100} className="text-gray-300" />
                                {/* Placeholder for user image */}
                                {/* <img src="/path/to/image.jpg" alt="Anuj Rawat" className="w-full h-full object-cover" /> */}
                             </div>
                             
                             {/* Floating Badges */}
                             <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-black/80 border border-cyber-blue px-4 py-2 rounded-lg text-cyber-blue text-sm font-mono shadow-neon-blue"
                             >
                                Pentester
                             </motion.div>
                             <motion.div 
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-black/80 border border-neon-purple px-4 py-2 rounded-lg text-neon-purple text-sm font-mono shadow-neon-purple"
                             >
                                Network Sec
                             </motion.div>
                        </motion.div>
                    </div>

                    {/* Timeline Side */}
                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative pl-8 border-l-2 border-white/10 hover:border-cyber-blue transition-colors duration-300"
                            >
                                <div className="absolute -left-[11px] top-0 bg-black border border-cyber-blue rounded-full p-1">
                                    {item.icon}
                                </div>
                                <span className="text-sm text-cyber-blue font-mono mb-1 block">{item.year}</span>
                                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                <div className="text-gray-400 text-sm mb-2">{item.institution}</div>
                                <p className="text-gray-500">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
