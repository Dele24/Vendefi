import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { BRAND_CONFIG } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-32 bg-gradient-to-b from-[#F2F7FF] via-[#F8FAFE] to-white overflow-hidden">
      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025] [background-size:36px_36px] [background-image:linear-gradient(to_right,#0B63F6_1px,transparent_1px),linear-gradient(to_bottom,#0B63F6_1px,transparent_1px)]"
        aria-hidden="true"
      />

      {/* Gentle, Restrained Ambient Glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-[#93C5FD]/15 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DBEAFE] text-[11px] sm:text-xs font-mono font-semibold text-[#0B63F6] tracking-wider uppercase mb-6 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0B63F6]" />
          <span>{BRAND_CONFIG.eyebrow}</span>
        </div>

        {/* Primary H1 Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[62px] font-extrabold text-[#0B132B] tracking-[-0.035em] leading-[1.12] text-balance max-w-4xl">
          We Build Technology That{" "}
          <span className="text-[#0B63F6]">Improves Sales</span> and Reduces Operating Costs.
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#475569] leading-relaxed max-w-3xl font-normal text-balance">
          {BRAND_CONFIG.heroDescription}
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B63F6] text-white text-sm font-semibold hover:bg-[#084EC2] transition-all duration-200 shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6]"
          >
            <span>Discuss Your Business</span>
            <ArrowRight className="w-4 h-4 opacity-90" />
          </a>

          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-[#CBD5E1] text-[#0B132B] text-sm font-semibold hover:bg-[#F8FAFC] hover:border-[#94A3B8] transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6]"
          >
            <span>Explore Our Work</span>
          </a>
        </div>

        {/* Short Capabilities Row */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0]/80 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-semibold text-[#475569]">
          <div className="inline-flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#EBF3FE] text-[#0B63F6] flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5" />
            </span>
            <span>Software Engineering</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#EBF3FE] text-[#0B63F6] flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5" />
            </span>
            <span>AI Solutions &amp; Automation</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#EBF3FE] text-[#0B63F6] flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5" />
            </span>
            <span>Digital Product Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
