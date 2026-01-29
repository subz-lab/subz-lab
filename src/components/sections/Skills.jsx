import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../../config';
import { Sparkles } from 'lucide-react';
import RevealText from '../RevealText';
import TiltCard from '../TiltCard';
import GithubPulse from '../GithubPulse';

const Skills = () => {
    // Group skills by type
    const groupedSkills = config.skills.icons.reduce((acc, skill) => {
        const type = skill.type || "Other";
        if (!acc[type]) acc[type] = [];
        acc[type].push(skill);
        return acc;
    }, {});

    return (
        <section id="skills" className="py-20 md:py-32 bg-[var(--bg)] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-500/5 blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <RevealText text={config.skills.title} className="text-3xl md:text-5xl font-bold mb-4 text-white" />
                    <p className="text-gray-400 max-w-2xl mx-auto italic">
                        A curated selection of technologies I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* GitHub Pulse Integration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <GithubPulse />
                    </motion.div>

                    {Object.entries(groupedSkills).map(([category, skills], catIdx) => (
                        <TiltCard key={category} className="group">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold text-white uppercase tracking-widest">{category}</h3>
                                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all">
                                        <Sparkles size={14} className="text-blue-400" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-sm text-gray-400 group-hover:text-white group-hover:bg-white/10 group-hover:border-white/20 transition-all flex items-center gap-2"
                                        >
                                            <div className="w-1 h-1 rounded-full bg-blue-500 opacity-50 group-hover:opacity-100" />
                                            {skill.name}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-xs text-blue-400/70 font-mono">CORE_STACK://{category.toUpperCase()}</p>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
