import { useState } from 'react';

export default function LogForm({ onLogAdded }) {
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('INFO');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    
    const now = new Date();
    // Format timestamp like "2023-10-24 14:32:01"
    const timestamp = now.toISOString().replace('T', ' ').slice(0, 19);

    const newLog = {
      timestamp,
      process: 'USER_NOTE',
      severity,
      message: message.trim()
    };

    try {
      const response = await fetch('http://localhost:5001/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLog),
      });

      if (response.ok) {
        setMessage('');
        setSeverity('INFO');
        onLogAdded();
      } else {
        console.error('Failed to submit log');
      }
    } catch (error) {
      console.error('Error submitting log:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-surface-container border border-outline-variant">
      <div className="bg-surface-container-high px-6 py-3 border-b border-outline-variant flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary-container text-sm">edit_note</span>
          <span className="font-label-caps text-primary-container">MAINTENANCE_LOG_ENTRY</span>
        </div>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div className="flex-1 flex flex-col gap-2">
            <label htmlFor="logMessage" className="font-label-caps text-slate-500 text-[10px]">LOG_MESSAGE</label>
            <input 
              type="text" 
              id="logMessage"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter maintenance notes..."
              className="bg-surface-container-high border border-outline-variant text-on-surface p-2 text-sm focus:outline-none focus:border-primary-container transition-colors"
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="logSeverity" className="font-label-caps text-slate-500 text-[10px]">SEVERITY</label>
            <select 
              id="logSeverity"
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="bg-surface-container-high border border-outline-variant text-on-surface p-2 text-sm focus:outline-none focus:border-primary-container transition-colors"
              disabled={isSubmitting}
            >
              <option value="INFO">INFO</option>
              <option value="WARN">WARN</option>
              <option value="ERROR">ERROR</option>
            </select>
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-primary-container/10 border border-primary-container text-primary-container hover:bg-primary-container/20 transition-colors px-6 py-2 text-sm font-bold uppercase disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Log'}
          </button>
        </form>
      </div>
    </section>
  );
}
