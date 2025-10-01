import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navigation({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/", { replace: true });
  };

  // A small helper to highlight the active link
  const isActive = (path) =>
    location.pathname.toLowerCase() === path.toLowerCase();

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent tracking-wide">
          Gamified Constitution
        </h1>

        {/* Links */}
        <div className="flex gap-4 md:gap-6 items-center text-sm md:text-base">
          <Link
            to="/"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/") ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/dashboard") ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/learn"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/learn") ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            Learn
          </Link>

          <Link
            to="/community"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/community") ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            Community
          </Link>

          <Link
            to="/progress"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/progress") ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            Progress
          </Link>

          <Link
            to="/profile"
            className={`px-3 py-1 rounded-md transition ${
              isActive("/profile") ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-1 rounded-lg bg-white text-indigo-600 font-semibold shadow hover:bg-slate-100 hover:scale-[1.02] transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
