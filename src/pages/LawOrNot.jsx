// src/pages/LawOrNot.jsx
import { useState, useEffect } from "react";
import lawOrNotQuestions from "../data/lawOrNotData";
import { db } from "../components/firebaseConfig";



import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

export default function LawOrNot() {
  const email = localStorage.getItem("currentUser");
  const userDocRef = doc(db, "users", email);

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // load existing lawScore on mount
  useEffect(() => {
    async function loadScore() {
      const snap = await getDoc(userDocRef);
      if (snap.exists()) {
        const data = snap.data();
        if (data.lawScore != null) {
          setScore(data.lawScore);
        }
      } else {
        // initialize if doc doesn't exist
        await setDoc(userDocRef, {
          quizScore: 0,
          wordleScore: 0,
          lawScore: 0,
          postsCount: 0,
          updatedAt: serverTimestamp(),
        });
      }
    }
    loadScore().catch(console.error);
  }, [userDocRef]);

  const handleAnswer = (index) => {
    setSelected(index);
  };

  const handleNext = async () => {
    const isCorrect = selected === lawOrNotQuestions[currentQ].answer;
    let newScore = score;
    if (isCorrect) {
      newScore = score + 1;
      setScore(newScore);
    }

    const next = currentQ + 1;
    if (next < lawOrNotQuestions.length) {
      setCurrentQ(next);
      setSelected(null);
    } else {
      setFinished(true);

      // persist new lawScore to Firestore
      try {
        await updateDoc(userDocRef, {
          lawScore: newScore,
          updatedAt: serverTimestamp(),
        });
      } catch (err) {
        await setDoc(
          userDocRef,
          {
            lawScore: newScore,
            updatedAt: serverTimestamp(),
          },
          { merge: true }
        );
      }
    }
  };

  const restart = () => {
    setCurrentQ(0);
    setSelected(null);
    setFinished(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 z-10 border border-indigo-100">
        {!finished ? (
          <>
            <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-8">
              Law or Not
            </h1>
            <p className="text-slate-600 mb-4 text-center">
              Question {currentQ + 1} of {lawOrNotQuestions.length}
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-indigo-700 mb-6 text-center">
              {lawOrNotQuestions[currentQ].question}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {lawOrNotQuestions[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`px-4 py-3 rounded-xl border text-left font-medium transition ${
                    selected === idx
                      ? "bg-gradient-to-r from-indigo-600 to-pink-500 text-white"
                      : "bg-white border-gray-300 hover:bg-indigo-50 text-slate-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-indigo-600 transition"
            >
              {currentQ === lawOrNotQuestions.length - 1 ? "Finish" : "Next"}
            </button>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-6">
              Finished!
            </h1>
            <p className="text-slate-700 mb-4">
              You scored <span className="font-bold text-indigo-700">{score}</span> out of{" "}
              {lawOrNotQuestions.length}
            </p>
            <button
              onClick={restart}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-indigo-600 transition"
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
