import React from "react";
import {
  Code2,
  Bot,
  Workflow,
  Network,
  Target,
  Sparkles
} from "lucide-react";

export default function About() {
  const capabilityPillars = [
    {
      id: "software-engineering",
      title: "Software Engineering",
      description:
        "We build digital products, business applications, dashboards, and web platforms around real business needs.",
      icon: <Code2 className="w-5 h-5 text-[#0B63F6]" />
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      description:
        "We develop practical AI-powered systems that process information, support customers, and help businesses make better use of their data.",
      icon: <Bot className="w-5 h-5 text-[#0B63F6]" />
    },
    {
      id: "business-automation",
      title: "Business Automation",
      description:
        "We reduce repetitive manual work by connecting systems and automating operational workflows.",
      icon: <Workflow className="w-5 h-5 text-[#0B63F6]" />
    },
    {
      id: "system-integration",
      title: "System Integration",
      description:
        "We connect APIs, databases, payment systems, and business tools to help applications work together reliably.",
      icon: <Network className="w-5 h-5 text-[#0B63F6]" />
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#F8FAFC] text-[#0B132B] relative overflow-hidden border-t border-[#E2E8F0]">
      {/* Ambient background glows */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-b from-[#EBF3FE]/70 to-transparent blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-gradient-to-t from-blue-100/40 to-transparent blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        {/* Top Section: Eyebrow, Heading, and Company Introduction */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-semibold uppercase tracking-wider text-[#0B63F6] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT VENDEFI</span>
          </div>

          {/* Prominent Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0B132B] tracking-tight leading-[1.15] text-balance">
            Technology Should Solve Problems.{" "}
            <span className="text-[#0B63F6]">Not Create More.</span>
          </h2>

          {/* Supporting Paragraphs */}
          <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            <p>
              VenDeFi is a software engineering and AI automation company focused on helping businesses solve operational problems through thoughtful technology.
            </p>
            <p className="text-slate-500 text-sm sm:text-base">
              We design and build software products, intelligent systems, and connected workflows that make business operations simpler, more efficient, and easier to scale.
            </p>
          </div>
        </div>

        {/* Mission Statement Box */}
        <div className="max-w-3xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DBEAFE] shadow-sm relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <Target className="w-6 h-6 text-[#0B63F6]" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#0B63F6] font-bold block mb-1">
                OUR MISSION
              </span>
              <p className="text-base sm:text-lg font-medium text-[#0B132B] leading-relaxed">
                Our mission is to help businesses move forward by turning complex problems into practical software, useful AI, and reliable automation.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do: Four Capability Areas */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0B63F6] font-semibold block mb-2">
              WHAT WE DO
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B132B] tracking-tight">
              Four Capability Areas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilityPillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-bold text-[#0B132B] tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-3xl mx-auto text-center pt-4">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/60 via-sky-50/40 to-blue-50/60 border border-blue-100">
            <blockquote className="text-base sm:text-xl font-bold text-[#0B132B] tracking-tight leading-snug">
              &ldquo;We don&apos;t build technology simply because it is possible. We build it because it solves a problem worth solving.&rdquo;
            </blockquote>
            <p className="text-xs font-mono text-slate-500 mt-2 font-medium">
              VenDeFi Guiding Principle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
