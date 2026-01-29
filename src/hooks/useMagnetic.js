import { useRef, useState, useEffect } from 'react';

const useMagnetic = (strength = 1) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const el = ref.current;
            if (!el) return;

            const { left, top, width, height } = el.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
            const radius = 100; // Activation radius

            if (distance < radius) {
                // Apply magnetic pull
                setPosition({
                    x: (distanceX * 0.4) * strength,
                    y: (distanceY * 0.4) * strength
                });
            } else {
                // Reset to center
                setPosition({ x: 0, y: 0 });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [strength]);

    return { ref, x: position.x, y: position.y };
};

export default useMagnetic;
