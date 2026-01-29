import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config';

const Hero = ({ images }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!images || images.length === 0 || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false }); // Optimize: No transparency needed

        let animationFrameId;
        let frameIndex = 0;
        let lastTime = 0;
        const fps = 24; // Cinematic 24fps
        const interval = 1000 / fps;

        const handleResize = () => {
            if (!canvas) return;
            const parent = canvas.parentElement;
            if (parent) {
                // Handle High DPI displays
                const dpr = window.devicePixelRatio || 1;
                canvas.width = parent.offsetWidth * dpr;
                canvas.height = parent.offsetHeight * dpr;

                // Scale context to match
                ctx.scale(dpr, dpr);

                // Important: Style width/height must match parent "CSS" pixels
                canvas.style.width = `${parent.offsetWidth}px`;
                canvas.style.height = `${parent.offsetHeight}px`;
            }
        };

        // Initial sizing
        handleResize();
        window.addEventListener('resize', handleResize);

        const render = (time) => {
            animationFrameId = requestAnimationFrame(render);

            const delta = time - lastTime;

            if (delta > interval) {
                lastTime = time - (delta % interval);

                const img = images[frameIndex];
                if (img) {
                    // "Object-fit: cover" logic for Canvas
                    const canvasWidth = canvas.offsetWidth;
                    const canvasHeight = canvas.offsetHeight;
                    const imgWidth = img.width;
                    const imgHeight = img.height;

                    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
                    const x = (canvasWidth - imgWidth * scale) / 2;
                    const y = (canvasHeight - imgHeight * scale) / 2;

                    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                    ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);

                    // Advance frame
                    frameIndex = (frameIndex + 1) % images.length;
                }
            }
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <div className="relative h-screen bg-black overflow-hidden">
            <div className="relative h-screen w-full rounded-b-[3rem] border-b border-white/5 shadow-2xl overflow-hidden">

                {/* Canvas Background */}
                <div className="absolute inset-0 w-full h-full bg-black">
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full block"
                    />

                    {/* 1. CINEMATIC NOISE/GRAIN OVERLAY */}
                    <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.14] mix-blend-overlay"
                        style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`, backgroundSize: '200px' }}></div>

                    {/* 2. VIGNETTE & GRADIENTS */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/95"></div>
                    <div className="absolute inset-0 z-10 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-30 flex flex-col justify-between p-8 md:p-16">

                    <div className="h-20"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">

                        <div className="flex flex-col justify-center items-start space-y-6">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-lg md:text-xl font-medium tracking-widest uppercase"
                                style={{ color: config.theme.accent }}
                            >
                                {config.identity.heroIntros.small}
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-white uppercase"
                            >
                                {config.identity.firstName}<br />
                                <span className="opacity-40">{config.identity.lastName}</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col space-y-3 mt-10"
                            >
                                {config.identity.skillIndicators.map((skill, idx) => (
                                    <div key={idx} className="flex items-center space-x-4 text-xs md:text-sm text-gray-400 font-mono">
                                        <span className="opacity-40">{skill.id}</span>
                                        <div className="h-[1px] w-6 bg-white/20"></div>
                                        <span className="tracking-widest uppercase">{skill.label}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <div className="flex flex-col justify-center items-end text-right space-y-8 md:mt-24">
                            <motion.h2
                                className="text-2xl md:text-4xl font-light text-white max-w-lg leading-tight uppercase italic opacity-90"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 0.9, scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            >
                                {config.hero.headline}
                            </motion.h2>

                            <motion.p
                                className="text-gray-400 max-w-xs text-sm md:text-base leading-relaxed hidden md:block"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                {config.hero.subtext}
                            </motion.p>
                        </div>
                    </div>

                    <div className="flex justify-between items-end pb-4 border-t border-white/10 pt-8">
                        <div className="flex space-x-8 text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase text-white/40">
                            <a href={config.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                            <a href={config.social.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
                            <a href={config.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
                        </div>
                        <div className="text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase text-white/40">
                            Scroll to Explore
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
