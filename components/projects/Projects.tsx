"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "[Fresh Cart] E-Commerce Platform",
    desc: "Built scalable e-commerce platform with filtering, cart system, and API integration improving user interaction.",
    tech: ["React", "Tailwind", "API"],
    live: "#",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    desc: "Interactive dashboard with analytics, charts, and dynamic data visualization.",
    tech: ["Next.js", "Chart.js"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Modern cinematic portfolio with smooth animations and responsive design.",
    tech: ["Next.js", "Framer Motion"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 transition group overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

            <h3 className="text-xl font-semibold relative z-10">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-2 relative z-10">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-4 relative z-10">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-cyan-400/20 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4 relative z-10">
              <a
                href={project.live}
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                className="text-gray-300 hover:underline"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}