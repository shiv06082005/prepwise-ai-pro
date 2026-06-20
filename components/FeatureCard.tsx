import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      <div className="text-cyan-400 text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-slate-400">
        {description}
      </p>
    </div>
  );
}