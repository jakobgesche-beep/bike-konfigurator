import type { BikePart } from '@/types/bike';

export const cranksets: BikePart[] = [
  { id: 'sram-xx-sl-2024', brand: 'SRAM', model: 'XX SL Eagle Boost 2024', category: 'crankset', price: 699, weight: 480, colors: [{ name: 'Black', hex: '#111' }, { name: 'Rainbow', hex: '#ff0080' }], specs: [{ key: 'Arms', label: 'Länge', value: '170/175mm' }, { key: 'Spider', label: 'Spider', value: 'Direct Mount' }, { key: 'Material', label: 'Material', value: 'Carbon' }], isNew: false, rating: 4.9 },
  { id: 'sram-x0-eagle-2024', brand: 'SRAM', model: 'X0 Eagle T-Type Boost 2024', category: 'crankset', price: 399, weight: 560, colors: [{ name: 'Black', hex: '#111' }, { name: 'Gold', hex: '#D4AF37' }], specs: [{ key: 'Arms', label: 'Länge', value: '170/175mm' }], isNew: true, rating: 4.8 },
  { id: 'sram-gx-eagle-2024', brand: 'SRAM', model: 'GX Eagle T-Type Boost 2024', category: 'crankset', price: 199, weight: 640, colors: [{ name: 'Black', hex: '#111' }], specs: [{ key: 'Arms', label: 'Länge', value: '170/175mm' }], isNew: false, rating: 4.6 },
  { id: 'shimano-xtr-2024', brand: 'Shimano', model: 'XTR FC-M9120 2024', category: 'crankset', price: 449, weight: 520, colors: [{ name: 'Black/Silver', hex: '#555' }], specs: [{ key: 'Arms', label: 'Länge', value: '165/170/175mm' }, { key: 'Chain', label: 'Kette', value: '12-fach' }], isNew: false, rating: 4.8 },
  { id: 'shimano-xt-2024', brand: 'Shimano', model: 'Deore XT FC-M8120 2024', category: 'crankset', price: 179, weight: 610, colors: [{ name: 'Black', hex: '#111' }], specs: [{ key: 'Arms', label: 'Länge', value: '170/175mm' }], isNew: false, rating: 4.7 },
  { id: 'race-face-next-sl-2024', brand: 'Race Face', model: 'Next SL G5 2024', category: 'crankset', price: 349, weight: 450, colors: [{ name: 'Black', hex: '#111' }, { name: 'Purple', hex: '#800080' }, { name: 'Turquoise', hex: '#40E0D0' }], specs: [{ key: 'Arms', label: 'Länge', value: '165/170/175mm' }, { key: 'Material', label: 'Material', value: 'Carbon' }], isNew: false, rating: 4.8 },
  { id: 'e13-eg-carbon-2024', brand: 'e*thirteen', model: 'Helix Carbon 2024', category: 'crankset', price: 279, weight: 495, colors: [{ name: 'Black', hex: '#111' }, { name: 'Red', hex: '#cc0000' }], specs: [{ key: 'Arms', label: 'Länge', value: '160/165/170/175mm' }], isNew: false, rating: 4.7 },
];

