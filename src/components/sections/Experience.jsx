import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../../config';
import { Sparkles, Code, Brain, GraduationCap } from 'lucide-react';
import InteractiveBackground from '../InteractiveBackground';
import RevealText from '../RevealText';
import MagneticButton from '../MagneticButton';
import TiltCard from '../TiltCard';
import { useAudio } from '../../hooks/useAudio';

const Experience = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { playClick, playHover } = useAudio();
    const sectionRef = useRef(null);

    const handleNext = () => {
        if (playClick) playClick();
        setCurrentIndex((prev) => (prev + 1) % config.experience.length);
    };

    const handlePrev = () => {
        if (playClick) playClick();
        setCurrentIndex((prev) => (prev - 1 + config.experience.length) % config.experience.length);
    };

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    // Map roles to specific icons for more variety
    const getExperienceIcon = (role) => {
        const r = role.toLowerCase();
        if (r.includes('lead') || r.includes('senior')) return <Sparkles className="w-8 h-8" />;
        if (r.includes('engineering') || r.includes('developer')) return <Code className="w-8 h-8" />;
        if (r.includes('manager')) return <Brain className="w-8 h-8" />;
        return <GraduationCap className="w-8 h-8" />;
    };

    return (
        <section id="experience" ref={sectionRef} className="relative py-24 md:py-40 px-6 overflow-hidden bg-[var(--bg)] min-h-[850px] flex flex-col justify-center">
            <InteractiveBackground />

            {/* HIGH-END BACKGROUND ATMOSPHERE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-white/[0.02] rounded-full animate-slow-spin pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-white/[0.01] rounded-full animate-slow-spin pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />

            {/* Ambient Data Particles (faked with dots) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500/40 rounded-full"
                        animate={{
                            y: [Math.random() * 1000, -100],
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                    />
                ))}
            </div>

            {/* Glowing Accents */}
            <div className="absolute top-1/2 -right-60 w-[800px] h-[800px] bg-blue-500/5 blur-[180px] pointer-events-none" />
            <div className="absolute top-1/2 -left-60 w-[800px] h-[800px] bg-purple-500/5 blur-[180px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <RevealText text="Career Evolution" className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4" />
                        <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                            A non-linear journey of engineering excellence and digital problem solving. Use <span className="text-blue-500 font-mono">ARROWS</span> or <span className="text-blue-500 font-mono">DRAG</span> to explore.
                        </p>
                    </motion.div>
                </div>

                {/* Carousel Container */}
                <div className="relative h-[500px] flex items-center justify-center perspective-[2500px]">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {config.experience.map((exp, idx) => {
                            const offset = idx - currentIndex;
                            const isCenter = offset === 0;

                            let displayOffset = offset;
                            if (offset > 1) displayOffset = offset - config.experience.length;
                            if (offset < -1) displayOffset = offset + config.experience.length;

                            if (Math.abs(displayOffset) > 1) return null;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{
                                        opacity: 0,
                                        x: displayOffset * 500,
                                        scale: 0.5,
                                        rotateY: displayOffset * 60,
                                        z: -800
                                    }}
                                    animate={{
                                        opacity: isCenter ? 1 : 0.3,
                                        x: displayOffset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 320 : 480),
                                        scale: isCenter ? 1 : 0.75,
                                        rotateY: displayOffset * -35,
                                        z: isCenter ? 0 : -400,
                                        filter: isCenter ? 'blur(0px)' : 'blur(6px)',
                                        zIndex: isCenter ? 20 : 10
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: displayOffset * -500,
                                        scale: 0.5,
                                        z: -800
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 25
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    onDragEnd={(e, { offset: dragOffset }) => {
                                        if (dragOffset.x > 80) handlePrev();
                                        else if (dragOffset.x < -80) handleNext();
                                    }}
                                    className="absolute w-full max-w-[600px] cursor-grab active:cursor-grabbing px-6"
                                >
                                    <div className={`p-[1px] rounded-[2.5rem] transition-all duration-700 ${isCenter ? 'holographic-border shadow-[0_0_60px_-15px_rgba(59,130,246,0.4)] scale-105' : ''}`}>
                                        <TiltCard className={`group bg-black/80 backdrop-blur-3xl border-white/5 !p-8 md:!p-12 transition-all duration-500 ${!isCenter && 'opacity-50 grayscale'}`}>
                                            <div className="flex flex-col gap-8">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-6">
                                                        <span className="px-5 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-mono text-sm uppercase tracking-widest shadow-inner">
                                                            {exp.year}
                                                        </span>
                                                        <div className="h-[1px] w-12 bg-white/10 hidden md:block" />
                                                        <span className="text-white/20 font-mono text-xs tracking-widest uppercase">Node_Index: {idx < 10 ? `0${idx}` : idx}</span>
                                                    </div>
                                                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 transition-colors ${isCenter ? 'text-blue-500' : 'text-white/20'}`}>
                                                        {getExperienceIcon(exp.role)}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tighter group-hover:text-blue-300 transition-colors">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-2xl text-gray-400 font-medium mb-8 flex items-center gap-3">
                                                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                                        {exp.company}
                                                    </p>
                                                    <p className="text-gray-400 leading-relaxed text-lg md:text-xl font-light line-clamp-5 max-w-2xl">
                                                        {exp.description}
                                                    </p>
                                                </div>

                                                <div className="mt-6 pt-10 border-t border-white/5 flex items-center justify-between">
                                                    <div className="flex gap-3">
                                                        {config.experience.map((_, dotIdx) => (
                                                            <button
                                                                key={dotIdx}
                                                                onClick={() => {
                                                                    if (playHover) playHover();
                                                                    setCurrentIndex(dotIdx);
                                                                }}
                                                                className={`h-1.5 rounded-full transition-all duration-500 hover:bg-white/40 ${dotIdx === currentIndex ? 'bg-blue-500 w-10' : 'bg-white/10 w-2.5'}`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center gap-4 text-[10px] font-mono text-blue-500/40 uppercase tracking-[0.2em]">
                                                        <span>Status: Active</span>
                                                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                                                        <span>Ready</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </TiltCard>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex justify-center items-center gap-12 mt-20 md:mt-32">
                    <MagneticButton strength={0.5}>
                        <button
                            onClick={handlePrev}
                            className="w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all group overflow-hidden relative shadow-lg"
                        >
                            <span className="relative z-10 text-xl transform group-hover:-translate-x-1 transition-transform">←</span>
                        </button>
                    </MagneticButton>
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Navigation</span>
                    </div>
                    <MagneticButton strength={0.5}>
                        <button
                            onClick={handleNext}
                            className="w-16 h-16 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all group overflow-hidden relative shadow-lg"
                        >
                            <span className="relative z-10 text-xl transform group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
};

export default Experience;
