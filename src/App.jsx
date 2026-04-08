import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Resources from "./components/Library/Resources";
import Upload from "./components/Library/Upload";
import Quizzes from "./components/Library/Quizzes";
import Login from "./components/Login/Login";
import SettingsPage from "./components/Settings";
import RequestsPage from "./components/Request";
import Schools from "./components/User/Schools";
import Students from "./components/User/Students";
import Teachers from "./components/User/Schools";
import DashboardOverview from "./components/dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }
  
  return (
    <div className={`flex ${isDarkMode ? 'bg-[#0d1117] text-[#e6edf3]' : 'bg-slate-100 text-slate-900'}`}>
      <Sidebar isDarkMode={isDarkMode} />
      <div className="flex-1 ml-[240px] flex flex-col min-h-screen">
        <Header isDarkMode={isDarkMode} onToggleTheme={handleToggleTheme} />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<DashboardOverview isDarkMode={isDarkMode} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/students" element={<Students/>} />
            <Route path="/teachers" element={<Teachers/>} />
            <Route path="/schools" element={ <Schools/>} />
            <Route path="/requests" element={<RequestsPage/>} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;