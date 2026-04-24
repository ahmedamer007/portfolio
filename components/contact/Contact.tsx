"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-400 mb-10">
          I'm currently available for freelance or full-time opportunities.
        </p>

        <form
          action="https://formspree.io/f/xojyrane"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none h-32"
          ></textarea>

          <button
            type="submit"
            className="bg-cyan-400 text-black py-3 rounded-lg hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 flex justify-center gap-6 text-gray-400">
          <a href="#">Email</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </motion.div>
    </section>
  );
}
