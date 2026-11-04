/**
 * Global Brand & Business Constants
 * Arham - Turnkey Interior Design & Contracting (PAN India)
 */

export const BRAND_CONFIG = {
  name: "ARHAM",
  establishedYear: 2021,
  gstin: "0000000000",
  contactPerson: "Akhil Padhiar",
  phone: "+91 0000000000",
  phoneRaw: "+910000000000",
  phoneDisplay: "00000000000",
  email: "ho@arhamdesign.in",
  // handoverGuarantee: "120-Day Handover Guarantee",
  // handoverDays: 120,
  // warrantyGuarantee: "5-Year Direct Structural Warranty",
  // warrantyYears: 5,
  coverage: "PAN India Execution",
  registeredCity: "Ahemdabad, Gujarat",
  
  // Featured project credentials requested by client
  flagshipCommunities: [
    {
      name: "Oberoi Sky City",
      location: "Borivali",
      projectCount: "32 Projects Delivered",
      countNumber: 32,
    },
    {
      name: "Oberoi Eternia & Enigma",
      location: "Mulund",
      projectCount: "26 Projects Delivered",
      countNumber: 26,
    },
    {
      name: "Piramal Vaikunth",
      location: "Thane / Mumbai MMR",
      projectCount: "25 Projects Delivered",
      countNumber: 25,
    },
    {
      name: "Hiranandani",
      location: "Flagship Enclaves",
      projectCount: "10 Projects Delivered",
      countNumber: 10,
    },
  ],
};

/**
 * Dynamically computes years of excellence (e.g. 6+ Years from 2020 inception,
 * automatically incrementing as calendar years advance).
 */
export function getYearsOfExcellence(): string {
  const currentYear = new Date().getFullYear();
  const years = Math.max(6, currentYear - BRAND_CONFIG.establishedYear);
  return `${years}+ Years`;
}
