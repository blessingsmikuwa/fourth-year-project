 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Resources from "./components/Library/Resources";
import Upload from "./components/Library/Upload";
import Quizzes from "./components/Library/Quizzes";

function App() {
  return (
    <Router>
      <div className="flex bg-[#0d1117] text-[#e6edf3]">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex-1 ml-[240px] flex flex-col min-h-screen">
          
          {/* Header */}
          <Header />

          {/* Pages */}
          <div className="p-6">
            <Routes>
              <Route path="/" element={<h1>Dashboard</h1>} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/students" element={<h1>Students</h1>} />
              <Route path="/teachers" element={<h1>Teachers</h1>} />
              <Route path="/schools" element={<h1>Schools</h1>} />
              <Route path="/reports" element={<h1>Reports</h1>} />
              <Route path="/requests" element={<h1>Requests</h1>} />
              <Route path="/settings" element={<h1>Settings</h1>} />
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;