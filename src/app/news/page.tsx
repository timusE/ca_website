import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Updates",
  description:
    "Stay updated with the latest tax, GST, and corporate compliance news and notifications.",
};

const categoryColors: Record<string, string> = {
  tax: "bg-blue-50 text-blue-700",
  gst: "bg-green-50 text-green-700",
  corporate: "bg-purple-50 text-purple-700",
  general: "bg-gray-50 text-gray-700",
};

export default function NewsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">News & Updates</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Latest news, notifications, and updates in taxation, GST, and corporate compliance.
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {news.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Newspaper size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h2 className="font-bold text-lg text-gray-800">{item.title}</h2>
                      <time className="text-sm text-gray-400 whitespace-nowrap shrink-0">
                        {new Date(item.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <p className="text-gray-500 leading-relaxed mb-3">{item.summary}</p>
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase ${
                        categoryColors[item.category] || categoryColors.general
                      }`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {news.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <Newspaper size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">No news updates available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
