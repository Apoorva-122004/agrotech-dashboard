import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  const baseButtonClass = "flex flex-col items-center justify-center pt-1 w-full h-full active:scale-95 transition-transform";
  const activeButtonClass = "text-cyan-400 bg-cyan-400/10 border-t-2 border-cyan-400";
  const inactiveButtonClass = "text-slate-500 hover:text-cyan-200 hover:bg-slate-900";

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-slate-950 border-t border-slate-800 shadow-[0_-4px_10px_rgba(0,0,0,0.5)] md:hidden">
      <NavLink to="/" className={({ isActive }) => `${baseButtonClass} ${isActive ? activeButtonClass : inactiveButtonClass}`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
        <span className="font-['Space_Grotesk'] text-[10px] font-bold tracking-widest uppercase">DASHBOARD</span>
      </NavLink>
      <NavLink to="/sensors" className={({ isActive }) => `${baseButtonClass} ${isActive ? activeButtonClass : inactiveButtonClass}`}>
        <span className="material-symbols-outlined">sensors</span>
        <span className="font-['Space_Grotesk'] text-[10px] font-bold tracking-widest uppercase">SENSORS</span>
      </NavLink>
      <NavLink to="/pumps" className={({ isActive }) => `${baseButtonClass} ${isActive ? activeButtonClass : inactiveButtonClass}`}>
        <span className="material-symbols-outlined">water_pump</span>
        <span className="font-['Space_Grotesk'] text-[10px] font-bold tracking-widest uppercase">PUMPS</span>
      </NavLink>
      <NavLink to="/alerts" className={({ isActive }) => `${baseButtonClass} ${isActive ? activeButtonClass : inactiveButtonClass}`}>
        <span className="material-symbols-outlined">notifications_active</span>
        <span className="font-['Space_Grotesk'] text-[10px] font-bold tracking-widest uppercase">ALERTS</span>
      </NavLink>
    </nav>
  );
}
