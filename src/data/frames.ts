import type { BikePart } from '@/types/bike';

export const frames: BikePart[] = [
  // ── SANTA CRUZ ──────────────────────────────────────────
  { id: 'sc-v10-2024', brand: 'Santa Cruz', model: 'V10 CC 2024', category: 'frame', price: 3499, weight: 3200, colors: [{ name: 'Gloss Carbon', hex: '#1a1a1a' }, { name: 'Matte Carbon', hex: '#2d2d2d' }, { name: 'Gloss Blue', hex: '#1a3a6e' }, { name: 'Desert Sand', hex: '#c4a882' }], specs: [{ key: 'Travel', label: 'Travel', value: '215mm' }, { key: 'Material', label: 'Material', value: 'Carbon CC' }, { key: 'BB', label: 'Tretlager', value: 'BSA 73mm' }, { key: 'Sizes', label: 'Größen', value: 'S/M/L/XL' }], isNew: false, rating: 4.9 },
  { id: 'sc-nomad-2024', brand: 'Santa Cruz', model: 'Nomad CC 2024', category: 'frame', price: 2899, weight: 2900, colors: [{ name: 'Gloss Teal', hex: '#008B8B' }, { name: 'Matte Black', hex: '#111' }, { name: 'Gloss White', hex: '#f0f0f0' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }, { key: 'Material', label: 'Material', value: 'Carbon CC' }], isNew: false, rating: 4.8 },
  { id: 'sc-heckler-2024', brand: 'Santa Cruz', model: 'Heckler CC MX 2024', category: 'frame', price: 2200, weight: 3800, colors: [{ name: 'Gloss Olive', hex: '#6B8E23' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }, { key: 'Type', label: 'Typ', value: 'E-MTB' }], isNew: true, rating: 4.7 },

  // ── SPECIALIZED ─────────────────────────────────────────
  { id: 'spe-demo-2024', brand: 'Specialized', model: 'Demo Race 2024', category: 'frame', price: 3200, weight: 3100, colors: [{ name: 'Monster Green', hex: '#39ff14' }, { name: 'Matte Black', hex: '#111' }, { name: 'Red', hex: '#cc1100' }], specs: [{ key: 'Travel', label: 'Travel', value: '210mm' }, { key: 'Material', label: 'Material', value: 'FACT 11m Carbon' }], isNew: false, rating: 4.8 },
  { id: 'spe-enduro-sw-2024', brand: 'Specialized', model: 'Enduro S-Works 2024', category: 'frame', price: 2799, weight: 2750, colors: [{ name: 'Carbon', hex: '#1a1a1a' }, { name: 'White', hex: '#f0f0f0' }, { name: 'Lilac', hex: '#9b8bb4' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.7 },
  { id: 'spe-stumpjumper-2024', brand: 'Specialized', model: 'Stumpjumper EVO S-Works 2024', category: 'frame', price: 2499, weight: 2600, colors: [{ name: 'Carbon', hex: '#1a1a1a' }, { name: 'Blue', hex: '#003399' }], specs: [{ key: 'Travel', label: 'Travel', value: '150mm' }], isNew: false, rating: 4.7 },

  // ── TREK ────────────────────────────────────────────────
  { id: 'trek-session-2024', brand: 'Trek', model: 'Session 9.9 2024', category: 'frame', price: 3100, weight: 3050, colors: [{ name: 'Raw Carbon', hex: '#2a2a2a' }, { name: 'Matte Black', hex: '#111' }, { name: 'Trek Yellow', hex: '#f5c400' }], specs: [{ key: 'Travel', label: 'Travel', value: '200mm' }, { key: 'Material', label: 'Material', value: 'OCLV Carbon' }], isNew: false, rating: 4.7 },
  { id: 'trek-slash-2024', brand: 'Trek', model: 'Slash 9.9 XX1 2024', category: 'frame', price: 2700, weight: 2800, colors: [{ name: 'Dnister Black', hex: '#111' }, { name: 'Cobra Blood', hex: '#8B0000' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.7 },

  // ── YETI ────────────────────────────────────────────────
  { id: 'yeti-sb165-2024', brand: 'Yeti', model: 'SB165 T-Series 2024', category: 'frame', price: 2999, weight: 2850, colors: [{ name: 'Turquoise', hex: '#00CED1' }, { name: 'Raw', hex: '#c0c0c0' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '165mm' }], isNew: false, rating: 4.8 },
  { id: 'yeti-sb150-2024', brand: 'Yeti', model: 'SB150 C-Series 2024', category: 'frame', price: 1899, weight: 2950, colors: [{ name: 'Turquoise', hex: '#00CED1' }, { name: 'Anthracite', hex: '#444' }], specs: [{ key: 'Travel', label: 'Travel', value: '150mm' }], isNew: false, rating: 4.7 },

  // ── PROPAIN ─────────────────────────────────────────────
  { id: 'propain-tyee-2024', brand: 'Propain', model: 'Tyee CF 2024', category: 'frame', price: 2199, weight: 2780, colors: [{ name: 'Raw Carbon', hex: '#2a2a2a' }, { name: 'Dirty White', hex: '#e8e4d8' }, { name: 'Black', hex: '#111' }, { name: 'Camo', hex: '#5c6b3a' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }, { key: 'Material', label: 'Material', value: 'Carbon CF' }, { key: 'Sizes', label: 'Größen', value: 'S/M/L/XL/XXL' }], description: 'Propain aus Deutschland. Exzellente Preis-Leistung.', isNew: false, rating: 4.8 },
  { id: 'propain-spindrift-2024', brand: 'Propain', model: 'Spindrift CF 2024', category: 'frame', price: 2599, weight: 2650, colors: [{ name: 'Raw Carbon', hex: '#2a2a2a' }, { name: 'Dirty White', hex: '#e8e4d8' }, { name: 'Army Green', hex: '#4b5320' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }, { key: 'Material', label: 'Material', value: 'Carbon CF' }], isNew: true, rating: 4.8 },
  { id: 'propain-rage-2024', brand: 'Propain', model: 'Rage CF 2024', category: 'frame', price: 2899, weight: 3050, colors: [{ name: 'Raw Carbon', hex: '#2a2a2a' }, { name: 'Black', hex: '#111' }, { name: 'Grey', hex: '#888' }], specs: [{ key: 'Travel', label: 'Travel', value: '210mm' }, { key: 'Type', label: 'Typ', value: 'DH' }], isNew: false, rating: 4.7 },
  { id: 'propain-hugene-2024', brand: 'Propain', model: 'Hugene CF 2024', category: 'frame', price: 1899, weight: 2900, colors: [{ name: 'Raw Carbon', hex: '#2a2a2a' }, { name: 'Dirty White', hex: '#e8e4d8' }], specs: [{ key: 'Travel', label: 'Travel', value: '140mm' }], isNew: false, rating: 4.7 },

  // ── TRANSITION ──────────────────────────────────────────
  { id: 'transition-sentinel-2024', brand: 'Transition', model: 'Sentinel Carbon 2024', category: 'frame', price: 1999, weight: 2680, colors: [{ name: 'Spruce', hex: '#2E8B57' }, { name: 'Raw', hex: '#c0c0c0' }, { name: 'Black', hex: '#111' }, { name: 'White', hex: '#f0f0f0' }], specs: [{ key: 'Travel', label: 'Travel', value: '150mm' }, { key: 'Material', label: 'Material', value: 'Carbon' }], isNew: false, rating: 4.8 },
  { id: 'transition-spire-2024', brand: 'Transition', model: 'Spire Carbon 2024', category: 'frame', price: 2299, weight: 2720, colors: [{ name: 'Spruce', hex: '#2E8B57' }, { name: 'Raw Carbon', hex: '#2a2a2a' }, { name: 'Stealth', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.8 },
  { id: 'transition-tr11-2024', brand: 'Transition', model: 'TR11 Aluminum 2024', category: 'frame', price: 999, weight: 3200, colors: [{ name: 'Black', hex: '#111' }, { name: 'Red', hex: '#cc0000' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }, { key: 'Material', label: 'Material', value: 'Aluminium' }], isNew: false, rating: 4.5 },

  // ── COMMENCAL ───────────────────────────────────────────
  { id: 'comm-meta-ht-2024', brand: 'Commencal', model: 'META HT AM Carbon 2024', category: 'frame', price: 2199, weight: 2750, colors: [{ name: 'Essential Black', hex: '#111' }, { name: 'Purple', hex: '#4B0082' }, { name: 'Vital Blue', hex: '#003399' }], specs: [{ key: 'Travel', label: 'Travel', value: 'Hardtail' }, { key: 'Material', label: 'Material', value: 'Carbon' }], isNew: false, rating: 4.6 },
  { id: 'comm-meta-2024', brand: 'Commencal', model: 'META V5 Carbon 2024', category: 'frame', price: 2499, weight: 2830, colors: [{ name: 'Essential Black', hex: '#111' }, { name: 'Race Red', hex: '#cc0000' }, { name: 'Purple', hex: '#4B0082' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }, { key: 'Material', label: 'Material', value: 'Carbon' }], isNew: true, rating: 4.7 },
  { id: 'comm-supreme-2024', brand: 'Commencal', model: 'Supreme DH V5 2024', category: 'frame', price: 2899, weight: 3100, colors: [{ name: 'Race Red', hex: '#cc0000' }, { name: 'Black', hex: '#111' }, { name: 'White', hex: '#f0f0f0' }], specs: [{ key: 'Travel', label: 'Travel', value: '200mm' }, { key: 'Type', label: 'Typ', value: 'DH' }], isNew: false, rating: 4.8 },

  // ── CANYON ──────────────────────────────────────────────
  { id: 'canyon-sender-2024', brand: 'Canyon', model: 'Sender CFR LTD 2024', category: 'frame', price: 2600, weight: 2950, colors: [{ name: 'Black', hex: '#111' }, { name: 'Racing Grey', hex: '#888' }], specs: [{ key: 'Travel', label: 'Travel', value: '200mm' }, { key: 'Material', label: 'Material', value: 'CFR Carbon' }], isNew: false, rating: 4.7 },
  { id: 'canyon-spectral-2024', brand: 'Canyon', model: 'Spectral CF 8 2024', category: 'frame', price: 1799, weight: 2750, colors: [{ name: 'Blue', hex: '#003399' }, { name: 'Black', hex: '#111' }, { name: 'Turquoise', hex: '#008080' }], specs: [{ key: 'Travel', label: 'Travel', value: '150mm' }], isNew: false, rating: 4.6 },
  { id: 'canyon-torque-2024', brand: 'Canyon', model: 'Torque CF 8 2024', category: 'frame', price: 2099, weight: 2900, colors: [{ name: 'Black', hex: '#111' }, { name: 'Teal', hex: '#008080' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.7 },

  // ── YT INDUSTRIES ───────────────────────────────────────
  { id: 'yt-tues-2024', brand: 'YT Industries', model: 'TUES CF Pro 2024', category: 'frame', price: 2200, weight: 3000, colors: [{ name: 'Raw Carbon', hex: '#2a2a2a' }, { name: 'Acid Green', hex: '#7FFF00' }, { name: 'Midnight Blue', hex: '#003366' }], specs: [{ key: 'Travel', label: 'Travel', value: '200mm' }], isNew: false, rating: 4.6 },
  { id: 'yt-capra-2024', brand: 'YT Industries', model: 'CAPRA CF Pro 2024', category: 'frame', price: 1999, weight: 2850, colors: [{ name: 'Black', hex: '#111' }, { name: 'Forest Green', hex: '#228B22' }], specs: [{ key: 'Travel', label: 'Travel', value: '165mm' }], isNew: false, rating: 4.6 },
  { id: 'yt-decoy-2024', brand: 'YT Industries', model: 'DECOY CF Pro 2024', category: 'frame', price: 2499, weight: 4200, colors: [{ name: 'Nightfall', hex: '#0d0d1a' }, { name: 'Acid Green', hex: '#7FFF00' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }, { key: 'Type', label: 'Typ', value: 'E-MTB' }], isNew: false, rating: 4.5 },

  // ── NUKEPROOF ───────────────────────────────────────────
  { id: 'nukeproof-mega-2024', brand: 'Nukeproof', model: 'Mega 297 Factory Carbon 2024', category: 'frame', price: 2099, weight: 2700, colors: [{ name: 'Concrete Grey', hex: '#777' }, { name: 'Black', hex: '#111' }, { name: 'Forest Green', hex: '#228B22' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }], isNew: false, rating: 4.7 },
  { id: 'nukeproof-giga-2024', brand: 'Nukeproof', model: 'Giga 297 Factory Carbon 2024', category: 'frame', price: 2299, weight: 2800, colors: [{ name: 'Concrete Grey', hex: '#777' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '190mm' }], isNew: false, rating: 4.7 },
  { id: 'nukeproof-pulse-2024', brand: 'Nukeproof', model: 'Pulse DH Carbon 2024', category: 'frame', price: 2599, weight: 3000, colors: [{ name: 'Concrete Grey', hex: '#777' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '200mm' }, { key: 'Type', label: 'Typ', value: 'DH' }], isNew: false, rating: 4.7 },

  // ── ROCKY MOUNTAIN ──────────────────────────────────────
  { id: 'rocky-slayer-2024', brand: 'Rocky Mountain', model: 'Slayer Carbon 2024', category: 'frame', price: 2499, weight: 2900, colors: [{ name: 'Black', hex: '#111' }, { name: 'Mud Brown', hex: '#8B4513' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.7 },
  { id: 'rocky-maiden-2024', brand: 'Rocky Mountain', model: 'Maiden Carbon 2024', category: 'frame', price: 2799, weight: 3100, colors: [{ name: 'Carbon Black', hex: '#111' }, { name: 'Red', hex: '#cc0000' }], specs: [{ key: 'Travel', label: 'Travel', value: '200mm' }, { key: 'Type', label: 'Typ', value: 'DH' }], isNew: false, rating: 4.7 },

  // ── IBIS ────────────────────────────────────────────────
  { id: 'ibis-mojo-2024', brand: 'Ibis', model: 'Mojo HD5 2024', category: 'frame', price: 2400, weight: 2700, colors: [{ name: 'Papaya Punch', hex: '#FF6B35' }, { name: 'Carbon Black', hex: '#1a1a1a' }, { name: 'Radberry', hex: '#C41E3A' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.6 },
  { id: 'ibis-oso-2024', brand: 'Ibis', model: 'Oso DH 2024', category: 'frame', price: 2799, weight: 3150, colors: [{ name: 'Black', hex: '#111' }, { name: 'Radberry', hex: '#C41E3A' }], specs: [{ key: 'Travel', label: 'Travel', value: '200mm' }, { key: 'Type', label: 'Typ', value: 'DH' }], isNew: true, rating: 4.7 },

  // ── PIVOT ───────────────────────────────────────────────
  { id: 'pivot-firebird-2024', brand: 'Pivot', model: 'Firebird Carbon 2024', category: 'frame', price: 2800, weight: 2600, colors: [{ name: 'Gloss Black', hex: '#111' }, { name: 'Deep Red', hex: '#7a0000' }, { name: 'Pewter', hex: '#96a0a8' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.7 },
  { id: 'pivot-mach6-2024', brand: 'Pivot', model: 'Mach 6 Carbon 2024', category: 'frame', price: 2500, weight: 2500, colors: [{ name: 'Black', hex: '#111' }, { name: 'Teal', hex: '#008080' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }], isNew: false, rating: 4.8 },

  // ── NORCO ───────────────────────────────────────────────
  { id: 'norco-range-2024', brand: 'Norco', model: 'Range C1 2024', category: 'frame', price: 2199, weight: 2800, colors: [{ name: 'Forest Green', hex: '#228B22' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.6 },
  { id: 'norco-aurum-2024', brand: 'Norco', model: 'Aurum C DH 2024', category: 'frame', price: 2699, weight: 3100, colors: [{ name: 'Black', hex: '#111' }, { name: 'Gold', hex: '#D4AF37' }], specs: [{ key: 'Travel', label: 'Travel', value: '200mm' }, { key: 'Type', label: 'Typ', value: 'DH' }], isNew: false, rating: 4.7 },

  // ── EVIL ────────────────────────────────────────────────
  { id: 'evil-following-2024', brand: 'Evil', model: 'Following MBL 2024', category: 'frame', price: 2100, weight: 2800, colors: [{ name: 'Raw', hex: '#c0c0c0' }, { name: 'Midnight', hex: '#191970' }, { name: 'Root Beer', hex: '#8B4513' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }], isNew: false, rating: 4.6 },
  { id: 'evil-wreckoning-2024', brand: 'Evil', model: 'Wreckoning LB 2024', category: 'frame', price: 2350, weight: 2900, colors: [{ name: 'Raw', hex: '#c0c0c0' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.7 },

  // ── FORBIDDEN ───────────────────────────────────────────
  { id: 'forbidden-druid-2024', brand: 'Forbidden', model: 'Druid V2 2024', category: 'frame', price: 2350, weight: 2650, colors: [{ name: 'Carbon', hex: '#1a1a1a' }, { name: 'Blood Red', hex: '#8B0000' }], specs: [{ key: 'Travel', label: 'Travel', value: '150mm' }], isNew: false, rating: 4.7 },
  { id: 'forbidden-dreadnought-2024', brand: 'Forbidden', model: 'Dreadnought 2024', category: 'frame', price: 2799, weight: 2950, colors: [{ name: 'Carbon', hex: '#1a1a1a' }, { name: 'Blood Red', hex: '#8B0000' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: true, rating: 4.8 },

  // ── INTENSE ─────────────────────────────────────────────
  { id: 'intense-m16-2024', brand: 'Intense', model: 'M16 Expert 2024', category: 'frame', price: 3000, weight: 3100, colors: [{ name: 'Gloss Carbon', hex: '#1a1a1a' }, { name: 'Red', hex: '#cc1100' }], specs: [{ key: 'Travel', label: 'Travel', value: '210mm' }], isNew: false, rating: 4.7 },
  { id: 'intense-tracer-2024', brand: 'Intense', model: 'Tracer 279 Expert 2024', category: 'frame', price: 2399, weight: 2720, colors: [{ name: 'Carbon', hex: '#1a1a1a' }, { name: 'Blue', hex: '#003399' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.6 },

  // ── SCOTT ───────────────────────────────────────────────
  { id: 'scott-gambler-2024', brand: 'Scott', model: 'Gambler 900 Tuned 2024', category: 'frame', price: 3400, weight: 3000, colors: [{ name: 'Sonic Blue', hex: '#1E90FF' }, { name: 'Black', hex: '#111' }, { name: 'Orange', hex: '#FF6600' }], specs: [{ key: 'Travel', label: 'Travel', value: '210mm' }], isNew: false, rating: 4.8 },
  { id: 'scott-ransom-2024', brand: 'Scott', model: 'Ransom 900 Tuned 2024', category: 'frame', price: 2899, weight: 2750, colors: [{ name: 'Black', hex: '#111' }, { name: 'Orange', hex: '#FF6600' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.7 },

  // ── KONA ────────────────────────────────────────────────
  { id: 'kona-operator-2024', brand: 'Kona', model: 'Operator CR DL 2024', category: 'frame', price: 2199, weight: 3000, colors: [{ name: 'Gloss Black', hex: '#111' }, { name: 'Gloss Red', hex: '#cc0000' }], specs: [{ key: 'Travel', label: 'Travel', value: '200mm' }, { key: 'Type', label: 'Typ', value: 'DH' }], isNew: false, rating: 4.5 },
  { id: 'kona-process-2024', brand: 'Kona', model: 'Process 153 CR/DL 2024', category: 'frame', price: 1799, weight: 2750, colors: [{ name: 'Black', hex: '#111' }, { name: 'Gloss Blue', hex: '#003399' }], specs: [{ key: 'Travel', label: 'Travel', value: '153mm' }], isNew: false, rating: 4.5 },

  // ── GT ──────────────────────────────────────────────────
  { id: 'gt-fury-2024', brand: 'GT', model: 'Fury Carbon Expert 2024', category: 'frame', price: 2499, weight: 3050, colors: [{ name: 'Black', hex: '#111' }, { name: 'Red', hex: '#cc0000' }, { name: 'Teal', hex: '#008080' }], specs: [{ key: 'Travel', label: 'Travel', value: '203mm' }, { key: 'Type', label: 'Typ', value: 'DH' }], isNew: false, rating: 4.6 },

  // ── DEVINCI ─────────────────────────────────────────────
  { id: 'devinci-spartan-2024', brand: 'Devinci', model: 'Spartan Carbon GX Eagle 2024', category: 'frame', price: 2299, weight: 2850, colors: [{ name: 'Black', hex: '#111' }, { name: 'Blue', hex: '#003399' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }], isNew: false, rating: 4.6 },
  { id: 'devinci-wilson-2024', brand: 'Devinci', model: 'Wilson Carbon NX Eagle 2024', category: 'frame', price: 2699, weight: 3000, colors: [{ name: 'Black', hex: '#111' }, { name: 'Red', hex: '#cc0000' }], specs: [{ key: 'Travel', label: 'Travel', value: '200mm' }, { key: 'Type', label: 'Typ', value: 'DH' }], isNew: false, rating: 4.6 },

  // ── MERIDA ──────────────────────────────────────────────
  { id: 'merida-one-sixty-2024', brand: 'Merida', model: 'ONE-SIXTY 10K 2024', category: 'frame', price: 2399, weight: 2800, colors: [{ name: 'Silk Dark Silver', hex: '#555' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }], isNew: false, rating: 4.6 },
  { id: 'merida-ninety-six-2024', brand: 'Merida', model: 'NINETY-SIX RC 10K 2024', category: 'frame', price: 2199, weight: 2650, colors: [{ name: 'Silk Dark Silver', hex: '#555' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '130mm' }], isNew: false, rating: 4.6 },

  // ── CUBE ────────────────────────────────────────────────
  { id: 'cube-stereo-2024', brand: 'Cube', model: 'Stereo 170 SLT 2024', category: 'frame', price: 1999, weight: 2900, colors: [{ name: 'Carbon & Grey', hex: '#555' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.5 },
  { id: 'cube-two15-2024', brand: 'Cube', model: 'TWO15 C:68X Pro 2024', category: 'frame', price: 2299, weight: 3050, colors: [{ name: 'Liquid Metal', hex: '#8a9ba8' }, { name: 'Carbon', hex: '#1a1a1a' }], specs: [{ key: 'Travel', label: 'Travel', value: '215mm' }, { key: 'Type', label: 'Typ', value: 'DH' }], isNew: false, rating: 4.5 },

  // ── NICOLAI ─────────────────────────────────────────────
  { id: 'nicolai-geometron-2024', brand: 'Nicolai', model: 'Geometron G1 2024', category: 'frame', price: 2199, weight: 3200, colors: [{ name: 'Black', hex: '#111' }, { name: 'Green', hex: '#228B22' }, { name: 'Custom', hex: '#ff4400' }], specs: [{ key: 'Travel', label: 'Travel', value: '180mm' }, { key: 'Material', label: 'Material', value: 'Stahl/Aluminium' }], description: 'Handgefertigt in Bayern. Einzigartiges Design.', isNew: false, rating: 4.7 },

  // ── WHYTE ───────────────────────────────────────────────
  { id: 'whyte-g170-2024', brand: 'Whyte', model: 'G-170 Works 2024', category: 'frame', price: 2099, weight: 2850, colors: [{ name: 'Racing Green', hex: '#005a00' }, { name: 'Matte Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.6 },

  // ── ORANGE ──────────────────────────────────────────────
  { id: 'orange-stage-evo-2024', brand: 'Orange', model: 'Stage Evo 2024', category: 'frame', price: 1899, weight: 3100, colors: [{ name: 'Orange', hex: '#FF6600' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }, { key: 'Material', label: 'Material', value: 'Aluminium' }], description: 'Handgefertigt in Halifax, England.', isNew: false, rating: 4.6 },

  // ── ATHERTON ────────────────────────────────────────────
  { id: 'atherton-am-2024', brand: 'Atherton Bikes', model: 'AM.160 Custom 2024', category: 'frame', price: 4999, weight: 2500, colors: [{ name: 'Raw', hex: '#c0c0c0' }, { name: 'Black', hex: '#111' }, { name: 'Custom', hex: '#ff4400' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }, { key: 'Material', label: 'Material', value: 'Titanium/Carbon' }], description: 'Handgefertigt. Titanium-Dropouts. Kustom-Lacke.', isNew: false, rating: 4.9 },
  { id: 'atherton-dh-2024', brand: 'Atherton Bikes', model: 'DH.170 Custom 2024', category: 'frame', price: 5499, weight: 2800, colors: [{ name: 'Raw Titanium', hex: '#878681' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }, { key: 'Type', label: 'Typ', value: 'DH' }, { key: 'Material', label: 'Material', value: 'Titanium/Carbon' }], isNew: false, rating: 5.0 },

  // ── MARIN ───────────────────────────────────────────────
  { id: 'marin-rift-2024', brand: 'Marin', model: 'Rift Zone Carbon 2 2024', category: 'frame', price: 1599, weight: 2800, colors: [{ name: 'Blue/Silver', hex: '#4682B4' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Travel', label: 'Travel', value: '140mm' }], isNew: false, rating: 4.5 },

  // ── CANNONDALE ──────────────────────────────────────────
  { id: 'cannondale-jekyll-2024', brand: 'Cannondale', model: 'Jekyll Carbon 1 2024', category: 'frame', price: 2699, weight: 2750, colors: [{ name: 'Acid Fizz', hex: '#90EE90' }, { name: 'Black Pearl', hex: '#111' }, { name: 'Aero Blue', hex: '#003399' }], specs: [{ key: 'Travel', label: 'Travel', value: '170mm' }], isNew: false, rating: 4.7 },

  // ── GUERRILLA GRAVITY ────────────────────────────────────
  { id: 'gg-gnarvana-2024', brand: 'Guerrilla Gravity', model: 'Gnarvana 2024', category: 'frame', price: 1699, weight: 2750, colors: [{ name: 'Raw Carbon', hex: '#2a2a2a' }, { name: 'Black', hex: '#111' }, { name: 'Blue', hex: '#003399' }], specs: [{ key: 'Travel', label: 'Travel', value: '160mm' }, { key: 'Material', label: 'Material', value: 'Carbon' }], isNew: false, rating: 4.6 },
];
