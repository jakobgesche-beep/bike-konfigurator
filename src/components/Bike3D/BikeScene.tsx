'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Grid, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';
import { BikeModel } from './BikeModel';
import { useBikeStore } from '@/store/bikeStore';

const CAMERA = {
  side:       { pos: [0.02,  0.75, 2.4]  as [number,number,number], target: [0.02, 0.45, 0] as [number,number,number] },
  front:      { pos: [2.4,   0.70, 0.02] as [number,number,number], target: [0.02, 0.45, 0] as [number,number,number] },
  rear:       { pos: [-2.4,  0.70, 0.02] as [number,number,number], target: [0.02, 0.45, 0] as [number,number,number] },
  top:        { pos: [0.02,  3.0,  0.02] as [number,number,number], target: [0.02, 0.40, 0] as [number,number,number] },
  isometric:  { pos: [1.6,   1.4,  1.6]  as [number,number,number], target: [0.02, 0.45, 0] as [number,number,number] },
  drivetrain: { pos: [-0.1,  0.45, 1.2]  as [number,number,number], target: [-0.1, 0.40, 0] as [number,number,number] },
};

function Loader() {
  return (
    <mesh position={[0, 0.4, 0]} rotation={[0.2, 0, 0.2]}>
      <boxGeometry args={[0.08, 0.08, 0.08]} />
      <meshStandardMaterial color="#ff6600" wireframe />
    </mesh>
  );
}

export function BikeScene() {
  const { cameraAngle } = useBikeStore();
  const cam = CAMERA[cameraAngle as keyof typeof CAMERA] ?? CAMERA.side;

  return (
    <div className="w-full h-full bg-[#09090f]">
      <Canvas
        shadows="soft"
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.4,
        }}
      >
        <PerspectiveCamera makeDefault position={cam.pos} fov={38} near={0.05} far={100} />
        <OrbitControls
          target={cam.target}
          enablePan={false}
          minDistance={0.6}
          maxDistance={5.5}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.6}
        />

        <ambientLight intensity={0.2} />
        <directionalLight
          position={[5, 8, 4]}
          intensity={2.0}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-left={-2.5}
          shadow-camera-right={2.5}
          shadow-camera-top={2.5}
          shadow-camera-bottom={-2.5}
          shadow-camera-far={20}
        />
        <directionalLight position={[-4, 5, -3]} intensity={0.5} color="#b0c0ff" />
        <directionalLight position={[0, 2, -4]}  intensity={0.3} />
        <pointLight position={[0, 3, 2]} intensity={0.6} color="#fff8f0" />

        <Suspense fallback={<Loader />}>
          <Environment preset="warehouse" background={false} />
          <BikeModel />
          <ContactShadows
            position={[0, 0.001, 0]}
            opacity={0.65}
            scale={4}
            blur={2.5}
            far={1.5}
            color="#000022"
          />
          <Grid
            position={[0, 0, 0]}
            args={[14, 14]}
            cellSize={0.25}
            cellThickness={0.3}
            cellColor="#1a1a2e"
            sectionSize={1}
            sectionThickness={0.7}
            sectionColor="#2a2a4e"
            fadeDistance={8}
            fadeStrength={1.5}
            infiniteGrid
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
