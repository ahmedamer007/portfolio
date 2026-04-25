export default function Services() {
  return (
    <section className="py-24 bg-black text-white px-6">
      <h2 className="text-5xl font-bold text-center mb-12">
        What We Do
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div>
          <h3 className="text-xl font-semibold">Web Development</h3>
          <p className="text-gray-400 mt-2">
            Modern responsive websites using React & Next.js
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">UI/UX Design</h3>
          <p className="text-gray-400 mt-2">
            Clean and modern user interfaces with focus on experience
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Performance Optimization</h3>
          <p className="text-gray-400 mt-2">
            Fast, scalable and SEO-optimized web apps
          </p>
        </div>
      </div>
    </section>
  );
}