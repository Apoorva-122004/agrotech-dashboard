export default function MoistureMetrics() {
  return (
    <section className="lg:col-span-8 bg-surface-container border border-outline-variant flex flex-col">
      <div className="bg-surface-container-high px-6 py-3 border-b border-outline-variant flex justify-between items-center">
        <span className="font-label-caps text-primary-container">MOISTURE_METRICS [LITERS/SQM]</span>
        <div className="flex gap-2">
          <button className="bg-slate-900 border border-slate-700 font-label-caps px-3 py-1 text-[10px] hover:border-primary-container transition-colors">D</button>
          <button className="bg-slate-950 border border-primary-container font-label-caps px-3 py-1 text-[10px] text-primary-container">W</button>
          <button className="bg-slate-900 border border-slate-700 font-label-caps px-3 py-1 text-[10px] hover:border-primary-container transition-colors">M</button>
        </div>
      </div>
      <div className="p-6 flex-1 min-h-[300px] relative">
        {/* Placeholder for Technical Chart */}
        <div className="absolute inset-0 m-6 border-l border-b border-outline-variant/30 flex items-end">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(0, 219, 233, 0.4)"></stop>
                <stop offset="100%" stopColor="rgba(0, 219, 233, 0)"></stop>
              </linearGradient>
            </defs>
            <path d="M0 150 Q 100 100 200 140 T 400 80 T 600 120 T 800 50 L 800 200 L 0 200 Z" fill="url(#chartGradient)"></path>
            <path d="M0 150 Q 100 100 200 140 T 400 80 T 600 120 T 800 50" fill="none" stroke="#00dbe9" strokeWidth="2"></path>
          </svg>
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
            <div className="border-t border-on-surface w-full"></div>
            <div className="border-t border-on-surface w-full"></div>
            <div className="border-t border-on-surface w-full"></div>
            <div className="border-t border-on-surface w-full"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 border-t border-outline-variant divide-x divide-outline-variant">
        <div className="p-4 text-center">
          <span className="font-label-caps text-on-surface-variant block">SECTOR A</span>
          <span className="font-body-lg font-bold text-primary text-2xl">78%</span>
        </div>
        <div className="p-4 text-center">
          <span className="font-label-caps text-on-surface-variant block">SECTOR B</span>
          <span className="font-body-lg font-bold text-primary text-2xl">64%</span>
        </div>
        <div className="p-4 text-center">
          <span className="font-label-caps text-on-surface-variant block">SECTOR C</span>
          <span className="font-body-lg font-bold text-primary text-2xl">82%</span>
        </div>
        <div className="p-4 text-center">
          <span className="font-label-caps text-on-surface-variant block">SECTOR D</span>
          <span className="font-body-lg font-bold text-primary text-2xl">91%</span>
        </div>
      </div>
    </section>
  );
}
