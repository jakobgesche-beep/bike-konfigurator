'use client';
import { useBikeStore } from '@/store/bikeStore';
import { CONFIGURATOR_CATEGORIES, CATEGORY_LABELS } from '@/types/bike';
import type { BikeCategory } from '@/types/bike';
import { getPartsByCategory } from '@/data/index';

interface PartSubNavProps {
  onSelectPart: (cat: BikeCategory) => void;
  activePart: BikeCategory | null;
}

export function PartSubNav({ onSelectPart, activePart }: PartSubNavProps) {
  const { activeCategory, config } = useBikeStore();

  const category = CONFIGURATOR_CATEGORIES.find(c => c.id === activeCategory);
  if (!category) return null;

  return (
    <div className="flex flex-wrap gap-1.5 py-2">
      {category.parts.map(partCat => {
        const isSelected = config[partCat] !== null;
        const isActive = activePart === partCat;
        const hasItems = getPartsByCategory(partCat).length > 0;

        return (
          <button
            key={partCat}
            onClick={() => hasItems && onSelectPart(partCat)}
            disabled={!hasItems}
            className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
              !hasItems
                ? 'border-[#222] text-gray-700 cursor-not-allowed'
                : isActive
                  ? 'border-orange-500 bg-orange-500/10 text-orange-300'
                  : isSelected
                    ? 'border-green-700/50 bg-green-900/20 text-green-400'
                    : 'border-[#333] text-gray-400 hover:border-[#555] hover:text-gray-200'
            }`}
          >
            {isSelected && <span className="mr-1">✓</span>}
            {CATEGORY_LABELS[partCat]}
          </button>
        );
      })}
    </div>
  );
}
