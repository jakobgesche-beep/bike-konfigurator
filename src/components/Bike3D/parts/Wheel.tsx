'use client';
import { useMemo } from 'react';
import * as THREE from 'three';

interface WheelProps {
  position: [number, number, number];
  rimColor: string;
  hubColor: string;
  spokeColor: string;
  tireColor?: string;
  radius?: number;
  tireWidth?: number;
  spokeCount?: number;
}

export function Wheel({
  position,
  rimColor,
  hubColor,
  spokeColor,
  tireColor = '#111111',
  radius = 0.355,
  tireWidth = 0.062,
  spokeCount = 32,
}: WheelProps) {
  const innerRadius = radius - tireWidth * 1.4;

  const spokeData = useMemo(() => {
    return Array.from({ length: spokeCount }, (_, i) => {
      const angle = (i / spokeCount) * Math.PI * 2;
      const hubR = 0.040;
      const flangeOffset = i % 2 === 0 ? -0.025 : 0.025;
      const spokeAngle = angle + (i % 2 === 0 ? 0.05 : -0.05);

      const start = new THREE.Vector3(
        Math.cos(spokeAngle) * hubR, Math.sin(spokeAngle) * hubR, flangeOffset
      );
      const end = new THREE.Vector3(
        Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius, 0
      );
      const dir = end.clone().sub(start);
      const len = dir.length();
      const mid = start.clone().add(dir.clone().multiplyScalar(0.5));
      const q = new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        dir.clone().normalize()
      );
      return { mid, len, q, key: i };
    });
  }, [spokeCount, innerRadius]);

  return (
    <group position={position}>
      {/* Tire */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, tireWidth, 18, 80]} />
        <meshStandardMaterial color={tireColor} roughness={0.92} metalness={0} />
      </mesh>

      {/* Tire sidewall tread detail */}
      {Array.from({ length: 24 }, (_, i) => {
        const a = (i / 24) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(a) * radius, Math.sin(a) * radius, 0]} rotation={[Math.PI / 2, a, 0]}>
            <boxGeometry args={[0.012, 0.008, tireWidth * 1.8]} />
            <meshStandardMaterial color="#222" roughness={1} metalness={0} />
          </mesh>
        );
      })}

      {/* Rim bed */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[innerRadius + 0.005, 0.009, 8, 72]} />
        <meshStandardMaterial color={rimColor} roughness={0.25} metalness={0.85} />
      </mesh>

      {/* Rim walls (two side walls) */}
      {[-0.018, 0.018].map((z, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, z]}>
          <torusGeometry args={[innerRadius, 0.005, 6, 72]} />
          <meshStandardMaterial color={rimColor} roughness={0.2} metalness={0.88} />
        </mesh>
      ))}

      {/* Hub body */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.022, 0.022, 0.075, 16]} />
        <meshStandardMaterial color={hubColor} roughness={0.15} metalness={0.95} />
      </mesh>

      {/* Hub flanges */}
      {[-0.025, 0.025].map((z, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, z]}>
          <cylinderGeometry args={[0.044, 0.044, 0.010, 20]} />
          <meshStandardMaterial color={hubColor} roughness={0.15} metalness={0.92} />
        </mesh>
      ))}

      {/* Hub end caps */}
      {[-0.048, 0.048].map((z, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, z]}>
          <cylinderGeometry args={[0.015, 0.018, 0.010, 14]} />
          <meshStandardMaterial color={hubColor} roughness={0.1} metalness={0.99} />
        </mesh>
      ))}

      {/* Axle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.16, 10]} />
        <meshStandardMaterial color="#999" roughness={0.1} metalness={0.99} />
      </mesh>

      {/* Spokes */}
      {spokeData.map(({ mid, len, q, key }) => (
        <mesh key={key} position={[mid.x, mid.y, mid.z]} quaternion={q}>
          <cylinderGeometry args={[0.0016, 0.0016, len, 4]} />
          <meshStandardMaterial color={spokeColor} roughness={0.2} metalness={0.95} />
        </mesh>
      ))}

      {/* Valve stem */}
      <mesh position={[0, innerRadius + 0.01, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.004, 0.004, 0.035, 6]} />
        <meshStandardMaterial color="#888" roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
}
