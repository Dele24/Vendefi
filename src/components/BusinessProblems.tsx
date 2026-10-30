import React from "react";
import { BUSINESS_PROBLEMS } from "@/data/portfolioData";
import { MessageSquareX, Repeat, UserX, Unplug, ArrowRight, AlertCircle } from "lucide-react";

export default function BusinessProblems() {
  const getProblemIcon = (id: string) => {
    switch (id) {
      case "missed-enquiries":
        return <MessageSquareX className="w-5 h-5 text-rose-500" />;
      case "repetitive-work":
        return <Repeat className="w-5 h-5 text-amber-500" />;
      case "inconsistent-followups":
        return <UserX className="w-5 h-5 text-orange-500" />;
      case "disconnected-systems":
        return <Unplug className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-[#0B63F6]" />;
    }
  };

  return (
    <section id="problems" className="py-20 md:py-28 bg-[#F8FAFC] border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-100 text-xs font-mono font-semibold uppercase tracking-wider text-rose-600 mb-4 shadow-2xs">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>OPERATIONAL FRICTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.15] text-balance">
            Your Business May Not Need More People.{" "}
            <span className="text-[#0B63F6]">It May Need Better Systems.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            When workflows stall, customer enquiries go unanswered, or critical data is trapped across separate tools, business growth slows down. We engineer systems that eliminate these friction points.
          </p>
        </div>

        {/* 4 Problem Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BUSINESS_PROBLEMS.map((problem) => (
            <div
              key={problem.id}
              className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#BFDBFE] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Phase */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getProblemIcon(problem.id)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    PROBLEM {problem.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B132B] tracking-tight">
                  {problem.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Solution Mapping Note */}
              <div className="mt-6 pt-3.5 border-t border-slate-100 text-xs text-slate-500 font-mono">
                <span className="text-[10.5px] uppercase text-[#0B63F6] font-semibold block mb-0.5">
                  How We Solve It
                </span>
                <span className="text-[#0B132B] font-sans font-medium">
                  {problem.solution}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Concluding Statement Banner */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-[#DBEAFE] shadow-sm text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-[#0B132B] tracking-tight">
              Ready to eliminate operational friction?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              VenDeFi identifies where your operations lose momentum and builds custom software, AI agents, or automated workflows to solve the underlying problem.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B63F6] text-white text-xs sm:text-sm font-semibold hover:bg-[#084EC2] transition-colors shadow-sm shadow-blue-500/20 shrink-0"
          >
            <span>Discuss Your Bottlenecks</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
