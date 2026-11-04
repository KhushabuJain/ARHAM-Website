import React from "react";

export const SOCIAL_LINKS = {
  linkedin: {
    name: "LinkedIn",
    handle: "ARHAM",
    url: "yet to come",
    description: "Professional Updates & Company News",
  },
};

export function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface SocialLinksProps {
  variant?: "footer" | "navbar" | "contact-card";
  className?: string;
}

export default function SocialLinks({
  variant = "footer",
  className = "",
}: SocialLinksProps) {
  const linkedinUrl = SOCIAL_LINKS.linkedin.url;
  const isAvailable = linkedinUrl !== "yet to come";

  if (variant === "navbar") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <a
          href={isAvailable ? linkedinUrl : undefined}
          target="_blank"
          rel="noopener noreferrer"
          title="ARHAM LinkedIn"
          aria-label="LinkedIn"
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#3154A5] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200"
        >
          <LinkedInIcon className="w-4 h-4" />
        </a>
      </div>
    );
  }

  if (variant === "contact-card") {
    return (
      <div className={`space-y-3 ${className}`}>
        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#3154A5] flex items-center justify-center flex-shrink-0">
            <LinkedInIcon className="w-5 h-5" />
          </div>

          <div>
            <div className="text-xs font-bold text-slate-900">
              LinkedIn • {SOCIAL_LINKS.linkedin.handle}
            </div>
            <div className="text-[11px] text-slate-500 font-light">
              {SOCIAL_LINKS.linkedin.description}
            </div>
            <div className="text-[11px] text-slate-400">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      <a
        href={isAvailable ? linkedinUrl : undefined}
        target="_blank"
        rel="noopener noreferrer"
        title="Connect with ARHAM on LinkedIn"
        aria-disabled={!isAvailable}
        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#3154A5] text-slate-700 hover:text-[#3154A5] text-xs font-medium shadow-sm transition-all"
      >
        <LinkedInIcon className="w-4 h-4 text-[#3154A5]" />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}