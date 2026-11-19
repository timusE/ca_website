import type { Metadata } from "next";
import { FileCheck } from "lucide-react";
import Link from "next/link";
import { licenses } from "@/data/licenses";

export const metadata: Metadata = {
  title: "Licenses & Registrations",
  description:
    "Complete license and registration services including FSSAI, Trademark, Patent, ISO, Import Export Code, and 30+ other licenses.",
};

export default function LicensesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Licenses & Registrations</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            We assist businesses in obtaining all required licenses and registrations
            for smooth and compliant operations.
          </p>
        </div>
      </section>

      {/* Licenses by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {licenses.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {category.category}
              </h2>
              <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white p-5 rounded-xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <FileCheck
                          size={18}
                          className="text-primary group-hover:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Need help with a specific license?
          </h2>
          <p className="text-gray-500 mb-6">
            Contact our team for a free consultation on the licenses applicable to your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
