import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';
import { Github, Linkedin, Instagram } from 'lucide-react';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-[var(--bg)]">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[var(--card-bg)] backdrop-blur-3xl border border-[var(--border)] rounded-xl p-12 md:p-24 text-center">
                    <RevealText text="Let’s Build Something Amazing Together" className="text-4xl md:text-7xl font-bold mb-10 text-white tracking-tighter" />
                    <p className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        Currently open to new opportunities and interesting collaborations.
                        Let's turn your vision into a reality.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-20">
                        <MagneticButton strength={0.6} className="w-full sm:w-auto">
                            <a
                                href={config.social.linkedin}
                                className="px-12 py-5 bg-gradient-to-r from-primary to-primary-dim text-dark rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.45)] transition-all duration-300 flex items-center justify-center gap-4 w-full sm:w-auto"
                            >
                                Connect on LinkedIn
                                <span className="text-2xl">→</span>
                            </a>
                        </MagneticButton>
                        <MagneticButton strength={0.6} className="w-full sm:w-auto">
                            <a
                                href={config.social.github}
                                className="px-12 py-5 border border-[var(--border)] rounded-full font-bold text-lg text-[var(--text)] hover:bg-white/5 transition-all flex items-center justify-center gap-4 w-full sm:w-auto"
                            >
                                View Open Source
                                <Github size={24} />
                            </a>
                        </MagneticButton>
                    </div>

                    <div className="flex justify-center gap-12 pt-10 border-t border-white/5">
                        <a href={config.social.linkedin} className="text-gray-400 hover:text-white transition-all transform hover:scale-125 flex items-center gap-2">
                            <Linkedin size={20} /> LinkedIn
                        </a>
                        <a href={config.social.github} className="text-gray-400 hover:text-white transition-all transform hover:scale-125 flex items-center gap-2">
                            <Github size={20} /> GitHub
                        </a>
                        <a href={config.social.instagram} className="text-gray-400 hover:text-white transition-all transform hover:scale-125 flex items-center gap-2">
                            <Instagram size={20} /> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
