import React, { useEffect, useRef, useState } from 'react';
import { config } from '../config';

const TechOrbit = () => {
    const canvasRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const isPausedRef = useRef(false);
    const skills = config.skills.icons;

    // Use refs for animation variables to avoid re-renders during frame loop
    const rotationRef = useRef({
        targetAngleX: 0,
        targetAngleY: 0,
        currentAngleX: 0,
        currentAngleY: 0,
        particles: []
    });

    // Handle Particle Initialization separately
    useEffect(() => {
        const radius = Math.min(window.innerWidth, 600) / 3.2;

        class SkillParticle {
            constructor(text, index, total) {
                this.text = text;
                const phi = Math.acos(-1 + (2 * index) / total);
                const theta = Math.sqrt(total * Math.PI) * phi;

                this.x3d = radius * Math.cos(theta) * Math.sin(phi) * 1.7;
                this.y3d = radius * Math.sin(theta) * Math.sin(phi) * 0.6;
                this.z3d = radius * Math.cos(phi);
            }

            rotate(angleX, angleY) {
                const cosY = Math.cos(angleY);
                const sinY = Math.sin(angleY);
                const x1 = this.x3d * cosY - this.z3d * sinY;
                const z1 = this.x3d * sinY + this.z3d * cosY;

                const cosX = Math.cos(angleX);
                const sinX = Math.sin(angleX);
                const y1 = this.y3d * cosX - z1 * sinX;
                const z2 = this.y3d * sinX + z1 * cosX;

                this.x3d = x1;
                this.y3d = y1;
                this.z3d = z2;
            }

            draw(ctx, radius) {
                const perspective = 300;
                const scale = perspective / (perspective - this.z3d);
                const alpha = Math.max(0.1, (this.z3d + radius) / (2 * radius) * 0.8 + 0.1);

                ctx.save();
                ctx.translate(ctx.canvas.width / 2 + this.x3d * scale, ctx.canvas.height / 2 + this.y3d * scale);
                ctx.scale(scale, scale);

                const color = config.theme.accent || '#3b82f6';
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.font = `bold ${12 * scale}px sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                if (this.z3d > 0) {
                    ctx.shadowBlur = 10 * (this.z3d / radius);
                    ctx.shadowColor = color;
                }

                ctx.fillText(this.text, 0, 0);
                ctx.restore();
            }
        }

        rotationRef.current.particles = skills.map((s, i) => new SkillParticle(s.name, i, skills.length));
    }, [skills]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const radius = Math.min(window.innerWidth, 600) / 3.2;

        const resizeCanvas = () => {
            if (!canvas.parentElement) return;
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight || 500;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const r = rotationRef.current;

            if (!isPausedRef.current) {
                r.currentAngleX += (r.targetAngleX - r.currentAngleX) * 0.05;
                r.currentAngleY += (r.targetAngleY - r.currentAngleY) * 0.05;

                const finalAngleX = r.currentAngleX + 0.0005;
                const finalAngleY = r.currentAngleY + 0.0005;

                r.particles.forEach(p => p.rotate(finalAngleX, finalAngleY));
            }

            const sorted = [...r.particles].sort((a, b) => a.z3d - b.z3d);
            sorted.forEach(p => p.draw(ctx, radius));

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Only run once

    const handleMouseMove = (e) => {
        if (isPausedRef.current) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        rotationRef.current.targetAngleY = (e.clientX - centerX) * 0.00005;
        rotationRef.current.targetAngleX = (e.clientY - centerY) * 0.00005;
    };

    const togglePause = () => {
        isPausedRef.current = !isPausedRef.current;
        setIsPaused(isPausedRef.current); // Update state just to stay in sync if needed
    };

    return (
        <div
            className="w-full h-full relative"
            onMouseMove={handleMouseMove}
            onClick={togglePause}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full cursor-pointer"
            />
        </div>
    );
};

export default TechOrbit;
