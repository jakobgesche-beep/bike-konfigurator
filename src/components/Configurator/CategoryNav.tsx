'use client';
import { useBikeStore } from '@/store/bikeStore';
import { CONFIGURATOR_CATEGORIES } from '@/types/bike';

export function CategoryNav() {
  const { activeCategory, setActiveCategory, config } = useBikeStore();

  return (
    <nav className="flex flex-col gap-1">
      {CONFIGURATOR_CATEGORIES.map(cat => {
        const filledCount = cat.parts.filter(p => config[p] !== null).length;
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-left transition-all duration-150 ${
              isActive
                ? 'bg-orange-500/15 border border-orange-500/40 text-white'
                : 'text-gray-400 hover:bg-[#1a1a28] hover:text-gray-200'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-base">{cat.icon}</span>
              <span className="text-sm font-medium truncate">{cat.label}</span>
            </div>
            {filledCount > 0 && (
              <span className="text-[10px] bg-orange-600/30 text-orange-400 border border-orange-600/30 rounded-full px-1.5 py-0.5 shrink-0 font-semibold">
                {filledCount}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
