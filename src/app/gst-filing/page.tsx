"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function GSTFilingPage() {
  const [form, setForm] = useState({
    dealerName: "",
    gstin: "",
    address: "",
    email: "",
    mobile: "",
    remarks: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ dealerName: "", gstin: "", address: "", email: "", mobile: "", remarks: "" });
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gray-100 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">GST Filing</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Submit your GST details and documents to {siteConfig.firmName}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center">
              <div className="text-4xl mb-3">✓</div>
              <h2 className="text-xl font-bold mb-2">Form Submitted Successfully</h2>
              <p className="text-sm">
                Thank you! We have received your GST filing details. Our team will contact you
                within 24 working hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-5 px-5 py-2 bg-green-700 text-white rounded-lg text-sm hover:bg-green-800 transition-colors"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Dealer / GSTIN / Address */}
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name of Registered Dealer
                    </label>
                    <input
                      type="text"
                      required
                      value={form.dealerName}
                      onChange={(e) => set("dealerName", e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GSTIN
                    </label>
                    <input
                      type="text"
                      required
                      value={form.gstin}
                      onChange={(e) => set("gstin", e.target.value.toUpperCase())}
                      maxLength={15}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 font-mono"
                      placeholder="22AAAAA0000A1Z5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={(e) => set("address", e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                    />
                  </div>
                </div>
              </div>

              {/* Email / Mobile / Remarks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.mobile}
                    onChange={(e) => set("mobile", e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Remarks
                  </label>
                  <input
                    type="text"
                    value={form.remarks}
                    onChange={(e) => set("remarks", e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                  />
                </div>
              </div>

              {/* File Attachments */}
              <div>
                <h2 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-5">
                  Attachment — Submit GST Filing Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {[
                    { id: "purchase", label: "Purchase Details" },
                    { id: "sales", label: "Sales Details" },
                    { id: "purchase-invoices", label: "Purchase Invoices" },
                    { id: "sales-invoices", label: "Sales Invoices" },
                    { id: "other", label: "Other Details" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label
                        htmlFor={f.id}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {f.label}
                      </label>
                      <input
                        type="file"
                        id={f.id}
                        accept=".pdf,.xlsx,.xls,.csv,.jpg,.png"
                        className="w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:border file:border-gray-300 file:rounded file:text-sm file:bg-white file:text-gray-700 hover:file:bg-gray-50"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded text-sm transition-colors uppercase tracking-wide"
                >
                  Submit Your Form
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
