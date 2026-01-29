import { motion } from 'framer-motion';
import useMagnetic from '../hooks/useMagnetic';
import { useAudio } from '../hooks/useAudio';

const MagneticButton = ({ children, className = "", onClick, strength = 1 }) => {
    const { ref, x, y } = useMagnetic(strength);
    const { playHover, playClick } = useAudio();

    const handleClick = (e) => {
        playClick();
        if (onClick) onClick(e);
    };

    return (
        <motion.div
            ref={ref}
            animate={{ x, y }}
            onMouseEnter={() => playHover()}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`inline-block ${className}`}
        >
            <button onClick={handleClick} className="w-full h-full">
                {children}
            </button>
        </motion.div>
    );
};

export default MagneticButton;
