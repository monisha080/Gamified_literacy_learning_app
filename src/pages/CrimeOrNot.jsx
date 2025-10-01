import React, { useState } from "react";

const crimes = [
  {
    title: "Theft",
    img: "https://th.bing.com/th/id/OIP.B9fkShfAs6Qjz9xNdpfTwQHaHa?w=169&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    punishment: "Section 378 IPC: Imprisonment up to 3 years, or fine, or both.",
  },
  {
    title: "Bribery",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=500&q=80",
    punishment:
      "Prevention of Corruption Act: Imprisonment up to 7 years and fine.",
  },
  {
    title: "Cyber Fraud",
    img: "https://www.bing.com/th/id/OIP.fAdCKytMSPbXbXhV0HW7PgHaFW?w=256&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    punishment:
      "IT Act 2000: Imprisonment up to 3 years and/or fine up to ₹1 lakh.",
  },
  {
    title: "Domestic Violence",
    img: "https://th.bing.com/th/id/OIP.0rBG7Q4Z4P-MgF581kvr5gHaDm?w=350&h=170&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    punishment:
      "Domestic Violence Act 2005: Protection orders and criminal penalties.",
  },
  {
    title: "Drug Trafficking",
    img: "https://th.bing.com/th/id/OIP.RcrIkzLij4TZNcYL-NDt1AHaEK?w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    punishment:
      "NDPS Act 1985: Rigorous imprisonment 10–20 years + fine up to ₹2 lakh.",
  },
  {
    title: "Child Labour",
    img: "https://www.bing.com/th/id/OIP.TSiGTBJGOLfQhe9EHcgeCQHaD5?w=273&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    punishment:
      "Child Labour Prohibition Act: Fine ₹20,000–₹50,000 and/or imprisonment 6 months–2 years.",
  },
];


export default function CrimeOrNot() {
  const [flipped, setFlipped] = useState(Array(crimes.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlip = [...prev];
      newFlip[index] = !newFlip[index];
      return newFlip;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-6 py-16 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#6366f1_1px,transparent_0)] bg-[size:40px_40px]"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-12">
          Crime & Punishment in India
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {crimes.map((crime, idx) => (
            <div
              key={idx}
              className="relative h-72 cursor-pointer group [perspective:1000px]"
              onClick={() => handleFlip(idx)}
            >
              {/* Card inner */}
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped[idx] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center justify-center [backface-visibility:hidden]">
                  <img
                    src={crime.img}
                    alt={crime.title}
                    className="w-full h-40 object-cover"
                  />
                  <h3 className="text-xl font-bold text-indigo-700 mt-4">
                    {crime.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Click to view punishment</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-pink-500 rounded-2xl shadow-xl flex items-center justify-center text-white text-center px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-lg leading-relaxed">{crime.punishment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8">
          Tap on any card to flip and see the punishment.
        </p>
      </div>
    </div>
  );
}
