import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeWash = () => {
    const [washing, setWashing] = useState(false);
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        const handleWash = (e) => {
            setIsLight(e.detail.isLight);
            setWashing(true);
            setTimeout(() => setWashing(false), 800);
        };

        window.addEventListener('theme-wash', handleWash);
        return () => window.removeEventListener('theme-wash', handleWash);
    }, []);

    return (
        <AnimatePresence>
            {washing && (
                <motion.div
                    initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                    animate={{ clipPath: 'circle(150% at 50% 50%)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "circIn" }}
                    className="fixed inset-0 z-[10006] pointer-events-none"
                    style={{
                        backgroundColor: isLight ? '#f5f5f7' : '#050505',
                    }}
                >
                    {/* Glitch Noise Overlay during transition */}
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ThemeWash;
