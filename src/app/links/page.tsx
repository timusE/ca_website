import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { usefulLinks } from "@/data/links";

export const metadata: Metadata = {
  title: "Useful Links",
  description:
    "Quick access to important government portals, tax filing websites, and regulatory body links.",
};

export default function LinksPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Useful Links</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Quick access to important government portals, regulatory bodies, and filing websites.
          </p>
        </div>
      </section>

      {/* Links by Category */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {usefulLinks.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {category.category}
              </h2>
              <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <ExternalLink
                        size={18}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      {link.description && (
                        <p className="text-sm text-gray-400 mt-1">
                          {link.description}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
