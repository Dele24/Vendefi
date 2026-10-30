"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ProjectItem } from "@/types";
import { X, ExternalLink, Check, ShieldCheck, Compass, AlertCircle } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl border border-[#DBEAFE] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#F1F5F9] bg-[#F8FAFC]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#0B63F6] font-bold">
                {project.category}
              </span>
              <span className="text-[#CBD5E1]">·</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#EBF3FE] text-[#0B63F6] font-semibold">
                {project.statusBadge}
              </span>
            </div>
            <h3 id="modal-title" className="text-2xl font-bold text-[#0B132B] tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs text-[#64748B] mt-0.5">
              {project.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#64748B] hover:text-[#0B132B] hover:bg-[#F1F5F9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto">
          {/* Actual Platform Image Preview */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC]">
            <Image
              src={project.imageUrl}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover object-top"
            />
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-bold mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Approach Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#64748B] font-bold mb-2">
                <AlertCircle className="w-3.5 h-3.5 text-[#0B63F6]" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F0F6FF] border border-[#BFDBFE]">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#0B63F6] font-bold mb-2">
                <Compass className="w-3.5 h-3.5 text-[#0B63F6]" />
                <span>Product Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Experience Description */}
          <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-bold block mb-1">
              Live Product Experience
            </span>
            <p className="text-xs sm:text-sm text-[#0B132B] leading-relaxed">
              {project.experience}
            </p>
          </div>

          {/* Key Capabilities / Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-bold mb-3">
              Key Capabilities &amp; Design Focus
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569]">
                  <span className="w-4 h-4 rounded-full bg-[#EBF3FE] text-[#0B63F6] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] font-bold mb-2.5">
              Verified Technologies &amp; Capabilities
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#F8FAFC] border border-[#E2E8F0] text-[#0B132B]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio Integrity Note */}
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B]">
            <ShieldCheck className="w-4 h-4 text-[#0B63F6] shrink-0 mt-0.5" />
            <p>
              Portfolio case study representing digital product engineering, interface development, and system architecture. Visit the live platform to view the active production application.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#F1F5F9] bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-3">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-[#0B63F6] text-white text-xs font-semibold hover:bg-[#084EC2] transition-colors shadow-sm"
          >
            <span>Visit {project.name}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#0B132B] text-xs font-semibold hover:bg-[#F8FAFC] transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
