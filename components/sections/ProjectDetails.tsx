import React from "react";

const projects = [
  {
    title: "AI Portfolio Platform",
    description:
      "A modern portfolio system with AI-powered content generation, animations, and CMS-like structure.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    role: "Frontend Developer",
    year: "2026",
  },
  {
    title: "Library Management System",
    description:
      "Full desktop app to manage books, users, and borrowing system using Tkinter & MySQL.",
    tech: ["Python", "Tkinter", "MySQL"],
    role: "Full Stack Developer",
    year: "2025",
  },
  {
    title: "Pharmacy System",
    description:
      "Inventory + billing system for pharmacy management with real-time stock tracking.",
    tech: ["Python", "MySQL"],
    role: "Backend Developer",
    year: "2025",
  },
];

export default function ProjectDetails() {
  return (
    <section id="projects" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Project <span className="text-purple-500">Details</span>
          </h2>
          <p className="text-gray-400 mt-4">
            A deeper look into what I’ve built and my role in each project
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-sm text-gray-400">{project.year}</span>
              </div>

              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm text-gray-300">
                  <span className="text-white">Role:</span> {project.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}