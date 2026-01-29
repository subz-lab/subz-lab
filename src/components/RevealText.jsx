import React from 'react';
import { motion } from 'framer-motion';

export const RevealText = ({ text, className = "" }) => {
    // Split text into words
    const words = text.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const childVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h2
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: "flex", whiteSpace: "nowrap", marginRight: "0.25em" }}>
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={childVariants}
                            style={{ display: "inline-block" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.h2>
    );
};

export default RevealText;
