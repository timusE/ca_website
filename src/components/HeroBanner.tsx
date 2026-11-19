"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

// ============================================================
// HERO SLIDES — Edit slides content here.
// BACKGROUND IMAGES: Place images in /public/images/hero/ folder
// e.g., /public/images/hero/slide1.jpg, /public/images/hero/slide2.jpg
// Then set the bgImage path below.
// If no image is placed, the gradient background will show.
// ============================================================
const slides = [
  {
    title: `Welcome to ${siteConfig.firmName}`,
    subtitle: siteConfig.firmTagline,
    description:
      "Your trusted partner for comprehensive financial, taxation, and compliance solutions.",
    cta: { label: "Our Services", href: "/services" },
    bgImage: "/images/hero/slide1.jpg",
  },
  {
    title: "Expert Tax & GST Solutions",
    subtitle: "Direct Tax | GST | TDS | International Taxation",
    description:
      "Accurate tax planning and compliance management to help you save more while staying fully compliant.",
    cta: { label: "Learn More", href: "/services/direct-taxation" },
    bgImage: "/images/hero/slide2.jpg",
  },
  {
    title: "Startup & Business Registration",
    subtitle: "Company | LLP | Partnership | MSME",
    description:
      "Turn your business idea into reality with our hassle-free incorporation and registration services.",
    cta: { label: "Get Started", href: "/services/startup-registration" },
    bgImage: "/images/hero/slide3.jpg",
  },
  {
    title: "Audit & Assurance Services",
    subtitle: "Statutory | Tax | Internal | GST Audit",
    description:
      "Reliable audit services conducted with the highest professional standards and attention to detail.",
    cta: { label: "Know More", href: "/services/audit-and-assurance" },
    bgImage: "/images/hero/slide4.jpg",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="relative text-white overflow-hidden min-h-[420px] md:min-h-[500px]">
      {/* All background layers pre-rendered — opacity transition only (GPU friendly) */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Dark overlay — always visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-dark/70" />

      {/* Content */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-secondary font-semibold mb-2 tracking-wide uppercase text-sm">
            {slides[current].subtitle}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {slides[current].title}
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
            {slides[current].description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={slides[current].cta.href}
              className="inline-flex items-center px-7 py-3.5 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-lg text-base"
            >
              {slides[current].cta.label}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 rounded-full hover:bg-black/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 rounded-full hover:bg-black/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-secondary w-8" : "bg-white/40 w-3"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
