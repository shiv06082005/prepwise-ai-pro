"use client";

import { useState } from "react";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    if (!input.trim()) {
      alert("Please enter subjects and exam dates");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/study-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();

      if (data.plan) {
        setPlan(data.plan);
      } else {
        setPlan("Failed to generate study plan.");
      }
    } catch (error) {
      console.error(error);
      setPlan("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        AI Study Planner
      </h1>

      <div className="bg-slate-900 p-6 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">
          Enter Subjects & Exam Dates
        </h2>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Example:

Maths - 16/06/26
EVS - 20/06/26
English - 25/06/26
Hindi - 28/06/26`}
          className="w-full h-48 p-4 rounded-lg bg-slate-800 text-white"
        />

        <button
          onClick={generatePlan}
          disabled={loading}
          className="mt-4 bg-cyan-500 px-6 py-3 rounded-lg font-bold hover:bg-cyan-600"
        >
          {loading ? "Generating..." : "Generate Study Plan"}
        </button>

        {plan && (
          <div className="mt-6 bg-slate-800 p-5 rounded-lg whitespace-pre-wrap">
            {plan}
          </div>
        )}
      </div>
    </main>
  );
}