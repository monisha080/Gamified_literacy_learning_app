import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

function Games() {
  const games = [
    { name: "Constitution Quiz", desc: "Multiple choice questions to test knowledge.", path: "/games/quiz" },
    { name: "Law or Not", desc: "Decide whether a statement is a real law or fake.", path: "/games/law-or-not" },
    { name: "Article Wordle", desc: "Guess missing words from constitutional articles.", path: "/games/wordle" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1 px-6 py-10 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Gamified Learning</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <Link
              key={game.name}
              to={game.path}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border text-center"
            >
              <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
              <p className="text-sm text-gray-600">{game.desc}</p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Games;
