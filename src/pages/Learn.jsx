// src/pages/Learn.jsx
import { Link } from "react-router-dom";

export default function Learn() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-16 relative overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-8">
          Learn About the Constitution
        </h1>

        {/* Fun Facts button */}
        <div className="text-center mb-12">
          <Link
            to="/fun-facts"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-indigo-600 transition"
          >
            Explore Fun Facts of Another Country 🌍
          </Link>
        </div>

        {/* Lessons */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Introduction to the Constitution
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Constitution of India is the supreme law of the land. It lays down the framework defining fundamental political principles, establishes the structure, procedures, powers, and duties of government institutions, and sets out fundamental rights, directive principles, and the duties of citizens.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Fundamental Rights & Duties
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Fundamental Rights are the basic human freedoms guaranteed to all citizens. Duties remind citizens that rights come with responsibilities toward society and the nation. Understanding them helps you take informed actions and be a responsible citizen.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Directive Principles
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Directive Principles guide the state in making laws and policies. They are non-justiciable but fundamental in governance, aimed at creating a social order with justice, equality, and liberty.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-indigo-100 hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Structure of Government
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Constitution establishes a parliamentary form of government which is federal in structure with unitary features. It divides power between the central government and states.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
