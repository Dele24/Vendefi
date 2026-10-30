"use client";

import React, { useState } from "react";
import { TECHNOLOGIES } from "@/data/portfolioData";
import { CheckCircle2, Cpu } from "lucide-react";

export default function Technologies() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases" },
    { id: "ai-integrations", label: "AI & Integrations" },
    { id: "deployment", label: "Deployment & Git" },
    { id: "payments", label: "Payments" }
  ];

  const filteredCategories =
    activeCategoryFilter === "all"
      ? TECHNOLOGIES
      : TECHNOLOGIES.filter((cat) => cat.id === activeCategoryFilter);

  return (
    <section id="technologies" className="py-20 md:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold uppercase tracking-wider text-[#0B63F6] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0B132B] tracking-tight leading-[1.15]">
            The right tools for the right solution.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We choose technologies based on the problem, the requirements, and the long-term maintainability of each product.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategoryFilter === cat.id
                  ? "bg-[#0B63F6] text-white shadow-sm shadow-blue-500/20"
                  : "bg-[#F8FAFC] text-slate-600 border border-slate-200 hover:text-[#0B132B] hover:border-blue-200 hover:bg-blue-50/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-blue-200 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-[#0B132B] tracking-tight">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    {group.items.length} tools
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="group/item inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[#0B63F6]/40 hover:bg-blue-50/50 transition-colors"
                    >
                      <span className="text-xs font-semibold text-[#0B132B] font-mono">
                        {tech.name}
                      </span>
                      {tech.featured && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B63F6]" title="Primary focus" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0B63F6]" />
                <span>Production-tested stack</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
