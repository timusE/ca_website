// ============================================================
// USEFUL & IMPORTANT LINKS — Update links here
// ============================================================

export interface LinkItem {
  title: string;
  url: string;
  description?: string;
}

export interface LinkCategory {
  category: string;
  links: LinkItem[];
}

export const usefulLinks: LinkCategory[] = [
  {
    category: "Income Tax",
    links: [
      {
        title: "Income Tax India e-Filing",
        url: "https://www.incometax.gov.in",
        description: "Official Income Tax e-Filing Portal",
      },
      {
        title: "TIN-NSDL",
        url: "https://www.tin-nsdl.com",
        description: "Tax Information Network",
      },
      {
        title: "TRACES",
        url: "https://www.tdscpc.gov.in",
        description: "TDS Reconciliation Analysis and Correction Enabling System",
      },
    ],
  },
  {
    category: "GST",
    links: [
      {
        title: "GST Portal",
        url: "https://www.gst.gov.in",
        description: "Official GST Portal",
      },
      {
        title: "GST Council",
        url: "https://gstcouncil.gov.in",
        description: "GST Council Official Website",
      },
      {
        title: "E-Way Bill",
        url: "https://ewaybillgst.gov.in",
        description: "E-Way Bill System",
      },
    ],
  },
  {
    category: "Corporate Affairs",
    links: [
      {
        title: "MCA Portal",
        url: "https://www.mca.gov.in",
        description: "Ministry of Corporate Affairs",
      },
      {
        title: "MCA V3 Portal",
        url: "https://www.mca.gov.in/mcafoportal/login.do",
        description: "MCA V3 Filing Portal",
      },
    ],
  },
  {
    category: "Other Important Portals",
    links: [
      {
        title: "RBI",
        url: "https://www.rbi.org.in",
        description: "Reserve Bank of India",
      },
      {
        title: "SEBI",
        url: "https://www.sebi.gov.in",
        description: "Securities and Exchange Board of India",
      },
      {
        title: "DGFT",
        url: "https://www.dgft.gov.in",
        description: "Directorate General of Foreign Trade",
      },
      {
        title: "Udyam Registration",
        url: "https://udyamregistration.gov.in",
        description: "MSME Udyam Registration Portal",
      },
      {
        title: "ICAI",
        url: "https://www.icai.org",
        description: "Institute of Chartered Accountants of India",
      },
    ],
  },
];
