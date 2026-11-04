
import prisma from "@/lib/prisma";

// ARHAM project portfolio
// Project information is based on client-provided details.

export const DEFAULT_TEAM_MEMBERS: any[] = [];

export const DEFAULT_PROJECTS = [
  // FEATURED PROJECT 1
  {
    id: "arham-proj-1",
    title: "Sky Clothing – Manufacturing Facility",
    slug: "sky-clothing-ludhiana",
    category: "Textile Industry",
    locality: "Ludhiana, Punjab",
    scope: "G+2 Manufacturing Facility – Industrial Engineering & Construction",
    sqft: 40000,
    heroImage: "/projects/sky-clothing.jpg",
    highlights: JSON.stringify([
      "40,000 sq. ft. manufacturing facility.",
      "Main plant covering 8,000 square metres.",
      "Additional structures covering 3,000 square metres.",
      "Facility planned to accommodate a 1000-ton press.",
      "Robotic welding line for enhanced production operations.",
    ]),
    featured: true,
  },

  // FEATURED PROJECT 2
  {
    id: "arham-proj-2",
    title: "Aatamnirbhar Solar – Manufacturing Unit",
    slug: "aatamnirbhar-solar-kapadvanj",
    category: "Solar Panel Manufacturing",
    locality: "Kapadvanj, Gujarat",
    scope: "Complete Architectural & Structural Design",
    sqft: 35000,
    heroImage: "/projects/aatamnirbhar-solar.jpg",
    highlights: JSON.stringify([
      "35,000 sq. ft. solar panel manufacturing facility.",
      "Complete architectural design.",
      "Comprehensive structural design.",
      "Space planning focused on production efficiency.",
      "Facility designed to support renewable energy manufacturing.",
    ]),
    featured: true,
  },

  // FEATURED PROJECT 3
  {
    id: "arham-proj-3",
    title: "Flexistar Polymers – Processing Facility",
    slug: "flexistar-polymers-dholka",
    category: "Polymer Processing Industry",
    locality: "Dholka, Gujarat",
    scope: "Mechanical, Electrical & Plumbing (MEP) Design",
    sqft: 48000,
    heroImage: "/projects/flexistar-polymers.jpg",
    highlights: JSON.stringify([
      "48,000 sq. ft. polymer processing facility.",
      "Mechanical systems design.",
      "Electrical infrastructure design.",
      "Plumbing systems design.",
      "Engineering coordination for efficient facility operations.",
    ]),
    featured: true,
  },

  // OTHER PROJECTS

  {
    id: "arham-proj-4",
    title: "Highway Hari Food Mall",
    slug: "highway-hari-food-mall",
    category: "Commercial Project",
    locality: "Jamnagar, Gujarat",
    scope: "Project Experience",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify(["Commercial food mall project."]),
    featured: false,
  },
  {
    id: "arham-proj-5",
    title: "Mental Health Hospital",
    slug: "mental-health-hospital",
    category: "Healthcare Project",
    locality: "Ahmedabad, Gujarat",
    scope: "Hospital Project Experience",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify(["Mental healthcare facility project."]),
    featured: false,
  },
  {
    id: "arham-proj-6",
    title: "Ayurvedic Hospital & College",
    slug: "ayurvedic-hospital-college",
    category: "Healthcare & Education",
    locality: "Rajpipla, Gujarat",
    scope: "Hospital & Educational Institution Project",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify([
      "Ayurvedic hospital and college project.",
    ]),
    featured: false,
  },
  {
    id: "arham-proj-7",
    title: "SSA School Redevelopment",
    slug: "ssa-school-redevelopment",
    category: "Educational Project",
    locality: "Location details to be confirmed",
    scope: "School Redevelopment",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify(["School redevelopment project."]),
    featured: false,
  },
  {
    id: "arham-proj-8",
    title: "Mr. Pathik Hambardikar's Bungalow",
    slug: "pathik-hambardikar-bungalow",
    category: "Residential Project",
    locality: "Location details to be confirmed",
    scope: "Residential Bungalow Project",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify(["Private bungalow project."]),
    featured: false,
  },
  {
    id: "arham-proj-9",
    title: "Administration & Business Center",
    slug: "administration-business-center",
    category: "Commercial Project",
    locality: "Dholka, Gujarat",
    scope: "Administration & Business Facility",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify([
      "Administration and business center project.",
    ]),
    featured: false,
  },
  {
    id: "arham-proj-10",
    title: "Thesis on Ayurvedic Hospital & College",
    slug: "thesis-ayurvedic-hospital-college",
    category: "Academic / Thesis Project",
    locality: "Location details to be confirmed",
    scope: "Academic Design & Planning",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify([
      "Academic thesis focused on an Ayurvedic hospital and college.",
    ]),
    featured: false,
  },
  {
    id: "arham-proj-11",
    title: "Hirpara Multispecialty Hospital",
    slug: "hirpara-multispecialty-hospital",
    category: "Healthcare Project",
    locality: "Location details to be confirmed",
    scope: "Multispecialty Hospital Project",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify([
      "Multispecialty healthcare facility project.",
    ]),
    featured: false,
  },
  {
    id: "arham-proj-12",
    title: "Bone & Joint Care Hospital",
    slug: "bone-joint-care-hospital",
    category: "Healthcare Project",
    locality: "Location details to be confirmed",
    scope: "Specialized Healthcare Facility",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify([
      "Bone and joint care hospital project.",
    ]),
    featured: false,
  },
  {
    id: "arham-proj-13",
    title: "Krishna Multispecialty Hospital",
    slug: "krishna-multispecialty-hospital",
    category: "Healthcare Project",
    locality: "Location details to be confirmed",
    scope: "Multispecialty Hospital Project",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify([
      "Multispecialty healthcare facility project.",
    ]),
    featured: false,
  },
  {
    id: "arham-proj-14",
    title: "U.P.R.N.N. Butler Palace Colony",
    slug: "uprnn-butler-palace-colony",
    category: "Institutional Project",
    locality: "Location details to be confirmed",
    scope: "Institutional Project Experience",
    sqft: 0,
    heroImage: "",
    highlights: JSON.stringify([
      "Butler Palace Colony project associated with U.P.R.N.N.",
    ]),
    featured: false,
  },
];

// Temporarily use ARHAM's approved static project data.

export async function getSafeFeaturedProjects() {
  return DEFAULT_PROJECTS.filter((project) => project.featured);
}

export async function getSafeAllProjects() {
  return DEFAULT_PROJECTS;
}

export async function getSafeTeamMembers() {
  try {
    const members = await prisma.teamMember.findMany({
      orderBy: { order: "asc" },
    });

    return members;
  } catch {
    return DEFAULT_TEAM_MEMBERS;
  }
}
