'use client';
import { useBikeStore } from '@/store/bikeStore';
import { CATEGORY_LABELS } from '@/types/bike';
import type { BikeCategory, BikeConfiguration } from '@/types/bike';

export function SummaryPanel() {
  const { config, getTotalPrice, getTotalWeight, getCompletionPercent, resetConfig } = useBikeStore();
  const totalPrice = getTotalPrice();
  const totalWeight = getTotalWeight();
  const completion = getCompletionPercent();

  const filledParts = (Object.entries(config) as [BikeCategory, BikeConfiguration[BikeCategory]][])
    .filter(([, part]) => part !== null);

  return (
    <div className="space-y-4">
      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-[#12121a] border border-[#2a2a3a] rounded-xl p-3 text-center">
          <p className="text-orange-400 text-xl font-black">
            {totalPrice.toLocaleString('de-DE')} €
          </p>
          <p className="text-gray-600 text-xs mt-0.5">Gesamt</p>
        </div>
        <div className="bg-[#12121a] border border-[#2a2a3a] rounded-xl p-3 text-center">
          <p className="text-white text-xl font-black">
            {totalWeight >= 1000 ? `${(totalWeight / 1000).toFixed(1)}` : totalWeight}
            <span className="text-xs font-normal text-gray-500 ml-0.5">
              {totalWeight >= 1000 ? 'kg' : 'g'}
            </span>
          </p>
          <p className="text-gray-600 text-xs mt-0.5">Gewicht</p>
        </div>
        <div className="bg-[#12121a] border border-[#2a2a3a] rounded-xl p-3 text-center">
          <p className="text-white text-xl font-black">{completion}<span className="text-xs font-normal text-gray-500">%</span></p>
          <p className="text-gray-600 text-xs mt-0.5">Vollständig</p>
        </div>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>Konfiguration</span>
          <span>{filledParts.length} Teile</span>
        </div>
        <div className="h-1.5 bg-[#1a1a28] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-500"
            style={{ width: `${completion}%` }}
          />
        </div>
      </div>

      {/* Selected parts list */}
      <div className="space-y-1 max-h-64 overflow-y-auto">
        {filledParts.map(([cat, part]) => (
          <div key={cat} className="flex items-center justify-between text-xs py-1 border-b border-[#1a1a28]">
            <div className="min-w-0">
              <p className="text-gray-500 leading-none">{CATEGORY_LABELS[cat]}</p>
              <p className="text-white font-medium truncate mt-0.5">{part!.brand} {part!.model.split(' ').slice(0, 3).join(' ')}</p>
            </div>
            <p className="text-gray-400 shrink-0 ml-2">{part!.price.toLocaleString('de-DE')} €</p>
          </div>
        ))}
        {filledParts.length === 0 && (
          <p className="text-gray-700 text-xs text-center py-4">Noch keine Teile ausgewählt</p>
        )}
      </div>

      {/* Reset button */}
      {filledParts.length > 0 && (
        <button
          onClick={resetConfig}
          className="w-full py-2 text-xs text-gray-600 hover:text-red-400 border border-[#2a2a3a] rounded-lg transition-colors"
        >
          Konfiguration zurücksetzen
        </button>
      )}
    </div>
  );
}
