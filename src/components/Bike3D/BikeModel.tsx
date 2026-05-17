'use client';
import { useBikeStore } from '@/store/bikeStore';
import { BikeFrame } from './parts/Frame';
import { Fork } from './parts/Fork';
import { Wheel } from './parts/Wheel';
import { Drivetrain } from './parts/Drivetrain';
import { Cockpit } from './parts/Cockpit';

function getColor(part: { id: string; colors: { hex: string }[] } | null, selectedColors: Record<string, string>, fallback: string): string {
  if (!part) return fallback;
  return selectedColors[part.id] ?? part.colors[0]?.hex ?? fallback;
}

export function BikeModel() {
  const { config, selectedColors, chainLinks } = useBikeStore();

  const frameColor = getColor(config.frame, selectedColors, '#1a1a1a');
  const forkColor = getColor(config.fork, selectedColors, '#D4AF37');
  const rimColor = getColor(config.rimFront, selectedColors, '#111');
  const rimRearColor = getColor(config.rimRear, selectedColors, '#111');
  const hubColor = getColor(config.hubFront, selectedColors, '#cc3300');
  const hubRearColor = getColor(config.hubRear, selectedColors, '#cc3300');
  const spokeColor = getColor(config.spokes, selectedColors, '#c0c0c0');
  const crankColor = getColor(config.crankset, selectedColors, '#111');
  const cassetteColor = getColor(config.cassette, selectedColors, '#888');
  const barColor = getColor(config.handlebar, selectedColors, '#111');
  const stemColor = getColor(config.stem, selectedColors, '#333');
  const gripColor = getColor(config.grips, selectedColors, '#222');
  const saddleColor = getColor(config.saddle, selectedColors, '#111');
  const pedalColor = getColor(config.pedals, selectedColors, '#111');
  const rotorColor = getColor(config.brakeRotor, selectedColors, '#c0c0c0');
  const dropperColor = getColor(config.dropper, selectedColors, '#222');

  return (
    <group>
      <BikeFrame color={frameColor} />
      <Fork color={forkColor} />

      {/* Rear wheel */}
      <Wheel
        position={[-0.56, 0.36, 0]}
        rimColor={rimRearColor}
        hubColor={hubRearColor}
        spokeColor={spokeColor}
        radius={0.355}
        tireWidth={0.063}
        spokeCount={32}
      />

      {/* Front wheel */}
      <Wheel
        position={[0.578, 0.36, 0]}
        rimColor={rimColor}
        hubColor={hubColor}
        spokeColor={spokeColor}
        radius={0.355}
        tireWidth={0.063}
        spokeCount={28}
      />

      <Drivetrain
        crankColor={crankColor}
        chainLinks={chainLinks}
        cassetteColor={cassetteColor}
      />

      <Cockpit
        barColor={barColor}
        stemColor={stemColor}
        gripColor={gripColor}
      />

      {/* Dropper post */}
      <mesh position={[-0.04, 0.70, 0]}>
        <cylinderGeometry args={[0.017, 0.017, 0.32, 12]} />
        <meshStandardMaterial color={dropperColor} roughness={0.25} metalness={0.75} />
      </mesh>
      {/* Dropper collar */}
      <mesh position={[-0.04, 0.84, 0]}>
        <cylinderGeometry args={[0.023, 0.023, 0.018, 12]} />
        <meshStandardMaterial color={dropperColor} roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Saddle */}
      <group position={[-0.04, 0.885, 0]} rotation={[0.06, 0, 0]}>
        <mesh>
          <capsuleGeometry args={[0.032, 0.195, 4, 14]} />
          <meshStandardMaterial color={saddleColor} roughness={0.75} metalness={0.05} />
        </mesh>
        {/* Saddle rails */}
        {[-0.025, 0.025].map((z, i) => (
          <mesh key={i} position={[0, -0.032, z]}>
            <cylinderGeometry args={[0.004, 0.004, 0.215, 8]} />
            <meshStandardMaterial color="#888" roughness={0.2} metalness={0.9} />
          </mesh>
        ))}
      </group>

      {/* Rear brake rotor */}
      <mesh position={[-0.56, 0.36, 0.075]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.095, 0.007, 6, 28]} />
        <meshStandardMaterial color={rotorColor} roughness={0.35} metalness={0.92} />
      </mesh>

      {/* Front brake rotor */}
      <mesh position={[0.578, 0.36, 0.075]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.105, 0.007, 6, 30]} />
        <meshStandardMaterial color={rotorColor} roughness={0.35} metalness={0.92} />
      </mesh>

      {/* Rear brake caliper */}
      <mesh position={[-0.56, 0.46, 0.075]}>
        <boxGeometry args={[0.025, 0.042, 0.028]} />
        <meshStandardMaterial color="#222" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Front brake caliper */}
      <mesh position={[0.575, 0.46, 0.075]}>
        <boxGeometry args={[0.025, 0.042, 0.028]} />
        <meshStandardMaterial color="#222" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Pedals */}
      {[
        { pos: [0.098, 0.250, -0.075] as [number, number, number] },
        { pos: [-0.095, 0.470, 0.075] as [number, number, number] },
      ].map(({ pos }, i) => (
        <group key={i} position={pos}>
          <mesh>
            <boxGeometry args={[0.120, 0.016, 0.110]} />
            <meshStandardMaterial color={pedalColor} roughness={0.55} metalness={0.5} />
          </mesh>
          {/* Pedal pins */}
          {Array.from({ length: 4 }, (_, j) => (
            Array.from({ length: 3 }, (_, k) => (
              <mesh key={`${j}-${k}`} position={[
                -0.045 + j * 0.030,
                0.012,
                -0.038 + k * 0.038,
              ]}>
                <cylinderGeometry args={[0.003, 0.003, 0.012, 6]} />
                <meshStandardMaterial color="#888" roughness={0.3} metalness={0.9} />
              </mesh>
            ))
          ))}
        </group>
      ))}
    </group>
  );
}
