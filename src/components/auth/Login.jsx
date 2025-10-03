// src/components/auth/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
 // ✅ fixed path
import constitutionImg from "../../assets/constitution.jpg";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Firebase login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save to localStorage
      localStorage.setItem("currentUser", email);
      if (user.displayName) {
        localStorage.setItem(`userName_${email}`, user.displayName);
      } else if (!localStorage.getItem(`userName_${email}`)) {
        localStorage.setItem(`userName_${email}`, "User");
      }

      if (onLogin) onLogin();
      setSuccess(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]"></div>

      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-6">
            Login to Your Account
          </h2>

          {success && (
            <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-200 rounded-xl text-center animate-pulse">
              ✅ Login successful! Redirecting…
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 text-red-800 bg-red-100 border border-red-200 rounded-xl text-center">
              ❌ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-indigo-600 font-medium hover:underline">
              Create Account
            </Link>
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={constitutionImg}
            alt="Constitution"
            className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-indigo-200"
          />
          <h3 className="text-xl font-semibold text-indigo-700">
            “Your Rights. Your Power.”
          </h3>
          <p className="text-sm text-gray-500 max-w-xs">
            Empower yourself by learning the Constitution with fun and engaging activities.
          </p>
        </div>
      </div>
    </div>
  );
}
