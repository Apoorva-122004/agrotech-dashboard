import { useState } from 'react';
import OperationalOverview from '../components/OperationalOverview';
import MoistureMetrics from '../components/MoistureMetrics';
import SystemHealth from '../components/SystemHealth';
import SystemImage from '../components/SystemImage';
import LogForm from '../components/LogForm';
import SystemLogs from '../components/SystemLogs';

export default function Dashboard() {
  const [logRefreshCounter, setLogRefreshCounter] = useState(0);

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-6">
      <OperationalOverview />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <MoistureMetrics />
        <div className="lg:col-span-4 flex flex-col gap-6">
          <SystemHealth />
          <SystemImage />
        </div>
      </div>
      <LogForm onLogAdded={() => setLogRefreshCounter(prev => prev + 1)} />
      <SystemLogs refreshTrigger={logRefreshCounter} />
    </main>
  );
}
