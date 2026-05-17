'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useBikeStore } from '@/store/bikeStore';
import { CategoryNav } from '@/components/Configurator/CategoryNav';
import { PartSubNav } from '@/components/Configurator/PartSubNav';
import { PartSelector } from '@/components/Configurator/PartSelector';
import { SummaryPanel } from '@/components/Configurator/SummaryPanel';
import { CameraControls } from '@/components/Configurator/CameraControls';
import { CONFIGURATOR_CATEGORIES } from '@/types/bike';
import type { BikeCategory } from '@/types/bike';

const BikeScene = dynamic(
  () => import('@/components/Bike3D/BikeScene').then(m => ({ default: m.BikeScene })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-[#0a0a0f]">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 text-sm">3D Bike wird geladen…</p>
        </div>
      </div>
    ),
  }
);

type PanelTab = 'configure' | 'summary';

export default function Page() {
  const { activeCategory, getTotalPrice, getCompletionPercent } = useBikeStore();
  const [activePart, setActivePart] = useState<BikeCategory | null>(null);
  const [panelTab, setPanelTab] = useState<PanelTab>('configure');
  const [mobilePanel, setMobilePanel] = useState(false);

  useEffect(() => {
    const cat = CONFIGURATOR_CATEGORIES.find(c => c.id === activeCategory);
    if (cat) setActivePart(cat.parts[0] ?? null);
  }, [activeCategory]);

  const completion = getCompletionPercent();
  const totalPrice = getTotalPrice();

  return (
    <main className="h-screen w-screen bg-[#08080f] flex flex-col overflow-hidden text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2.5 border-b border-[#1a1a28] bg-[#0a0a0f] z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-600 to-red-700 flex items-center justify-center text-sm font-black">M</div>
          <div>
            <h1 className="text-sm font-black tracking-wide text-white leading-none">MTB KONFIGURATOR</h1>
            <p className="text-[10px] text-gray-600 leading-none mt-0.5">Fully DH / Enduro</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-gray-600">Vollständig</p>
              <p className="text-sm font-bold text-orange-400">{completion}%</p>
            </div>
            <div className="w-16 h-1.5 bg-[#1a1a28] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-500"
                style={{ width: `${completion}%` }}
              />
            </div>
            <p className="text-sm font-bold text-white">{totalPrice.toLocaleString('de-DE')} €</p>
          </div>
          <button
            className="sm:hidden text-xs bg-orange-600 px-3 py-1.5 rounded-lg font-semibold"
            onClick={() => setMobilePanel(!mobilePanel)}
          >
            {mobilePanel ? 'Schließen' : 'Teile'}
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <aside className="hidden sm:flex flex-col w-44 border-r border-[#1a1a28] bg-[#0a0a0f] p-2 shrink-0 overflow-y-auto">
          <div className="flex border-b border-[#1a1a28] mb-2 pb-2">
            <button
              onClick={() => setPanelTab('configure')}
              className={`flex-1 text-xs py-1.5 rounded transition-colors ${panelTab === 'configure' ? 'text-white bg-[#1a1a28]' : 'text-gray-600 hover:text-gray-400'}`}
            >
              Gruppen
            </button>
            <button
              onClick={() => setPanelTab('summary')}
              className={`flex-1 text-xs py-1.5 rounded transition-colors ${panelTab === 'summary' ? 'text-white bg-[#1a1a28]' : 'text-gray-600 hover:text-gray-400'}`}
            >
              Übersicht
            </button>
          </div>
          {panelTab === 'configure' ? <CategoryNav /> : <SummaryPanel />}
        </aside>

        {/* 3D Viewport */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 bg-[#0a0a0f]/80 backdrop-blur-sm rounded-xl p-1.5 border border-[#2a2a3a]">
            <CameraControls />
          </div>
          <div className="flex-1 overflow-hidden">
            <BikeScene />
          </div>
        </div>

        {/* Right sidebar — Part selector */}
        <aside
          className={`
            flex-col w-80 border-l border-[#1a1a28] bg-[#0a0a0f] overflow-hidden shrink-0
            ${mobilePanel
              ? 'flex absolute right-0 top-0 bottom-0 z-50 shadow-2xl'
              : 'hidden sm:flex'
            }
          `}
        >
          <div className="p-3 border-b border-[#1a1a28]">
            <PartSubNav onSelectPart={setActivePart} activePart={activePart} />
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            {activePart ? (
              <PartSelector category={activePart} />
            ) : (
              <div className="text-center text-gray-600 py-12">
                <p className="text-4xl mb-3">🔧</p>
                <p className="text-sm">Wähle eine Komponente</p>
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
