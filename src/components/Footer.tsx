
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Building2,
  DraftingCompass,
  Layers3,
  Wind,
  Flame,
  Zap,
  Droplets,
  ArrowRight,
  Leaf,
  Network,
  ClipboardList,
  HardHat,
} from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/turnkey-services" },
  //{ name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  {
    name: "Architectural Design",
    href: "/turnkey-services#architectural-design",
    icon: DraftingCompass,
  },
  {
    name: "Structural Engineering",
    href: "/turnkey-services#structural-engineering",
    icon: Layers3,
  },
  {
    name: "Mechanical & HVAC",
    href: "/turnkey-services#mechanical-hvac",
    icon: Wind,
  },
  {
    name: "Firefighting Solutions",
    href: "/turnkey-services#firefighting",
    icon: Flame,
  },
  {
    name: "Electrical Installations",
    href: "/turnkey-services#electrical",
    icon: Zap,
  },
  {
    name: "Plumbing & Drainage",
    href: "/turnkey-services#plumbing",
    icon: Droplets,
  },
  {
    name: "Green Building & Sustainable Design",
    href: "/turnkey-services#green-building",
    icon: Leaf,
  },
  {
    name: "Site Infrastructure Engineering",
    href: "/turnkey-services#site-infrastructure",
    icon: Network,
  },
  {
    name: "Project Management & Procurement",
    href: "/turnkey-services#project-management",
    icon: ClipboardList,
  },
  {
    name: "Civil Engineering",
    href: "/turnkey-services#civil-engineering",
    icon: HardHat,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#101a2b] text-white">
      {/* Top CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Lets Build Together
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-3">
              Have a project in mind?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Lets discuss your engineering and construction requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#3154a5] hover:bg-[#4268bd] text-white px-7 py-4 rounded-lg text-sm font-semibold transition-all group"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                <Building2 className="w-7 h-7 text-[#3154a5]" />
              </div>
              <div>
                <span className="text-3xl font-extrabold tracking-[0.16em]">
                  ARHAM
                </span>
                <span className="block text-[9px] tracking-[0.25em] text-blue-300 uppercase">
                  Engineering & Construction
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-7 mt-7 max-w-sm">
              ARHAM delivers integrated engineering solutions for
              industrial and commercial buildings, bringing together
              design, engineering, procurement and construction
              execution under one coordinated approach.
            </p>

            {/* <div className="mt-7">
              <span className="text-xs text-slate-500 uppercase tracking-widest">
                Leadership
              </span>
              <p className="text-white font-semibold mt-2">
                Akhil Padhiar
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Chief Executive Officer
              </p>
            </div> */}
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-blue-500/40 pb-4">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-blue-500/40 pb-4">
              Our Expertise
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center gap-3 text-sm text-slate-400 hover:text-blue-300 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white border-b border-blue-500/40 pb-4">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white font-medium">
                    Our Presence
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-6">
                    Industrial & Commercial Engineering Solutions
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white font-medium">
                    Contact Person
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Akhil Padhiar
                  </p>
                </div>
              </div> */}

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-white transition-colors"
              >
                Contact our team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} ARHAM. All Rights Reserved.
          </p>

          <Link
            href="/contact"
            className="text-xs text-slate-400 hover:text-blue-300 transition-colors"
          >
            Engineering Solutions. Built on Trust.
          </Link>

          <Link
            href="/"
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Back to Home ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
