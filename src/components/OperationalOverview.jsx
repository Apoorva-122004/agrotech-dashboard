export default function OperationalOverview() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Hero Metric: System Health */}
      <div className="md:col-span-2 bg-surface-container border border-outline-variant p-6 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-all"></div>
        <div className="flex justify-between items-start">
          <div>
            <span className="font-label-caps text-on-surface-variant block mb-1">AGGREGATED UPTIME</span>
            <h2 className="font-headline-lg text-primary-container text-4xl">99.982<span className="text-xl">%</span></h2>
          </div>
          <div className="bg-primary-container/10 border border-primary-container text-primary-container px-2 py-1 flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-container animate-pulse"></div>
            <span className="font-label-caps">LIVE</span>
          </div>
        </div>
        <div className="mt-8 flex items-end gap-2">
          <div className="flex-1 h-12 flex items-end gap-1">
            <div className="flex-1 bg-primary-container/20 h-1/2"></div>
            <div className="flex-1 bg-primary-container/40 h-2/3"></div>
            <div className="flex-1 bg-primary-container/30 h-1/3"></div>
            <div className="flex-1 bg-primary-container/60 h-3/4"></div>
            <div className="flex-1 bg-primary-container/80 h-full"></div>
            <div className="flex-1 bg-primary-container/50 h-2/5"></div>
            <div className="flex-1 bg-primary-container h-4/5"></div>
          </div>
          <span className="font-label-caps text-on-surface-variant">NOMINAL</span>
        </div>
      </div>
      
      {/* Metric: Power Draw */}
      <div className="bg-surface-container border border-outline-variant p-6">
        <span className="font-label-caps text-on-surface-variant block mb-2">POWER DRAW</span>
        <div className="flex flex-col">
          <span className="font-data-display text-primary text-4xl">14.2<span className="text-lg opacity-50">kW/h</span></span>
          <div className="w-full bg-surface-container-highest h-1 mt-4">
            <div className="bg-primary-container h-full w-[65%]"></div>
          </div>
          <span className="font-label-caps text-on-surface-variant mt-2 text-[10px]">PEAK: 18.5kW/h</span>
        </div>
      </div>
      
      {/* Metric: Humidity */}
      <div className="bg-surface-container border border-outline-variant p-6 flex flex-col justify-between">
        <div>
          <span className="font-label-caps text-on-surface-variant block mb-2">AVG HUMIDITY</span>
          <span className="font-data-display text-primary text-4xl">42.8<span className="text-lg opacity-50">%</span></span>
        </div>
        <div className="flex items-center gap-2 text-primary-container">
          <span className="material-symbols-outlined text-sm">trending_up</span>
          <span className="font-label-caps">+1.2% EST.</span>
        </div>
      </div>
    </section>
  );
}
