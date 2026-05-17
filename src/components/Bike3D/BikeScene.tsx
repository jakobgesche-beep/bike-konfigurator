'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Grid, PerspectiveCamera, AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import { Suspense } from 'react';
import { BikeModel } from './BikeModel';
import { useBikeStore } from '@/store/bikeStore';

const CAMERA_POSITIONS = {
  side:       { pos: [0.01, 0.62, 2.2] as [number,number,number],  target: [0.01, 0.50, 0] as [number,number,number] },
  front:      { pos: [2.2, 0.60, 0.01] as [number,number,number],  target: [0.01, 0.50, 0] as [number,number,number] },
  rear:       { pos: [-2.2, 0.60, 0.01] as [number,number,number], target: [0.01, 0.50, 0] as [number,number,number] },
  top:        { pos: [0.01, 2.8, 0.02] as [number,number,number],  target: [0.01, 0.40, 0] as [number,number,number] },
  isometric:  { pos: [1.5, 1.3, 1.5] as [number,number,number],   target: [0.01, 0.50, 0] as [number,number,number] },
  drivetrain: { pos: [-0.2, 0.42, 1.2] as [number,number,number], target: [-0.2, 0.40, 0] as [number,number,number] },
};

function SceneLoader() {
  return (
    <mesh>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="#333" wireframe />
    </mesh>
  );
}

export function BikeScene() {
  const { cameraAngle } = useBikeStore();
  const cam = CAMERA_POSITIONS[cameraAngle as keyof typeof CAMERA_POSITIONS] ?? CAMERA_POSITIONS.side;

  return (
    <div className="w-full h-full bg-[#09090f]">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, toneMapping: 4, toneMappingExposure: 1.2 }}
      >
        <PerspectiveCamera makeDefault position={cam.pos} fov={40} near={0.05} far={100} />
        <OrbitControls
          target={cam.target}
          enablePan={false}
          minDistance={0.8}
          maxDistance={5.0}
          enableDamping
          dampingFactor={0.06}
          rotateSpeed={0.7}
        />

        {/* Lighting */}
        <ambientLight intensity={0.25} />
        <directionalLight
          position={[4, 6, 3]}
          intensity={2.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={20}
          shadow-camera-left={-3}
          shadow-camera-right={3}
          shadow-camera-top={3}
          shadow-camera-bottom={-3}
        />
        <directionalLight position={[-3, 4, -2]} intensity={0.6} color="#a0b0ff" />
        <pointLight position={[0, 2.5, 1.5]} intensity={0.8} color="#fff8ee" />
        <pointLight position={[0, 0.5, -1.5]} intensity={0.3} color="#2244ff" />

        <Suspense fallback={<SceneLoader />}>
          <Environment preset="studio" background={false} />

          <group>
            <BikeModel />
          </group>

          <ContactShadows
            position={[0, 0, 0]}
            opacity={0.7}
            scale={3.5}
            blur={2.0}
            far={1.2}
            color="#000011"
          />

          <Grid
            position={[0, -0.001, 0]}
            args={[12, 12]}
            cellSize={0.25}
            cellThickness={0.4}
            cellColor="#1a1a2e"
            sectionSize={1}
            sectionThickness={0.8}
            sectionColor="#2a2a4e"
            fadeDistance={7}
            fadeStrength={1.2}
            infiniteGrid
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
