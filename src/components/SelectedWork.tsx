"use client";

import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { ProjectItem } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { FolderGit2 } from "lucide-react";

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FE] text-[#0B63F6] text-xs font-mono font-semibold uppercase tracking-wider mb-4 border border-[#BFDBFE]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PROJECTS WE HAVE HELPED BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.15] text-balance">
            Built to Solve.{" "}
            <span className="text-[#0B63F6]">Designed to Deliver.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            A selection of software products, AI platforms, and digital experiences demonstrating our approach to architecture and user experience.
          </p>
        </div>

        {/* 3 Projects Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Accessible Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
