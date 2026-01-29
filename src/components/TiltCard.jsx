import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useAudio } from '../hooks/useAudio';

const TiltCard = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { playHover, playClick } = useAudio();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseEnter = () => {
        playHover();
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => playClick()}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`relative rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all duration-700 hover:border-white/20 ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="relative z-10"
            >
                {children}
            </div>

            {/* Glossy Overlay */}
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--border)] to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none rounded-2xl"
                style={{
                    transform: "translateZ(0px)",
                }}
            />
        </motion.div>
    );
};

export default TiltCard;
