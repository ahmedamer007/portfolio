"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
export default function Home() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); // مدة اللودر

  return () => clearTimeout(timer);
}, []);

 if (loading) return <Loader />;

return (
  <main>
    <Navbar />
    <Hero />
    <Projects />
      <Testimonials />
    <Contact />
    <Footer />
  </main>
);
}
