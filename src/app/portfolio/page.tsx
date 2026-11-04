
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Maximize2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Building,
  Briefcase,
  HardHat,
} from "lucide-react";

import { getSafeAllProjects } from "@/lib/fallbackData";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Our Projects | ARHAM – Engineering & Construction",
  description:
    "Explore engineering, building construction and turnkey project experience across industrial and commercial developments with ARHAM.",
  keywords: [
    "ARHAM projects",
    "industrial construction projects",
    "commercial building construction",
    "civil engineering portfolio",
    "turnkey construction projects",
  ],
};

export default async function PortfolioPage() {
  const projects = await getSafeAllProjects();

  return (
    <main className="bg-[#fafafc] text-slate-900 min-h-screen">

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-[#fafafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            Our Work & Experience
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-5xl mx-auto">
            Building with Purpose.
            <span className="brand-gradient-text"> Engineering with Precision.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our team's engineering and construction experience
            across industrial and commercial developments. Every project
            reflects our commitment to thoughtful planning, technical
            coordination and quality execution.
          </p>

          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-6 grid grid-cols-2 md:grid-cols-3 gap-6">

            <div className="flex flex-col items-center text-center">
              <Award className="w-7 h-7 text-[#3154A5] mb-2" />
              <span className="font-bold text-sm">Experienced Team</span>
              <span className="text-xs text-slate-500 mt-1">
                Engineering Expertise
              </span>
            </div>

            <div className="flex flex-col items-center text-center">
              <Building className="w-7 h-7 text-[#3154A5] mb-2" />
              <span className="font-bold text-sm">Industrial & Commercial</span>
              <span className="text-xs text-slate-500 mt-1">
                Building Solutions
              </span>
            </div>

            <div className="flex flex-col items-center text-center col-span-2 md:col-span-1">
              <Briefcase className="w-7 h-7 text-[#3154A5] mb-2" />
              <span className="font-bold text-sm">Turnkey Solutions</span>
              <span className="text-xs text-slate-500 mt-1">
                From Planning to Execution
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3154A5]">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-3">
            Engineering & Construction Experience
          </h2>
          <p className="mt-4 text-sm text-slate-600 max-w-2xl mx-auto">
            A showcase of the team's project experience, technical
            capabilities and approach to delivering integrated building
            solutions.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="space-y-16">

            {projects.map((project, index) => {
              let highlightsArray: string[] = [];

              try {
                const parsed = JSON.parse(project.highlights);
                highlightsArray = Array.isArray(parsed)
                  ? parsed
                  : [project.highlights];
              } catch {
                highlightsArray = [project.highlights];
              }

              const isEven = index % 2 === 0;

              return (
                <article
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10"
                >

                  {/* IMAGE */}
                  <div
                    className={`lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden group ${
                      isEven ? "" : "lg:order-2"
                    }`}
                  >
                    {/* <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    /> */}

                      {project.heroImage ? (
  <img
    src={project.heroImage}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  />
) : (
  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
    <span className="text-slate-500 text-sm">
      Project image coming soon
    </span>
  </div>
)}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-[#3154A5]">
                      {project.category}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-xs text-white bg-slate-900/85 backdrop-blur-md p-4 rounded-xl">

                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-300" />
                        {project.locality}
                      </span>

                      <span className="flex items-center gap-2 font-semibold">
                        <Maximize2 className="w-4 h-4 text-emerald-400" />
                        {project.sqft?.toLocaleString()} Sq. Ft.
                      </span>

                    </div>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between h-full py-2 ${
                      isEven ? "" : "lg:order-1"
                    }`}
                  >

                    <div>

                      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#3154A5] text-xs font-bold mb-4">
                        <HardHat className="w-4 h-4" />
                        Team Project Experience
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-bold leading-snug">
                        {project.title}
                      </h3>

                      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">

                        <div className="flex items-center gap-2 font-semibold text-slate-900">
                          <span className="text-[#3154A5]">●</span>
                          {project.scope}
                        </div>

                        <div className="flex items-center gap-2 text-slate-600 mt-2">
                          <MapPin className="w-4 h-4 text-[#3154A5]" />
                          {project.locality}
                        </div>

                      </div>

                      <p className="mt-5 text-sm text-slate-600 leading-relaxed">
                        An example of the team's experience in engineering
                        and construction, demonstrating technical
                        coordination, project planning and attention
                        to execution requirements.
                      </p>

                      <div className="mt-7">

                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                          Project Highlights
                        </h4>

                        <ul className="space-y-3">
                          {highlightsArray.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">

                      <p className="text-xs text-slate-500 mb-4">
                        Looking for engineering and construction
                        solutions for your next project?
                      </p>

                      <Link
                        href="/contact"
                        className="brand-button px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                      >
                        Discuss Your Project
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                    </div>

                  </div>
                </article>
              );
            })}

          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <Building className="w-12 h-12 text-[#3154A5] mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold">
              Our Project Portfolio
            </h3>
            <p className="text-sm text-slate-500 mt-3 max-w-lg mx-auto">
              Our team's engineering and construction experience
              reflects our commitment to integrated building solutions.
              Project showcases will be updated as approved details
              become available.
            </p>
            <Link
              href="/contact"
              className="brand-button inline-flex items-center gap-2 px-6 py-3 rounded-full mt-6 text-xs font-bold uppercase"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-t border-blue-200">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3154A5]">
            Let's Build Together
          </span>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-4">
            Have a Project in Mind?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you are planning an industrial facility or a
            commercial building, ARHAM brings engineering,
            construction and turnkey solutions together under
            one coordinated approach.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="brand-button px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
