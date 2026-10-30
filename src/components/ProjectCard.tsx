import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onSelectProject }: ProjectCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-[0_16px_36px_rgba(11,99,246,0.08)] transition-all duration-300 overflow-hidden">
      <div>
        {/* Top Polished Visual Preview using Real Project Image */}
        <div className="relative overflow-hidden bg-[#F8FAFC] aspect-[16/9] w-full border-b border-[#E2E8F0]">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            priority={project.id === "pharmachain-ai"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          {/* Category & Status */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#0B63F6] font-bold truncate">
              {project.category}
            </span>
            <span className="text-[10.5px] font-mono px-2 py-0.5 rounded-full bg-[#EBF3FE] text-[#0B63F6] font-semibold shrink-0">
              {project.statusBadge}
            </span>
          </div>

          {/* Project Name & Subtitle */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B132B] tracking-tight group-hover:text-[#0B63F6] transition-colors">
            {project.name}
          </h3>
          <p className="text-xs font-medium text-[#64748B] mt-0.5">
            {project.tagline}
          </p>

          {/* Strengthened Problem & Solution Description */}
          <p className="mt-3.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
            {project.description}
          </p>

          {/* Solution Highlight Box */}
          <div className="mt-4 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-slate-600">
            <span className="text-[10.5px] font-mono uppercase text-[#0B63F6] font-semibold block mb-1">
              Core Delivery
            </span>
            <span className="font-medium text-[#0B132B] line-clamp-2">
              {project.approach}
            </span>
          </div>

          {/* Technology Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-white text-[#334155] border border-[#E2E8F0]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer: Case Study & Live External Link */}
      <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-3">
        {/* Internal Case-Study Action */}
        <button
          type="button"
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B132B] hover:text-[#0B63F6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6] rounded-md py-1"
          aria-label={`Open case study overview for ${project.name}`}
        >
          <span>Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* External Live Project Action */}
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EBF3FE] border border-[#BFDBFE] hover:bg-[#0B63F6] text-xs font-semibold text-[#0B63F6] hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6]"
          aria-label={`Visit live website for ${project.name} (opens in new tab)`}
        >
          <span>Visit Project</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}
