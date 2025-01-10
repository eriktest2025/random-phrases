'use client';

import { useState } from "react";

export default function Home() {
  const [sentence, setSentence] = useState("");

  const fetchSentence = async () => {
    try {
      const response = await fetch('/api/data'); // Ensure '/api/data' matches your API route
      if (!response.ok) {
        throw new Error("Failed to fetch sentence");
      }
      const data = await response.json();
      setSentence(data.completeSentence); // Access the correct field from tahe response
    } catch (error) {
      console.error("Error fetching sentence:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-center mb-16 text-[3em] font-bold">Random Phrases</h1>
      <button className="text-[1.5em] border-2 border-black p-3 rounded-md" onClick={fetchSentence}>
        Click me
      </button>
      <p className="text-[2em] bg-white p-5 text-black rounded-xl">{sentence || "No sentence yet. Click the button!"}</p>
    </div>

  );
}
