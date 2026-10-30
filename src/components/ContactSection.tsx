import React from "react";
import { BRAND_CONFIG } from "@/data/portfolioData";
import { Phone, MessageCircle, Mail, ArrowUpRight, Sparkles } from "lucide-react";

export default function ContactSection() {
  const contactOptions = [
    {
      id: "phone",
      label: "Direct Call",
      detail: BRAND_CONFIG.contact.phone,
      action: "Call Us",
      href: BRAND_CONFIG.contact.phoneTel,
      icon: <Phone className="w-5 h-5 text-[#0B63F6]" />,
      target: undefined,
      rel: undefined,
      ariaLabel: `Call VenDeFi at ${BRAND_CONFIG.contact.phone}`
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      detail: BRAND_CONFIG.contact.whatsapp,
      action: "Chat on WhatsApp",
      href: BRAND_CONFIG.contact.whatsappUrl,
      icon: <MessageCircle className="w-5 h-5 text-[#0B63F6]" />,
      target: "_blank",
      rel: "noopener noreferrer",
      ariaLabel: `Chat with VenDeFi on WhatsApp at ${BRAND_CONFIG.contact.whatsapp}`
    },
    {
      id: "email",
      label: "Email",
      detail: BRAND_CONFIG.contact.email,
      action: "Send an Email",
      href: BRAND_CONFIG.contact.emailMailto,
      icon: <Mail className="w-5 h-5 text-[#0B63F6]" />,
      target: undefined,
      rel: undefined,
      ariaLabel: `Send an email to VenDeFi at ${BRAND_CONFIG.contact.email}`
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-100/30 via-sky-100/20 to-blue-50/30 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-semibold uppercase tracking-wider text-[#0B63F6] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONTACT VENDEFI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0B132B] tracking-tight leading-[1.15] text-balance">
            {BRAND_CONFIG.contactHeading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {BRAND_CONFIG.contactSupporting}
          </p>
        </div>

        {/* 3 Contact Options in a Balanced Horizontal Layout (Stacks on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactOptions.map((opt) => (
            <div
              key={opt.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#BFDBFE] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Method Icon & Label */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    {opt.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                      {opt.label}
                    </span>
                    <span className="text-xs font-semibold text-[#0B132B]">
                      {opt.id === "whatsapp" ? "Instant Message" : opt.id === "phone" ? "Voice Consultation" : "Written Inquiry"}
                    </span>
                  </div>
                </div>

                {/* Detail Value */}
                <div className="mb-6">
                  <span className="text-base sm:text-lg font-bold text-[#0B132B] tracking-tight break-all font-mono">
                    {opt.detail}
                  </span>
                </div>
              </div>

              {/* Action Link / Button */}
              <div>
                <a
                  href={opt.href}
                  target={opt.target}
                  rel={opt.rel}
                  aria-label={opt.ariaLabel}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#0B63F6] text-[#0B132B] hover:text-white border border-[#E2E8F0] hover:border-[#0B63F6] text-sm font-semibold transition-all duration-200 shadow-2xs group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B63F6]"
                >
                  <span>{opt.action}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Reassurance Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            We respond promptly to all project inquiries, technical scoping requests, and partnership discussions.
          </p>
        </div>
      </div>
    </section>
  );
}
