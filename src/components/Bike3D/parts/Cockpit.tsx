'use client';
import { useMemo } from 'react';
import * as THREE from 'three';

function TubeFromCurve({
  points,
  radius = 0.014,
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
      <tubeGeometry args={[curve, 16, radius, 8, false]} />
      <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
    </mesh>
  );
}

interface CockpitProps {
  barColor: string;
  stemColor: string;
  gripColor: string;
}

export function Cockpit({ barColor, stemColor, gripColor }: CockpitProps) {
  return (
    <group>
      {/* Stem – angled forward */}
      <TubeFromCurve
        points={[
          [0.435, 0.935, 0],
          [0.38, 0.955, 0],
          [0.32, 0.970, 0],
        ]}
        radius={0.018}
        color={stemColor}
        roughness={0.2}
        metalness={0.75}
      />

      {/* Stem clamp to bar */}
      <mesh position={[0.32, 0.97, 0]}>
        <boxGeometry args={[0.028, 0.032, 0.048]} />
        <meshStandardMaterial color={stemColor} roughness={0.2} metalness={0.75} />
      </mesh>

      {/* Handlebar main cross section – with sweep and rise */}
      <TubeFromCurve
        points={[
          [0.32, 0.970, -0.38],
          [0.315, 0.974, -0.24],
          [0.31, 0.978, -0.10],
          [0.32, 0.970, 0],
          [0.31, 0.978, 0.10],
          [0.315, 0.974, 0.24],
          [0.32, 0.970, 0.38],
        ]}
        radius={0.017}
        color={barColor}
        roughness={0.2}
        metalness={0.75}
      />

      {/* Grips */}
      {([-0.30, 0.30] as number[]).map((z, i) => (
        <mesh key={i} position={[0.315, 0.974, z]} rotation={[0.05, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.024, 0.022, 0.128, 16]} />
          <meshStandardMaterial color={gripColor} roughness={0.88} metalness={0} />
        </mesh>
      ))}

      {/* Brake levers */}
      {([-0.235, 0.235] as number[]).map((z, i) => (
        <group key={i}>
          {/* Lever body */}
          <mesh position={[0.312, 0.960, z]} rotation={[0.3, 0, (i === 0 ? -1 : 1) * 0.15]}>
            <boxGeometry args={[0.018, 0.075, 0.025]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.7} />
          </mesh>
          {/* Lever blade */}
          <mesh position={[0.295, 0.935, z]} rotation={[0.6, 0, (i === 0 ? -1 : 1) * 0.1]}>
            <boxGeometry args={[0.010, 0.080, 0.018]} />
            <meshStandardMaterial color="#111" roughness={0.4} metalness={0.6} />
          </mesh>
        </group>
      ))}

      {/* Shifter pods */}
      {([-0.175, 0.175] as number[]).map((z, i) => (
        <mesh key={i} position={[0.32, 0.970, z]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.022, 0.032, 0.028]} />
          <meshStandardMaterial color="#111" roughness={0.4} metalness={0.5} />
        </mesh>
      ))}

      {/* Headset top cap */}
      <mesh position={[0.432, 0.945, 0]}>
        <cylinderGeometry args={[0.022, 0.022, 0.012, 16]} />
        <meshStandardMaterial color={stemColor} roughness={0.15} metalness={0.9} />
      </mesh>

      {/* Brake hose (left) */}
      <TubeFromCurve
        points={[
          [0.296, 0.935, -0.235],
          [0.38, 0.78, -0.04],
          [0.52, 0.62, -0.06],
          [0.575, 0.40, -0.065],
        ]}
        radius={0.005}
        color="#111"
        roughness={0.6}
        metalness={0.1}
      />

      {/* Brake hose (right) */}
      <TubeFromCurve
        points={[
          [0.296, 0.935, 0.235],
          [0.36, 0.75, 0.04],
          [0.12, 0.60, 0.04],
          [-0.10, 0.50, -0.03],
          [-0.35, 0.42, -0.035],
          [-0.52, 0.38, -0.045],
        ]}
        radius={0.005}
        color="#111"
        roughness={0.6}
        metalness={0.1}
      />
    </group>
  );
}
