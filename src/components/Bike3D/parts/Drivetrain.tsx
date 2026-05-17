'use client';
import { useMemo } from 'react';
import * as THREE from 'three';
import type { ChainLink } from '@/types/bike';

interface DrivetrainProps {
  crankColor: string;
  chainLinks: ChainLink[];
  cassetteColor: string;
}

function TubeFromCurve({
  points,
  radius = 0.012,
  color,
}: {
  points: [number, number, number][];
  radius?: number;
  color: string;
}) {
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(points)]
  );
  return (
    <mesh>
      <tubeGeometry args={[curve, 16, radius, 6, false]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
    </mesh>
  );
}

export function Drivetrain({ crankColor, chainLinks, cassetteColor }: DrivetrainProps) {
  const bbPos: [number, number, number] = [0, 0.36, -0.04];
  const rearAxle: [number, number, number] = [-0.56, 0.36, -0.04];

  // Chainring teeth
  const chainringTeeth = useMemo(() => {
    return Array.from({ length: 32 }, (_, i) => {
      const a = (i / 32) * Math.PI * 2;
      const r = 0.098;
      return { x: Math.cos(a) * r + bbPos[0], y: Math.sin(a) * r + bbPos[1], z: bbPos[2] };
    });
  }, [bbPos[0], bbPos[1], bbPos[2]]);

  return (
    <group>
      {/* Chainring */}
      <mesh position={bbPos} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.098, 0.006, 6, 52]} />
        <meshStandardMaterial color={crankColor} roughness={0.15} metalness={0.95} />
      </mesh>

      {/* Chainring inner ring */}
      <mesh position={bbPos} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.070, 0.004, 6, 36]} />
        <meshStandardMaterial color={crankColor} roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Chainring spider arms */}
      {Array.from({ length: 5 }, (_, i) => {
        const a = (i / 5) * Math.PI * 2;
        const x = Math.cos(a) * 0.082 + bbPos[0];
        const y = Math.sin(a) * 0.082 + bbPos[1];
        return (
          <mesh key={i} position={[x, y, bbPos[2]]} rotation={[Math.PI / 2, 0, a + Math.PI / 2]}>
            <boxGeometry args={[0.052, 0.006, 0.010]} />
            <meshStandardMaterial color={crankColor} roughness={0.2} metalness={0.9} />
          </mesh>
        );
      })}

      {/* Crank arm drive side */}
      <mesh position={[bbPos[0] + 0.052, bbPos[1] - 0.028, bbPos[2]]} rotation={[0, 0, -0.42]}>
        <boxGeometry args={[0.125, 0.022, 0.015]} />
        <meshStandardMaterial color={crankColor} roughness={0.2} metalness={0.85} />
      </mesh>

      {/* Crank arm non-drive */}
      <mesh position={[bbPos[0] - 0.052, bbPos[1] + 0.028, bbPos[2] + 0.075]} rotation={[0, 0, -0.42 + Math.PI]}>
        <boxGeometry args={[0.125, 0.022, 0.015]} />
        <meshStandardMaterial color={crankColor} roughness={0.2} metalness={0.85} />
      </mesh>

      {/* Pedal spindle (drive side) */}
      <mesh position={[bbPos[0] + 0.098, bbPos[1] - 0.050, bbPos[2]]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.009, 0.009, 0.08, 10]} />
        <meshStandardMaterial color="#888" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* BB axle */}
      <mesh position={bbPos} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.013, 0.013, 0.10, 12]} />
        <meshStandardMaterial color="#666" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Cassette sprockets */}
      {Array.from({ length: 12 }, (_, i) => {
        const r = 0.042 + i * 0.0055;
        const z = rearAxle[2] + i * 0.004 - 0.022;
        return (
          <mesh key={i} position={[rearAxle[0], rearAxle[1], z]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[r, 0.0038, 5, 20 + i * 2]} />
            <meshStandardMaterial color={cassetteColor} roughness={0.3} metalness={0.85} />
          </mesh>
        );
      })}

      {/* Freehub body */}
      <mesh position={[rearAxle[0], rearAxle[1], rearAxle[2] - 0.01]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.034, 0.034, 0.058, 14]} />
        <meshStandardMaterial color="#333" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Rear derailleur body */}
      <mesh position={[-0.53, 0.25, -0.05]} rotation={[0.15, 0, -0.3]}>
        <boxGeometry args={[0.055, 0.038, 0.018]} />
        <meshStandardMaterial color="#222" roughness={0.4} metalness={0.65} />
      </mesh>
      {/* RD pulley cage */}
      <mesh position={[-0.55, 0.21, -0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.016, 0.004, 5, 12]} />
        <meshStandardMaterial color="#111" roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[-0.50, 0.23, -0.05]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.016, 0.004, 5, 12]} />
        <meshStandardMaterial color="#111" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Chain top run */}
      {chainLinks.slice(0, 38).map((link, i) => {
        const t = i / 38;
        const x = bbPos[0] + (rearAxle[0] - bbPos[0]) * t - 0.01;
        return (
          <mesh key={link.index} position={[x, bbPos[1] + 0.098, bbPos[2]]}>
            <boxGeometry args={[0.020, 0.007, 0.008]} />
            <meshStandardMaterial color={link.color} roughness={0.35} metalness={0.65} />
          </mesh>
        );
      })}

      {/* Chain bottom run */}
      {chainLinks.slice(38, 64).map((link, i) => {
        const t = i / 26;
        const x = bbPos[0] + (rearAxle[0] - bbPos[0]) * t - 0.01;
        return (
          <mesh key={link.index} position={[x, bbPos[1] - 0.065, bbPos[2]]}>
            <boxGeometry args={[0.020, 0.007, 0.008]} />
            <meshStandardMaterial color={link.color} roughness={0.35} metalness={0.65} />
          </mesh>
        );
      })}

      {/* Shift cable housing */}
      <TubeFromCurve
        points={[
          [0.30, 0.96, -0.02],
          [0.10, 0.82, -0.025],
          [-0.10, 0.62, -0.03],
          [-0.35, 0.44, -0.035],
          [-0.50, 0.30, -0.04],
        ]}
        radius={0.005}
        color="#333"
      />
    </group>
  );
}
