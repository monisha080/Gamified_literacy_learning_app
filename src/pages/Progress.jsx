// src/pages/Progress.jsx
export default function Progress() {
  const email = localStorage.getItem("currentUser");
  const name = localStorage.getItem(`userName_${email}`) || "User";

  // scores per user
  const quizScore = parseInt(localStorage.getItem(`quizScore_${email}`) || "0", 10);
  const wordleScore = parseInt(localStorage.getItem(`wordleScore_${email}`) || "0", 10);
  const lawScore = parseInt(localStorage.getItem(`lawScore_${email}`) || "0", 10);
  const postsCount = parseInt(localStorage.getItem(`postsCount_${email}`) || "0", 10);

  // total progress points
  const totalPoints = quizScore + wordleScore + lawScore + postsCount * 2;
  const progressPercent = Math.min((totalPoints / 50) * 100, 100);

  // badge logic
  let badge = "Beginner";
  if (totalPoints >= 30) badge = "Gold";
  else if (totalPoints >= 15) badge = "Silver";
  else if (totalPoints >= 5) badge = "Bronze";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-3xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-10">
          Your Progress
        </h1>

        {/* Badge */}
        <div className="text-center mb-8">
          <span className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-semibold shadow-md">
            {badge} Badge
          </span>
          <p className="mt-2 text-slate-700 text-sm">
            Hi {name}, here’s your journey so far.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-indigo-100 mb-10">
          <p className="font-medium text-slate-700 mb-2">Overall Progress</p>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-indigo-600 to-pink-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-right mt-1 text-slate-500 text-sm">
            {Math.round(progressPercent)}% completed
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition">
            <p className="font-semibold text-indigo-700">Quiz Score</p>
            <h2 className="text-2xl font-bold text-slate-800">{quizScore}</h2>
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition">
            <p className="font-semibold text-indigo-700">Wordle Score</p>
            <h2 className="text-2xl font-bold text-slate-800">{wordleScore}</h2>
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition">
            <p className="font-semibold text-indigo-700">Law or Not Score</p>
            <h2 className="text-2xl font-bold text-slate-800">{lawScore}</h2>
          </div>
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition">
            <p className="font-semibold text-indigo-700">Community Posts</p>
            <h2 className="text-2xl font-bold text-slate-800">{postsCount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
