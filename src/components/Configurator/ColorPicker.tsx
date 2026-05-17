'use client';
import { useBikeStore } from '@/store/bikeStore';
import type { BikePart } from '@/types/bike';

interface ColorPickerProps {
  part: BikePart;
}

export function ColorPicker({ part }: ColorPickerProps) {
  const { selectedColors, setPartColor } = useBikeStore();
  const current = selectedColors[part.id] ?? part.colors[0]?.hex ?? '#111';

  if (part.colors.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {part.colors.map(color => (
        <button
          key={color.hex}
          title={color.name}
          onClick={() => setPartColor(part.id, color.hex)}
          className={`w-7 h-7 rounded-full border-2 transition-all duration-150 ${
            current === color.hex
              ? 'border-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.5)]'
              : 'border-transparent hover:border-gray-400 hover:scale-105'
          }`}
          style={{ backgroundColor: color.hex }}
        />
      ))}
    </div>
  );
}
