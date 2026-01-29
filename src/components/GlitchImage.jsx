import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const GlitchShaderMaterial = {
    uniforms: {
        uTexture: { value: null },
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uHover: { value: 0 },
    },
    vertexShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform float uHover;
        
        void main() {
            vUv = uv;
            vec3 pos = position;
            
            // Subtle wave distortion based on hover
            if (uHover > 0.1) {
                pos.z += sin(pos.x * 10.0 + uTime) * 0.05 * uHover;
            }
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `,
    fragmentShader: `
        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uHover;
        
        void main() {
            vec2 uv = vUv;
            
            if (uHover > 0.01) {
                // Liquid distortion logic
                float dist = distance(uv, uMouse);
                float strength = 0.15 * uHover * exp(-dist * 5.0);
                
                uv.x += sin(uTime * 2.0 + vUv.y * 20.0) * strength;
                uv.y += cos(uTime * 2.0 + vUv.x * 20.0) * strength;
            }
            
            vec4 color = texture2D(uTexture, uv);
            gl_FragColor = color;
        }
    `
};

const Scene = ({ imgUrl, isHovered }) => {
    const meshRef = useRef();
    const texture = useLoader(THREE.TextureLoader, imgUrl);
    const [mouse, setMouse] = useState(new THREE.Vector2(0.5, 0.5));

    const material = useMemo(() => {
        const mat = new THREE.ShaderMaterial({
            ...GlitchShaderMaterial,
            uniforms: THREE.UniformsUtils.clone(GlitchShaderMaterial.uniforms)
        });
        mat.uniforms.uTexture.value = texture;
        return mat;
    }, [texture]);

    useFrame((state) => {
        const { clock, mouse: stateMouse } = state;
        material.uniforms.uTime.value = clock.getElapsedTime();
        material.uniforms.uHover.value = THREE.MathUtils.lerp(
            material.uniforms.uHover.value,
            isHovered ? 1.0 : 0.0,
            0.1
        );

        // Smoothly follow mouse
        material.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
            material.uniforms.uMouse.value.x,
            (stateMouse.x + 1) / 2,
            0.1
        );
        material.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
            material.uniforms.uMouse.value.y,
            (stateMouse.y + 1) / 2,
            0.1
        );
    });

    return (
        <mesh ref={meshRef} scale={[1, 1, 1]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <primitive object={material} attach="material" />
        </mesh>
    );
};

const GlitchImage = ({ src, alt, className = "" }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative overflow-hidden cursor-pointer ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Canvas
                shadows={false}
                camera={{ position: [0, 0, 1], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            >
                <Suspense fallback={null}>
                    <Scene imgUrl={src} isHovered={isHovered} />
                </Suspense>
            </Canvas>
            {/* Fallback/Overlay to handle accessibility and SEO */}
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover opacity-0 pointer-events-none"
            />
        </div>
    );
};

export default GlitchImage;
