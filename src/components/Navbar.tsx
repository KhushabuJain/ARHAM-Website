
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  Lock,
} from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import SocialLinks from "@/components/SocialLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const pathname = usePathname();

  // Smart hide/show navbar based on scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 40);

      // Always show navbar near the top
      if (currentScrollY < 80) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Keep navbar visible while mobile menu is open
      if (isOpen) {
        setIsVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      const difference = currentScrollY - lastScrollY;

      if (difference > 5) {
        setIsVisible(false);
      } else if (difference < -5) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Close mobile menu after route navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/turnkey-services" },
    // { name: "Portfolio", href: "/portfolio" },
    // { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const navBackground = isScrolled
    ? "bg-[#101F3C]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
    : "bg-[#101F3C]/80 backdrop-blur-xl";

  const linkBase =
    "relative py-2 text-[13px] xl:text-sm tracking-wide font-medium whitespace-nowrap transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#D6B779] after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${navBackground}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${
              isScrolled ? "py-2" : "py-3"
            }`}
          >
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex shrink-0 items-center transition-opacity hover:opacity-90"
            >
              <BrandLogo variant="horizontal" size="lg" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`${linkBase} ${
                      isActive
                        ? "text-[#D6B779] after:scale-x-100"
                        : "text-white/85 hover:text-[#D6B779]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Consultation Button */}
            <div className="hidden shrink-0 items-center md:flex">
              <Link
                href="/contact"
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#A78343] via-[#E5CC98] to-[#D6B779] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#101F3C] shadow-[0_4px_18px_rgba(214,183,121,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_7px_25px_rgba(214,183,121,0.35)]"
              >
                <span className="relative z-10">Consultation</span>
                <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-[#A78343] to-[#E5CC98] px-3.5 py-2 text-[10px] font-bold uppercase tracking-wide text-[#101F3C] md:hidden"
              >
                Consult
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-xl border border-white/20 bg-white/10 p-2.5 text-white transition-all duration-300 hover:border-[#D6B779]/60 hover:text-[#D6B779]"
                aria-label="Toggle Navigation"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-200 border-b border-[#D6B779]/30 bg-[#101F3C]/[0.98] px-6 pb-8 pt-5 shadow-[0_15px_35px_rgba(0,0,0,0.3)] backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-3">

            {/* Mobile Links */}
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between border-b border-white/10 py-3 text-sm transition-colors duration-300 ${
                    isActive
                      ? "font-semibold text-[#D6B779]"
                      : "text-white/85 hover:text-[#D6B779]"
                  }`}
                >
                  <span>{link.name}</span>

                  <ArrowRight
                    className={`h-4 w-4 transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-[#D6B779]"
                        : "-translate-x-1 text-white/30 group-hover:translate-x-0 group-hover:text-[#D6B779]"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Social Links */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-xs font-medium text-white/60">
                Follow Our Firm:
              </span>

              <SocialLinks variant="navbar" />
            </div>

            {/* Admin Portal */}
            <Link
              href="/admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-semibold text-[#D6B779] transition-colors hover:bg-white/10"
            >
              <Lock className="h-3.5 w-3.5" />
              <span>Admin Portal</span>
            </Link>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#A78343] via-[#E5CC98] to-[#D6B779] py-3.5 text-xs font-bold uppercase tracking-wider text-[#101F3C] shadow-lg transition-all duration-300 hover:shadow-[0_5px_25px_rgba(214,183,121,0.3)]"
            >
              <span>Book Free Design Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
