import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(false);
    const { playClick } = useAudio();

    useEffect(() => {
        if (isLight) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [isLight]);

    const toggleTheme = () => {
        setIsLight(!isLight);
        playClick();

        // Trigger a "Glitch Wash" event that other components can listen to
        const event = new CustomEvent('theme-wash', { detail: { isLight: !isLight } });
        window.dispatchEvent(event);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-colors overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {isLight ? (
                    <motion.div
                        key="sun"
                        initial={{ y: 20, opacity: 0, rotate: 45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: -45 }}
                        className="text-orange-500"
                    >
                        <Sun size={18} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ y: 20, opacity: 0, rotate: 45 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: -20, opacity: 0, rotate: -45 }}
                        className="text-blue-400"
                    >
                        <Moon size={18} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Subtle Glitch Effect on Toggle */}
            <motion.div
                initial={false}
                animate={{
                    x: [0, -2, 2, -2, 0],
                    opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-white/20 pointer-events-none"
            />
        </motion.button>
    );
};

export default ThemeToggle;
