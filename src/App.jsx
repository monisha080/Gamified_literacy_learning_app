import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home.jsx";
import Login from "./components/auth/Login.jsx";
import Register from "./components/auth/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Community from "./pages/Community.jsx";
import Progress from "./pages/Progress.jsx";
import Profile from "./components/auth/Profile.jsx";
import Quiz from "./pages/Quiz.jsx";
import Wordle from "./pages/Wordle.jsx";
import LawOrNot from "./pages/LawOrNot.jsx";
import Map from "./pages/Map.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import CrimeOrNot from "./pages/CrimeOrNot.jsx";
import Learn from "./pages/Learn.jsx";         // ✅ new Learn page
import FunFacts from "./pages/FunFacts.jsx";   // ✅ optional Fun Facts page



import Navigation from "./components/common/Navigation.jsx";
import Footer from "./components/common/Footer.jsx";

/* ProtectedRoute: wraps routes that need auth */
function ProtectedRoute({ isLoggedIn }) {
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <Outlet />; // ✅ Only return Outlet here
}

/* Layout used for authenticated area: shows nav + content + footer */
function PrivateLayout({ onLogout }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onLogout={onLogout} />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet /> {/* ✅ Nested routes render here */}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(saved === "true");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleLogin} />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route element={<PrivateLayout onLogout={handleLogout} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/wordle" element={<Wordle />} />
            <Route path="/law-or-not" element={<LawOrNot />} />
            <Route path="/map" element={<Map />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/community" element={<Community />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/profile" element={<Profile onLogout={handleLogout} />} />
            <Route path="/crime-or-not" element={<CrimeOrNot />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/fun-facts" element={<FunFacts />} /> {/* create this page */}


            
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
