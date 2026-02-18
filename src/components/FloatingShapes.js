import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';

const AnimatedSphere = ({ position, color, speed, distort, size }) => {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
        mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    });
    return (
        <Float speed={speed} rotationIntensity={1.5} floatIntensity={2.5}>
            <mesh ref={mesh} position={position} scale={size}>
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                    color={color}
                    transparent
                    opacity={0.15}
                    distort={distort}
                    speed={2}
                    roughness={0}
                />
            </mesh>
        </Float>
    );
};

const AnimatedTorus = ({ position, color, speed, size }) => {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
        mesh.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
    });
    return (
        <Float speed={speed * 0.7} rotationIntensity={2} floatIntensity={1.5}>
            <mesh ref={mesh} position={position} scale={size}>
                <torusGeometry args={[1, 0.4, 16, 32]} />
                <MeshWobbleMaterial
                    color={color}
                    transparent
                    opacity={0.1}
                    factor={0.4}
                    speed={1.5}
                />
            </mesh>
        </Float>
    );
};

const AnimatedOctahedron = ({ position, color, speed, size }) => {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
        mesh.current.rotation.z = state.clock.elapsedTime * speed * 0.15;
    });
    return (
        <Float speed={speed * 0.5} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={mesh} position={position} scale={size}>
                <octahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color={color}
                    transparent
                    opacity={0.12}
                    distort={0.3}
                    speed={1.5}
                    roughness={0.2}
                />
            </mesh>
        </Float>
    );
};

const Particles = ({ count = 80 }) => {
    const mesh = useRef();
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 25;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
        mesh.current.rotation.x = state.clock.elapsedTime * 0.01;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#6c63ff"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

const GlowRing = ({ position, color, speed, size }) => {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.5;
        mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    });
    return (
        <Float speed={speed * 0.3} floatIntensity={1}>
            <mesh ref={mesh} position={position} scale={size}>
                <torusGeometry args={[1, 0.02, 16, 100]} />
                <meshBasicMaterial color={color} transparent opacity={0.3} />
            </mesh>
        </Float>
    );
};

const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={0.2} />
            <pointLight position={[-10, -10, -5]} intensity={0.2} color="#6c63ff" />
            <pointLight position={[10, -10, 5]} intensity={0.1} color="#00d4ff" />

            <AnimatedSphere position={[-4, 2, -3]} color="#6c63ff" speed={1.2} distort={0.4} size={1.5} />
            <AnimatedSphere position={[4, -2, -5]} color="#00d4ff" speed={0.8} distort={0.3} size={1.2} />
            <AnimatedSphere position={[0, 3, -4]} color="#ff6b9d" speed={1} distort={0.5} size={0.8} />

            <AnimatedTorus position={[-3, -3, -6]} color="#6c63ff" speed={0.6} size={1} />
            <AnimatedTorus position={[5, 1, -4]} color="#00d4ff" speed={0.9} size={0.7} />

            <AnimatedOctahedron position={[3, 3, -5]} color="#ff6b9d" speed={0.7} size={0.9} />
            <AnimatedOctahedron position={[-5, -1, -3]} color="#6c63ff" speed={0.5} size={0.6} />

            <GlowRing position={[-2, 0, -7]} color="#6c63ff" speed={0.4} size={2} />
            <GlowRing position={[3, -2, -8]} color="#00d4ff" speed={0.3} size={1.5} />

            <Particles count={100} />
        </>
    );
};

const FloatingShapes = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
        }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <Scene />
            </Canvas>
        </div>
    );
};

export default FloatingShapes;
