"use client";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "MySQL", "Python", "REST APIs"],
  },
  {
    category: "UI/UX",
    items: ["Figma", "Responsive Design", "Design Systems"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vite"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Technologies I use to build scalable and modern web apps
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm rounded-full bg-black/40 border border-white/10 hover:border-purple-500 hover:text-purple-300 transition"
                  >
                    {skill}
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