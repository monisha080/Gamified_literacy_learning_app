// src/pages/FunFacts.jsx

export default function FunFacts() {
  const facts = [
    "The U.S. Constitution is the oldest written national constitution still in use.",
    "It has only 27 amendments since 1787.",
    "The Bill of Rights comprises the first 10 amendments.",
    "The U.S. Constitution originally did not specify the number of Supreme Court justices.",
    "Rhode Island was the last of the original 13 colonies to ratify it.",
    "The Constitution was signed in Independence Hall, Philadelphia.",
    "James Madison is often called the Father of the U.S. Constitution.",
    "The 19th Amendment granted women the right to vote in 1920.",
    "The 26th Amendment lowered the voting age from 21 to 18.",
    "The Constitution is only about 4,500 words long."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-16 relative overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-12">
          Fun Facts – Another Country
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {facts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-indigo-100 hover:shadow-2xl transition text-gray-700 text-left"
            >
              <span className="block text-indigo-600 font-bold mb-2">Fact {idx + 1}</span>
              {fact}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