export const chains: BikePart[] = [
  {
    id: 'kmc-x12-tl-2024', brand: 'KMC', model: 'X12-TL Titanium Gold 2024', category: 'chain',
    price: 89, weight: 252,
    colors: [{ name: 'Gold', hex: '#D4AF37' }, { name: 'Silver', hex: '#c0c0c0' }, { name: 'Black', hex: '#111' }],
    specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }, { key: 'Links', label: 'Glieder', value: '126' }, { key: 'Coating', label: 'Beschichtung', value: 'TiN' }],
    description: 'Leichteste KMC Kette. Titannitrid-Beschichtung. Einzelne Glieder farbig konfigurierbar.',
    isNew: false, rating: 4.9,
  },
  {
    id: 'kmc-x12-colored-2024', brand: 'KMC', model: 'X12-EL Colored Links 2024', category: 'chain',
    price: 69, weight: 258,
    colors: [
      { name: 'Black', hex: '#111' },
      { name: 'Red', hex: '#cc0000' },
      { name: 'Blue', hex: '#0033cc' },
      { name: 'Gold', hex: '#D4AF37' },
      { name: 'Rainbow', hex: '#ff0080' },
      { name: 'Green', hex: '#00cc44' },
      { name: 'Purple', hex: '#800080' },
      { name: 'Orange', hex: '#FF6600' },
      { name: 'Silver', hex: '#c0c0c0' },
    ],
    specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }, { key: 'Links', label: 'Glieder', value: '126' }],
    description: 'Fully farbig konfigurierbar – einzelne Glieder in 9 Farben.',
    isNew: true, rating: 4.7,
  },
  { id: 'sram-flattop-2024', brand: 'SRAM', model: 'XX1 Eagle Flattop 2024', category: 'chain', price: 69, weight: 249, colors: [{ name: 'Silver/Black', hex: '#888' }, { name: 'Gold', hex: '#D4AF37' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }], isNew: false, rating: 4.8 },
  { id: 'shimano-xtr-chain-2024', brand: 'Shimano', model: 'XTR CN-M9100 2024', category: 'chain', price: 49, weight: 256, colors: [{ name: 'Silver', hex: '#c0c0c0' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }, { key: 'Links', label: 'Glieder', value: '126' }], isNew: false, rating: 4.8 },
  { id: 'wippermann-connex-2024', brand: 'Wippermann', model: 'Connex 12SX 2024', category: 'chain', price: 55, weight: 260, colors: [{ name: 'Nickel', hex: '#d4d4d4' }, { name: 'Black', hex: '#111' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }], isNew: false, rating: 4.7 },
];

export const cassettes: BikePart[] = [
  { id: 'sram-xg-1299-2024', brand: 'SRAM', model: 'XX Eagle XG-1299 10-52T 2024', category: 'cassette', price: 449, weight: 307, colors: [{ name: 'Black', hex: '#111' }, { name: 'Rainbow', hex: '#ff0080' }], specs: [{ key: 'Range', label: 'Übersetzung', value: '10-52T' }, { key: 'Speed', label: 'Gänge', value: '12-fach' }, { key: 'Material', label: 'Material', value: 'Alu/Stahl' }], isNew: false, rating: 4.9 },
  { id: 'sram-xg-1275-2024', brand: 'SRAM', model: 'GX Eagle XG-1275 10-52T 2024', category: 'cassette', price: 89, weight: 388, colors: [{ name: 'Black', hex: '#111' }], specs: [{ key: 'Range', label: 'Übersetzung', value: '10-52T' }, { key: 'Speed', label: 'Gänge', value: '12-fach' }], isNew: false, rating: 4.6 },
  { id: 'shimano-xtr-cassette-2024', brand: 'Shimano', model: 'XTR CS-M9100 10-51T 2024', category: 'cassette', price: 269, weight: 350, colors: [{ name: 'Silver/Black', hex: '#888' }], specs: [{ key: 'Range', label: 'Übersetzung', value: '10-51T' }, { key: 'Speed', label: 'Gänge', value: '12-fach' }], isNew: false, rating: 4.8 },
  { id: 'e13-lg1-2024', brand: 'e*thirteen', model: 'LG1 Enduro 9-46T 2024', category: 'cassette', price: 199, weight: 325, colors: [{ name: 'Black', hex: '#111' }, { name: 'Red', hex: '#cc0000' }], specs: [{ key: 'Range', label: 'Übersetzung', value: '9-46T' }, { key: 'Speed', label: 'Gänge', value: '11-fach' }], isNew: false, rating: 4.6 },
];

