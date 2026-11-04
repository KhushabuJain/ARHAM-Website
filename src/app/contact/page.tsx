
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import {
  Compass,
  MapPin,
  Mail,
  Clock,
  User,
  Building,
} from "lucide-react";
import { BRAND_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact ARHAM | Engineering & Construction Solutions",
  description:
    "Get in touch with ARHAM for architectural design, structural engineering, building services, and turnkey construction solutions.",
  keywords: [
    "Contact ARHAM",
    "Engineering Company",
    "Building Construction",
    "Civil Engineering",
    "Turnkey Construction",
  ],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#252C35]">

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E9E6DF] to-[#F5F3EE] py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D6B779]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D6B779]/40 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#A78343]">
            <Compass className="h-4 w-4" />
            <span>Connect With ARHAM · Engineering & Construction</span>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#101F3C] sm:text-5xl lg:text-6xl">
            Lets Discuss Your{" "}
            <span className="gold-gradient-text">Next Project</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#626873] sm:text-lg">
            Connect with ARHAMs leadership team, led by Akhil Padhiar, to
            discuss your architectural, structural, and construction
            requirements. We look forward to understanding your project.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8 lg:col-span-5">

            {/* Corporate Details Card */}
            <div className="rounded-3xl border border-[#E9E6DF] bg-white p-8 shadow-[0_8px_30px_rgba(16,31,60,0.05)]">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A78343]">
                Contact & Corporate Details
              </span>

              <h3 className="mt-2 text-2xl font-bold text-[#101F3C]">
                Office Coordinates
              </h3>

              <div className="mt-7 space-y-6 text-sm font-light text-[#626873]">

                {/* Registered Office */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EE]">
                    <MapPin className="h-5 w-5 text-[#A78343]" />
                  </div>

                  <div>
                    <strong className="mb-1 block font-semibold text-[#101F3C]">
                      Registered Office
                    </strong>
                    <span>{BRAND_CONFIG.registeredCity}</span>
                    <span className="mt-1 block text-xs font-semibold text-[#A78343]">
                      Providing Turnkey Contracting Services PAN India
                    </span>
                  </div>
                </div>

                {/* Contact Person */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EE]">
                    <User className="h-5 w-5 text-[#A78343]" />
                  </div>

                  
                </div>

                {/* Official Email */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EE]">
                    <Mail className="h-5 w-5 text-[#A78343]" />
                  </div>

                  <div>
                    <strong className="mb-1 block font-semibold text-[#101F3C]">
                      Official Email
                    </strong>
                    <a
                      href={`mailto:${BRAND_CONFIG.email}`}
                      className="break-all font-medium text-[#454D58] transition-colors hover:text-[#A78343]"
                    >
                      {BRAND_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EE]">
                    <Clock className="h-5 w-5 text-[#A78343]" />
                  </div>

                  <div>
                    <strong className="mb-1 block font-semibold text-[#101F3C]">
                      Business Hours
                    </strong>
                    <span>Monday – Saturday: 10:00 AM – 6:00 PM</span>
                    <span className="mt-1 block text-xs text-[#777D85]">
                      Sunday by prior appointment
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Engineering Expertise Card */}
            <div className="rounded-3xl border border-[#D6B779]/30 bg-[#101F3C] p-7 shadow-[0_8px_30px_rgba(16,31,60,0.12)]">
              <h4 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D6B779]">
                <Building className="h-5 w-5" />
                Our Engineering Expertise
              </h4>

              <div className="space-y-5 text-sm font-light text-[#E4E7EC]">

                <div className="flex items-center gap-3">
                  <Building className="h-4 w-4 shrink-0 text-[#D6B779]" />
                  <span>Architectural Design & Planning</span>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="h-4 w-4 shrink-0 text-[#D6B779]" />
                  <span>Structural Engineering</span>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="h-4 w-4 shrink-0 text-[#D6B779]" />
                  <span>Mechanical Systems & HVAC</span>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="h-4 w-4 shrink-0 text-[#D6B779]" />
                  <span>Firefighting, Electrical & Plumbing Solutions</span>
                </div>

                <div className="flex items-center gap-3">
                  <Building className="h-4 w-4 shrink-0 text-[#D6B779]" />
                  <span>Turnkey Construction & Project Execution</span>
                </div>

              </div>
            </div>

            {/* Social Media Card */}
            <div className="rounded-3xl border border-[#E9E6DF] bg-white p-8 shadow-[0_8px_30px_rgba(16,31,60,0.05)]">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A78343]">
                Digital Portals
              </span>

              <h3 className="mb-3 mt-2 text-xl font-bold text-[#101F3C]">
                Explore Real Site Walkthroughs
              </h3>

              <p className="mb-6 text-sm font-light leading-relaxed text-[#626873]">
                Follow our official social media channels for project
                walkthroughs, site progress updates, and contracting insights.
              </p>

              <SocialLinks variant="contact-card" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
