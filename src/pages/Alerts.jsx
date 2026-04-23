import { useState, useEffect } from 'react';

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch('http://localhost:5001/logs');
        if (response.ok) {
          const data = await response.json();
          // Filter for WARN and ERROR severity
          const criticalEvents = data.filter(log => log.severity === 'WARN' || log.severity === 'ERROR');
          // Sort to show newest first
          const sortedData = criticalEvents.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
          setAlerts(sortedData);
        }
      } catch (error) {
        console.error('Failed to fetch alerts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  const getSeverityStyle = (severity) => {
    switch (severity) {
      case 'WARN':
        return "px-2 py-1 bg-error-container text-error border border-error font-bold text-xs";
      case 'ERROR':
        return "px-2 py-1 bg-error border border-error text-on-error font-bold text-xs";
      default:
        return "px-2 py-1 bg-surface-container-high border border-outline-variant text-on-surface font-bold text-xs";
    }
  };

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="bg-surface-container border border-error p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-error text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
          <h2 className="text-2xl font-['Space_Grotesk'] text-error font-bold uppercase">Critical Events</h2>
        </div>
        
        {loading ? (
          <div className="text-center py-8 text-slate-500 font-label-caps">Scanning system logs...</div>
        ) : alerts.length === 0 ? (
          <div className="text-center py-8 text-green-400 font-label-caps border border-green-400/30 bg-green-400/5">NO CRITICAL EVENTS DETECTED</div>
        ) : (
          <div className="space-y-4">
            {alerts.map(alert => (
              <div key={alert.id} className="bg-slate-900/50 p-4 border border-error/30 hover:bg-error/5 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className={getSeverityStyle(alert.severity)}>{alert.severity}</span>
                    <span className="font-label-caps text-error">{alert.process}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{alert.timestamp}</span>
                </div>
                <p className="text-on-surface text-sm">{alert.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
