import React from "react";
import { TRUST_TECHNOLOGIES } from "@/data/portfolioData";

export default function TrustStrip() {
  return (
    <section className="py-10 bg-white border-y border-[#E2E8F0]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Section Label */}
        <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B] mb-6">
          ENGINEERED WITH PRODUCTION-GRADE TECHNOLOGIES &amp; ARCHITECTURES
        </p>

        {/* Technology Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          {TRUST_TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#BFDBFE] hover:bg-[#F0F6FF] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B63F6]" />
              <span className="text-xs sm:text-sm font-semibold text-[#0B132B]">
                {tech.name}
              </span>
              <span className="text-[10.5px] font-mono text-[#64748B] hidden sm:inline">
                ({tech.category})
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
