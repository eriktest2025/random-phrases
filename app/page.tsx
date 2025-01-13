'use client';

import { useState } from "react";

export default function Home() {
  const [sentence, setSentence] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [predicate, setPredicate] = useState<string>("");
  const [error, setError] = useState<string | null>(null); 

  const fetchSentence = async () => {
    try {
      const response = await fetch('/api/data'); 
      if (!response.ok) {
        throw new Error("Failed to fetch sentence");
      }
      const data = await response.json();
      setSentence(data.completeSentence);
      setError(null); 
    } catch (error) {
      setError("Error fetching sentence. Please try again.");
      console.error("Error fetching sentence:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newSubject: subject, newPredicate: predicate }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Something went wrong");
        return;
      }

      setError(null); 
      alert("The values were added successfully");
      setSubject("");
      setPredicate("");
    } catch {
      setError("Failed to connect to the server");
    }
  };

  return (
    <div className="flex">
      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="w-[50%] flex flex-col items-center justify-center h-screen"
      >
        <h2 className="text-2xl font-bold mb-2">Enter a Subject</h2>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter a subject..."
          className="text-black border-2 p-2 rounded-md mb-4 w-3/4"
          required
        />
        <h2 className="text-2xl font-bold mb-2">Enter a Predicate</h2>
        <input
          type="text"
          value={predicate}
          onChange={(e) => setPredicate(e.target.value)}
          placeholder="Enter a Predicate..."
          className="text-black border-2 p-2 rounded-md mb-4 w-3/4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Send
        </button>
      </form>

      {/* Generador de Frases */}
      <div className="flex flex-col gap-5 justify-center items-center h-screen w-[50%]">
        <h1 className="text-center mb-16 text-3xl font-bold bg-">Random Phrases</h1>
        <button
          className="text-lg border-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={fetchSentence}
        >
          Generate Sentence
        </button>
        <p className="text-2xl bg-white p-5 text-black rounded-xl">
          {sentence || "No sentence yet. Click the button!"}
        </p>
        {error && (
          <p className="text-red-500 mt-4">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
