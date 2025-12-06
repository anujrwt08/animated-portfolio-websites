import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, Lock, Database } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue to-neon-purple opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative glass-panel p-6 rounded-xl border border-white/10 hover:border-cyber-blue transition-colors duration-300 h-full flex flex-col">
                <div className="absolute -top-3 -right-3 z-10">
                   <div className="bg-black border border-cyber-blue text-cyber-blue text-xs font-mono px-2 py-1 rounded shadow-neon-blue">
                     {project.category}
                   </div>
                </div>

                <div className="mb-4 text-cyber-blue">
                    {project.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center space-x-4 mt-auto">
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center text-sm">
                        <Github size={16} className="mr-1" /> Code
                    </a>
                    {project.live && (
                         <a href={project.live} className="text-gray-400 hover:text-white transition-colors flex items-center text-sm">
                            <ExternalLink size={16} className="mr-1" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'Automated Malware Analyzer',
            description: 'A Python-based tool that sandbox-executes suspicious files and analyzes behavioral patterns for potential threats.',
            tech: ['Python', 'Sandboxing', 'API Analysis'],
            category: 'Malware Analysis',
            icon: <Activity size={32} />,
            github: '#',
            live: null
        },
        {
            title: 'Network Intrusion Detection System',
            description: 'AI-powered NIDS that monitors network traffic in real-time to detect anomalies and potential attacks.',
            tech: ['Python', 'Machine Learning', 'Scapy'],
            category: 'Network Security',
            icon: <Lock size={32} />,
            github: '#',
            live: '#'
        },
        {
            title: 'Vulnerability Scanner Dashboard',
            description: 'Web dashboard visualizing scan results from Nmap and Nessus, aggregating critical vulnerabilities.',
            tech: ['React', 'Node.js', 'Nmap'],
            category: 'Web Security',
            icon: <Database size={32} />,
            github: '#',
            live: '#'
        },
        {
            title: 'CTF Challenge Platform',
            description: 'A platform hosting custom CTF challenges with a scoreboard and user progress tracking.',
            tech: ['Next.js', 'PostgreSQL', 'Docker'],
            category: 'CTF / Training',
            icon: <Activity size={32} />,
            github: '#',
            live: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        <span className="text-cyber-blue">&lt;</span> Projects <span className="text-cyber-blue">/&gt;</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Deployed production-grade code to secure the digital realm.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
