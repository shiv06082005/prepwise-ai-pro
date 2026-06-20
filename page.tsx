"use client";

import { useState } from "react";

export default function QuizPage() {
  const [subject, setSubject] = useState("");
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {
    if (!subject) {
      alert("Enter a subject");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject }),
    });

    const data = await res.json();
    setQuiz(data.quiz);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        AI Quiz Generator
      </h1>

      <input
        type="text"
        placeholder="Enter Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full p-4 rounded-lg bg-slate-800 mb-4"
      />

      <button
        onClick={generateQuiz}
        className="bg-cyan-500 px-6 py-3 rounded-lg font-bold"
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>

      {quiz && (
        <div className="mt-6 bg-slate-900 p-6 rounded-xl whitespace-pre-wrap">
          {quiz}
        </div>
      )}
    </main>
  );
}