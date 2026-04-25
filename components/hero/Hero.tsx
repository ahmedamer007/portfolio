"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <section id="hero"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const xPos = e.clientX - rect.left - rect.width / 2;
        const yPos = e.clientY - rect.top - rect.height / 2;

        x.set(xPos);
        y.set(yPos);
      }}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

      {/* Content */}
      <motion.div
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10 px-4"
      >
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Ahmed Amer | Frontend Develpoer

        </h1>
         <br />
          
        <h2 >Building High-Performance Web Experiences </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
          I design and build high-performance, scalable, and visually engaging
          web applications using React and Next.js.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-cyan-400 text-black rounded-lg hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/cv/ahmed-amer-cv.pdf"
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70"></div>
    </section>
  );
}