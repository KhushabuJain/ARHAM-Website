
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";
import {
  Compass,
  MapPin,
  Mail,
  Clock,
  Building,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact ARHAM | Design & Construction Solutions",
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

const CONTACT_PHONE = "8208234742";
const CONTACT_EMAIL = "ho@arhamdesign.com";

const OFFICE_ADDRESS =
  "C-1104, The First, Avenue Road, behind Keshavbaug Party Plot, off 132ft Road, I I M, Vastrapur, Ahmedabad, Gujarat 380015";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(OFFICE_ADDRESS);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EE] text-[#252C35]">
  {/* Header Banner */}

<section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-[#101F3C] py-24 sm:min-h-[480px]">

  <Image
    src="/images/services/engineering-expertise-bg.png"
    alt="Industrial engineering and construction architecture"
    fill
    priority
    sizes="100vw"
    className="z-0 object-cover object-center"
  />

  <div className="absolute inset-0 z-10 bg-[#101F3C]/75" />
  <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#101F3C]/90 via-[#101F3C]/65 to-[#101F3C]/30" />

  <div className="relative z-20 mx-auto w-full max-w-7xl px-6 text-center sm:px-10 lg:px-12">

    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6B779]/40 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#E4C98F] backdrop-blur-sm">
      <Compass className="h-4 w-4" />
      <span>Connect With ARHAM · Design & Construction</span>
    </div>

    <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
      Let's Discuss Your{" "}
      <span className="gold-gradient-text">Next Project</span>
    </h1>

    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
      Connect with ARHAM's team to discuss your architectural,
      structural, and construction requirements. We look forward
      to understanding your project.
    </p>

    <div className="mx-auto mt-8 h-[2px] w-20 bg-[#D6B779]" />

  </div>
</section>

      {/* Main Contact Section */}
      {/* <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"> */
      }

      <section className="relative overflow-hidden bg-[#F7F7F5] px-4 py-20 sm:px-6 lg:px-8">
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D6B779]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#101F3C]/[0.04] blur-3xl" />
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8 lg:col-span-5">

            {/* Corporate Details Card */}
            <div className="group rounded-3xl border border-[#E9E6DF] bg-white p-8 shadow-[0_8px_30px_rgba(16,31,60,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779]/60 hover:shadow-[0_18px_45px_rgba(16,31,60,0.10)]">

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A78343]">
                Contact & Corporate Details
              </span>

              <h3 className="mt-2 text-2xl font-bold text-[#101F3C]">
                Get In Touch
              </h3>

              <div className="mt-7 space-y-7 text-sm font-light text-[#626873]">

                {/* Registered Office */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EE]">
                    <MapPin className="h-5 w-5 text-[#A78343]" />
                  </div>

                  <div>
                    <strong className="mb-1 block font-semibold text-[#101F3C]">
                      Registered Office
                    </strong>

                    <p className="leading-6">
                      Arham Design & Constructions
                    </p>

                    <p className="mt-1 leading-6">
                      {OFFICE_ADDRESS}
                    </p>

                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#A78343] transition-colors hover:text-[#101F3C]"
                    >
                      View on Google Maps
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EE]">
                    <Phone className="h-5 w-5 text-[#A78343]" />
                  </div>

                  <div>
                    <strong className="mb-1 block font-semibold text-[#101F3C]">
                      Contact Number
                    </strong>

                    <a
                      href={`tel:+91${CONTACT_PHONE}`}
                      className="font-medium text-[#454D58] transition-colors hover:text-[#A78343]"
                    >
                      +91 {CONTACT_PHONE}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EE]">
                    <MessageCircle className="h-5 w-5 text-[#A78343]" />
                  </div>

                  <div>
                    <strong className="mb-1 block font-semibold text-[#101F3C]">
                      WhatsApp
                    </strong>

                    <a
                      href={`https://wa.me/91${CONTACT_PHONE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#454D58] transition-colors hover:text-[#A78343]"
                    >
                      Chat with our team
                    </a>
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
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="break-all font-medium text-[#454D58] transition-colors hover:text-[#A78343]"
                    >
                      {CONTACT_EMAIL}
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

                    <span className="block">
                      Monday – Saturday
                    </span>

                    <span className="mt-1 block font-medium text-[#454D58]">
                      10:00 AM – 6:00 PM
                    </span>

                    <span className="mt-2 block text-xs text-[#777D85]">
                      Sunday by prior appointment
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Engineering Expertise Card
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
            </div> */}

            {/* Social Media Card */}
            <div className="group rounded-3xl border border-[#E9E6DF] bg-white p-8 shadow-[0_8px_30px_rgba(16,31,60,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B779]/60 hover:shadow-[0_18px_45px_rgba(16,31,60,0.10)]">

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
