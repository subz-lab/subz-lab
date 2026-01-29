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
                            <h3 className="text-4xl font-bold mb-4 text-white">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">{t}</span>
                                ))}
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-2">The Problem</h4>
                                    <p className="text-gray-300 leading-relaxed">{project.details?.problem || project.description}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-green-400 mb-2">The Solution</h4>
                                    <p className="text-gray-300 leading-relaxed">{project.details?.solution}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-2">The Result</h4>
                                    <p className="text-gray-300 leading-relaxed">{project.details?.result}</p>
                                </div>
                            </div>

                            <div className="flex space-x-6 mt-12">
                                <a
                                    href={project.links.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center space-x-2 text-white font-bold hover:text-blue-400 transition-colors"
                                >
                                    <ExternalLink size={20} />
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center space-x-2 text-white font-bold hover:text-blue-400 transition-colors"
                                >
                                    <Github size={20} />
                                    <span>View Source</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
