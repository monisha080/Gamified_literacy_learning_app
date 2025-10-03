// src/components/auth/Profile.jsx
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function Profile({ onLogout }) {
  const email = localStorage.getItem("currentUser");
  const name = localStorage.getItem(`userName_${email}`) || "User";
  const userDocRef = doc(db, "users", email);

  const [stats, setStats] = useState({
    quizScore: 0,
    wordleScore: 0,
    lawScore: 0,
    postsCount: 0,
  });

  useEffect(() => {
    const unsub = onSnapshot(userDocRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setStats({
          quizScore: data.quizScore || 0,
          wordleScore: data.wordleScore || 0,
          lawScore: data.lawScore || 0,
          postsCount: data.postsCount || 0,
        });
      }
    });
    return () => unsub();
  }, [userDocRef]);

  const { quizScore, wordleScore, lawScore, postsCount } = stats;

  const totalPoints = quizScore + wordleScore + lawScore + postsCount * 2;
  let badge = "Beginner";
  if (totalPoints >= 30) badge = "Gold";
  else if (totalPoints >= 15) badge = "Silver";
  else if (totalPoints >= 5) badge = "Bronze";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]"></div>

      <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-indigo-100">
        <img
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`}
          alt="profile"
          className="w-28 h-28 rounded-full mx-auto mb-6 shadow-lg border-4 border-indigo-200 object-cover"
        />
        <h1 className="text-2xl font-bold text-slate-800">{name}</h1>
        <p className="text-slate-600 mb-6">{email}</p>

        <div className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white inline-block px-6 py-2 rounded-full mb-6 shadow">
          {badge} Badge
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-700">
          <div className="bg-white/80 rounded-xl p-4 shadow">
            <p className="font-semibold">Quiz</p>
            <p>{quizScore}</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow">
            <p className="font-semibold">Wordle</p>
            <p>{wordleScore}</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow">
            <p className="font-semibold">Law or Not</p>
            <p>{lawScore}</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4 shadow">
            <p className="font-semibold">Posts</p>
            <p>{postsCount}</p>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
