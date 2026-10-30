import React from "react";
import { SERVICES } from "@/data/portfolioData";
import { Code2, Cpu, Bot, Network, Layers, ArrowUpRight } from "lucide-react";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-[#0B63F6]" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-[#0B63F6]" />;
      case "Bot":
        return <Bot className="w-5 h-5 text-[#0B63F6]" />;
      case "Network":
        return <Network className="w-5 h-5 text-[#0B63F6]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#0B63F6]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#0B63F6]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header inspired by Reference */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FE] text-[#0B63F6] text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-[#BFDBFE]">
            <span>Core Services &amp; Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.15] text-balance">
            Technology Built Around{" "}
            <span className="text-[#0B63F6]">Real Business Problems</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            We combine software engineering, artificial intelligence, and automation to create practical, scalable systems for modern businesses.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={`group flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-[0_16px_36px_rgba(11,99,246,0.08)] transition-all duration-300 ${idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              <div>
                {/* Header: Icon, Number, and Micro Accent */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FE] border border-[#BFDBFE]/60 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#0B63F6] group-hover:text-white transition-all duration-300">
                    <span className="group-hover:text-white group-hover:brightness-200 transition-colors">
                      {getIcon(service.icon)}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#94A3B8] group-hover:text-[#0B63F6] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0B132B] tracking-tight group-hover:text-[#0B63F6] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                  {service.description}
                </p>

                {/* Capabilities Badges */}
                <div className="mt-6">
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#94A3B8] block mb-2 font-semibold">
                    Capabilities
                  </span>
                  <div className="flex flex-wrap gap-1.5">
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
              <div className="mt-7 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-medium text-[#64748B]">
                <span>Inquire about this service</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[#0B63F6] hover:text-[#084EC2] font-semibold"
                  aria-label={`Discuss ${service.title}`}
                >
                  <span>Discuss Need</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
