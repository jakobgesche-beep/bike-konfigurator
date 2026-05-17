import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { BikeConfiguration, BikePart, BikeCategory, ChainLink } from '@/types/bike';

interface BikeStore {
  config: BikeConfiguration;
  selectedColors: Record<string, string>;
  chainLinks: ChainLink[];
  activeCategory: string;
  activePart: BikeCategory | null;
  selectedPartForDetail: BikePart | null;
  cameraAngle: 'side' | 'front' | 'rear' | 'top' | 'isometric';
  showSpecs: boolean;
  filterBrand: string | null;
  searchQuery: string;

  setPart: (category: BikeCategory, part: BikePart | null) => void;
  setPartColor: (partId: string, color: string) => void;
  setChainLinkColor: (index: number, color: string) => void;
  setAllChainLinksColor: (color: string) => void;
  setActiveCategory: (id: string) => void;
  setActivePart: (category: BikeCategory | null) => void;
  setSelectedPartForDetail: (part: BikePart | null) => void;
  setCameraAngle: (angle: 'side' | 'front' | 'rear' | 'top' | 'isometric') => void;
  setShowSpecs: (show: boolean) => void;
  setFilterBrand: (brand: string | null) => void;
  setSearchQuery: (q: string) => void;
  resetConfig: () => void;
  getTotalPrice: () => number;
  getTotalWeight: () => number;
  getCompletionPercent: () => number;
}

const emptyConfig: BikeConfiguration = {
  frame: null, fork: null, shock: null, headset: null,
  stem: null, handlebar: null, grips: null, barends: null,
  crankset: null, bottomBracket: null, chain: null, cassette: null,
  rearDerailleur: null, frontDerailleur: null, shifter: null,
  brakeLevers: null, brakeCaliper: null, brakeRotor: null, brakeHose: null,
  wheelsetFront: null, wheelsetRear: null,
  rimFront: null, rimRear: null, hubFront: null, hubRear: null, spokes: null,
  tireFront: null, tireRear: null,
  dropper: null, saddle: null, pedals: null, headCapAndBolts: null,
};

const generateDefaultChainLinks = (): ChainLink[] =>
  Array.from({ length: 126 }, (_, i) => ({ index: i, color: '#888888' }));

const ESSENTIAL_PARTS: (keyof BikeConfiguration)[] = [
  'frame', 'fork', 'shock', 'handlebar', 'crankset',
  'chain', 'brakeLevers', 'rimFront', 'rimRear', 'tireFront', 'tireRear', 'pedals',
];

export const useBikeStore = create<BikeStore>()(
  persist(
    (set, get) => ({
      config: emptyConfig,
      selectedColors: {},
      chainLinks: generateDefaultChainLinks(),
      activeCategory: 'chassis',
      activePart: null,
      selectedPartForDetail: null,
      cameraAngle: 'side',
      showSpecs: false,
      filterBrand: null,
      searchQuery: '',

      setPart: (category, part) => {
        set(state => ({
          config: { ...state.config, [category]: part },
          selectedColors: part
            ? { ...state.selectedColors, [part.id]: part.colors[0]?.hex ?? '#111111' }
            : state.selectedColors,
        }));
      },

      setPartColor: (partId, color) => {
        set(state => ({
          selectedColors: { ...state.selectedColors, [partId]: color },
        }));
      },

      setChainLinkColor: (index, color) => {
        set(state => ({
          chainLinks: state.chainLinks.map(l =>
            l.index === index ? { ...l, color } : l
          ),
        }));
      },

      setAllChainLinksColor: (color) => {
        set(state => ({
          chainLinks: state.chainLinks.map(l => ({ ...l, color })),
        }));
      },

      setActiveCategory: (id) => set({ activeCategory: id }),
      setActivePart: (category) => set({ activePart: category }),
      setSelectedPartForDetail: (part) => set({ selectedPartForDetail: part }),
      setCameraAngle: (angle) => set({ cameraAngle: angle }),
      setShowSpecs: (show) => set({ showSpecs: show }),
      setFilterBrand: (brand) => set({ filterBrand: brand }),
      setSearchQuery: (q) => set({ searchQuery: q }),

      resetConfig: () => set({
        config: emptyConfig,
        selectedColors: {},
        chainLinks: generateDefaultChainLinks(),
      }),

      getTotalPrice: () => {
        const { config } = get();
        return Object.values(config).reduce((sum, part) =>
          part ? sum + part.price : sum, 0
        );
      },

      getTotalWeight: () => {
        const { config } = get();
        return Object.values(config).reduce((sum, part) =>
          part && part.weight ? sum + part.weight : sum, 0
        );
      },

      getCompletionPercent: () => {
        const { config } = get();
        const filled = ESSENTIAL_PARTS.filter(k => config[k] !== null).length;
        return Math.round((filled / ESSENTIAL_PARTS.length) * 100);
      },
    }),
    { name: 'bike-konfigurator-v1' }
  )
);
