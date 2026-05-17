'use client';
import { useState } from 'react';
import { useBikeStore } from '@/store/bikeStore';

const LINK_COLORS = [
  { name: 'Silber', hex: '#c0c0c0' },
  { name: 'Schwarz', hex: '#222222' },
  { name: 'Gold', hex: '#D4AF37' },
  { name: 'Rot', hex: '#cc0000' },
  { name: 'Blau', hex: '#0033cc' },
  { name: 'Grün', hex: '#00cc44' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Orange', hex: '#FF6600' },
  { name: 'Rainbow', hex: '#ff0080' },
];

export function ChainEditor() {
  const { chainLinks, setChainLinkColor, setAllChainLinksColor } = useBikeStore();
  const [selectedColor, setSelectedColor] = useState('#c0c0c0');
  const [paintMode, setPaintMode] = useState<'single' | 'pattern' | 'all'>('all');
  const [patternSize, setPatternSize] = useState(4);

  const applyPattern = () => {
    chainLinks.forEach((_, i) => {
      const colorIndex = Math.floor(i / patternSize) % LINK_COLORS.length;
      if (colorIndex === 0) setChainLinkColor(i, selectedColor);
    });
  };

  const displayLinks = chainLinks.slice(0, 64);

  return (
    <div className="space-y-4">
      {/* Mode selector */}
      <div className="flex gap-2">
        {(['all', 'pattern', 'single'] as const).map(mode => (
          <button
            key={mode}
            onClick={() => setPaintMode(mode)}
            className={`flex-1 py-1.5 rounded text-xs font-semibold transition-colors ${
              paintMode === mode
                ? 'bg-orange-500 text-white'
                : 'bg-[#1e1e2a] text-gray-400 hover:bg-[#2a2a3a]'
            }`}
          >
            {mode === 'all' ? 'Alle' : mode === 'pattern' ? 'Muster' : 'Einzeln'}
          </button>
        ))}
      </div>

      {/* Color palette */}
      <div>
        <p className="text-xs text-gray-500 mb-2">Farbe wählen</p>
        <div className="flex flex-wrap gap-2">
          {LINK_COLORS.map(c => (
            <button
              key={c.hex}
              title={c.name}
              onClick={() => setSelectedColor(c.hex)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColor === c.hex
                  ? 'border-white scale-110'
                  : 'border-transparent hover:border-gray-500'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      {paintMode === 'all' && (
        <button
          onClick={() => setAllChainLinksColor(selectedColor)}
          className="w-full py-2 bg-orange-600 hover:bg-orange-500 text-white rounded text-sm font-semibold transition-colors"
        >
          Alle Glieder färben
        </button>
      )}

      {paintMode === 'pattern' && (
        <div className="space-y-2">
          <label className="text-xs text-gray-400">
            Glieder pro Segment: <span className="text-white">{patternSize}</span>
          </label>
          <input
            type="range"
            min={1}
            max={12}
            value={patternSize}
            onChange={e => setPatternSize(Number(e.target.value))}
            className="w-full accent-orange-500"
          />
          <button
            onClick={applyPattern}
            className="w-full py-2 bg-orange-600 hover:bg-orange-500 text-white rounded text-sm font-semibold"
          >
            Muster anwenden
          </button>
        </div>
      )}

      {paintMode === 'single' && (
        <div>
          <p className="text-xs text-gray-500 mb-2">Klicke ein Glied zum Färben (erste 64)</p>
          <div className="flex flex-wrap gap-1 max-h-48 overflow-y-auto">
            {displayLinks.map(link => (
              <button
                key={link.index}
                onClick={() => setChainLinkColor(link.index, selectedColor)}
                className="w-5 h-5 rounded-sm border border-[#333] hover:scale-110 transition-transform"
                style={{ backgroundColor: link.color }}
                title={`Glied ${link.index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
