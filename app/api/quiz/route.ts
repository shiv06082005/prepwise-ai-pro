import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { subject } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are an AI Quiz Generator.

Rules:
- Generate 5 MCQ questions.
- Each question must have 4 options (A, B, C, D).
- Mention the correct answer.
- Plain text only.
`,
        },
        {
          role: "user",
          content: subject,
        },
      ],
    });

    return NextResponse.json({
      quiz: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Quiz generation failed" },
      { status: 500 }
    );
  }
}