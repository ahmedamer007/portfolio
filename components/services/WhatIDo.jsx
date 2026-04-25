"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Performance Optimization",
    desc: "Building fast and optimized applications with efficient rendering, lazy loading, and smooth user experience.",
  },
  {
    title: "Clean Architecture",
    desc: "Structuring scalable and maintainable codebases with reusable components and clear separation of concerns.",
  },
  {
    title: "Reusable Components",
    desc: "Designing modular UI components to speed up development and ensure consistency across the application.",
  },
  {
    title: "UI/UX Engineering",
    desc: "Bridging design and development to create intuitive, responsive, and engaging user interfaces.",
  },
];

export default function WhatIDo() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            What I Bring
          </h2>

          <p className="text-gray-400 mt-4">
            I focus on building high-quality, scalable, and user-centered web applications.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition"
            >
              <h3 className="text-lg font-semibold mb-3 group-hover:text-cyan-400 transition">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}