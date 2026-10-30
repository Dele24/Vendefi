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
    <section id="process" className="py-20 md:py-28 bg-white border-b border-[#E2E8F0]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FE] text-[#0B63F6] text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-[#BFDBFE]">
            <span>Delivery Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.15] text-balance">
            A Disciplined Process for{" "}
            <span className="text-[#0B63F6]">Predictable Results</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            From initial business diagnosis through production launch and continuous improvement, we prioritize clarity, execution speed, and practical outcomes.
          </p>
        </div>

        {/* 4-Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STAGES.map((stage, idx) => (
            <div
              key={stage.number}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#BFDBFE] hover:bg-[#F0F6FF] hover:shadow-[0_12px_30px_rgba(11,99,246,0.06)] transition-all duration-300"
            >
              <div>
                {/* Stage Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#BFDBFE] flex items-center justify-center shadow-xs">
                    {getStageIcon(idx)}
                  </div>
                  <span className="font-mono text-xs font-bold text-[#0B63F6] bg-[#EBF3FE] px-2.5 py-1 rounded-full border border-[#BFDBFE]/60">
                    STAGE {stage.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#0B132B] tracking-tight">
                  {stage.title}
                </h3>

                <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                  {stage.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-2 font-semibold">
                  Key Focus
                </span>
                <span className="text-xs text-[#334155] font-medium leading-relaxed block">
                  {stage.focus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
