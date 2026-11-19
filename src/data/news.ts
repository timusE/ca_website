// ============================================================
// NEWS & UPDATES — Add/modify news items here
// ============================================================

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string; // YYYY-MM-DD
  category: "tax" | "gst" | "corporate" | "general";
}

export const news: NewsItem[] = [
  {
    id: "1",
    title: "Due date for filing Income Tax Returns for AY 2025-26 extended",
    summary:
      "The Central Board of Direct Taxes has extended the due date for filing income tax returns for Assessment Year 2025-26. Taxpayers now have additional time to file their returns.",
    date: "2025-07-01",
    category: "tax",
  },
  {
    id: "2",
    title: "GST Council announces key changes in 53rd meeting",
    summary:
      "The GST Council in its latest meeting has recommended several rate changes and compliance simplifications for small businesses and specific sectors.",
    date: "2025-06-15",
    category: "gst",
  },
  {
    id: "3",
    title: "MCA introduces new simplified forms for annual compliance",
    summary:
      "The Ministry of Corporate Affairs has introduced new simplified forms for annual compliance filings, making it easier for small companies and LLPs.",
    date: "2025-06-01",
    category: "corporate",
  },
  {
    id: "4",
    title: "New TDS provisions effective from April 2025",
    summary:
      "Several new TDS provisions have come into effect from April 2025, including revised thresholds and new categories of payments covered under TDS.",
    date: "2025-04-01",
    category: "tax",
  },
];
