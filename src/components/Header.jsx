import { NavLink } from 'react-router-dom';

export default function Header() {
  const baseLinkClass = "font-label-caps transition-colors cursor-pointer";
  const activeLinkClass = "text-cyan-400 border-b-2 border-cyan-400 pb-1";
  const inactiveLinkClass = "text-slate-500 hover:text-cyan-300";

  return (
    <header className="bg-slate-950 text-cyan-400 border-b-2 border-slate-900 flex justify-between items-center w-full px-6 h-16 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-cyan-400">precision_manufacturing</span>
        <h1 className="font-['Space_Grotesk'] tracking-tight uppercase font-bold text-lg">SYSTEM_STATUS: ACTIVE</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex gap-6 items-center mr-6">
          <NavLink to="/" className={({ isActive }) => `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>DASHBOARD</NavLink>
          <NavLink to="/sensors" className={({ isActive }) => `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>SENSORS</NavLink>
          <NavLink to="/pumps" className={({ isActive }) => `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>PUMPS</NavLink>
          <NavLink to="/alerts" className={({ isActive }) => `${baseLinkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}>ALERTS</NavLink>
        </div>
        <span className="material-symbols-outlined text-cyan-400 cursor-pointer hover:bg-slate-900 p-2 transition-colors duration-150">settings_input_component</span>
      </div>
    </header>
  );
}
