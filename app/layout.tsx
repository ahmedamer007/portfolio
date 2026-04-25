import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";

export const metadata = {
  title: "Ahmed Amer | Front-End Developer",
  description:
    "Front-End Developer specializing in React, Next.js, and modern UI/UX. Portfolio showcasing real-world projects and interactive experiences.",
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Egypt",
    "JavaScript Developer",
  ],
  authors: [{ name: "Ahmed Amer" }],
  openGraph: {
    title: "Ahmed Amer Portfolio",
    description: "Modern Front-End Developer Portfolio",
    url: "https://myportfolio-kv7dgvgan-ahmedamers-projects.vercel.app/",
    siteName: "Ahmed Amer Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}