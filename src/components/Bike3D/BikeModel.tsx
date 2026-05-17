'use client';
import { useGLTF } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useBikeStore } from '@/store/bikeStore';

useGLTF.preload('/models/bike.glb');

function getColor(
  part: { id: string; colors: { hex: string }[] } | null,
  selectedColors: Record<string, string>,
  fallback: string
): string {
  if (!part) return fallback;
  return selectedColors[part.id] ?? part.colors[0]?.hex ?? fallback;
}

// Maps GLTF material names → which configurator color to apply
const MAT_TO_CONFIG = {
  Rahmen:           'frame',
  Carbon:           'frame',
  FelgeInnen:       'rim',
  FelgenBefestigung:'rim',
  FelgenStab:       'spokes',
  Reifen:           'tire',
  Reifen_innen:     'tire',
  Sattel:           'saddle',
  Pedale:           'pedals',
  chain:            'chain',
  Griffe:           'grips',
  GriffSeiten:      'grips',
  GummiDunkel:      'grips',
  Bremsscheiben:    'rotors',
  Bremse:           'brakes',
  BremsHebel:       'brakes',
  Schrauben:        'hardware',
  MetalLenker:      'handlebar',
  Getriebe:         'cassette',
  RotesTeil:        'hub',
} as const;

export function BikeModel() {
  const { scene } = useGLTF('/models/bike.glb') as { scene: THREE.Group };
  const { config, selectedColors, chainLinks } = useBikeStore();

  const { clone, matMap } = useMemo(() => {
    const c = scene.clone(true);
    const matMap = new Map<string, THREE.MeshStandardMaterial>();

    c.traverse(child => {
      if (!(child instanceof THREE.Mesh)) return;

      const mats = Array.isArray(child.material) ? child.material : [child.material];
      const cloned = mats.map(m => {
        const cm = (m as THREE.MeshStandardMaterial).clone();
        if (cm.name && !matMap.has(cm.name)) matMap.set(cm.name, cm);
        return cm;
      });
      child.material = Array.isArray(child.material) ? cloned : cloned[0];
      child.castShadow = true;
      child.receiveShadow = true;
    });

    // Auto-scale: target wheelbase ~1.15 scene units
    c.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(c);
    const size = box.getSize(new THREE.Vector3());
    const longestAxis = Math.max(size.x, size.y, size.z);
    const scale = 1.15 / longestAxis;
    const center = box.getCenter(new THREE.Vector3());
    c.scale.setScalar(scale);
    c.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale);

    return { clone: c, matMap };
  }, [scene]);

  useEffect(() => {
    const frameColor  = getColor(config.frame,       selectedColors, '#1a1a1a');
    const rimColor    = getColor(config.rimFront,     selectedColors, '#111111');
    const spokeColor  = getColor(config.spokes,       selectedColors, '#c0c0c0');
    const saddleColor = getColor(config.saddle,       selectedColors, '#111111');
    const pedalColor  = getColor(config.pedals,       selectedColors, '#222222');
    const chainColor  = chainLinks[0]?.color ?? '#888888';
    const gripColor   = getColor(config.grips,        selectedColors, '#222222');
    const rotorColor  = getColor(config.brakeRotor,   selectedColors, '#c0c0c0');
    const barColor    = getColor(config.handlebar,    selectedColors, '#111111');
    const hardwareColor = getColor(config.headCapAndBolts, selectedColors, '#888888');
    const cassetteColor = getColor(config.cassette,   selectedColors, '#555555');
    const hubColor    = getColor(config.hubFront,     selectedColors, '#cc3300');

    const colorMap: Record<string, string> = {
      frame:    frameColor,
      rim:      rimColor,
      spokes:   spokeColor,
      tire:     '#0d0d0d',
      saddle:   saddleColor,
      pedals:   pedalColor,
      chain:    chainColor,
      grips:    gripColor,
      rotors:   rotorColor,
      brakes:   '#1a1a1a',
      hardware: hardwareColor,
      handlebar: barColor,
      cassette: cassetteColor,
      hub:      hubColor,
    };

    matMap.forEach((mat, name) => {
      const configKey = MAT_TO_CONFIG[name as keyof typeof MAT_TO_CONFIG];
      if (configKey && colorMap[configKey]) {
        mat.color.set(colorMap[configKey]);
        mat.needsUpdate = true;
      }
    });
  }, [matMap, config, selectedColors, chainLinks]);

  return <primitive object={clone} />;
}
