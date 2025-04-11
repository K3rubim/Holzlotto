import React, { useState } from "react";
import { bilder } from "./bilder";
import { RefreshCcw, CheckCircle } from "lucide-react"; // Icons optional

function App() {
  const [index, setIndex] = useState(Math.floor(Math.random() * bilder.length));
  const [antwort, setAntwort] = useState("");
  const [feedback, setFeedback] = useState(null);

  const aktuellesBild = bilder[index];

  const prüfen = () => {
    const eingabe = antwort.trim().toLowerCase();
    const korrekt = aktuellesBild.baumart.toLowerCase();

    if (eingabe === korrekt) {
      setFeedback("✅ Richtig!");
    } else {
      setFeedback(`❌ Falsch. Richtige Antwort: ${aktuellesBild.baumart}`);
    }
  };

  const nächstesBild = () => {
    setIndex(Math.floor(Math.random() * bilder.length));
    setAntwort("");
    setFeedback(null);
  };

  return (
  
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full flex flex-col items-center transition-all duration-300">
        <div className="border border-red-500 w-full mb-6">
          <h1 className="text-4xl font-bold text-green-800 text-center">
            Holzlotto
          </h1>
        </div>



        <img
          src={aktuellesBild.url}
          alt="Holz"
          style={{ width: "500px", height: "300px" }}
          className="mx-auto rounded-lg shadow mb-6 object-contain"
        />


        <input
          type="text"
          placeholder="Welche Baumart ist das?"
          value={antwort}
          onChange={(e) => setAntwort(e.target.value)}
          className="w-full border-2 border-green-300 p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 text-center text-lg transition"
        />

        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={prüfen}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition"
          >
            <CheckCircle size={20} /> Prüfen
          </button>
          <button
            onClick={nächstesBild}
            className="flex items-center gap-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-full transition"
          >
            <RefreshCcw size={20} /> Neues Bild
          </button>
        </div>

        {feedback && (
          <p className="text-lg font-semibold text-green-800">{feedback}</p>
        )}
      </div>
    </div>
  );
}

export default App;