export const rearDerailleurs: BikePart[] = [
  { id: 'sram-xx-sl-rd-2024', brand: 'SRAM', model: 'XX SL Eagle AXS T-Type 2024', category: 'rearDerailleur', price: 649, weight: 245, colors: [{ name: 'Black', hex: '#111' }, { name: 'Rainbow', hex: '#ff0080' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }, { key: 'Connection', label: 'Verbindung', value: 'AXS Wireless' }], isNew: true, rating: 4.9 },
  { id: 'sram-x0-rd-2024', brand: 'SRAM', model: 'X0 Eagle AXS T-Type 2024', category: 'rearDerailleur', price: 449, weight: 280, colors: [{ name: 'Black', hex: '#111' }, { name: 'Gold', hex: '#D4AF37' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }, { key: 'Connection', label: 'Verbindung', value: 'AXS Wireless' }], isNew: true, rating: 4.8 },
  { id: 'sram-gx-rd-2024', brand: 'SRAM', model: 'GX Eagle T-Type 2024', category: 'rearDerailleur', price: 199, weight: 325, colors: [{ name: 'Black', hex: '#111' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }], isNew: false, rating: 4.6 },
  { id: 'shimano-xtr-rd-2024', brand: 'Shimano', model: 'XTR RD-M9120 2024', category: 'rearDerailleur', price: 299, weight: 298, colors: [{ name: 'Black/Silver', hex: '#555' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }, { key: 'Connection', label: 'Verbindung', value: 'Di2 / Mechanisch' }], isNew: false, rating: 4.8 },
  { id: 'shimano-xt-rd-2024', brand: 'Shimano', model: 'Deore XT RD-M8120 2024', category: 'rearDerailleur', price: 119, weight: 315, colors: [{ name: 'Black', hex: '#111' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }], isNew: false, rating: 4.7 },
];

export const shifters: BikePart[] = [
  { id: 'sram-xx-sl-shifter-2024', brand: 'SRAM', model: 'XX SL Eagle AXS Pod 2024', category: 'shifter', price: 249, weight: 69, colors: [{ name: 'Black', hex: '#111' }, { name: 'Rainbow', hex: '#ff0080' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }, { key: 'Connection', label: 'Verbindung', value: 'AXS Wireless' }], isNew: true, rating: 4.9 },
  { id: 'sram-gx-shifter-2024', brand: 'SRAM', model: 'GX Eagle T-Type Pod 2024', category: 'shifter', price: 99, weight: 85, colors: [{ name: 'Black', hex: '#111' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }], isNew: false, rating: 4.6 },
  { id: 'shimano-xtr-shifter-2024', brand: 'Shimano', model: 'XTR SL-M9100 2024', category: 'shifter', price: 179, weight: 95, colors: [{ name: 'Black', hex: '#111' }], specs: [{ key: 'Speed', label: 'Gänge', value: '12-fach' }], isNew: false, rating: 4.8 },
];

export const bottomBrackets: BikePart[] = [
  { id: 'hope-tech-xc-2024', brand: 'Hope', model: 'Hope Tech BSA 2024', category: 'bottomBracket', price: 89, weight: 82, colors: [{ name: 'Black', hex: '#111' }, { name: 'Red', hex: '#cc0000' }, { name: 'Blue', hex: '#0033cc' }, { name: 'Orange', hex: '#FF6600' }, { name: 'Gold', hex: '#D4AF37' }, { name: 'Purple', hex: '#800080' }, { name: 'Stealth', hex: '#333' }], specs: [{ key: 'Standard', label: 'Standard', value: 'BSA 73mm' }], isNew: false, rating: 4.9 },
  { id: 'chris-king-threadfit-2024', brand: 'Chris King', model: 'ThreadFit 24 2024', category: 'bottomBracket', price: 149, weight: 88, colors: [{ name: 'Black', hex: '#111' }, { name: 'Silver', hex: '#c0c0c0' }, { name: 'Red', hex: '#cc0000' }, { name: 'Blue', hex: '#003399' }], specs: [{ key: 'Standard', label: 'Standard', value: 'BSA 73mm' }], isNew: false, rating: 4.9 },
  { id: 'sram-dub-2024', brand: 'SRAM', model: 'DUB BSA 2024', category: 'bottomBracket', price: 45, weight: 95, colors: [{ name: 'Black', hex: '#111' }], specs: [{ key: 'Standard', label: 'Standard', value: 'BSA 73mm' }], isNew: false, rating: 4.6 },
];
