
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  DraftingCompass,
  Layers3,
  Wind,
  ShieldCheck,
  Zap,
  Droplets,
  Boxes,
  HardHat,
  ClipboardCheck,
  Factory,
  CheckCircle2,
  Ruler,
  Leaf,
  Network,
  ClipboardList,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Turnkey EPC & Engineering Services | ARHAM",
  description:
    "ARHAM delivers integrated Engineering, Procurement and Construction solutions for industrial and commercial buildings.",
};

const engineeringServices = [
  {
    number: "01",
    id: "architectural-design",
    title: "Architectural Design",
    subtitle: "FUNCTIONAL SPACES. THOUGHTFUL DESIGN.",
    description:
      "Architectural design is the foundation of every successful building project. ARHAM focuses on developing functional, practical and visually considered design solutions for industrial and commercial buildings. Our approach considers space utilization, building requirements, operational activities and the overall objectives of the project.",
    details:
      "From initial planning concepts to detailed architectural layouts, the design process considers how people, equipment and activities will interact within the building. We focus on creating organized spaces that support efficient operations while coordinating architectural requirements with structural and building-services engineering.",
    approach:
      "Our architectural planning approach connects the client's project requirements with practical building layouts, design development and coordination across engineering disciplines.",
    points: [
      "Architectural concepts and building layouts",
      "Space planning and functional zoning",
      "Building elevations and sections",
      "Architectural drawings and detailing",
      "Industrial and commercial building planning",
      "Coordination with structural and MEP services",
    ],
    icon: DraftingCompass,
    image: "/images/services/architectural-design.jpg",
    imageAlt: "Modern industrial building architectural design",
    imageSide: "left",
  },
  {
    number: "02",
    id: "structural-engineering",
    title: "Structural Engineering",
    subtitle: "STRENGTH. STABILITY. STRUCTURAL INTEGRITY.",
    description:
      "Structural engineering plays a vital role in the safety, stability and performance of buildings. ARHAM provides structural engineering solutions for industrial and commercial developments, considering building configuration, intended usage, structural requirements and construction feasibility.",
    details:
      "Structural planning involves evaluating the building requirements and developing suitable structural systems. This may include reinforced cement concrete (RCC) and structural steel systems, with attention to structural components, load considerations and coordination with architectural layouts.",
    approach:
      "We focus on connecting structural requirements with architectural planning and construction needs to support coordinated and practical building development.",
    points: [
      "Structural system planning",
      "Structural analysis and design coordination",
      "RCC structural systems",
      "Structural steel systems",
      "Foundation and framing considerations",
      "Structural drawings and detailing",
    ],
    icon: Layers3,
    image: "/images/services/structural-engineering.jpg",
    imageAlt: "Industrial steel structural framework",
    imageSide: "right",
  },
  {
    number: "03",
    id: "mechanical-hvac",
    title: "Mechanical Systems & HVAC",
    subtitle: "COMFORT. PERFORMANCE. EFFICIENCY.",
    description:
      "Mechanical systems are essential to maintaining suitable operating environments in industrial and commercial facilities. ARHAM provides mechanical and HVAC engineering solutions planned around building occupancy, equipment requirements, ventilation needs and operational conditions.",
    details:
      "Our mechanical-services scope considers heating, ventilation and air-conditioning requirements, air distribution, cooling arrangements and the integration of mechanical systems within the overall building design. Proper coordination helps accommodate equipment, duct routes and service spaces during project planning.",
    approach:
      "We consider the functional requirements of each facility while coordinating HVAC and mechanical services with architectural, electrical and structural disciplines.",
    points: [
      "HVAC system planning and coordination",
      "Heating and cooling requirements",
      "Ventilation and air distribution",
      "Ducting and equipment layouts",
      "Mechanical utility planning",
      "Coordination with other building services",
    ],
    icon: Wind,
    image: "/images/services/mechanical-hvac.jpg",
    imageAlt: "Industrial HVAC ducting and ventilation system",
    imageSide: "left",
  },
  {
    number: "04",
    id: "firefighting",
    title: "Firefighting Solutions",
    subtitle: "SAFETY THROUGH ENGINEERING.",
    description:
      "Fire protection is an important consideration in industrial and commercial building development. ARHAM provides firefighting system planning and engineering coordination based on the building layout, intended occupancy, operational requirements and applicable project requirements.",
    details:
      "Firefighting planning involves considering fire protection infrastructure, equipment locations, piping routes and the relationship between fire protection systems and other building services. The objective is to incorporate fire safety provisions into the building engineering process from the planning stage.",
    approach:
      "We coordinate fire protection requirements with the overall building layout and relevant engineering disciplines, with designs to be developed in accordance with applicable codes and project specifications.",
    points: [
      "Fire protection system planning",
      "Firefighting piping layouts",
      "Hydrant and sprinkler system coordination",
      "Fire pump and equipment planning",
      "Fire protection equipment coordination",
      "Integration with building services",
    ],
    icon: ShieldCheck,
    image: "/images/services/firefighting.jpg",
    imageAlt: "Industrial fire sprinkler and protection piping",
    imageSide: "right",
  },
  {
    number: "05",
    id: "electrical",
    title: "Electrical Installations",
    subtitle: "POWERING BUILDING OPERATIONS.",
    description:
      "Electrical infrastructure supports the everyday operation of industrial and commercial facilities. ARHAM provides electrical engineering and installation solutions that consider building power requirements, lighting needs, equipment loads and the electrical infrastructure required for the project.",
    details:
      "Electrical planning includes power distribution, lighting arrangements, cable routing and the coordination of electrical equipment. The requirements of machinery, operational spaces and essential building services are considered when developing electrical layouts and installation plans.",
    approach:
      "Our approach focuses on coordinating electrical requirements with architectural layouts, mechanical systems and the intended operational use of the facility.",
    points: [
      "Electrical load and requirement planning",
      "Power distribution system layouts",
      "Electrical panel and equipment coordination",
      "Internal and external lighting planning",
      "Cable routing and containment layouts",
      "Coordination of electrical installations",
    ],
    icon: Zap,
    image: "/images/services/electrical-installations.jpg",
    imageAlt: "Industrial electrical control and distribution panels",
    imageSide: "left",
  },
  {
    number: "06",
    id: "plumbing",
    title: "Plumbing & Drainage",
    subtitle: "EFFICIENT WATER MANAGEMENT.",
    description:
      "Water supply and drainage systems are essential components of functional building infrastructure. ARHAM provides plumbing and drainage engineering solutions for industrial and commercial buildings, considering water requirements, wastewater movement and the utility needs of the facility.",
    details:
      "The planning process considers water supply distribution, plumbing layouts, sanitary requirements, drainage routes and connections with the building's overall infrastructure. Proper coordination of pipe routes and service spaces helps integrate these systems with other building components.",
    approach:
      "We consider the building's functional requirements and coordinate plumbing and drainage layouts with architectural, structural and other building-services plans.",
    points: [
      "Water supply system planning",
      "Internal plumbing layouts",
      "Sanitary and utility arrangements",
      "Wastewater and drainage planning",
      "Stormwater drainage coordination",
      "Plumbing services integration",
    ],
    icon: Droplets,
    image: "/images/services/plumbing-drainage.jpg",
    imageAlt: "Industrial plumbing and drainage pipe network",
    imageSide: "right",
  },
  {
    number: "07",
    id: "green-building",
    title: "Green Building & Sustainable Design",
    subtitle: "DESIGNING WITH RESOURCES IN MIND.",
    description:
      "Sustainable building design considers the environmental impact of a building throughout its planning and development. ARHAM promotes design considerations that support energy efficiency, responsible resource utilization and more environmentally conscious building solutions.",
    details:
      "Sustainable design can involve considering natural lighting, ventilation, energy-efficient building systems, water conservation and opportunities for renewable energy integration. These considerations can be incorporated into architectural and engineering planning according to the project's requirements and feasibility.",
    approach:
      "We consider sustainability opportunities alongside building functionality, technical requirements and project objectives to support informed design decisions.",
    points: [
      "Energy-efficient building design considerations",
      "Natural lighting and ventilation planning",
      "Renewable energy integration considerations",
      "Water conservation planning",
      "Responsible material and resource utilization",
      "Sustainable building-services coordination",
    ],
    icon: Leaf,
    image: "/images/services/green-building.jpg",
    imageAlt: "Sustainable industrial building with solar panels",
    imageSide: "left",
  },
  {
    number: "08",
    id: "site-infrastructure",
    title: "Site Infrastructure Engineering",
    subtitle: "PLANNING THE COMPLETE SITE.",
    description:
      "Site infrastructure engineering focuses on the essential networks and facilities that support the development and operation of industrial sites, estates and commercial developments. ARHAM provides planning and engineering coordination for site infrastructure based on site conditions and project requirements.",
    details:
      "Infrastructure planning may include internal roads, site circulation, stormwater drainage, utility corridors and essential external services. These elements are considered together to support organized site development and connectivity between different areas of the facility.",
    approach:
      "Our approach considers the site as an integrated system, coordinating access, movement, drainage and utility requirements with the overall development plan.",
    points: [
      "Site development and infrastructure planning",
      "Internal roads and circulation layouts",
      "Stormwater drainage planning",
      "External water supply networks",
      "Utility corridors and service coordination",
      "Industrial estate infrastructure planning",
    ],
    icon: Network,
    image: "/images/services/site-infrastructure.jpg",
    imageAlt: "Industrial estate roads and site infrastructure",
    imageSide: "right",
  },
  {
    number: "09",
    id: "project-management-procurement",
    title: "Project Management & Procurement",
    subtitle: "COORDINATION FROM PLAN TO EXECUTION.",
    description:
      "Successful project execution requires coordinated planning, timely resource management and communication between the different stakeholders involved. ARHAM supports project management and procurement activities for industrial and commercial building developments.",
    details:
      "Project management activities may include planning project requirements, coordinating engineering inputs, monitoring project activities and supporting communication between stakeholders. Procurement involves identifying material and equipment requirements, coordinating sourcing activities and aligning resources with project specifications and execution needs.",
    approach:
      "We connect project planning, procurement requirements and construction activities through a coordinated approach that considers project scope, resources and execution priorities.",
    points: [
      "Project scope and requirement coordination",
      "Project planning and activity coordination",
      "Construction material procurement",
      "Equipment and resource coordination",
      "Vendor and stakeholder communication",
      "Procurement and execution coordination",
    ],
    icon: ClipboardList,
    image: "/images/services/project-management.jpg",
    imageAlt: "Engineers coordinating construction project plans",
    imageSide: "left",
  },
  {
    number: "10",
    id: "civil-engineering",
    title: "Civil Engineering",
    subtitle: "BUILDING THE FOUNDATION.",
    description:
      "Civil engineering forms the foundation of building and infrastructure development. ARHAM provides civil engineering solutions for industrial and commercial projects, covering site-related requirements, civil works planning and construction-stage coordination.",
    details:
      "Civil engineering activities may involve site assessment, earthwork considerations, foundation planning, concrete works, building elements and external development. These activities are coordinated with structural and architectural requirements to support the practical development of the project.",
    approach:
      "We focus on coordinating civil works with engineering plans, site conditions and construction requirements throughout the relevant stages of project development.",
    points: [
      "Site assessment and development planning",
      "Earthwork and site preparation coordination",
      "Foundation and substructure works",
      "RCC and concrete construction works",
      "Building and external civil works",
      "Construction-stage coordination",
    ],
    icon: HardHat,
    image: "/images/services/civil-engineering.jpg",
    imageAlt: "Civil engineering foundation and construction work",
    imageSide: "right",
  },
];

