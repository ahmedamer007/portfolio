"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <section
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
      <div
        className="absolute w-[
      
      
      
      
      
      x] h-200 bg-cyan-500/20 blur-[200px] rounded-full"
      ></div>

      {/* Content */}
      <motion.div
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05 }}
          className="text-5xl md:text-7xl font-bold"
        >
          {"Ahmed Amer".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <p className="mt-4 text-gray-400 text-lg">
          Crafting immersive web experiences.
        </p>

        <button className="mt-6 px-6 py-3 bg-cyan-400 text-black rounded-lg hover:scale-105 transition">
          View Work
        </button>
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-br from-black via-gray-900 to-black animate-pulse"></div>

     
    </section>
  );
}
