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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {config.projects.map((project, idx) => (
                        <TiltCard
                            key={idx}
                            className="group !p-0 overflow-hidden bg-[var(--card-bg)] border border-[var(--border)] hover:border-primary/40 transition-all duration-500 rounded-2xl flex flex-col"
                        >
                            <div className="flex flex-col h-full">
                                {/* Image Container */}
                                <div
                                    className="relative h-60 md:h-64 overflow-hidden cursor-pointer"
                                    onClick={() => openModal(project)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent z-10 opacity-70" />
                                    {project.image && (
                                        <GlitchImage
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    )}

                                    {/* Tech Badge Overlay */}
                                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-1.5 max-w-[85%]">
                                        {project.tech.slice(0, 3).map(t => (
                                            <span key={t} className="px-2.5 py-1 backdrop-blur-md bg-black/60 border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2 py-1 backdrop-blur-md bg-primary/20 border border-primary/30 rounded-full text-[10px] font-bold text-primary">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Index indicator */}
                                    <span className="absolute top-4 right-4 z-20 px-2.5 py-1 backdrop-blur-md bg-black/60 border border-white/10 rounded-full font-mono text-[11px] text-primary font-bold">
                                        0{idx + 1}
                                    </span>
                                </div>

                                {/* Content Container */}
                                <div className="p-7 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <h3
                                            onClick={() => openModal(project)}
                                            className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 cursor-pointer"
                                        >
                                            {project.title}
                                        </h3>
                                        {project.subtitle && (
                                            <p className="text-xs font-mono text-primary/80 mt-1 uppercase tracking-wide">
                                                {project.subtitle}
                                            </p>
                                        )}
                                    </div>

                                    {/* Bullet Points */}
                                    {project.bullets && project.bullets.length > 0 ? (
                                        <ul className="space-y-2.5 mb-6 text-xs text-gray-300 leading-relaxed flex-grow">
                                            {project.bullets.map((bullet, bIdx) => (
                                                <li key={bIdx} className="flex items-start gap-2">
                                                    <span className="text-primary mt-0.5 text-xs">▸</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                                            {project.description}
                                        </p>
                                    )}

                                    {/* Actions */}
                                    <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between gap-3">
                                        <MagneticButton strength={0.3} className="rounded-full">
                                            <button
                                                onClick={() => openModal(project)}
                                                className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dim text-dark rounded-full font-bold text-xs flex items-center gap-2 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300"
                                            >
                                                Details
                                                <span className="text-sm">→</span>
                                            </button>
                                        </MagneticButton>

                                        {project.links?.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                aria-label={`View ${project.title} on GitHub`}
                                                className="px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 text-xs font-mono"
                                                title="View GitHub Repository"
                                            >
                                                <Github size={15} />
                                                <span>GitHub</span>
                                            </a>
                                        )}
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
