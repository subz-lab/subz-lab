import React from 'react';
import { config } from '../../config';
import { Github, Linkedin, Instagram } from 'lucide-react';
import RevealText from '../RevealText';
import MagneticButton from '../MagneticButton';

const Footer = () => {
    return (
        <footer id="footer" className="relative py-32 bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
            {/* Footer Background Accents */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-t from-blue-600/10 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="bg-[var(--card-bg)] backdrop-blur-3xl border border-[var(--border)] rounded-[4rem] p-12 md:p-24 text-center">
                    <RevealText text="Let’s Build Something Amazing Together" className="text-4xl md:text-7xl font-bold mb-10 text-white tracking-tighter" />
                    <p className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        Currently open to new opportunities and interesting collaborations.
                        Let's turn your vision into a reality.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-20">
                        <MagneticButton strength={0.6} className="w-full sm:w-auto">
                            <a
                                href={config.social.linkedin}
                                className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-4 w-full sm:w-auto"
                            >
                                Connect on LinkedIn
                                <span className="text-2xl">→</span>
                            </a>
                        </MagneticButton>
                        <MagneticButton strength={0.6} className="w-full sm:w-auto">
                            <a
                                href={config.social.github}
                                className="px-12 py-5 border border-white/20 rounded-full font-bold text-lg text-white hover:bg-white/10 transition-all flex items-center justify-center gap-4 w-full sm:w-auto"
                            >
                                View Open Source
                                <Github size={24} />
                            </a>
                        </MagneticButton>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-white/5 text-gray-500">
                        <div className="text-left">
                            <p className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Navigation</p>
                            <ul className="space-y-3 font-medium">
                                {['About', 'Skills', 'Projects', 'Experience', 'Blog'].map(item => (
                                    <li key={item} className="hover:text-white cursor-pointer transition-colors" onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-6">
                            <p className="text-white font-bold uppercase tracking-widest text-sm">Social Presence</p>
                            <div className="flex gap-8">
                                <a href={config.social.linkedin} className="hover:text-white transition-all transform hover:scale-125"><Linkedin size={24} /></a>
                                <a href={config.social.github} className="hover:text-white transition-all transform hover:scale-125"><Github size={24} /></a>
                                <a href={config.social.instagram} className="hover:text-white transition-all transform hover:scale-125"><Instagram size={24} /></a>
                            </div>
                        </div>
                        <div className="text-right flex flex-col justify-end">
                            <p className="text-white/20 font-mono text-[10px] mb-2">LAST_UPDATED://{new Date().toLocaleDateString()}</p>
                            <p className="text-sm">Designed & Engineered by <span className="text-white font-bold">{config.identity.firstName} {config.identity.lastName}</span></p>
                            <p className="text-xs mt-2 opacity-50">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
