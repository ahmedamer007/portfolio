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
    live: "https://nutriplan-exam-pi.vercel.app/home",
    github: "#",
    image: "/projects/nutriplan.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden group"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="text-gray-400 mt-2 text-sm">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-cyan-400/20 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}