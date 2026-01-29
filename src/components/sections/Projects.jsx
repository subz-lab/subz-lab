import React, { useState } from 'react';
import { config } from '../../config';
import { Github } from 'lucide-react';
import RevealText from '../RevealText';
import ProjectModal from '../ProjectModal';
import MagneticButton from '../MagneticButton';
import TiltCard from '../TiltCard';
import GlitchImage from '../GlitchImage';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <section id="projects" className="py-20 md:py-32 relative bg-[var(--bg)] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <RevealText text="Featured Projects" className="text-4xl md:text-6xl font-bold text-white tracking-tighter" />
                        <p className="text-gray-400 mt-4 max-w-xl text-lg">
                            A collection of digital products and engineering experiments built with precision.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                    {config.projects.map((project, idx) => (
                        <TiltCard
                            key={idx}
                            className="group !p-0 overflow-hidden bg-gray-900/40 border-white/5 hover:border-white/20 transition-all duration-500 rounded-[2.5rem]"
                        >
                            <div className="flex flex-col h-full">
                                {/* Image Container */}
                                <div
                                    className="relative h-72 md:h-80 overflow-hidden cursor-pointer"
                                    onClick={() => openModal(project)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10 opacity-60" />
                                    {project.image && (
                                        <GlitchImage
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full"
                                        />
                                    )}

                                    {/* Tech Badge Overlay */}
                                    <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map(t => (
                                            <span key={t} className="px-3 py-1.5 backdrop-blur-md bg-black/40 border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-10 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <span className="text-white/20 font-mono text-sm group-hover:text-white/40">0{idx + 1}</span>
                                    </div>

                                    <p className="text-gray-400 mb-8 line-clamp-2 text-lg leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between">
                                        <MagneticButton strength={0.4} className="rounded-full">
                                            <button
                                                onClick={() => openModal(project)}
                                                className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm flex items-center gap-3 hover:bg-blue-50 transition-colors"
                                            >
                                                Case Study
                                                <span className="text-lg">→</span>
                                            </button>
                                        </MagneticButton>

                                        <div className="flex gap-4">
                                            {project.links?.github && (
                                                <a href={project.links.github} className="text-gray-500 hover:text-white transition-colors">
                                                    <Github size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>

                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </section>
    );
};

export default Projects;
