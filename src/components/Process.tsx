import React from "react";
import { PROCESS_STAGES } from "@/data/portfolioData";
import { Search, Compass, Code, Rocket } from "lucide-react";

export default function Process() {
  const getStageIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-[#0B63F6]" />;
      case 1:
        return <Compass className="w-5 h-5 text-[#0B63F6]" />;
      case 2:
        return <Code className="w-5 h-5 text-[#0B63F6]" />;
      case 3:
        return <Rocket className="w-5 h-5 text-[#0B63F6]" />;
      default:
        return <Search className="w-5 h-5 text-[#0B63F6]" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header inspired by Reference */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FE] text-[#0B63F6] text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-[#BFDBFE]">
            <span>Methodology &amp; Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.15] text-balance">
            From Complex Problems to{" "}
            <span className="text-[#0B63F6]">Working Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            A disciplined four-stage engineering cycle engineered for clarity, predictable delivery, and measurable business leverage.
          </p>
        </div>

        {/* Desktop 4-Column Horizontal Connected Pipeline */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {/* Connector Line */}
          <div
            className="absolute top-7 left-12 right-12 h-0.5 bg-[#E2E8F0] -z-0"
            aria-hidden="true"
          />

          {PROCESS_STAGES.map((stage, idx) => (
            <div key={stage.number} className="relative z-10 flex flex-col">
              {/* Checkpoint Icon Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#DBEAFE] shadow-sm flex items-center justify-center hover:border-[#0B63F6] hover:bg-[#EBF3FE] transition-colors">
                  {getStageIcon(idx)}
                </div>
              </div>

              {/* Stage Card */}
              <div className="flex-1 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#BFDBFE] hover:bg-[#F0F6FF] hover:shadow-[0_12px_30px_rgba(11,99,246,0.06)] transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-[#0B63F6] font-bold">
                      PHASE {stage.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white text-[#64748B] border border-[#E2E8F0]">
                      STAGE
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B132B] tracking-tight">
                    {stage.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {stage.summary}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-[#E2E8F0]/70">
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-1.5 font-semibold">
                    Key Deliverables
                  </span>
                  <div className="space-y-1">
                    {stage.deliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="text-[11.5px] text-[#334155] font-medium block leading-snug"
                      >
                        • {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative border-l-2 border-[#BFDBFE] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-7">
          {PROCESS_STAGES.map((stage, idx) => (
            <div key={stage.number} className="relative group">
              {/* Checkpoint Node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white border-2 border-[#0B63F6] flex items-center justify-center shadow-xs">
                {getStageIcon(idx)}
              </div>

              {/* Content Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#0B63F6]">
                    STAGE {stage.number}
                  </span>
                  <span className="text-[#CBD5E1]">·</span>
                  <span className="text-xs text-[#64748B] font-mono">{stage.focus}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0B132B] tracking-tight">
                  {stage.title}
                </h3>

                <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                  {stage.summary}
                </p>

                <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex flex-wrap gap-1.5">
                  {stage.deliverables.map((deliv) => (
                    <span
                      key={deliv}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-white border border-[#E2E8F0] text-[#334155]"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
