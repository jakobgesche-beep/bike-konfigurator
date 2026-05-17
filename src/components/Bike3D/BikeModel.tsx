'use client';
import { useGLTF } from '@react-three/drei';
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useBikeStore } from '@/store/bikeStore';

useGLTF.preload('/models/bike.glb');

// Material name → configurator color key
const MAT_TO_CONFIG: Record<string, string> = {
  Rahmen:            'frame',
  Carbon:            'frame',
  FelgeInnen:        'rim',
  FelgenBefestigung: 'rim',
  FelgenStab:        'spokes',
  Reifen:            'tire',
  Reifen_innen:      'tire',
  Sattel:            'saddle',
  Pedale:            'pedals',
  chain:             'chain',
  Griffe:            'grips',
  GriffSeiten:       'grips',
  GummiDunkel:       'grips',
  Bremsscheiben:     'rotors',
  Bremse:            'brakes',
  BremsHebel:        'brakes',
  Schrauben:         'hardware',
  MetalLenker:       'handlebar',
  Getriebe:          'cassette',
  RotesTeil:         'hub',
};

// Fox gold, RockShox red, Öhlins yellow, etc. → applied to fork lower legs
const FORK_ACCENT: Record<string, { color: string; metalness: number; roughness: number }> = {
  'Fox':       { color: '#c8952c', metalness: 0.9, roughness: 0.18 },
  'RockShox':  { color: '#c42020', metalness: 0.85, roughness: 0.22 },
  'Öhlins':    { color: '#d4aa00', metalness: 0.95, roughness: 0.12 },
  'Marzocchi': { color: '#cc4400', metalness: 0.8, roughness: 0.3 },
  'DVO':       { color: '#ff5500', metalness: 0.8, roughness: 0.28 },
  'BOS':       { color: '#181818', metalness: 0.9, roughness: 0.2 },
  'X-Fusion':  { color: '#2a2a44', metalness: 0.85, roughness: 0.25 },
  'Manitou':   { color: '#3a3a3a', metalness: 0.8, roughness: 0.3 },
  'MRP':       { color: '#444444', metalness: 0.75, roughness: 0.35 },
};

// Shock spring + body color per brand
const SHOCK_ACCENT: Record<string, { color: string; metalness: number; roughness: number }> = {
  'Fox':        { color: '#c8952c', metalness: 0.9, roughness: 0.18 },
  'RockShox':   { color: '#c42020', metalness: 0.85, roughness: 0.22 },
  'Öhlins':     { color: '#d4aa00', metalness: 0.95, roughness: 0.12 },
  'Cane Creek': { color: '#2244bb', metalness: 0.85, roughness: 0.25 },
  'BOS':        { color: '#181818', metalness: 0.9, roughness: 0.2 },
  'DVO':        { color: '#ff5500', metalness: 0.8, roughness: 0.28 },
  'EXT':        { color: '#aa3300', metalness: 0.85, roughness: 0.22 },
  '9point8':    { color: '#2255cc', metalness: 0.85, roughness: 0.25 },
};

// Derailleur body color per brand
const DERAILLEUR_COLOR: Record<string, string> = {
  'SRAM':       '#111111',
  'Shimano':    '#aaaaaa',
  'Microshift': '#555555',
};

function getColor(
  part: { id: string; colors: { hex: string }[] } | null,
  selectedColors: Record<string, string>,
  fallback: string
): string {
  if (!part) return fallback;
  return selectedColors[part.id] ?? part.colors[0]?.hex ?? fallback;
}

function getBikeStyle(frame: { specs: { key: string; value: string }[] } | null): 'dh' | 'enduro' | 'trail' | 'emtb' {
  if (!frame) return 'enduro';
  if (frame.specs.some(s => s.value === 'E-MTB')) return 'emtb';
  const travel = parseInt(frame.specs.find(s => s.key === 'Travel')?.value ?? '0');
  if (travel >= 200) return 'dh';
  if (travel >= 165) return 'enduro';
  return 'trail';
}

