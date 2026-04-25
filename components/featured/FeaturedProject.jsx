"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 mb-3 text-sm tracking-widest uppercase">
            Featured Project
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Norden Portfolio
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed">
            A cinematic and interactive portfolio built to create immersive user
            experiences using smooth animations, modern UI patterns, and
            performance-focused techniques.
          </p>

          {/* TECH */}
          <div className="flex gap-2 flex-wrap mb-6">
            {["Next.js", "Framer Motion", "UI/UX"].map((tech, i) => (
              <span
                key={i}
                className="text-xs bg-cyan-400/20 px-3 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://norden-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-400 text-black rounded-lg hover:scale-105 transition"
            >
              Live Demo
            </a>

            <a
              href="#"
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
            >
              Case Study
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] md:h-[400px]"
        >
          <Image
            src="/projects/norden.jpg"
            alt="Norden Project"
            fill
            className="object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}
