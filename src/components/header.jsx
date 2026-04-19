import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import NotificationPanel from "./Notification/Notification";

const Header = ({ title = "Dashboard", subtitle = "Overview" }) => {
  return (
    <header className="flex items-center gap-4 px-7 h-[60px] border-b border-[#21262d] bg-[#161b22]">
      <div className="flex items-center gap-3">
        <h1 className="text-[20px] font-semibold text-[#e6edf3]">
          {title}
          <span className="text-[13px] text-[#6e7681] ml-2 font-normal">
            {subtitle}
=======
const Header = ({ isDarkMode, onToggleTheme }) => {
  const headerBg = isDarkMode ? 'bg-[#161b22] border-b border-[#21262d]' : 'bg-white border-b border-slate-200';
  const textColor = isDarkMode ? 'text-[#e6edf3]' : 'text-slate-900';
  const subTextColor = isDarkMode ? 'text-[#6e7681]' : 'text-slate-500';
  const inputBg = isDarkMode ? 'bg-transparent' : 'bg-slate-100';
  const inputPlaceholder = isDarkMode ? 'placeholder-[#6e7681]' : 'placeholder-slate-400';
  const buttonBg = isDarkMode ? 'bg-[#1c2330] border border-[#21262d]' : 'bg-slate-100 border border-slate-200';

  return (
    <header className={`flex items-center gap-4 px-7 h-[60px] ${headerBg}`}>
      <div className="flex items-center gap-3">
        <h1 className={`text-[20px] font-semibold ${textColor}`}>
          Dashboard
          <span className={`text-[13px] ml-2 font-normal ${subTextColor}`}>
            Overview
>>>>>>> 051d1e739beb516c1822988bad638845b494c2fb
          </span>
        </h1>
      </div>

<<<<<<< HEAD
      {/* Search */}
      <div className="ml-auto flex items-center gap-4">
=======
      {/* Search + Theme Toggle */}
      <div className="ml-auto flex items-center gap-3 min-w-[260px]">
        <button
          onClick={onToggleTheme}
          className={`w-[36px] h-[36px] rounded-md flex items-center justify-center ${buttonBg} transition hover:opacity-90`}
          aria-label="Switch theme"
          title="Switch theme"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
>>>>>>> 051d1e739beb516c1822988bad638845b494c2fb
        <input
          type="text"
          placeholder="Search resources..."
          className={`${inputBg} outline-none text-sm ${textColor} flex-1 ${inputPlaceholder}`}
        />
      </div>

      {/* Add Resource */}
      <Link
        to="/upload"
<<<<<<< HEAD
        className="px-4 py-1 bg-[#2ea043] text-white rounded-md hover:opacity-90 transition text-sm font-medium"
=======
        className="px-4 py-1 bg-[#2ea043] text-white rounded-md hover:opacity-90 transition"
>>>>>>> 051d1e739beb516c1822988bad638845b494c2fb
      >
        + Add Resource
      </Link>

<<<<<<< HEAD
      {/* Notification Panel (replaces the old static button) */}
      <NotificationPanel />
=======
      {/* Notification */}
      <button className={`w-[36px] h-[36px] rounded-md ${buttonBg}`}>
        🔔
      </button>
>>>>>>> 051d1e739beb516c1822988bad638845b494c2fb
    </header>
  );
};

export default Header;