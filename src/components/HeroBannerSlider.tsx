
"use client";

import Link from "next/link";
import { ArrowRight, Building2, HardHat } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative min-h-[82vh] flex items-center overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-[#142b4d] to-[#3154a5]" />

      <div className="absolute right-[-8%] top-[-15%] w-[550px] h-[550px] rounded-full border border-white/10" />
      <div className="absolute right-[5%] bottom-[-35%] w-[600px] h-[600px] rounded-full border border-white/10" />

      <div className="absolute right-0 bottom-0 opacity-10">
        <Building2 className="w-[500px] h-[500px] text-white" strokeWidth={0.5} />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 py-28">
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-300/30 bg-white/10 text-blue-100 text-xs font-semibold tracking-[0.2em] uppercase">
            <HardHat className="w-4 h-4" />
            Engineering & Construction
          </div>

          <h1 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.12] tracking-tight">
            Building with
            <span className="block text-blue-300">
              Purpose & Precision.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            ARHAM delivers building construction and civil engineering
            solutions with a focus on quality, thoughtful planning
            and dependable project execution.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
            >
              Explore Our Projects
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-4 rounded-md border border-white/40 text-white hover:bg-white hover:text-slate-900 font-semibold text-sm transition-all"
            >
              Discuss Your Project
            </Link>
          </div>

          <div className="mt-14 pt-7 border-t border-white/20 flex flex-wrap gap-x-10 gap-y-4 text-sm text-slate-300">
            <span>Building Construction</span>
            <span>Civil Engineering</span>
            <span>Quality & Commitment</span>
          </div>

        </div>
      </div>
    </section>
  );
}
