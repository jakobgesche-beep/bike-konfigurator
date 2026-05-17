'use client';
import { useBikeStore } from '@/store/bikeStore';

const VIEWS = [
  { id: 'side' as const, label: 'Seite', icon: '⬛' },
  { id: 'front' as const, label: 'Front', icon: '🔲' },
  { id: 'rear' as const, label: 'Heck', icon: '🔳' },
  { id: 'isometric' as const, label: 'ISO', icon: '◼' },
  { id: 'top' as const, label: 'Oben', icon: '⬜' },
];

export function CameraControls() {
  const { cameraAngle, setCameraAngle } = useBikeStore();

  return (
    <div className="flex gap-1.5">
      {VIEWS.map(v => (
        <button
          key={v.id}
          onClick={() => setCameraAngle(v.id)}
          className={`flex-1 py-1.5 rounded text-xs font-semibold transition-colors ${
            cameraAngle === v.id
              ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
              : 'bg-[#12121a] text-gray-500 border border-[#2a2a3a] hover:text-gray-300'
          }`}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}
