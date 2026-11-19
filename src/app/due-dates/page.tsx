import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { dueDates } from "@/data/dueDates";

export const metadata: Metadata = {
  title: "Due Date Reminders",
  description:
    "Important compliance due dates for Income Tax, GST, TDS, ROC filings. Never miss a deadline.",
};

const categoryLabels: Record<string, string> = {
  "income-tax": "Income Tax",
  gst: "GST",
  roc: "ROC",
  tds: "TDS",
  other: "Other",
};

const categoryColors: Record<string, string> = {
  "income-tax": "bg-blue-50 text-blue-700 border-blue-200",
  gst: "bg-green-50 text-green-700 border-green-200",
  roc: "bg-purple-50 text-purple-700 border-purple-200",
  tds: "bg-orange-50 text-orange-700 border-orange-200",
  other: "bg-gray-50 text-gray-700 border-gray-200",
};

export default function DueDatesPage() {
  const sortedDates = [...dueDates].sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Due Date Reminders</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Stay on top of your compliance deadlines. Never miss an important filing date.
          </p>
        </div>
      </section>

      {/* Due Dates Table */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Compliance
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Due Date
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Applicable To
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedDates.map((item) => {
                  const isPast = new Date(item.dueDate) < new Date();
                  return (
                    <tr
                      key={item.id}
                      className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                        isPast ? "opacity-60" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <CalendarDays
                            size={18}
                            className="text-primary shrink-0"
                          />
                          <span className="font-medium text-gray-800 text-sm">
                            {item.title}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`font-semibold text-sm ${
                            isPast ? "text-gray-400" : "text-primary"
                          }`}
                        >
                          {new Date(item.dueDate).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {item.applicableTo}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${
                            categoryColors[item.category] ||
                            categoryColors.other
                          }`}
                        >
                          {categoryLabels[item.category] || item.category}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {sortedDates.map((item) => {
              const isPast = new Date(item.dueDate) < new Date();
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-xl border border-gray-100 p-5 ${
                    isPast ? "opacity-60" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full border shrink-0 ${
                        categoryColors[item.category] ||
                        categoryColors.other
                      }`}
                    >
                      {categoryLabels[item.category]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{item.applicableTo}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <CalendarDays size={16} />
                    {new Date(item.dueDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
