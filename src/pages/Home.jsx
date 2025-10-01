import { Link } from "react-router-dom";
import constitutionImg from "../assets/constitution.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 relative overflow-hidden">
      {/* --- subtle background pattern --- */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]"></div>

      {/* Hero Section */}
      <main className="relative flex flex-col md:flex-row flex-1 items-center justify-center px-6 pt-12 md:pt-16 gap-10">
        {/* Text */}
        <div className="max-w-xl text-center md:text-left z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
            Gamified Constitution Learning
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            Unlock the power of knowledge. Learn your rights and duties through
            interactive games, challenges, and a vibrant community.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <Link
              to="/login"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 border border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>
          <img
            src={constitutionImg}
            alt="Constitution"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white"
          />
        </div>
      </main>

      {/* Feature Highlights */}
      <section className="relative grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 py-12 max-w-6xl mx-auto z-10">
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition hover:scale-[1.02] text-center border border-transparent hover:border-indigo-300">
          <div className="text-4xl mb-3">🎮</div>
          <h3 className="text-xl font-bold mb-2 text-indigo-600">Fun Learning</h3>
          <p className="text-gray-600">
            Experience the Constitution through engaging quizzes, word puzzles,
            and scenario-based games.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition hover:scale-[1.02] text-center border border-transparent hover:border-purple-300">
          <div className="text-4xl mb-3">📚</div>
          <h3 className="text-xl font-bold mb-2 text-purple-600">
            Interactive Content
          </h3>
          <p className="text-gray-600">
            Explore articles, laws, and case studies in an easy-to-understand
            format with visuals.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition hover:scale-[1.02] text-center border border-transparent hover:border-pink-300">
          <div className="text-4xl mb-3">🌍</div>
          <h3 className="text-xl font-bold mb-2 text-pink-600">Community</h3>
          <p className="text-gray-600">
            Join fellow learners, discuss ideas, and earn badges as you progress.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/5 text-center py-4 text-sm text-gray-500 z-10">
        © {new Date().getFullYear()} Gamified Constitution Learning. All rights reserved.
      </footer>
    </div>
  );
}
