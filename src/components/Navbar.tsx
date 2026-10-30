"use client";

import React, { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_LINKS: NavItem[] = [
  { label: "Problems We Solve", href: "#problems" },
  { label: "Our Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Robust body scroll-lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
        document.documentElement.style.overflow = "";
      };
    }
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] py-3"
            : "bg-white/90 backdrop-blur-sm border-b border-[#E2E8F0]/70 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6] rounded-lg"
              aria-label="VenDeFi homepage"
            >
              <BrandLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 text-[14px] font-medium text-[#475569]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg hover:text-[#0B132B] hover:bg-[#F0F6FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-[#0B63F6] text-white text-[13.5px] font-semibold hover:bg-[#084EC2] transition-all duration-200 shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B63F6]"
              >
                <span>Discuss Your Business</span>
                <ArrowUpRight className="w-4 h-4 opacity-90" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-[#0B132B] hover:bg-[#F0F6FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6]"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Full-Screen Overlay (Strictly Isolated Stacking Context) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="md:hidden fixed inset-0 z-50 bg-white flex flex-col h-[100dvh] w-full overflow-hidden animate-in fade-in duration-150"
        >
          {/* Top Bar with Brand Logo and Close Button */}
          <div className="h-16 px-4 sm:px-6 flex items-center justify-between border-b border-[#E2E8F0] bg-white shrink-0">
            <BrandLogo size="md" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-xl text-[#0B132B] hover:bg-[#F0F6FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6]"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between bg-white">
            <nav className="flex flex-col space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold mb-2 px-3">
                Navigation
              </span>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-[#0B132B] hover:text-[#0B63F6] hover:bg-[#F0F6FF] px-4 py-3 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#94A3B8]">→</span>
                </a>
              ))}
            </nav>

            {/* Mobile Bottom CTA */}
            <div className="pt-6 pb-6 border-t border-[#E2E8F0] space-y-3 shrink-0">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0B63F6] text-white text-base font-semibold hover:bg-[#084EC2] transition-colors shadow-sm shadow-blue-500/25"
              >
                <span>Discuss Your Business</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-center text-[#64748B] font-mono">
                VenDeFi — Software Engineering, AI &amp; Automation
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
