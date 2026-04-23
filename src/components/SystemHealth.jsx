export default function SystemHealth() {
  return (
    <div className="bg-surface-container border border-outline-variant">
      <div className="bg-surface-container-high px-6 py-3 border-b border-outline-variant">
        <span className="font-label-caps text-primary-container">SYSTEM_HEALTH</span>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between bg-slate-900/50 p-3 border border-slate-800">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-green-400">check_circle</span>
            <div>
              <span className="font-label-caps block text-green-400">STATUS_OPTIMAL</span>
              <span className="text-[10px] text-on-surface-variant uppercase">All systems online</span>
            </div>
          </div>
          <span className="text-xl font-bold text-green-400">100%</span>
        </div>
        
        <div className="flex items-center justify-between bg-slate-900/50 p-3 border border-slate-800">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container">battery_full</span>
            <div>
              <span className="font-label-caps block text-primary-container">POWER_RESERVE</span>
              <span className="text-[10px] text-on-surface-variant uppercase">Main grid active</span>
            </div>
          </div>
          <span className="font-label-caps text-primary-container">NOMINAL</span>
        </div>
      </div>
    </div>
  );
}
