"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Client Project",
    role: "Startup Owner",
    text: "Delivered a high-quality interface with great performance and smooth UX.",
  },
  {
    name: "Freelance Work",
    role: "Business Owner",
    text: "Amazing attention to detail and very professional frontend work.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <h2 className="text-5xl font-bold text-center mb-12">
        Testimonials
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <p className="text-gray-300">"{item.text}"</p>

            <div className="mt-4">
              <h4 className="font-semibold">{item.name}</h4>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}