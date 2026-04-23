import { useState, useEffect } from 'react';

export default function SystemLogs({ refreshTrigger }) {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch('http://localhost:5001/logs');
        if (response.ok) {
          const data = await response.json();
          // Sort to show newest first
          const sortedData = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
          setLogs(sortedData);
        }
      } catch (error) {
        console.error('Failed to fetch logs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, [refreshTrigger]);

  const getSeverityStyle = (severity) => {
    switch (severity) {
      case 'INFO':
        return "px-1 bg-primary-container/10 border border-primary-container text-primary-container";
      case 'WARN':
        return "px-1 bg-error-container text-error border border-error";
      case 'ERROR':
        return "px-1 bg-error border border-error text-on-error";
      default:
        return "px-1 bg-surface-container-high border border-outline-variant text-on-surface";
    }
  };

  const getProcessStyle = (process) => {
    return process === 'SYS_ALERT' || process === 'USER_NOTE' ? 'text-error' : 'text-primary-container';
  };

  return (
    <section className="bg-surface-container border border-outline-variant">
      <div className="bg-surface-container-high px-6 py-3 border-b border-outline-variant flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-container text-sm">terminal</span>
          <span className="font-label-caps text-primary-container">SYSTEM_LOGS [REAL-TIME]</span>
        </div>
        <span className="font-label-caps text-slate-500 text-[10px]">VER: 4.2.0.8</span>
      </div>
      <div className="p-2 font-['Space_Grotesk'] text-[12px] leading-relaxed overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="text-on-surface-variant border-b border-outline-variant/30 uppercase">
            <tr>
              <th className="p-2 font-bold">Timestamp</th>
              <th className="p-2 font-bold">Process</th>
              <th className="p-2 font-bold">Severity</th>
              <th className="p-2 font-bold">Message</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {loading ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-slate-500">Loading logs...</td>
              </tr>
            ) : logs.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4 text-center text-slate-500">No logs found.</td>
              </tr>
            ) : (
              logs.map((log) => (
                <tr key={log.id} className="hover:bg-primary-container/5 transition-colors">
                  <td className="p-2 text-slate-500">{log.timestamp}</td>
                  <td className={`p-2 ${getProcessStyle(log.process)}`}>{log.process}</td>
                  <td className="p-2">
                    <span className={getSeverityStyle(log.severity)}>{log.severity}</span>
                  </td>
                  <td className="p-2 text-on-surface">{log.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
