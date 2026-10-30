"use client";

import React, { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_LINKS: NavItem[] = [
  { label: "Our Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-[#E2E8F0]/60 py-4"
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
                className="px-3.5 py-1.5 rounded-lg hover:text-[#0B132B] hover:bg-[#F0F6FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA: Vivid Blue */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-[#0B63F6] text-white text-[13.5px] font-semibold hover:bg-[#084EC2] transition-all duration-200 shadow-[0_4px_14px_rgba(11,99,246,0.25)] hover:shadow-[0_6px_20px_rgba(11,99,246,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B63F6]"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 opacity-90" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#0B132B] hover:bg-[#F0F6FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] z-40 bg-white/98 backdrop-blur-xl border-t border-[#E2E8F0] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col justify-between h-[calc(100dvh-65px)] overflow-y-auto">
            <nav className="flex flex-col space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-bold mb-2">
                Menu Navigation
              </span>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold text-[#0B132B] hover:text-[#0B63F6] transition-colors py-2.5 border-b border-[#F1F5F9]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-8 pb-10 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0B63F6] text-white text-base font-semibold hover:bg-[#084EC2] transition-colors shadow-[0_6px_20px_rgba(11,99,246,0.25)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
              <p className="text-xs text-center text-[#64748B]">
                VenDeFi — Software Engineering, AI &amp; Automation
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
