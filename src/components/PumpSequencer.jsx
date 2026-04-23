import { useState } from 'react';

export default function PumpSequencer({ onLogAdded }) {
  const [pumps, setPumps] = useState([
    { id: 1, name: 'PUMP_01_PRIMARY', active: true, info: 'Pressure: 4.2 Bar' },
    { id: 2, name: 'PUMP_02_REDUNDANT', active: false, info: 'Standby Mode' },
    { id: 3, name: 'PUMP_03_DISTRIBUTION', active: true, info: 'Pressure: 3.8 Bar' }
  ]);

  const togglePump = async (id) => {
    const pumpIndex = pumps.findIndex(p => p.id === id);
    if (pumpIndex === -1) return;

    const pump = pumps[pumpIndex];
    const newStatus = !pump.active;
    
    // Update local state
    const newPumps = [...pumps];
    newPumps[pumpIndex] = { ...pump, active: newStatus, info: newStatus ? 'Active' : 'Standby Mode' };
    setPumps(newPumps);

    // Send log to DB
    const now = new Date();
    const timestamp = now.toISOString().replace('T', ' ').slice(0, 19);

    const newLog = {
      timestamp,
      process: 'PUMP_SEQ',
      severity: 'INFO',
      message: `${pump.name} turned ${newStatus ? 'ON' : 'OFF'}`
    };

    try {
      const response = await fetch('http://localhost:5001/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLog),
      });

      if (response.ok && onLogAdded) {
        onLogAdded();
      }
    } catch (error) {
      console.error('Failed to log pump toggle:', error);
    }
  };

  return (
    <div className="bg-surface-container border border-outline-variant h-full flex flex-col">
      <div className="bg-surface-container-high px-6 py-3 border-b border-outline-variant">
        <span className="font-label-caps text-primary-container">PUMP_SEQUENCER</span>
      </div>
      <div className="p-4 space-y-4 flex-grow">
        {pumps.map(pump => (
          <div key={pump.id} className="flex items-center justify-between bg-slate-900/50 p-3 border border-slate-800">
            <div className="flex items-center gap-3">
              <span 
                className={`material-symbols-outlined ${pump.active ? 'text-primary-container' : 'text-slate-500'}`} 
                style={pump.active ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                water_pump
              </span>
              <div>
                <span className="font-label-caps block">{pump.name}</span>
                <span className="text-[10px] text-on-surface-variant uppercase">{pump.info}</span>
              </div>
            </div>
            <div 
              className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${pump.active ? 'bg-primary-container/20' : 'bg-slate-800'}`}
              onClick={() => togglePump(pump.id)}
            >
              <div 
                className={`absolute top-0.5 w-4 h-4 rounded-full transition-all ${pump.active ? 'right-0.5 bg-primary-container shadow-[0_0_8px_#00dbe9]' : 'left-0.5 bg-slate-500'}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-outline-variant">
        <button className="w-full bg-primary-container text-on-primary-container font-label-caps py-3 hover:brightness-110 active:scale-[0.98] transition-all">
          EXECUTE_EMERGENCY_SHUTDOWN
        </button>
      </div>
    </div>
  );
}