const projectStages = [
  {
    number: "01",
    title: "Engineering",
    subtitle: "PLAN & DESIGN",
    description:
      "Understand project requirements and develop coordinated architectural, structural and building-services engineering solutions.",
    icon: DraftingCompass,
  },
  {
    number: "02",
    title: "Procurement",
    subtitle: "SOURCE & COORDINATE",
    description:
      "Coordinate construction materials, equipment and project resources in line with project specifications and requirements.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Construction",
    subtitle: "BUILD & EXECUTE",
    description:
      "Undertake building construction and coordinate the required engineering and construction activities.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Project Completion",
    subtitle: "COMPLETE & HANDOVER",
    description:
      "Coordinate project completion activities and handover in accordance with the agreed project scope.",
    icon: ClipboardCheck,
  },
];

const strengths = [
  {
    title: "Integrated EPC Approach",
    description:
      "Engineering, procurement and construction coordinated within one project delivery approach.",
    icon: Building2,
  },
  {
    title: "Multiple Engineering Disciplines",
    description:
      "Architectural, structural and building-services expertise brought together.",
    icon: Ruler,
  },
  {
    title: "Project-Focused Solutions",
    description:
      "Solutions developed around project requirements, functionality and objectives.",
    icon: Factory,
  },
  {
    title: "Coordinated Project Delivery",
    description:
      "A connected approach to planning, resources and construction activities.",
    icon: CheckCircle2,
  },
];

