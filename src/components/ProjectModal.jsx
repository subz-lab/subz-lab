import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        className="relative w-full max-w-5xl max-h-[90vh] bg-[var(--bg)] border border-[var(--border)] rounded-[3rem] overflow-hidden flex flex-col shadow-2xl md:flex-row"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
                        >
                            <X size={24} />
                        </button>

                        {/* Left Side - Image/Gallery */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-gray-800">
                            <div className="h-full overflow-y-auto scrollbar-hide">
                                {project.details?.gallery?.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        className="w-full h-full object-cover border-b border-white/5"
                                    />
                                ))}
                                {!project.details?.gallery && (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                )}
                            </div>
                        </div>

                        {/* Right Side - Information */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                            <div className="mb-4">
                                <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                                {project.subtitle && (
                                    <p className="text-xs font-mono text-primary mt-1.5 uppercase tracking-wider">{project.subtitle}</p>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10 font-mono">{t}</span>
                                ))}
                            </div>

                            {/* Bullets Highlight Box */}
                            {project.bullets && project.bullets.length > 0 && (
                                <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Core Contributions</h4>
                                    <ul className="space-y-2">
                                        {project.bullets.map((b, i) => (
                                            <li key={i} className="text-gray-300 text-xs md:text-sm flex items-start gap-2 leading-relaxed">
                                                <span className="text-primary mt-0.5 font-bold">▸</span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1.5">The Problem</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{project.details?.problem || project.description}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-green-400 mb-1.5">The Architecture</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{project.details?.solution}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-1.5">The Result</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{project.details?.result}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/10">
                                {project.links?.demo && project.links.demo !== '#' && (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary text-dark font-bold text-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
                                    >
                                        <ExternalLink size={18} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                                {project.links?.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/20 border border-white/10 transition-colors"
                                    >
                                        <Github size={18} />
                                        <span>View on GitHub</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
