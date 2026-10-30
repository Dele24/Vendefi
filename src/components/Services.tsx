import React from "react";
import { SERVICES } from "@/data/portfolioData";
import { Bot, Workflow, Code2, Network, ArrowUpRight, TrendingUp } from "lucide-react";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-5 h-5 text-[#0B63F6]" />;
      case "Workflow":
        return <Workflow className="w-5 h-5 text-[#0B63F6]" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-[#0B63F6]" />;
      case "Network":
        return <Network className="w-5 h-5 text-[#0B63F6]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#0B63F6]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FE] text-[#0B63F6] text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-[#BFDBFE]">
            <span>Services &amp; Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.15] text-balance">
            Technology Engineered to{" "}
            <span className="text-[#0B63F6]">Deliver Measurable Business Growth</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            We focus on high-impact software, conversational AI, and business automation that solve operational bottlenecks and grow revenue.
          </p>
        </div>

        {/* 4 Service Cards Grid (2x2 layout on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between p-7 sm:p-9 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-[0_16px_36px_rgba(11,99,246,0.07)] transition-all duration-300"
            >
              <div>
                {/* Header: Icon, Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] border border-[#BFDBFE]/60 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#0B63F6] group-hover:text-white transition-all duration-300">
                    <span className="group-hover:text-white transition-colors">
                      {getIcon(service.icon)}
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-[#94A3B8] group-hover:text-[#0B63F6] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] tracking-tight group-hover:text-[#0B63F6] transition-colors">
                  {service.title}
                </h3>

                {/* Problem & Solution */}
                {service.problem && (
                  <div className="mt-4 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80 text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                    <span className="font-semibold text-[#0B132B]">The Challenge: </span>
                    {service.problem}
                  </div>
                )}

                <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                  {service.description}
                </p>

                {/* Intended Business Value */}
                {service.value && (
                  <div className="mt-4 flex items-start gap-2.5 text-xs sm:text-sm text-[#0B63F6] bg-[#EBF3FE]/70 rounded-xl p-3 border border-[#BFDBFE]/60 font-medium">
                    <TrendingUp className="w-4 h-4 shrink-0 mt-0.5 text-[#0B63F6]" />
                    <span>{service.value}</span>
                  </div>
                )}

                {/* Capabilities Badges */}
                <div className="mt-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-2.5 font-semibold">
                    Core Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#F8FAFC] text-[#334155] border border-[#E2E8F0] group-hover:border-[#DBEAFE] transition-colors"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="mt-8 pt-5 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="text-xs text-[#64748B] font-medium">
                  Have this challenge?
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#0B63F6] hover:text-[#084EC2] font-semibold transition-colors"
                  aria-label={`Discuss ${service.title}`}
                >
                  <span>Discuss Need</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
