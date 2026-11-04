
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  DraftingCompass,
  ShieldCheck,
  Lightbulb,
  Target,
  CheckCircle2,
  Workflow,
  Flame,
  Wind,
  Droplets,
  Plug,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About ARHAM | Engineering & Construction Solutions",
  description:
    "Discover ARHAM, an engineering and construction company providing integrated solutions for industrial and commercial buildings.",
  keywords: [
    "ARHAM engineering",
    "building construction",
    "civil engineering",
    "architectural design",
    "structural engineering",
    "industrial and commercial buildings",
  ],
};

const expertise = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Thoughtful architectural planning and design solutions that balance functionality, aesthetics and practical requirements.",
    icon: DraftingCompass,
  },
  {
    number: "02",
    title: "Structural Engineering",
    description:
      "Engineering-focused structural solutions designed around building requirements, stability and performance.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Mechanical & HVAC",
    description:
      "Mechanical systems and HVAC solutions that support efficient building environments and ventilation.",
    icon: Wind,
  },
  {
    number: "04",
    title: "Firefighting Solutions",
    description:
      "Fire protection and firefighting system solutions integrated into building planning and requirements.",
    icon: Flame,
  },
  {
    number: "05",
    title: "Electrical Installations",
    description:
      "Electrical installation planning and solutions for industrial and commercial building requirements.",
    icon: Plug,
  },
  {
    number: "06",
    title: "Plumbing & Drainage",
    description:
      "Plumbing and drainage solutions planned to support reliable building operations and functionality.",
    icon: Droplets,
  },
];

