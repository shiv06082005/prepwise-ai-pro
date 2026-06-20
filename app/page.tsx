import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import {
  FaRobot,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          PrepWise AI
        </h1>

        <Link
          href="/login"
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold"
        >
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h1 className="text-6xl font-extrabold mb-6">
          Smart Study Planning
          <span className="text-cyan-400"> Powered By AI</span>
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          Generate personalized study schedules, track progress,
          create quizzes, and prepare smarter for your exams.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-cyan-500 px-8 py-4 rounded-xl font-bold hover:bg-cyan-600 transition"
          >
            Get Started
          </Link>

          <Link
            href="/plans"
            className="border border-slate-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
         <Link href="/dashboard">
  <FeatureCard
    title="AI Study Planner"
    description="Generate personalized study schedules using AI."
    icon={<FaRobot />}
  />
</Link>

          <Link href="/quiz">
  <FeatureCard
    title="Quiz Generator"
    description="Create MCQs and practice questions instantly."
    icon={<FaClipboardList />}
  />
</Link>

          <Link href="/dashboard">
  <FeatureCard
    title="Progress Tracking"
    description="Monitor your preparation with analytics dashboard."
    icon={<FaChartLine />}
  />
</Link>
        </div>
      </section>
    </main>
  );
}