export default function TurnkeyServicesPage() {
  return (
    <main className="bg-white text-[#252C35]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#101F3C] text-white">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute -right-32 top-0 h-[550px] w-[550px] rounded-full border border-white/10" />
        <div className="absolute -right-12 top-20 h-[400px] w-[400px] rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[1.3fr_0.7fr] lg:px-12 lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#D6B779]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9D8B5]">
                Integrated Project Solutions
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Engineering.
              <br />
              <span className="text-[#D6B779]">Procurement.</span>
              <br />
              Construction.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Complete engineering and turnkey construction solutions
              for industrial and commercial buildings. From initial
              planning and procurement to construction and project
              completion, ARHAM brings every stage together.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#D6B779] px-7 py-4 text-sm font-semibold text-[#101F3C] transition hover:bg-[#E3C98C]"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#our-services"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold transition hover:bg-white hover:text-[#101F3C]"
              >
                Explore Capabilities
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* EPC VISUAL */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-7 backdrop-blur-sm sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6B779]">
                The ARHAM Approach
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    number: "01",
                    title: "Engineering",
                    detail: "Design & Technical Solutions",
                  },
                  {
                    number: "02",
                    title: "Procurement",
                    detail: "Materials & Project Resources",
                  },
                  {
                    number: "03",
                    title: "Construction",
                    detail: "Building & Execution",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                  >
                    <span className="text-2xl font-light text-[#D6B779]">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-xs text-slate-400">
                        {item.detail}
                      </p>
                    </div>
                    <ArrowUpRight className="ml-auto h-5 w-5 text-[#D6B779]" />
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-center text-xs font-medium tracking-[0.15em] text-slate-400">
                  ONE INTEGRATED PROJECT APPROACH
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* OUR APPROACH */}
<section className="relative isolate overflow-hidden bg-[#101F3C] py-28 text-white sm:py-36">
  {/* BACKGROUND IMAGE */}
  <Image
    src="/images/services/architectural-design.jpg"
    alt="Industrial building architecture and engineering"
    fill
    priority
    sizes="100vw"
    className="z-0 object-cover object-center"
  />
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#101F3C]/90 via-[#101F3C]/75 to-[#101F3C]/50" />
  {/* MAIN CONTENT WRAPPER */}
  <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.3fr_0.7fr] lg:px-12">
    {/* MAIN CONTENT */}
    <div className="max-w-3xl">
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D6B779]">
        Our Approach
      </span>
      <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Engineering with Purpose.
        <span className="block text-[#D6B779]">
          Building with Vision.
        </span>
      </h2>
      <p className="mt-8 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
        ARHAM delivers integrated engineering and turnkey
        construction solutions for industrial and commercial
        building projects.
      </p>

      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
        We bring architectural design, structural engineering,
        building services, procurement and construction
        coordination together through a connected project
        approach. Our focus is to align technical planning,
        resources and execution with the requirements of
        every project.
      </p>

      <Link
        href="/about"
        className="mt-10 inline-flex items-center gap-3 border-b border-[#D6B779] pb-2 text-sm font-semibold text-white transition-all hover:gap-5 hover:text-[#D6B779]"
      >
        Discover ARHAM
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>

    {/* APPROACH HIGHLIGHTS */}
    <div className="border-l border-white/25 pl-7 sm:pl-10">
      {[
        {
          number: "01",
          title: "Design & Engineering",
          description: "Planning solutions around building and operational requirements."
        },
        {
          number: "02",
          title: "Resource Coordination",
          description: "Connecting project specifications with materials and resources."
        },
        {
          number: "03",
          title: "Construction & Delivery",
          description: "Coordinating construction activities through project completion."
        }
      ].map((item) => (
        <div
          key={item.number}
          className="border-b border-white/20 py-7 first:pt-0 last:border-0"
        >
          <span className="text-sm font-semibold tracking-widest text-[#D6B779]">
            {item.number}
          </span>

          <h3 className="mt-3 text-xl font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            {item.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>




      {/* EPC SERVICES */}
      <section className="bg-[#101F3C] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="mb-16 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6B779]">
              Our Business Capabilities
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Integrated Turnkey
              <span className="text-[#D6B779]"> EPC Solutions.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              A coordinated project delivery approach that brings
              engineering, procurement and construction together
              under one integrated framework.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Engineering",
                subtitle: "DESIGN & PLAN",
                description:
                  "Developing architectural, structural and building-services engineering solutions around project requirements.",
                icon: DraftingCompass,
              },
              {
                number: "02",
                title: "Procurement",
                subtitle: "SOURCE & COORDINATE",
                description:
                  "Coordinating construction materials, equipment and resources required for project execution.",
                icon: Boxes,
              },
              {
                number: "03",
                title: "Construction",
                subtitle: "BUILD & EXECUTE",
                description:
                  "Undertaking building construction and coordinating project execution through to completion.",
                icon: HardHat,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-white/15 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:bg-white/[0.08] sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className="h-10 w-10 text-[#D6B779]"
                      strokeWidth={1.5}
                    />
                    <span className="text-3xl font-light text-white/30">
                      {item.number}
                    </span>
                  </div>

                  <p className="mt-10 text-[10px] font-bold tracking-[0.2em] text-[#D6B779]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-8 h-px bg-white/15 transition group-hover:bg-[#D6B779]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
{/* ENGINEERING EXPERTISE */}
<section
  id="our-services"
  className="relative isolate overflow-hidden bg-[#101F3C] py-24 text-white sm:py-28"
>
  {/* BACKGROUND IMAGE */}
  <Image
    src="/images/services/engineering-expertise-bg.png"
    alt="Modern industrial engineering facility"
    fill
    sizes="100vw"
    priority
    className="z-0 object-cover object-[center_95%]"
  />
  {/* NAVY OVERLAY - REDUCED TO SHOW THE IMAGE */}
  <div className="absolute inset-0 z-10 bg-[#101F3C]/55" />
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#101F3C]/45 via-[#101F3C]/25 to-[#101F3C]/70" />
  <div className="relative z-20 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
    {/* SECTION INTRODUCTION */}
    <div className="mb-16 max-w-3xl">
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D6B779]">
        Design & Engineering
      </span>
      <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Engineering Capabilities.
        <span className="block text-[#D6B779]">
          Built Around Your Project.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200">
        From architectural planning and structural systems to
        building services and site infrastructure, ARHAM brings
        multiple engineering disciplines together to support
        industrial and commercial developments.
      </p>
    </div>

    {/* SERVICE GRID */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {engineeringServices.map((service) => {
        const Icon = service.icon;

        return (
          <article
            key={service.number}
            id={service.id}
            className={`group flex h-full scroll-mt-28 flex-col overflow-hidden border border-white/20 bg-[#101F3C]/75 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#D6B779]/70 hover:bg-[#101F3C]/90 ${
              service.number === "10" ? "lg:col-start-2" : ""
            }`}
          >

            {/* SERVICE IMAGE */}
            <div className="relative h-40 overflow-hidden bg-[#15243a]">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101F3C]/80 via-transparent to-transparent" />

              <span className="absolute bottom-4 left-5 text-xs font-bold tracking-[0.2em] text-[#D6B779]">
                {service.number}
              </span>

              <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/30 bg-[#101F3C]/85 text-[#D6B779] backdrop-blur-sm">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
            </div>

            {/* SERVICE INFORMATION */}
            <div className="flex flex-1 flex-col p-5">

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D6B779]">
                {service.subtitle}
              </p>

              <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-200">
                {service.description}
              </p>

              {/* EXPANDABLE INFORMATION */}
              <details className="group/details mt-6 border-t border-white/20 pt-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-white transition-colors hover:text-[#D6B779] [&::-webkit-details-marker]:hidden">
                  <span>Explore Service Details</span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-white/20 text-[#D6B779] transition-transform duration-300 group-open/details:rotate-45">
                    <span className="text-xl leading-none">+</span>
                  </span>
                </summary>

                <div className="pt-5">
                  <p className="text-sm leading-7 text-slate-200">
                    {service.details}
                  </p>

                  <div className="mt-5 border-l-2 border-[#D6B779] bg-white/[0.08] p-5">
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#D6B779]">
                      Our Approach
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      {service.approach}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#D6B779]">
                      Scope of Services
                    </h4>

                    <ul className="mt-4 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-200"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#D6B779]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>

              {/* CONTACT LINK */}
              <div className="mt-auto border-t border-white/20 pt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#D6B779]"
                >
                  Discuss Your Requirements
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>

            </div>
          </article>
        );
      })}
    </div>

  </div>
</section>



      {/* CONSTRUCTION */}
      <section className="bg-[#E9E6DF] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:px-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A98543]">
              Construction & Execution
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#15243a] sm:text-5xl">
              Turning Engineering Plans Into Reality.
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-600">
              Construction brings engineering plans and project
              resources together. ARHAM undertakes building
              construction and coordinates execution activities
              to support the development of industrial and
              commercial facilities.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Our approach connects construction requirements
              with engineering planning, procurement and
              project objectives.
            </p>

            <Link
              href="/portfolio"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#8F6F32] transition hover:gap-5"
            >
              Explore Project Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-3xl bg-[#152a43] p-9 text-white sm:p-12">
            <HardHat className="mb-12 h-12 w-12 text-[#D6B779]" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6B779]">
              Building Development
            </span>

            <h3 className="mt-5 text-3xl font-semibold leading-snug sm:text-4xl">
              From Project Planning to Construction Execution.
            </h3>

            <div className="mt-10 space-y-5">
              {[
                "Project requirement coordination",
                "Engineering and design integration",
                "Material and resource coordination",
                "Building construction and execution",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/10 pb-4"
                >
                  <span className="text-sm font-bold text-[#D6B779]">
                    0{index + 1}
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT DELIVERY PROCESS */}
      {/* <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A98543]">
              How We Work
            </span>

            <h2 className="mt-5 text-3xl font-semibold text-[#15243a] sm:text-5xl">
              Our Project Delivery Approach
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              A coordinated sequence that connects engineering,
              procurement and construction activities.
            </p>
          </div>

          <div className="grid border-l border-t border-[#E9E6DF] sm:grid-cols-2 lg:grid-cols-4">
            {projectStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.number}
                  className="border-b border-r border-[#E9E6DF] p-7 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      className="h-9 w-9 text-[#A98543]"
                      strokeWidth={1.5}
                    />
                    <span className="text-3xl font-light text-[#E9E6DF]">
                      {stage.number}
                    </span>
                  </div>

                  <p className="mt-9 text-[10px] font-bold tracking-[0.2em] text-[#A98543]">
                    {stage.subtitle}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[#15243a]">
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* WHY ARHAM */}
      <section className="bg-[#F5F3EE] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A98543]">
              The ARHAM Difference
            </span>

            <h2 className="mt-5 text-3xl font-semibold text-[#15243a] sm:text-5xl">
              Why Choose ARHAM?
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              A connected approach to engineering and turnkey
              project delivery.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title}>
                  <div className="flex items-center justify-between">
                    <Icon
                      className="h-9 w-9 text-[#A98543]"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-semibold text-[#C8C2B6]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="my-7 h-px bg-[#DCD7CD]" />

                  <h3 className="text-lg font-semibold text-[#15243a]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F5F3EE] px-6 py-24 sm:px-10 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#101F3C] px-8 py-16 text-white sm:px-14 sm:py-24">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-5 top-5 h-56 w-56 rounded-full border border-white/10" />

          <div className="relative max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6B779]">
              Let's Build Together
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
              Have a Project in Mind?
              <br />
              Let's Make It Happen.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300">
              Whether you are planning an industrial facility
              or a commercial building, connect with ARHAM to
              discuss your engineering and turnkey project
              requirements.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D6B779] px-8 py-4 text-sm font-semibold text-[#101F3C] transition hover:bg-[#E3C98C]"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