const principles = [
  "Integrated engineering solutions",
  "Practical and thoughtful planning",
  "Quality-focused execution",
  "Client-oriented approach",
  "Innovation and sustainability",
  "Coordinated technical expertise",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#F5F3EE] text-[#252C35]">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-[#101F3C]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
            alt="Modern commercial building architecture"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101F3C] via-[#101F3C]/90 to-[#101F3C]/40" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D6B779]">
              <span className="h-[2px] w-10 bg-[#D6B779]" />
              About ARHAM
            </div>

            <h1 className="mt-7 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              Engineering Ideas.
              <span className="block text-[#D6B779]">
                Building Possibilities.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#D5DAE2] sm:text-lg">
              Bringing architectural vision and engineering expertise
              together to create integrated solutions for industrial
              and commercial buildings.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-sm bg-[#D6B779] px-7 py-4 text-sm font-bold text-[#101F3C] transition-all duration-300 hover:bg-[#E5CC98]"
              >
                Discuss Your Project
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/turnkey-services"
                className="inline-flex items-center gap-3 rounded-sm border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#D6B779] hover:bg-[#D6B779] hover:text-[#101F3C]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden border-l border-t border-[#D6B779]/30 bg-[#101F3C]/75 px-10 py-7 backdrop-blur-md lg:block">
          <p className="text-xs uppercase tracking-[0.2em] text-[#D6B779]">
            Our Approach
          </p>
          <p className="mt-2 text-lg font-semibold text-white">
            Integrated Engineering Solutions
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-[#F5F3EE] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div className="relative pb-6 pr-4 lg:pr-8">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1100&q=85"
                alt="Building construction and engineering work"
                className="h-[420px] w-full object-cover lg:h-[540px]"
              />

              <div className="absolute -bottom-2 -right-1 max-w-[270px] bg-[#101F3C] p-7 lg:-right-4 lg:p-9">
                <Building2 className="mb-4 h-9 w-9 text-[#D6B779]" />
                <p className="text-xl font-bold leading-snug text-white">
                  One Vision.
                  <br />
                  Multiple Engineering Disciplines.
                </p>
                <div className="mt-5 h-[2px] w-12 bg-[#D6B779]" />
              </div>
            </div>

            <div className="lg:pl-5">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#A78343]">
                <span className="h-[2px] w-9 bg-[#D6B779]" />
                Who We Are
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#101F3C] sm:text-4xl lg:text-5xl">
                An Engineering Partner Built Around
                <span className="text-[#A78343]"> Experience & Expertise.</span>
              </h2>

              <p className="mt-7 leading-8 text-[#626873]">
                ARHAM is an engineering and construction company
                focused on providing integrated solutions for
                industrial and commercial buildings.
              </p>

              <p className="mt-5 leading-8 text-[#626873]">
                As a new brand backed by an experienced team,
                we bring together expertise across architectural
                design, structural engineering and essential
                building systems.
              </p>

              <p className="mt-5 leading-8 text-[#626873]">
                Our approach is centred on understanding project
                requirements, coordinating engineering disciplines
                and developing practical solutions that support
                functionality, quality and long-term value.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-6 border-t border-[#DEDAD1] pt-7">
                <div>
                  <DraftingCompass className="mb-3 h-7 w-7 text-[#A78343]" />
                  <h3 className="text-lg font-bold text-[#101F3C]">
                    Technical Focus
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#777D85]">
                    Thoughtful engineering and planning.
                  </p>
                </div>

                <div>
                  <Workflow className="mb-3 h-7 w-7 text-[#A78343]" />
                  <h3 className="text-lg font-bold text-[#101F3C]">
                    Integrated Approach
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#777D85]">
                    Multiple disciplines, one coordinated vision.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="bg-[#101F3C] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6B779]">
              What Drives Us
            </span>

            <div className="mx-auto mt-4 h-[2px] w-14 bg-[#D6B779]" />

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
              Our Vision & Mission
            </h2>

            <p className="mt-5 leading-7 text-[#C1C9D5]">
              Guided by engineering excellence, innovation and
              a commitment to meaningful project outcomes.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2">

            <div className="border border-white/15 bg-white/[0.04] p-9 transition-all duration-300 hover:border-[#D6B779]/60 lg:p-12">
              <div className="flex h-14 w-14 items-center justify-center bg-[#D6B779]/10">
                <Lightbulb className="h-7 w-7 text-[#D6B779]" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-[#C1C9D5]">
                To be a trusted engineering partner recognised
                for delivering innovative, sustainable and
                integrated engineering solutions that contribute
                to better buildings and infrastructure.
              </p>
            </div>

            <div className="border border-white/15 bg-white/[0.04] p-9 transition-all duration-300 hover:border-[#D6B779]/60 lg:p-12">
              <div className="flex h-14 w-14 items-center justify-center bg-[#D6B779]/10">
                <Target className="h-7 w-7 text-[#D6B779]" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-[#C1C9D5]">
                To provide comprehensive engineering solutions
                through technical expertise, coordinated planning
                and a client-focused approach, while maintaining
                a strong commitment to quality and sustainability.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#A78343]">
                <span className="h-[2px] w-9 bg-[#D6B779]" />
                Our Expertise
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold text-[#101F3C] sm:text-5xl">
                Engineering Solutions Under One Roof.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#626873]">
              Our multidisciplinary expertise brings together
              the essential engineering systems required for
              industrial and commercial building projects.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group border border-[#E9E6DF] bg-[#F5F3EE] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779] hover:bg-[#101F3C] hover:shadow-[0_16px_35px_rgba(16,31,60,0.10)] lg:p-10"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-9 w-9 text-[#A78343] transition-colors group-hover:text-[#D6B779]" />
                    <span className="text-sm font-semibold text-[#B8B4AA] transition-colors group-hover:text-white/40">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-9 text-xl font-bold text-[#101F3C] transition-colors group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#626873] transition-colors group-hover:text-[#C1C9D5]">
                    {item.description}
                  </p>

                  <div className="mt-7 h-[2px] w-10 bg-[#D6B779] transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/turnkey-services"
              className="inline-flex items-center gap-3 text-sm font-bold text-[#101F3C] transition-colors hover:text-[#A78343]"
            >
              Discover All Services
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE ARHAM */}
      <section className="bg-[#E9E6DF] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#A78343]">
                <span className="h-[2px] w-9 bg-[#D6B779]" />
                Why ARHAM
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-[#101F3C] sm:text-5xl">
                The Right Approach Makes Every Project Stronger.
              </h2>

              <p className="mt-6 leading-8 text-[#626873]">
                Every building project requires the right balance
                of design, engineering and coordination.
                ARHAM brings these disciplines together with
                a focus on practical solutions and client needs.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 bg-[#101F3C] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#D6B779] hover:text-[#101F3C]"
              >
                Work With ARHAM
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="border border-[#DEDAD1] bg-[#F5F3EE] p-8 sm:p-12">
              <div className="mb-8 flex items-center gap-4">
                <ShieldCheck className="h-10 w-10 text-[#A78343]" />
                <h3 className="text-2xl font-bold text-[#101F3C]">
                  Our Core Principles
                </h3>
              </div>

              <div className="space-y-6">
                {principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex items-center gap-4 border-b border-[#DEDAD1] pb-5"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#A78343]" />
                    <span className="font-medium text-[#454D58]">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#101F3C] py-24">
        <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#D6B779]/15" />
        <div className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full border border-[#D6B779]/15" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6B779]">
            Let&apos;s Build Together
          </span>

          <div className="mx-auto mt-4 h-[2px] w-14 bg-[#D6B779]" />

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Have a Project in Mind?
            <span className="block text-[#D6B779]">
              Let&apos;s Make It Happen.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#C1C9D5]">
            Connect with ARHAM to discuss your industrial or
            commercial building requirements and explore
            integrated engineering solutions.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-[#D6B779] px-9 py-4 text-sm font-bold text-[#101F3C] transition-all duration-300 hover:bg-[#E5CC98]"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}
