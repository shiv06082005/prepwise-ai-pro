import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { input } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are an expert AI Study Planner.

Rules:
- Use ONLY the subjects and exam dates provided by the user.
- Do not add extra subjects.
- Do not invent exam dates.
- Create a detailed day-wise study plan.
- Include revision days.
- Include practice question days.
- Include mock test days before exams.
- Mention the subject clearly for each day.
- Keep the plan practical and realistic.
- Return plain text only.
- Do NOT use markdown tables.
- Do NOT use pipe symbols (|).

Output Format:

Date: DD/MM/YY
Subject: Subject Name
Task: What to study

Date: DD/MM/YY
Subject: Subject Name
Task: Practice Questions

Date: DD/MM/YY
Subject: Subject Name
Task: Mock Test

Date: DD/MM/YY
Subject: Subject Name
Task: Final Revision

Date: DD/MM/YY
Exam: Subject Name
`
        },
        {
          role: "user",
          content: input,
        },
      ],
    });

    return NextResponse.json({
      plan: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate study plan" },
      { status: 500 }
    );
  }
}