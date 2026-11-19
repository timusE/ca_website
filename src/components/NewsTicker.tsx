import Link from "next/link";
import { Newspaper } from "lucide-react";
import { news } from "@/data/news";

export default function NewsTicker() {
  const latestNews = news.slice(0, 5);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest News & Updates</h2>
            <p className="text-gray-500">Stay updated with the latest tax and compliance news.</p>
          </div>
          <Link
            href="/news"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
        <div className="space-y-4">
          {latestNews.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <Newspaper size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-gray-800 hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">
                    {new Date(item.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.summary}</p>
                <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded-full bg-primary/5 text-primary uppercase">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:hidden text-center">
          <Link
            href="/news"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
