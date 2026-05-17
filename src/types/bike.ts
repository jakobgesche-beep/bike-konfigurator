export type BikeCategory =
  | 'frame'
  | 'fork'
  | 'shock'
  | 'headset'
  | 'stem'
  | 'handlebar'
  | 'grips'
  | 'crankset'
  | 'bottomBracket'
  | 'chain'
  | 'cassette'
  | 'rearDerailleur'
  | 'frontDerailleur'
  | 'shifter'
  | 'brakeLevers'
  | 'brakeCaliper'
  | 'brakeRotor'
  | 'brakeHose'
  | 'wheelsetFront'
  | 'wheelsetRear'
  | 'rimFront'
  | 'rimRear'
  | 'hubFront'
  | 'hubRear'
  | 'spokes'
  | 'tireFront'
  | 'tireRear'
  | 'dropper'
  | 'saddle'
  | 'pedals'
  | 'headCapAndBolts'
  | 'barends';

export interface ColorOption {
  name: string;
  hex: string;
}

export interface BikePartSpec {
  key: string;
  label: string;
  value: string;
}

export interface BikePart {
  id: string;
  brand: string;
  model: string;
  category: BikeCategory;
  price: number;
  weight?: number; // grams
  colors: ColorOption[];
  specs: BikePartSpec[];
  modelFile?: string; // path to GLB/GLTF file
  imageUrl?: string;
  description?: string;
  isNew?: boolean;
  rating?: number;
}

export interface ChainLink {
  index: number;
  color: string; // hex color
}

export interface BikeConfiguration {
  frame: BikePart | null;
  fork: BikePart | null;
  shock: BikePart | null;
  headset: BikePart | null;
  stem: BikePart | null;
  handlebar: BikePart | null;
  grips: BikePart | null;
  crankset: BikePart | null;
  bottomBracket: BikePart | null;
  chain: BikePart | null;
  cassette: BikePart | null;
  rearDerailleur: BikePart | null;
  frontDerailleur: BikePart | null;
  shifter: BikePart | null;
  brakeLevers: BikePart | null;
  brakeCaliper: BikePart | null;
  brakeRotor: BikePart | null;
  brakeHose: BikePart | null;
  wheelsetFront: BikePart | null;
  wheelsetRear: BikePart | null;
  rimFront: BikePart | null;
  rimRear: BikePart | null;
  hubFront: BikePart | null;
  hubRear: BikePart | null;
  spokes: BikePart | null;
  tireFront: BikePart | null;
  tireRear: BikePart | null;
  dropper: BikePart | null;
  saddle: BikePart | null;
  pedals: BikePart | null;
  headCapAndBolts: BikePart | null;
  barends: BikePart | null;
}

export interface SelectedColors {
  [partId: string]: string; // hex color
}

export interface ConfiguratorCategory {
  id: string;
  label: string;
  icon: string;
  parts: BikeCategory[];
}

export const CONFIGURATOR_CATEGORIES: ConfiguratorCategory[] = [
  { id: 'chassis', label: 'Chassis', icon: '🏗️', parts: ['frame', 'shock', 'fork', 'headset'] },
  { id: 'cockpit', label: 'Cockpit', icon: '🎛️', parts: ['stem', 'handlebar', 'grips', 'barends'] },
  { id: 'drivetrain', label: 'Antrieb', icon: '⚙️', parts: ['crankset', 'bottomBracket', 'chain', 'cassette', 'rearDerailleur', 'frontDerailleur', 'shifter'] },
  { id: 'brakes', label: 'Bremsen', icon: '🛑', parts: ['brakeLevers', 'brakeCaliper', 'brakeRotor', 'brakeHose'] },
  { id: 'wheels', label: 'Laufräder', icon: '⭕', parts: ['wheelsetFront', 'wheelsetRear', 'rimFront', 'rimRear', 'hubFront', 'hubRear', 'spokes', 'tireFront', 'tireRear'] },
  { id: 'contact', label: 'Kontaktpunkte', icon: '🦶', parts: ['dropper', 'saddle', 'pedals'] },
  { id: 'hardware', label: 'Hardware', icon: '🔩', parts: ['headCapAndBolts'] },
];

export const CATEGORY_LABELS: Record<BikeCategory, string> = {
  frame: 'Rahmen',
  fork: 'Federgabel',
  shock: 'Dämpfer',
  headset: 'Steuersatz',
  stem: 'Vorbau',
  handlebar: 'Lenker',
  grips: 'Griffe',
  crankset: 'Kurbelsatz',
  bottomBracket: 'Tretlager',
  chain: 'Kette',
  cassette: 'Kassette',
  rearDerailleur: 'Schaltwerk',
  frontDerailleur: 'Umwerfer',
  shifter: 'Schalthebel',
  brakeLevers: 'Bremshebel',
  brakeCaliper: 'Bremssattel',
  brakeRotor: 'Bremsscheibe',
  brakeHose: 'Bremsleitung',
  wheelsetFront: 'Laufrad vorne',
  wheelsetRear: 'Laufrad hinten',
  rimFront: 'Felge vorne',
  rimRear: 'Felge hinten',
  hubFront: 'Nabe vorne',
  hubRear: 'Nabe hinten',
  spokes: 'Speichen',
  tireFront: 'Reifen vorne',
  tireRear: 'Reifen hinten',
  dropper: 'Dropper Post',
  saddle: 'Sattel',
  pedals: 'Pedale',
  headCapAndBolts: 'Schrauben & Caps',
  barends: 'Barends',
};
