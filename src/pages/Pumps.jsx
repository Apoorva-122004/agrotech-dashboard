import { useState } from 'react';
import PumpSequencer from '../components/PumpSequencer';
import SystemLogs from '../components/SystemLogs';

export default function Pumps() {
  const [logRefreshCounter, setLogRefreshCounter] = useState(0);

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PumpSequencer onLogAdded={() => setLogRefreshCounter(prev => prev + 1)} />
        <div className="bg-surface-container border border-outline-variant p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
          <span className="material-symbols-outlined text-cyan-400 text-6xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>water_pump</span>
          <h2 className="text-2xl font-['Space_Grotesk'] text-cyan-400 font-bold mb-2 uppercase">Pump Analytics</h2>
          <p className="text-slate-500 font-label-caps">Flow rate and pressure metrics</p>
        </div>
      </div>
      <SystemLogs refreshTrigger={logRefreshCounter} />
    </main>
  );
}
