import { frames } from './frames';
import { forks, shocks } from './forks';
import { cranksets, chains, cassettes, rearDerailleurs, shifters, bottomBrackets } from './drivetrain';
import { brakeLevers, brakeCaliper, brakeRotors, brakeHoses } from './brakes';
import { rims, hubs, spokes, tires } from './wheels';
import { handlebars, stems, grips, headsets } from './cockpit';
import { droppers, saddles, pedals, hardware } from './contact';
import type { BikePart, BikeCategory } from '@/types/bike';

const rimsFront = rims.filter(r => r.category === 'rimFront');
const rimsRear = rims.map(r => ({ ...r, id: r.id + '-rear', category: 'rimRear' as BikeCategory }));
const hubsFront = hubs.filter(h => h.category === 'hubFront');
const hubsRear = hubs.filter(h => h.category === 'hubRear');
const tiresFront = tires.filter(t => t.category === 'tireFront');
const tiresRear = tires.filter(t => t.category === 'tireRear');

export const PARTS_DATABASE: Record<BikeCategory, BikePart[]> = {
  frame: frames,
  fork: forks,
  shock: shocks,
  headset: headsets,
  stem: stems,
  handlebar: handlebars,
  grips: grips,
  barends: [],
  crankset: cranksets,
  bottomBracket: bottomBrackets,
  chain: chains,
  cassette: cassettes,
  rearDerailleur: rearDerailleurs,
  frontDerailleur: [],
  shifter: shifters,
  brakeLevers: brakeLevers,
  brakeCaliper: brakeCaliper,
  brakeRotor: brakeRotors,
  brakeHose: brakeHoses,
  wheelsetFront: [],
  wheelsetRear: [],
  rimFront: rimsFront,
  rimRear: rimsRear,
  hubFront: hubsFront,
  hubRear: hubsRear,
  spokes: spokes,
  tireFront: tiresFront,
  tireRear: tiresRear,
  dropper: droppers,
  saddle: saddles,
  pedals: pedals,
  headCapAndBolts: hardware,
};

export function getAllBrands(): string[] {
  const brands = new Set<string>();
  Object.values(PARTS_DATABASE).forEach(parts =>
    parts.forEach(p => brands.add(p.brand))
  );
  return Array.from(brands).sort();
}

export function getPartsByCategory(category: BikeCategory): BikePart[] {
  return PARTS_DATABASE[category] ?? [];
}

export function getPartById(id: string): BikePart | undefined {
  for (const parts of Object.values(PARTS_DATABASE)) {
    const found = parts.find(p => p.id === id);
    if (found) return found;
  }
  return undefined;
}
