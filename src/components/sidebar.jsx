 import { NavLink } from "react-router-dom";
 import logo from "../assets/logo.png";

const Sidebar = ({ isDarkMode }) => {
  const bg = isDarkMode ? 'bg-[#161b22]' : 'bg-white';
  const border = isDarkMode ? 'border-[#21262d]' : 'border-slate-200';
  const text = isDarkMode ? 'text-[#e6edf3]' : 'text-slate-900';
  const muted = isDarkMode ? 'text-[#6e7681]' : 'text-slate-500';
  const defaultText = isDarkMode ? 'text-[#8b949e]' : 'text-slate-600';
  const hoverBase = isDarkMode ? 'hover:bg-[#1c2330] hover:text-[#e6edf3]' : 'hover:bg-slate-100 hover:text-slate-900';
  const activeBase = isDarkMode
    ? 'bg-[rgba(46,160,67,0.12)] text-[#2ea043] border-[rgba(46,160,67,0.2)] font-medium'
    : 'bg-emerald-100 text-emerald-800 border-emerald-200 font-medium';

  const menuItem = (to, icon, label, badge = null, end = false) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition border ${isActive ? activeBase : `${defaultText} border-transparent ${hoverBase}`}`
    }
  >
    <span className="w-5 text-center">{icon}</span>
    {label}

    {badge && (
      <span
        className={`ml-auto text-[10px] px-2 py-[2px] rounded-full font-semibold text-white ${
          badge.color === "green"
            ? "bg-[#2ea043]"
            : badge.color === "blue"
            ? "bg-[#388bfd]"
            : "bg-[#da3633]"
        }`}
      >
        {badge.value}
      </span>
    )}
  </NavLink>
  );

  return (
    <div className={`w-[240px] h-[100vh] fixed left-0 top-0 ${bg} border-r ${border} flex flex-col`}>
      
      {/* LOGO */}
      <div className={`p-5 border-b ${border}`}>
        <div className="flex items-center gap-3">
          <img
  src={logo}
  alt="Logo"
  className="w-9 h-9 object-contain rounded-md"
/>
          <div>
            <div className={`font-serif text-lg ${text}`}>EduLib</div>
            <div className={`text-[10px] uppercase tracking-wider ${muted}`}>
              Malawi · Admin
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex-1 overflow-y-auto min-h-0 px-3 py-4 space-y-2">
        
        <div className={`text-[10px] uppercase px-2 mt-2 ${muted}`}>
         
        </div>
        {menuItem("/", "🏠", "Dashboard")}

        <div className={`text-[10px] uppercase px-2 mt-4 ${muted}`}>
          Library
        </div>
        {menuItem("/resources", "📄", "Resources", { value: 142, color: "blue" })}
        {menuItem("/upload", "⬆️", "Upload Materials")}
        {menuItem("/quizzes", "❓", "Quizzes & Exams", {
          value: 28,
          color: "green",
        })}

        <div className={`text-[10px] uppercase px-2 mt-4 ${muted}`}>
          Users
        </div>
        {menuItem("/students", "🎓", "Students")}
        {menuItem("/teachers", "👩‍🏫", "Teachers")}
        {menuItem("/schools", "🏫", "Schools")}

        <div className={`text-[10px] uppercase px-2 mt-4 ${muted}`}>
          System
        </div>
         
        {menuItem("/requests", "🔔", "Requests", { value: 5 })}
        {menuItem("/settings", "⚙️", "Settings")}
      </div>
    </div>
  );
};

export default Sidebar;