export function BikeModel() {
  const { scene } = useGLTF('/models/bike.glb') as { scene: THREE.Group };
  const { config, selectedColors, chainLinks } = useBikeStore();

  const { clone, matsByName, nodeMap } = useMemo(() => {
    const c = scene.clone(true);
    const matsByName = new Map<string, THREE.MeshStandardMaterial[]>();
    const nodeMap = new Map<string, THREE.Object3D>();

    c.traverse(child => {
      if (child.name && !nodeMap.has(child.name)) nodeMap.set(child.name, child);
      if (!(child instanceof THREE.Mesh)) return;

      const mats = Array.isArray(child.material) ? child.material : [child.material];
      const cloned = mats.map(m => {
        const cm = (m as THREE.MeshStandardMaterial).clone();
        if (cm.name) {
          const arr = matsByName.get(cm.name) ?? [];
          arr.push(cm);
          matsByName.set(cm.name, arr);
        }
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
    const scale = 1.15 / Math.max(size.x, size.y, size.z);
    const center = box.getCenter(new THREE.Vector3());
    c.scale.setScalar(scale);
    c.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale);

    return { clone: c, matsByName, nodeMap };
  }, [scene]);

  useEffect(() => {
    const frameColor    = getColor(config.frame,          selectedColors, '#1a1a1a');
    const rimColor      = getColor(config.rimFront,        selectedColors, '#111111');
    const spokeColor    = getColor(config.spokes,          selectedColors, '#c0c0c0');
    const saddleColor   = getColor(config.saddle,          selectedColors, '#111111');
    const pedalColor    = getColor(config.pedals,          selectedColors, '#222222');
    const chainColor    = chainLinks[0]?.color ?? '#888888';
    const gripColor     = getColor(config.grips,           selectedColors, '#222222');
    const rotorColor    = getColor(config.brakeRotor,      selectedColors, '#c0c0c0');
    const barColor      = getColor(config.handlebar,       selectedColors, '#111111');
    const hardwareColor = getColor(config.headCapAndBolts, selectedColors, '#888888');
    const cassetteColor = getColor(config.cassette,        selectedColors, '#555555');
    const hubColor      = getColor(config.hubFront,        selectedColors, '#cc3300');
    const brakeColor    = getColor(config.brakeCaliper,    selectedColors, '#1a1a1a');

    const colorMap: Record<string, string> = {
      frame:     frameColor,
      rim:       rimColor,
      spokes:    spokeColor,
      tire:      '#0d0d0d',
      saddle:    saddleColor,
      pedals:    pedalColor,
      chain:     chainColor,
      grips:     gripColor,
      rotors:    rotorColor,
      brakes:    brakeColor,
      hardware:  hardwareColor,
      handlebar: barColor,
      cassette:  cassetteColor,
      hub:       hubColor,
    };

    // Step 1: Apply base colors to ALL material instances of each named material
    matsByName.forEach((mats, name) => {
      const configKey = MAT_TO_CONFIG[name];
      if (configKey && colorMap[configKey]) {
        const hex = colorMap[configKey];
        mats.forEach(m => { m.color.set(hex); m.needsUpdate = true; });
      }
    });

    // Step 2: Apply frame-style-specific metalness/roughness to frame materials
    const bikeStyle = getBikeStyle(config.frame);
    const STYLE_PROPS = {
      dh:     { metalness: 0.90, roughness: 0.18 },
      enduro: { metalness: 0.78, roughness: 0.28 },
      trail:  { metalness: 0.65, roughness: 0.40 },
      emtb:   { metalness: 0.55, roughness: 0.52 },
    };
    const sp = STYLE_PROPS[bikeStyle];
    ['Rahmen', 'Carbon'].forEach(name => {
      matsByName.get(name)?.forEach(m => {
        m.metalness = sp.metalness;
        m.roughness = sp.roughness;
        m.needsUpdate = true;
      });
    });

    // Step 3: Brand accent colors on specific component node subtrees
    const applyNodeAccent = (
      nodeName: string,
      accent: { color: string; metalness: number; roughness: number },
      targetMatNames: string[]
    ) => {
      const node = nodeMap.get(nodeName);
      if (!node) return;
      node.traverse(child => {
        if (!(child instanceof THREE.Mesh)) return;
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach(m => {
          if (m instanceof THREE.MeshStandardMaterial && targetMatNames.includes(m.name)) {
            m.color.set(accent.color);
            m.metalness = accent.metalness;
            m.roughness = accent.roughness;
            m.needsUpdate = true;
          }
        });
      });
    };

    // Fork: brand accent on lower legs (MetalMedGloss)
    const forkAccent = FORK_ACCENT[config.fork?.brand ?? ''];
    if (forkAccent) applyNodeAccent('Federgabel', forkAccent, ['MetalMedGloss']);

    // Shock: brand accent on spring + body
    const shockAccent = SHOCK_ACCENT[config.shock?.brand ?? ''];
    if (shockAccent) applyNodeAccent('Daempfer_Cane-Creek_DB_200-57', shockAccent, ['Feder', 'MetalMedGloss']);

    // Derailleur: brand body color override
    const derailColor = DERAILLEUR_COLOR[config.rearDerailleur?.brand ?? ''];
    if (derailColor) {
      const node = nodeMap.get('Schaltwerk');
      if (node) {
        node.traverse(child => {
          if (!(child instanceof THREE.Mesh)) return;
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach(m => {
            if (m instanceof THREE.MeshStandardMaterial) {
              m.color.set(derailColor);
              m.needsUpdate = true;
            }
          });
        });
      }
    }
  }, [matsByName, nodeMap, config, selectedColors, chainLinks]);

  return <primitive object={clone} />;
}
