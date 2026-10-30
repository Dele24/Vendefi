import React from "react";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function BrandLogo({
  className = "",
  variant = "light",
  size = "md"
}: BrandLogoProps) {
  const isDark = variant === "dark";

  const sizeDimensions = {
    sm: { box: 28, stroke: 2.2, text: "text-lg", radius: 7 },
    md: { box: 34, stroke: 2.4, text: "text-xl", radius: 9 },
    lg: { box: 44, stroke: 2.8, text: "text-2xl", radius: 11 }
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 font-sans select-none tracking-tight ${className}`}>
      {/* Precision Geometric Monogram */}
      <svg
        width={sizeDimensions.box}
        height={sizeDimensions.box}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200 group-hover:scale-105"
        aria-hidden="true"
      >
        <rect
          width="36"
          height="36"
          rx={sizeDimensions.radius}
          fill={isDark ? "#0B132B" : "#0B63F6"}
        />
        {/* Angular chevron representing 'V' and data node */}
        <path
          d="M8 10L18 26L28 10"
          stroke="#FFFFFF"
          strokeWidth={sizeDimensions.stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner geometric nexus chevron */}
        <path
          d="M13 10L18 18L23 10"
          stroke="#93C5FD"
          strokeWidth={sizeDimensions.stroke * 0.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Micro-node terminal dots */}
        <circle cx="18" cy="26" r="1.75" fill="#FF6B35" />
        <circle cx="8" cy="10" r="1.5" fill="#FFFFFF" />
        <circle cx="28" cy="10" r="1.5" fill="#FFFFFF" />
      </svg>

      {/* Wordmark */}
      <span className={`font-bold tracking-[-0.03em] ${sizeDimensions.text} ${isDark ? "text-white" : "text-[#0B132B]"}`}>
        Ven<span className="text-[#0B63F6]">DeFi</span>
      </span>
    </div>
  );
}
