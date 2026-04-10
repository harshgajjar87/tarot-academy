import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Sparkles, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Floating glowing orb
function GlowOrb({ position, color, size = 0.4, speed = 1 }) {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
  });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.1}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

// Floating tarot card plane
function FloatingCard({ position, rotation, color = '#c9a84c', delay = 0 }) {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime + delay;
    mesh.current.position.y = position[1] + Math.sin(t * 0.6) * 0.3;
    mesh.current.rotation.y = rotation[1] + Math.sin(t * 0.4) * 0.15;
    mesh.current.rotation.z = rotation[2] + Math.sin(t * 0.3) * 0.05;
  });
  return (
    <mesh ref={mesh} position={position} rotation={rotation} castShadow>
      <boxGeometry args={[0.7, 1.1, 0.02]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.15}
        metalness={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}

// Orbiting ring of particles
function OrbitalRing({ radius = 4, count = 60, color = '#c9a84c', speed = 0.3, yOffset = -2.2 }) {
  const points = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.3 + yOffset;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, [count, radius, yOffset]);

  useFrame((state) => {
    points.current.rotation.y = state.clock.elapsedTime * speed;
    points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.06} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

// Central mystical symbol (icosahedron)
function CentralCrystal() {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.2;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.35;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.15;
  });
  return (
    <Float speed={1.5} floatIntensity={1.5}>
      <mesh ref={mesh} position={[0, -2.2, 0]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color="#9b59b6"
          emissive="#6a0dad"
          emissiveIntensity={0.6}
          distort={0.2}
          speed={1.5}
          wireframe={false}
          metalness={0.8}
          roughness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>
      {/* Wireframe overlay */}
      <mesh position={[0, -2.2, 0]}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial color="#c9a84c" wireframe transparent opacity={0.25} />
      </mesh>
    </Float>
  );
}

// Mouse-reactive camera rig
function CameraRig() {
  const { camera, gl } = useThree();
  useFrame((state) => {
    camera.position.x += (state.mouse.x * 1.5 - camera.position.x) * 0.03;
    camera.position.y += (state.mouse.y * 1.0 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene() {
  // All 3D objects shifted down (negative Y) so they sit in the lower half of the viewport
  // leaving the top half clear for the text content
  const Y_OFFSET = -2.2;
  const cardPositions = [
    [-3.5, 1.5 + Y_OFFSET, -1], [3.5, 1.0 + Y_OFFSET, -1.5], [-2.5, -1.5 + Y_OFFSET, 0.5],
    [3.0, -1.2 + Y_OFFSET, 0.8], [-4.5, 0.2 + Y_OFFSET, -2], [4.2, 0.5 + Y_OFFSET, -0.5],
    [-1.5, 2.5 + Y_OFFSET, -2], [1.8, -2.2 + Y_OFFSET, -1], [-3.8, -0.8 + Y_OFFSET, 1],
  ];
  const cardColors = ['#c9a84c', '#9b59b6', '#3498db', '#c9a84c', '#e74c3c', '#c9a84c', '#9b59b6', '#2ecc71', '#c9a84c'];

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 3]} intensity={2} color="#c9a84c" />
      <pointLight position={[-5, 3, -2]} intensity={1} color="#9b59b6" />
      <pointLight position={[5, -3, -2]} intensity={1} color="#3498db" />

      <CameraRig />

      {/* Deep star field */}
      <Stars radius={80} depth={60} count={3000} factor={4} saturation={0.5} fade speed={0.5} />

      {/* Sparkle particles */}
      <Sparkles count={120} scale={12} size={1.5} speed={0.3} color="#c9a84c" opacity={0.6} />
      <Sparkles count={60} scale={8} size={1} speed={0.5} color="#9b59b6" opacity={0.4} />

      {/* Central crystal — shifted down */}
      <CentralCrystal />

      {/* Orbital rings — shifted down */}
      <OrbitalRing radius={3.5} count={80} color="#c9a84c" speed={0.25} />
      <OrbitalRing radius={5} count={50} color="#9b59b6" speed={-0.15} />
      <OrbitalRing radius={2} count={40} color="#3498db" speed={0.4} />

      {/* Floating orbs — shifted down */}
      <GlowOrb position={[-2, -0.2, -1]} color="#c9a84c" size={0.3} speed={0.8} />
      <GlowOrb position={[2.5, -3.5, -0.5]} color="#9b59b6" size={0.25} speed={1.2} />
      <GlowOrb position={[0, 0.8, -2]} color="#3498db" size={0.2} speed={0.6} />
      <GlowOrb position={[-3, -3.2, 0]} color="#e74c3c" size={0.18} speed={1.5} />
      <GlowOrb position={[3.5, -0.2, -1]} color="#2ecc71" size={0.22} speed={0.9} />

      {/* Floating tarot cards */}
      {cardPositions.map((pos, i) => (
        <FloatingCard
          key={i}
          position={pos}
          rotation={[
            (Math.random() - 0.5) * 0.4,
            (Math.random() - 0.5) * 0.8,
            (Math.random() - 0.5) * 0.3,
          ]}
          color={cardColors[i]}
          delay={i * 0.8}
        />
      ))}
    </>
  );
}

export default function AntigravityScene() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
