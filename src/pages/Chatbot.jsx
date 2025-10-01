import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, Bot, User, MapPin, Scale } from "lucide-react";

// 🔹 Small dictionary of topics → answers
const topicAnswers = {
  "fundamental rights":
    "🔹 Fundamental Rights are in Part III of the Constitution. They guarantee civil liberties like equality, freedom, and protection of life and personal liberty.",
  preamble:
    "📜 The Preamble states the guiding values of the Constitution — Justice, Liberty, Equality and Fraternity — and declares India as a sovereign, socialist, secular, democratic republic.",
  dpsp:
    "📑 Directive Principles of State Policy (Part IV) are guidelines for the government to ensure social and economic democracy.",
  "emergency powers":
    "⚠️ Emergency Provisions (Part XVIII) allow the President to declare National, State or Financial Emergency to safeguard the country in crisis."
};

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! Ask me anything about the Indian Constitution." },
  ]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;

    const newMsg = { from: "user", text: input.trim() };
    setMessages((prev) => [...prev, newMsg]);

    const lower = input.trim().toLowerCase();
    setInput("");

    // choose answer from dictionary
    let answer = topicAnswers[lower];
    if (!answer) {
      // fallback response
      answer = `🤔 I couldn't find a direct answer for "${newMsg.text}", but I can help you explore the Constitution.`;
    }

    // fake bot response after 1 sec
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: answer,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-10">
          Constitution Chatbot
        </h1>

        {/* Top Buttons */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <button
            onClick={() => navigate("/map")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-indigo-600 transition flex items-center gap-2"
          >
            <MapPin size={18} /> Explore Map
          </button>
          <button
            onClick={() => navigate("/crime-or-not")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-md hover:from-indigo-500 hover:to-purple-600 transition flex items-center gap-2"
          >
            <Scale size={18} /> Crime or Not Game
          </button>
        </div>

        {/* Chat Area */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-indigo-100 p-6 max-w-4xl mx-auto">
          <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.from === "bot" && (
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                    <Bot size={16} />
                  </div>
                )}
                <div
                  className={`px-4 py-3 rounded-2xl shadow ${
                    msg.from === "user"
                      ? "bg-gradient-to-r from-indigo-600 to-pink-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  } max-w-[70%] animate-fadeIn`}
                >
                  {msg.text}
                </div>
                {msg.from === "user" && (
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-full flex items-center justify-center text-white">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="mt-6 flex gap-3">
            <input
              type="text"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-indigo-600 transition flex items-center gap-2"
            >
              <Send size={18} /> Send
            </button>
          </div>
        </div>

        {/* Suggestion Chips */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {["Fundamental Rights", "Preamble", "DPSP", "Emergency Powers"].map(
            (chip) => (
              <button
                key={chip}
                onClick={() => {
                  setInput(chip);
                  setTimeout(handleSend, 100); // auto-send chip
                }}
                className="px-4 py-2 rounded-full bg-white/70 text-indigo-600 text-sm shadow hover:bg-white transition"
              >
                {chip}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
