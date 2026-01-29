
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ progress, isActive }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ pointerEvents: isActive ? 'auto' : 'none' }}
        >
            <div className="mb-4 text-2xl font-bold tracking-widest">
                SUBODH KUDLE
            </div>

            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                />
            </div>

            <div className="mt-2 font-mono text-sm opacity-50">
                {progress}%
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
