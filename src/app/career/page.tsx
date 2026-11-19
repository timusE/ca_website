"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function CareerPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    post: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", post: "", message: "" });
  };

  return (
    <>
      {/* Gray page header */}
      <section className="bg-gray-100 border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Career</h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── LEFT: form ── */}
            <div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                We at{" "}
                <strong className="text-primary">{siteConfig.firmName}</strong>{" "}
                have earned a reputation for excellence based on our experience
                in the field of chartered accountancy in India. With a rapidly
                growing client list, we are looking for some of the brightest minds
                to join our organisation. If you are interested, you can send
                your details below.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-2">✓</div>
                  <h2 className="font-bold text-lg mb-1">Application Submitted!</h2>
                  <p className="text-sm">
                    Thank you for your interest. We will review your application
                    and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 bg-green-700 text-white rounded text-sm hover:bg-green-800 transition-colors"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition"
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition"
                  />

                  {/* Post Applied */}
                  <input
                    type="text"
                    required
                    placeholder="Post Applied"
                    value={form.post}
                    onChange={(e) => set("post", e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition"
                  />

                  {/* Message */}
                  <textarea
                    rows={3}
                    placeholder="Brief message (optional)"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition resize-none"
                  />

                  {/* Resume upload */}
                  <div>
                    <p className="text-primary font-bold mb-3 text-base">
                      Submit Your Resume
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-0 border border-gray-300 rounded overflow-hidden">
                        <label className="px-3 py-2 bg-gray-200 text-gray-700 text-sm font-medium cursor-pointer hover:bg-gray-300 transition-colors whitespace-nowrap border-r border-gray-300">
                          Choose File
                          <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                        </label>
                        <span className="px-3 py-2 text-sm text-gray-400 bg-blue-50 flex-1 truncate">
                          No file chosen
                        </span>
                      </div>
                      <div className="flex items-center gap-0 border border-gray-300 rounded overflow-hidden">
                        <label className="px-3 py-2 bg-gray-200 text-gray-700 text-sm font-medium cursor-pointer hover:bg-gray-300 transition-colors whitespace-nowrap border-r border-gray-300">
                          Choose File
                          <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" className="hidden" />
                        </label>
                        <span className="px-3 py-2 text-sm text-gray-400 bg-blue-50 flex-1 truncate">
                          No file chosen
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 px-8 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded text-sm transition-colors uppercase tracking-wide"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>

            {/* ── RIGHT: illustration ── */}
            <div className="hidden lg:flex items-center justify-center py-6">
              <svg
                viewBox="0 0 480 500"
                className="w-full max-w-md"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ground / steps */}
                <rect x="40" y="440" width="400" height="8" rx="4" fill="#e5e7eb" />
                <rect x="70" y="400" width="310" height="8" rx="4" fill="#e5e7eb" />
                <rect x="110" y="360" width="260" height="8" rx="4" fill="#e5e7eb" />
                <rect x="150" y="320" width="200" height="8" rx="4" fill="#e5e7eb" />
                <rect x="190" y="280" width="150" height="8" rx="4" fill="#e5e7eb" />

                {/* Door frame at the top */}
                <rect x="310" y="100" width="100" height="170" rx="6" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
                <rect x="322" y="112" width="76" height="140" rx="4" fill="white" stroke="#d1d5db" strokeWidth="1.5" />
                <circle cx="322" cy="185" r="5" fill="#9ca3af" />
                {/* Door top arc */}
                <path d="M310 100 Q360 55 410 100" stroke="#d1d5db" strokeWidth="2" fill="none" />

                {/* Person body */}
                {/* Head */}
                <circle cx="200" cy="230" r="28" fill="#fbbf24" />
                {/* Hair */}
                <path d="M175 220 Q182 195 200 192 Q218 195 225 220" fill="#1f2937" />
                {/* Body */}
                <rect x="178" y="256" width="44" height="70" rx="8" fill="#3b82f6" />
                {/* Left arm (stretched forward) */}
                <path d="M178 270 Q155 275 145 295 Q140 302 148 305" stroke="#3b82f6" strokeWidth="12" strokeLinecap="round" fill="none" />
                {/* Right arm (back) */}
                <path d="M222 270 Q240 268 250 280" stroke="#1d4ed8" strokeWidth="10" strokeLinecap="round" fill="none" />
                {/* Briefcase */}
                <rect x="140" y="295" width="36" height="26" rx="4" fill="#1f2937" />
                <rect x="150" y="290" width="16" height="8" rx="3" stroke="#1f2937" strokeWidth="2" fill="none" />
                <line x1="140" y1="308" x2="176" y2="308" stroke="#374151" strokeWidth="1.5" />

                {/* Left leg (front, stepping up) */}
                <path d="M188 326 Q185 360 170 380 L168 408" stroke="#1e3a5f" strokeWidth="14" strokeLinecap="round" fill="none" />
                {/* Right leg (back) */}
                <path d="M210 326 Q215 358 220 380 L222 408" stroke="#1e3a5f" strokeWidth="12" strokeLinecap="round" fill="none" />
                {/* Shoes */}
                <ellipse cx="168" cy="412" rx="16" ry="7" fill="#111827" />
                <ellipse cx="222" cy="412" rx="14" ry="6" fill="#111827" />

                {/* Decorative clouds top-left */}
                <ellipse cx="80" cy="120" rx="35" ry="22" fill="#f3f4f6" />
                <ellipse cx="55" cy="128" rx="22" ry="16" fill="#f3f4f6" />
                <ellipse cx="108" cy="128" rx="22" ry="15" fill="#f3f4f6" />

                {/* Arrow / trajectory dashes */}
                <path d="M230 280 Q280 240 330 200" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6,5" fill="none" />
                <polygon points="335,195 340,210 322,205" fill="#d1d5db" />
              </svg>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
