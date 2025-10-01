// src/pages/Dashboard.jsx
import { Link } from "react-router-dom";

export default function Dashboard() {
  const features = [
    { title: "Quiz", desc: "Test your knowledge with engaging quizzes.", link: "/quiz" },
    { title: "Article Wordle", desc: "Learn constitutional articles in a fun wordle-style game.", link: "/wordle" },
    { title: "Law or Not", desc: "Decide if a statement is a real law or just made up.", link: "/law-or-not" },
    { title: "Interactive Map", desc: "Explore the Constitution through an interactive India map.", link: "/map" },
    { title: "Chatbot", desc: "Ask questions and get instant answers from AI.", link: "/chatbot" },
    { title: "Community Engine", desc: "Upload and share your laws, ideas, and discussions.", link: "/community" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-12">
          Dashboard
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group bg-white/90 backdrop-blur-md border border-indigo-100 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl hover:scale-[1.02] transition"
            >
              {/* Circle icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 shadow-md group-hover:from-pink-500 group-hover:to-indigo-500 transition">
                {f.title[0]}
              </div>
              <h2 className="text-2xl font-bold text-indigo-700 mb-2 text-center">
                {f.title}
              </h2>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {f.desc}
              </p>
              <Link
                to={f.link}
                className="mt-auto px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold hover:from-pink-500 hover:to-indigo-600 shadow-md transition"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
