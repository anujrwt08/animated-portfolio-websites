import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending
        setStatus('sending');
        setTimeout(() => setStatus('success'), 2000);
    };

    return (
        <section id="contact" className="py-20 relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    {/* Contact Info */}
                    <div className="space-y-8">
                         <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            <span className="text-cyber-blue">&lt;</span> Initialize Uplink <span className="text-cyber-blue">/&gt;</span>
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Ready to secure your infrastructure? Establish a secure connection below.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="p-3 glass-panel rounded-full text-cyber-blue"><Mail size={20} /></div>
                                <span>anujrwt08@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="p-3 glass-panel rounded-full text-neon-purple"><Phone size={20} /></div>
                                <span>+91 88512 12345</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="p-3 glass-panel rounded-full text-cyber-blue"><MapPin size={20} /></div>
                                <span>New Delhi, India</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="p-3 glass-panel rounded-full text-neon-purple"><Linkedin size={20} /></div>
                                <a href="https://www.linkedin.com/in/anujrawat08/" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors">
                                    anujrawat08
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-panel p-8 rounded-xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue to-neon-purple"></div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Identity</label>
                                <input 
                                    type="text" 
                                    required 
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all"
                                    placeholder="Enter your name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Comms Frequency</label>
                                <input 
                                    type="email" 
                                    required 
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all"
                                    placeholder="Enter your email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Transmission</label>
                                <textarea 
                                    rows="4" 
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-blue focus:ring-1 focus:ring-cyber-blue outline-none transition-all"
                                    placeholder="Enter your message"
                                    value={formState.message}
                                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={status === 'sending' || status === 'success'}
                                className={`w-full py-4 rounded-lg font-bold transition-all flex items-center justify-center ${status === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500' : 'bg-cyber-blue/20 text-cyber-blue border border-cyber-blue hover:bg-cyber-blue hover:text-black'}`}
                            >
                                {status === 'sending' ? (
                                    <span className="animate-pulse">Transmitting...</span>
                                ) : status === 'success' ? (
                                    <span>Transmission Active</span>
                                ) : (
                                    <>Send Transmission <Send className="ml-2" size={18} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
