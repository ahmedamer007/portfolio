"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "FreshCart - E-Commerce Platform",
    desc: "Fully responsive e-commerce web application with product browsing, cart system, and category filtering.",
    tech: ["React", "Tailwind", "API"],
    live: "https://fresh-cart-eight-rosy.vercel.app/",
    github: "#",
    image: "/projects/freshcart.jpg",
  },
  {
    title: "Adasa Blog",
    desc: "Modern blog platform with dynamic content rendering and clean UI for publishing articles and posts.",
    tech: ["React", "Next.js", "UI"],
    live: "https://adasa-blog-beta.vercel.app/",
    github: "#",
    image: "/projects/adasa.jpg",
  },
  {
    title: "Norden Portfolio",
    desc: "Interactive cinematic portfolio website with smooth animations and immersive UI experience.",
    tech: ["Next.js", "Framer Motion", "UI/UX"],
    live: "https://norden-one.vercel.app/",
    github: "#",
    image: "/projects/norden.jpg",
  },
  {
    title: "NutriPlan",
    desc: "Nutrition and meal planning app for creating personalized diet plans and tracking food intake.",
    tech: ["React", "UI", "Data Handling"],
    live: "https://nutriplan-exam-pi.vercel.app/",
    github: "#",
    image: "/projects/nutriplan.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
        Selected Work
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -10 }}
            className="group relative block rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>

            {/* CONTENT */}
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-cyan-400/20 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4 text-sm">
                <span className="text-cyan-400">View Project →</span>

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}