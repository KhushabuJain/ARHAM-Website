
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Respect the visitor's reduced-motion preference.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const handleMotionPreference = () => {
      if (motionPreference.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          // The poster remains visible if autoplay is blocked.
        });
      }
    };

    handleMotionPreference();

    motionPreference.addEventListener(
      "change",
      handleMotionPreference
    );

    return () => {
      motionPreference.removeEventListener(
        "change",
        handleMotionPreference
      );
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#08162d] text-white">

      {/* Background poster */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-poster.jpg')",
        }}
      />

      {/* Background video */}
      <div
        className="absolute inset-0 -z-20 overflow-hidden"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="h-full w-full object-cover motion-reduce:hidden"
        >
          <source
            src="/videos/arham-hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07152d]/95 via-[#0b1e3b]/75 to-[#0b1e3b]/25" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07152d]/90 via-transparent to-[#07152d]/30" />

      {/* Subtle blue atmospheric lighting */}
      <div className="absolute -right-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-500/15 blur-[120px]" />

      {/* Hero content */}
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-36 pt-36 lg:px-10">

        <div className="max-w-4xl">

          {/* Eyebrow */}
          <p className="hero-fade-up flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-300 sm:text-sm">
            <span className="h-px w-12 bg-blue-300" />
            Integrated Engineering Solutions
          </p>

          {/* Main heading */}
          <h1 className="hero-fade-up hero-delay-1 mt-8 text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
            Engineering
            <span className="mt-2 block text-blue-300">
              Spaces.
            </span>
            <span className="mt-2 block">
              Building Progress.
            </span>
          </h1>

          {/* Description */}
          <p className="hero-fade-up hero-delay-2 mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            ARHAM brings together architectural design,
            structural engineering and integrated building
            services to support industrial and commercial
            developments.
          </p>

          {/* CTA buttons */}
          <div className="hero-fade-up hero-delay-3 mt-10 flex flex-wrap gap-4">

            <Link
              href="/turnkey-services"
              className="group inline-flex items-center gap-4 rounded-md bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-900/40"
            >
              Explore Our Services

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-4 rounded-md border border-white/40 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/15"
            >
              View Our Projects

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>

        {/* Bottom information strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-[#08162d]/25 backdrop-blur-sm">

          <div className="mx-auto grid max-w-7xl gap-5 px-6 py-7 sm:grid-cols-3 lg:px-10">

            {[
              "Industrial Buildings",
              "Commercial Buildings",
              "Integrated Engineering Services",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 text-sm font-medium text-slate-200"
              >
                <span className="text-xs tracking-widest text-blue-300">
                  0{index + 1}
                </span>

                <span>{item}</span>
              </div>
            ))}

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-28 right-8 hidden flex-col items-center gap-3 text-xs uppercase tracking-widest text-white/60 lg:flex">
          Scroll to explore

          <ArrowDown size={18} className="animate-bounce" />
        </div>

      </div>
    </section>
  );
}
