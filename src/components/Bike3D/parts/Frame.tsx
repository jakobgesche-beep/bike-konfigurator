'use client';
import { useMemo } from 'react';
import * as THREE from 'three';

interface FrameProps {
  color: string;
}

function TubeFromCurve({
  points,
  radius = 0.022,
  color,
  roughness = 0.25,
  metalness = 0.5,
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
      <tubeGeometry args={[curve, 24, radius, 8, false]} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
    </mesh>
  );
}

export function BikeFrame({ color }: FrameProps) {
  return (
    <group>
      {/* Down tube – large diameter, curved */}
      <TubeFromCurve
        points={[
          [0.46, 0.90, 0],
          [0.32, 0.72, 0],
          [0.14, 0.55, 0],
          [0.0, 0.36, 0],
        ]}
        radius={0.030}
        color={color}
      />

      {/* Top tube – slightly sloped */}
      <TubeFromCurve
        points={[
          [0.42, 0.92, 0],
          [0.18, 0.89, 0],
          [-0.06, 0.86, 0],
        ]}
        radius={0.022}
        color={color}
      />

      {/* Seat tube */}
      <TubeFromCurve
        points={[
          [-0.06, 0.86, 0],
          [-0.04, 0.65, 0],
          [-0.01, 0.45, 0],
          [0.0, 0.36, 0],
        ]}
        radius={0.022}
        color={color}
      />

      {/* Head tube */}
      <TubeFromCurve
        points={[
          [0.46, 0.91, 0],
          [0.50, 0.77, 0],
          [0.52, 0.64, 0],
        ]}
        radius={0.032}
        color={color}
        roughness={0.2}
      />

      {/* Chainstay left */}
      <TubeFromCurve
        points={[
          [0.0, 0.36, -0.04],
          [-0.22, 0.34, -0.04],
          [-0.42, 0.35, -0.042],
          [-0.56, 0.36, -0.04],
        ]}
        radius={0.016}
        color={color}
      />

      {/* Chainstay right */}
      <TubeFromCurve
        points={[
          [0.0, 0.36, 0.04],
          [-0.22, 0.34, 0.04],
          [-0.42, 0.35, 0.042],
          [-0.56, 0.36, 0.04],
        ]}
        radius={0.016}
        color={color}
      />

      {/* Seatstay left */}
      <TubeFromCurve
        points={[
          [-0.07, 0.83, -0.03],
          [-0.28, 0.68, -0.04],
          [-0.44, 0.52, -0.04],
          [-0.56, 0.38, -0.04],
        ]}
        radius={0.013}
        color={color}
      />

      {/* Seatstay right */}
      <TubeFromCurve
        points={[
          [-0.07, 0.83, 0.03],
          [-0.28, 0.68, 0.04],
          [-0.44, 0.52, 0.04],
          [-0.56, 0.38, 0.04],
        ]}
        radius={0.013}
        color={color}
      />

      {/* BB shell */}
      <mesh position={[0, 0.36, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.040, 0.040, 0.090, 20]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.5} />
      </mesh>

      {/* Rear dropout axle */}
      <mesh position={[-0.56, 0.36, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.018, 0.018, 0.12, 14]} />
        <meshStandardMaterial color="#444" roughness={0.3} metalness={0.95} />
      </mesh>

      {/* Shock mount top */}
      <TubeFromCurve
        points={[
          [0.05, 0.80, 0],
          [0.05, 0.68, 0],
          [0.02, 0.56, 0],
        ]}
        radius={0.014}
        color={color}
      />

      {/* Shock link */}
      <TubeFromCurve
        points={[
          [-0.10, 0.56, 0],
          [-0.05, 0.52, 0],
          [0.0, 0.50, 0],
          [0.02, 0.56, 0],
        ]}
        radius={0.012}
        color={color}
      />

      {/* Rear shock body */}
      <mesh position={[-0.04, 0.64, 0]} rotation={[0, 0, 0.45]}>
        <cylinderGeometry args={[0.020, 0.020, 0.18, 12]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Shock spring coil hint */}
      <mesh position={[-0.04, 0.64, 0]} rotation={[0, 0, 0.45]}>
        <cylinderGeometry args={[0.026, 0.026, 0.10, 12]} />
        <meshStandardMaterial color="#333" roughness={0.5} metalness={0.6} wireframe />
      </mesh>
    </group>
  );
}
