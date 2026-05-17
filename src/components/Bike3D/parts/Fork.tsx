'use client';
import { useMemo } from 'react';
import * as THREE from 'three';

function TubeFromCurve({
  points,
  radius = 0.018,
  color,
  roughness = 0.2,
  metalness = 0.7,
}: {
  points: [number, number, number][];
  radius?: number;
  color: string;
  roughness?: number;
  metalness?: number;
}) {
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(points)]
  );
  return (
    <mesh>
      <tubeGeometry args={[curve, 20, radius, 8, false]} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
    </mesh>
  );
}

interface ForkProps {
  color: string;
}

export function Fork({ color }: ForkProps) {
  const stanchionColor = '#d8d8d8';

  return (
    <group>
      {/* Steerer tube */}
      <TubeFromCurve
        points={[
          [0.435, 0.93, 0],
          [0.46, 0.86, 0],
          [0.50, 0.78, 0],
          [0.52, 0.65, 0],
        ]}
        radius={0.020}
        color={color}
      />

      {/* Fork crown */}
      <mesh position={[0.52, 0.63, 0]}>
        <boxGeometry args={[0.045, 0.035, 0.130]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.7} />
      </mesh>
      {/* Crown detail */}
      <mesh position={[0.52, 0.63, 0]}>
        <boxGeometry args={[0.052, 0.025, 0.100]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.8} />
      </mesh>

      {/* Stanchions (upper tubes - shiny) */}
      {/* Left stanchion */}
      <TubeFromCurve
        points={[
          [0.52, 0.62, -0.052],
          [0.545, 0.52, -0.053],
          [0.565, 0.42, -0.054],
          [0.575, 0.36, -0.055],
        ]}
        radius={0.019}
        color={stanchionColor}
        roughness={0.05}
        metalness={0.95}
      />
      {/* Right stanchion */}
      <TubeFromCurve
        points={[
          [0.52, 0.62, 0.052],
          [0.545, 0.52, 0.053],
          [0.565, 0.42, 0.054],
          [0.575, 0.36, 0.055],
        ]}
        radius={0.019}
        color={stanchionColor}
        roughness={0.05}
        metalness={0.95}
      />

      {/* Lower legs (bigger diameter, fork color) */}
      {/* Left lower leg */}
      <TubeFromCurve
        points={[
          [0.575, 0.48, -0.055],
          [0.575, 0.42, -0.055],
          [0.578, 0.37, -0.055],
        ]}
        radius={0.024}
        color={color}
      />
      {/* Right lower leg */}
      <TubeFromCurve
        points={[
          [0.575, 0.48, 0.055],
          [0.575, 0.42, 0.055],
          [0.578, 0.37, 0.055],
        ]}
        radius={0.024}
        color={color}
      />

      {/* Fork arch (brace between lower legs) */}
      <mesh position={[0.576, 0.42, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.128, 10]} />
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.7} />
      </mesh>

      {/* Brake mount (left) */}
      <mesh position={[0.574, 0.46, -0.068]}>
        <boxGeometry args={[0.012, 0.035, 0.018]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Axle */}
      <mesh position={[0.578, 0.36, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.014, 0.014, 0.155, 12]} />
        <meshStandardMaterial color="#888" roughness={0.1} metalness={0.99} />
      </mesh>

      {/* Compression dial (top of fork leg) */}
      <mesh position={[0.52, 0.645, -0.065]}>
        <cylinderGeometry args={[0.012, 0.012, 0.022, 12]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
}
