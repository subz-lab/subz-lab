import React from 'react';
import { config } from '../../config';
import { Github, Linkedin, Instagram } from 'lucide-react';
import RevealText from '../RevealText';
import MagneticButton from '../MagneticButton';

const Footer = () => {
    return (
        <footer id="footer" className="relative py-12 bg-black border-t border-white/5 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <p className="text-white font-bold uppercase tracking-widest text-[10px] mb-2">{config.identity.logoText}</p>
                        <p className="text-xs">Designed & Engineered by <span className="text-white/70 font-medium">{config.identity.firstName} {config.identity.lastName}</span></p>
                    </div>

                    <div className="flex gap-8">
                        <a href={config.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-all transform hover:scale-110"><Linkedin size={20} /></a>
                        <a href={config.social.github} target="_blank" rel="noreferrer" className="hover:text-white transition-all transform hover:scale-110"><Github size={20} /></a>
                        <a href={config.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-all transform hover:scale-110"><Instagram size={20} /></a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-[10px] font-mono opacity-30 uppercase tracking-tighter mb-1">SYSTEM_VERSION://1.0.4</p>
                        <p className="text-[10px] opacity-40">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
