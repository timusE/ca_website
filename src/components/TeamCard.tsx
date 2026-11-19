"use client";

import { useState } from "react";
import type { TeamMember } from "@/data/team";

// ============================================================
// TEAM CARD — Horizontal KM Agarwal style layout
// Photo left | Name + bio bullets right
// ============================================================

export default function TeamCard({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col sm:flex-row gap-0 overflow-hidden">
      {/* Photo */}
      <div className="sm:w-48 shrink-0 bg-gray-100 flex items-center justify-center overflow-hidden min-h-[180px]">
        {member.image && !imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            style={{ minHeight: "180px" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-primary text-3xl font-bold">
            {initials}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <h3 className="text-lg font-bold text-primary tracking-wide uppercase">
          {member.name}
        </h3>
        <p className="text-secondary font-semibold text-sm mt-0.5">
          {member.designation} — {member.qualification}
        </p>

        {member.bioPoints && member.bioPoints.length > 0 ? (
          <ul className="mt-4 space-y-1.5">
            {member.bioPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 text-sm leading-snug">
                <span className="text-secondary mt-0.5 shrink-0 text-base">☛</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">{member.bio}</p>
        )}
      </div>
    </div>
  );
}
