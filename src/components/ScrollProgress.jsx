import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { config } from '../config';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] z-[10001] origin-left"
            style={{
                scaleX,
                backgroundColor: config.theme.accent,
                boxShadow: `0 0 10px ${config.theme.accent}`
            }}
        />
    );
};

export default ScrollProgress;
