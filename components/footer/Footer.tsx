export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 border-t border-white/10 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} ؛AhmedAmerPortfolio. All rights reserved.
        </p>

        <p className="text-sm">
          Built by <span className="text-white font-semibold">Ahmed Amer</span>
        </p>
        <a href="/cv/ahmed-amer-cv.pdf" download className="btn-primary">
          Download CV
        </a>
      </div>
    </footer>
  );
}
