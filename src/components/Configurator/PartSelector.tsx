'use client';
import { useState, useMemo } from 'react';
import { useBikeStore } from '@/store/bikeStore';
import { getPartsByCategory } from '@/data/index';
import { CATEGORY_LABELS } from '@/types/bike';
import type { BikeCategory } from '@/types/bike';
import { PartCard } from './PartCard';
import { ChainEditor } from './ChainEditor';

interface PartSelectorProps {
  category: BikeCategory;
}

export function PartSelector({ category }: PartSelectorProps) {
  const { filterBrand, setFilterBrand, searchQuery, setSearchQuery, config } = useBikeStore();
  const [sortBy, setSortBy] = useState<'price' | 'weight' | 'rating'>('price');

  const allParts = getPartsByCategory(category);

  const brands = useMemo(
    () => Array.from(new Set(allParts.map(p => p.brand))).sort(),
    [allParts]
  );

  const filtered = useMemo(() => {
    let parts = allParts;
    if (filterBrand) parts = parts.filter(p => p.brand === filterBrand);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      parts = parts.filter(
        p => p.model.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      );
    }
    return [...parts].sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'weight') return (a.weight ?? 9999) - (b.weight ?? 9999);
      if (sortBy === 'rating') return (b.rating ?? 0) - (a.rating ?? 0);
      return 0;
    });
  }, [allParts, filterBrand, searchQuery, sortBy]);

  const label = CATEGORY_LABELS[category];

  if (category === 'chain' && config.chain) {
    return (
      <div className="space-y-4">
        <h3 className="text-white font-bold text-lg">{label}</h3>
        {/* Chain part selection first */}
        <div className="space-y-2">
          {allParts.map(part => (
            <PartCard key={part.id} part={part} category={category} isSelected={config[category]?.id === part.id} />
          ))}
        </div>
        {/* Chain link editor */}
        <div className="mt-4 border border-[#2a2a3a] rounded-xl p-4 bg-[#0e0e16]">
          <h4 className="text-orange-400 font-semibold text-sm mb-3">Kettenglied-Editor</h4>
          <ChainEditor />
        </div>
      </div>
    );
  }

  if (allParts.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        <p className="text-3xl mb-2">🔧</p>
        <p className="text-sm">Keine Teile für diese Kategorie</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-white font-bold text-lg">{label}</h3>

      {/* Search */}
      <input
        type="text"
        placeholder="Suchen…"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="w-full bg-[#12121a] border border-[#2a2a3a] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
      />

      {/* Brand filter */}
      {brands.length > 1 && (
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setFilterBrand(null)}
            className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
              !filterBrand
                ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                : 'border-[#333] text-gray-500 hover:border-[#555]'
            }`}
          >
            Alle
          </button>
          {brands.map(b => (
            <button
              key={b}
              onClick={() => setFilterBrand(filterBrand === b ? null : b)}
              className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                filterBrand === b
                  ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                  : 'border-[#333] text-gray-500 hover:border-[#555]'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      )}

      {/* Sort */}
      <div className="flex gap-2 text-xs">
        <span className="text-gray-600 self-center">Sortieren:</span>
        {(['price', 'weight', 'rating'] as const).map(s => (
          <button
            key={s}
            onClick={() => setSortBy(s)}
            className={`px-2 py-1 rounded transition-colors ${
              sortBy === s ? 'text-orange-400' : 'text-gray-600 hover:text-gray-400'
            }`}
          >
            {s === 'price' ? 'Preis' : s === 'weight' ? 'Gewicht' : 'Bewertung'}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-xs text-gray-600">{filtered.length} Teile gefunden</p>

      {/* Cards */}
      <div className="space-y-2">
        {filtered.map(part => (
          <PartCard
            key={part.id}
            part={part}
            category={category}
            isSelected={config[category]?.id === part.id}
          />
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-600 text-sm text-center py-6">Keine Ergebnisse</p>
        )}
      </div>
    </div>
  );
}
