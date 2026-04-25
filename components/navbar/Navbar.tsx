"use client";

import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // active section tracking
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // close menu on link click
  const handleLinkClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="text-white font-bold text-xl">
            Ahmed_Amer<span className="text-purple-500">.</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative transition ${
                    active === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-purple-500 transition-all
                    ${active === link.href ? "w-full" : "w-0"}`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Button */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:block px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition text-sm"
            >
              Hire Me
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE OVERLAY MENU ================= */}
      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 md:hidden
        ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Background blur */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu content */}
        <div
          className={`relative h-full flex flex-col items-center justify-center gap-8 transition-transform duration-500
          ${menuOpen ? "translate-y-0" : "translate-y-10"}`}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`text-2xl font-semibold transition-all duration-300
              ${
                active === link.href
                  ? "text-purple-500"
                  : "text-white hover:text-purple-400"
              }`}
              style={{
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {link.name}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}