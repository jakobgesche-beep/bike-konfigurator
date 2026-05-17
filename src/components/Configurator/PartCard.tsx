'use client';
import { useBikeStore } from '@/store/bikeStore';
import type { BikePart, BikeCategory } from '@/types/bike';
import { ColorPicker } from './ColorPicker';

interface PartCardProps {
  part: BikePart;
  category: BikeCategory;
  isSelected: boolean;
}

export function PartCard({ part, category, isSelected }: PartCardProps) {
  const { setPart, config } = useBikeStore();
  const isActive = config[category]?.id === part.id;

  return (
    <div
      className={`rounded-xl border p-3 cursor-pointer transition-all duration-200 group
        ${isActive
          ? 'border-orange-500 bg-[#1a1020] shadow-[0_0_16px_rgba(249,115,22,0.15)]'
          : 'border-[#2a2a3a] bg-[#12121a] hover:border-[#3a3a4a] hover:bg-[#161620]'
        }`}
      onClick={() => setPart(category, isActive ? null : part)}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-orange-400 font-semibold truncate">{part.brand}</p>
          <p className="text-sm text-white font-medium leading-tight mt-0.5 truncate">{part.model}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-sm text-white font-bold">{part.price.toLocaleString('de-DE')} €</p>
          {part.weight && (
            <p className="text-xs text-gray-500">{(part.weight / 1000).toFixed(2)} kg</p>
          )}
        </div>
      </div>

      {/* Specs */}
      {part.specs.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {part.specs.slice(0, 3).map(spec => (
            <span key={spec.key} className="text-[10px] bg-[#1e1e2e] text-gray-400 rounded px-1.5 py-0.5">
              {spec.value}
            </span>
          ))}
        </div>
      )}

      {/* Badges */}
      <div className="mt-2 flex gap-1">
        {part.isNew && (
          <span className="text-[10px] bg-orange-600 text-white rounded px-1.5 py-0.5 font-semibold">NEU</span>
        )}
        {part.rating && (
          <span className="text-[10px] bg-[#1e1e2e] text-yellow-400 rounded px-1.5 py-0.5">
            ★ {part.rating}
          </span>
        )}
      </div>

      {/* Color picker (only when selected) */}
      {isActive && <ColorPicker part={part} />}

      {/* Select/Deselect button */}
      <button
        className={`mt-3 w-full py-1.5 rounded text-xs font-semibold transition-colors ${
          isActive
            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40 hover:bg-red-900/30 hover:text-red-400'
            : 'bg-[#1e1e2e] text-gray-300 border border-[#333] hover:bg-orange-600 hover:text-white hover:border-orange-600'
        }`}
        onClick={e => {
          e.stopPropagation();
          setPart(category, isActive ? null : part);
        }}
      >
        {isActive ? '✓ Ausgewählt' : 'Auswählen'}
      </button>
    </div>
  );
}
