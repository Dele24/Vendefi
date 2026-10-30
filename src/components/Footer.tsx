"use client";

import React, { useSyncExternalStore } from "react";
import BrandLogo from "./BrandLogo";
import { BRAND_CONFIG, SERVICES } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

const emptySubscribe = () => () => {};

export default function Footer() {
  const currentYear = useSyncExternalStore(
    emptySubscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return (
    <footer className="bg-white border-t border-[#E2E8F0] text-[#0B132B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#E2E8F0]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo size="md" />
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              {BRAND_CONFIG.tagline}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-mono">
              Software engineering, AI agents &amp; business automation systems designed to move operations forward.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B132B] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li>
                <a href="#work" className="hover:text-[#0B63F6] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0B63F6] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-[#0B63F6] transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#0B63F6] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#0B63F6] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0B63F6] transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B132B] font-semibold block">
              Core Capabilities
            </span>
            <ul className="space-y-2 text-xs text-slate-600">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#0B63F6] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                DIRECT CONTACT
              </span>
              <a
                href="#contact"
                className="text-xs font-semibold text-[#0B63F6] hover:underline"
              >
                Call, WhatsApp, or Email Our Team →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Dynamic Copyright & Back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} VenDeFi. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Precision software engineering &amp; AI systems.</span>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-[#0B132B] hover:text-[#0B63F6] transition-colors font-medium"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
