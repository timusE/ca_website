// ============================================================
// DUE DATE REMINDERS — Update compliance due dates here
// ============================================================

export interface DueDate {
  id: string;
  title: string;
  dueDate: string; // YYYY-MM-DD
  applicableTo: string;
  category: "income-tax" | "gst" | "roc" | "tds" | "other";
}

export const dueDates: DueDate[] = [
  {
    id: "1",
    title: "GSTR-1 Filing (Monthly)",
    dueDate: "2025-08-11",
    applicableTo: "Taxpayers with turnover > ₹5 Cr or opted for monthly filing",
    category: "gst",
  },
  {
    id: "2",
    title: "GSTR-3B Filing (Monthly)",
    dueDate: "2025-08-20",
    applicableTo: "All GST registered taxpayers (Monthly filers)",
    category: "gst",
  },
  {
    id: "3",
    title: "TDS Payment for July 2025",
    dueDate: "2025-08-07",
    applicableTo: "All deductors",
    category: "tds",
  },
  {
    id: "4",
    title: "Advance Tax - 2nd Installment",
    dueDate: "2025-09-15",
    applicableTo: "All taxpayers liable for advance tax",
    category: "income-tax",
  },
  {
    id: "5",
    title: "Income Tax Return (Non-Audit Cases)",
    dueDate: "2025-07-31",
    applicableTo: "Individuals, HUF (non-audit), firms (non-audit)",
    category: "income-tax",
  },
  {
    id: "6",
    title: "Income Tax Return (Audit Cases)",
    dueDate: "2025-10-31",
    applicableTo: "Companies, firms (audit cases), individuals (audit applicable)",
    category: "income-tax",
  },
  {
    id: "7",
    title: "Annual ROC Filing (AOC-4 & MGT-7)",
    dueDate: "2025-10-30",
    applicableTo: "All companies registered under Companies Act, 2013",
    category: "roc",
  },
  {
    id: "8",
    title: "GST Annual Return (GSTR-9)",
    dueDate: "2025-12-31",
    applicableTo: "All GST registered taxpayers",
    category: "gst",
  },
];
