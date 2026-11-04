
import Link from "next/link";
import ClientLogos from "@/components/ClientLogos";
import HeroSection from "@/components/HeroSection";
import {
  ArrowRight,
  Building2,
  DraftingCompass,
  Wind,
  Flame,
  Zap,
  Droplets,
  Factory,
  Sun,
  Layers3,
  CheckCircle2,
  Leaf,
  Network,
  ClipboardList,
  Ruler,
} from "lucide-react";

const services = [
  {
    title: "Architectural Design",
    description:
      "Architectural design solutions for industrial and commercial building projects.",
    icon: DraftingCompass,
  },
  {
    title: "Structural Engineering",
    description:
      "Structural engineering solutions for building planning and development.",
    icon: Building2,
  },
  {
    title: "Mechanical Systems (HVAC)",
    description:
      "Mechanical systems and HVAC solutions for industrial and commercial spaces.",
    icon: Wind,
  },
  {
    title: "Firefighting Solutions",
    description:
      "Firefighting solutions as part of integrated building engineering services.",
    icon: Flame,
  },
  {
    title: "Electrical Installations",
    description:
      "Electrical installation solutions for building projects.",
    icon: Zap,
  },
  {
    title: "Plumbing & Drainage",
    description:
      "Plumbing and drainage solutions for industrial and commercial buildings.",
    icon: Droplets,
  },
  {
    title: "Green Building & Sustainable Design",
    description:
      "Sustainable design solutions focused on energy efficiency, responsible resource utilization and reduced environmental impact.",
    icon: Leaf,
  },
  {
    title: "Site Infrastructure Engineering",
    description:
      "Planning and engineering of industrial parks, estates, utility networks and essential site infrastructure.",
    icon: Network,
  },
  {
    title: "Project Management & Procurement",
    description:
      "Project planning, material procurement and stakeholder coordination to support organized project execution.",
    icon: ClipboardList,
  },
  {
    title: "Civil Engineering",
    description:
      "Civil engineering solutions covering site assessment, civil works planning and execution-stage coordination.",
    icon: Ruler,
  },
];

const projects = [
  {
    name: "Sky Clothing",
    location: "Ludhiana",
    industry: "Textile Industry",
    details: ["G+2 Building", "40,000 sq. ft. ground coverage"],
    icon: Factory,
  },
  {
    name: "Aatamnirbhar Solar",
    location: "Kapadganj, Gujarat",
    industry: "Solar Panel Manufacturing",
    details: [
      "35,000 sq. ft. built-up area",
      "Complete Architectural, Structural & MEP Design",
    ],
    icon: Sun,
  },
  {
    name: "Flexistar Polymers",
    location: "Dhokla",
    industry: "Polymer Processing",
    details: ["48,000 sq. ft.", "MEP Design"],
    icon: Layers3,
  },
];

const approach = [
  "Innovation in engineering solutions",
  "Focus on safety and sustainability",
  "High standards of quality",
  "Client-focused project approach",
  "Efficient and cost-effective solutions",
  "Integrated delivery from concept to completion",
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#F5F3EE] text-[#252C35]">
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT SECTION */}
      <section className="bg-[#F5F3EE]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A78343]">
              About ARHAM
            </p>

            <div className="mt-4 h-[3px] w-16 rounded-full bg-[#D6B779]" />

            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#101F3C] sm:text-4xl">
              Integrated Engineering for Industrial & Commercial Buildings
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-[#626873]">
            <p>
              ARHAM provides a full spectrum of integrated engineering services
              for industrial and commercial buildings. Its areas of expertise
              include architectural design, structural engineering, mechanical
              systems, firefighting, electrical installations, and plumbing
              and drainage.
            </p>

            <p>
              With a focus on innovation, sustainability, safety and client
              satisfaction, ARHAM aims to deliver efficient, cost-effective
              engineering solutions from concept to completion.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-[#101F3C] transition-colors hover:text-[#A78343]"
            >
              Discover ARHAM <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A78343]">
              Our Expertise
            </p>

            <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#D6B779]" />

            <h2 className="mt-6 text-3xl font-bold text-[#101F3C] sm:text-4xl">
              Comprehensive Engineering Services
            </h2>

            <p className="mt-5 leading-7 text-[#626873]">
              An integrated range of engineering services for industrial and
              commercial building requirements.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`group rounded-xl border border-[#E9E6DF] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#D6B779] hover:shadow-[0_16px_40px_rgba(16,31,60,0.09)] ${
                    index === 9
                      ? "lg:col-span-2 lg:col-start-3"
                      : "lg:col-span-2"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#F5F3EE] text-[#A78343] transition duration-300 group-hover:bg-[#101F3C] group-hover:text-[#D6B779]">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <p className="mt-7 text-xs font-semibold tracking-widest text-[#A78343]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[#101F3C]">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#626873]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/turnkey-services"
              className="inline-flex items-center gap-2 rounded-md bg-[#101F3C] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#1B3155]"
            >
              Explore All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-[#E9E6DF] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A78343]">
                Selected Work
              </p>

              <div className="mt-4 h-[3px] w-16 rounded-full bg-[#D6B779]" />

              <h2 className="mt-6 text-3xl font-bold text-[#101F3C] sm:text-4xl">
                Project Experience
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#626873]">
                Explore selected projects associated with the ARHAM team.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-semibold text-[#101F3C] transition-colors hover:text-[#A78343]"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.name}
                  className="overflow-hidden rounded-xl border border-[#DEDAD1] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,31,60,0.10)]"
                >
                  <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-[#101F3C] to-[#263B5B]">
                    <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:30px_30px]" />

                    <Icon
                      size={76}
                      strokeWidth={1}
                      className="relative text-[#D6B779]"
                    />

                    <span className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D6AE]">
                      Project 0{index + 1}
                    </span>
                  </div>

                  <div className="p-7">
                    <p className="text-sm font-medium text-[#A78343]">
                      {project.industry}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#101F3C]">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-sm text-[#777D85]">
                      {project.location}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-[#E9E6DF] pt-5">
                      {project.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm leading-6 text-[#626873]"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-[#A78343]"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS SECTION */}
      <ClientLogos />

      {/* WHY ARHAM SECTION */}
      <section className="bg-[#F5F3EE] py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#A78343]">
              Our Approach
            </p>

            <div className="mt-4 h-[3px] w-16 rounded-full bg-[#D6B779]" />

            <h2 className="mt-6 text-3xl font-bold leading-tight text-[#101F3C] sm:text-4xl">
              Engineering with Quality, Safety and Sustainability in Focus
            </h2>

            <p className="mt-6 leading-8 text-[#626873]">
              ARHAM&apos;s approach brings together integrated engineering
              expertise and a focus on client requirements to support
              efficient, sustainable and high-performance building solutions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {approach.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 border-b border-[#D8D3C9] pb-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-1 shrink-0 text-[#A78343]"
                />

                <p className="text-sm leading-7 text-[#454D58]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#101F3C] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#D6B779]/25 bg-[#172B4B] px-7 py-14 text-center sm:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#D6B779]">
            Let&apos;s Build Together
          </p>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#D6B779]" />

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Have an Industrial or Commercial Building Project?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#D5DAE2]">
            Connect with ARHAM to discuss your engineering and building
            project requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#D6B779] px-8 py-4 text-sm font-bold text-[#101F3C] transition hover:bg-[#E5CC98]"
          >
            Contact ARHAM <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
