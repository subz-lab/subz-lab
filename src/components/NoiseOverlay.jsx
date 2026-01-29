import React from 'react';

const NoiseOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] overflow-hidden">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[400%] h-[400%] absolute animate-noise">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
            <style>{`
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -5%); }
          20% { transform: translate(-10%, 5%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-5%, 15%); }
          50% { transform: translate(-10%, 5%); }
          60% { transform: translate(15%, 0); }
          70% { transform: translate(0, 10%); }
          80% { transform: translate(-15%, 0); }
          90% { transform: translate(10%, 5%); }
        }
        .animate-noise {
          animation: noise 0.2s infinite;
        }
      `}</style>
        </div>
    );
};

export default NoiseOverlay;
