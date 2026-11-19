import type { SubServiceContent } from "./types";

export const taxationSubServices: SubServiceContent[] = [
  // ─── DIRECT TAXATION ──────────────────────────────────────────────────
  {
    slug: "corporate-tax-advisory", parentSlug: "direct-taxation",
    title: "Corporate Tax Advisory & Compliance",
    intro: "Every business entity in India is subject to income tax. Proper corporate tax planning minimizes legitimate tax liability while ensuring full compliance with the Income Tax Act, 1961.",
    sections: [
      { heading: "Our Services", bullets: ["Tax planning to optimize effective tax rate", "Corporate ITR filing (ITR-6)", "Advance tax computation and deposit", "TDS / TCS compliance and return filing (26Q, 27Q, 27EQ)", "MAT computation and credit utilization", "Tax due diligence for M&A and restructuring"] },
      { heading: "Key Corporate Tax Rates (AY 2025-26)", bullets: ["Domestic companies: 30% + surcharge + cess (effective ~34.94%)", "Section 115BAA: 22% (no exemptions, no MAT)", "New manufacturing companies (Section 115BAB): 15%", "MAT @ 15% of book profits if tax is lower than MAT"] },
    ],
  },
  {
    slug: "international-tax-advisory", parentSlug: "direct-taxation",
    title: "International Tax Advisory & Compliance",
    intro: "Cross-border transactions require careful analysis of DTAA provisions, PE risks, and withholding tax obligations. We advise businesses and NRIs on all aspects of international taxation.",
    sections: [
      { heading: "Key Areas Covered", bullets: ["DTAA analysis and treaty benefit claims", "Permanent Establishment (PE) risk assessment", "Withholding tax on payments to non-residents (Section 195)", "Foreign Tax Credit (Section 91 / DTAA)", "Country-by-Country Reporting (CbCR) for MNEs", "Equalisation Levy compliance"] },
      { heading: "NRI Tax Services", bullets: ["Determination of residential status under FEMA and Income Tax Act", "NRI ITR filing", "TRC (Tax Residency Certificate) application guidance", "Lower withholding certificate under Section 197", "Advice on NRE / NRO / FCNR account taxation"] },
    ],
  },
  {
    slug: "transfer-pricing", parentSlug: "direct-taxation",
    title: "Transfer Pricing Study & Documentation",
    intro: "Transfer Pricing rules under Chapter X require international transactions between associated enterprises to be at arm's length. Non-compliance results in adjustments and 200% penalties.",
    sections: [
      { heading: "Our Transfer Pricing Services", bullets: ["TP benchmarking study using CMIE Prowess / RoyaltyStat", "Master File (Form 3CEAA) and Local File documentation", "Country-by-Country Report (Form 3CEAD)", "Advance Pricing Agreement (APA) support", "Safe Harbour analysis", "Representation before Transfer Pricing Officer (TPO)"] },
      { heading: "Key Deadlines", bullets: ["Form 3CEB (CA certificate): due by October 31", "Master File Form 3CEAA: due by November 30", "CbCR Form 3CEAD: due by December 31"] },
    ],
  },
  {
    slug: "litigation-representation", parentSlug: "direct-taxation",
    title: "Income Tax Litigation & Representation",
    intro: "Tax disputes require expert handling at every stage. Our team represents clients from initial notice through assessments, appeals, and Tribunal proceedings.",
    sections: [
      { heading: "Stages of Litigation We Handle", bullets: ["Response to notices (143(1), 142(1), 148)", "Scrutiny Assessment under Section 143(3)", "First Appeal before CIT(A) / JCIT(A)", "Second Appeal before ITAT", "Writ petitions before High Court", "Settlement Commission applications", "Rectification under Section 154"] },
      { heading: "Penalty Proceedings", bullets: ["Penalty for concealment / under-reporting (Section 270A)", "Prosecution proceedings (Section 276B, 276C)", "Compounding of offences"] },
    ],
  },
  {
    slug: "personal-tax-advisory", parentSlug: "direct-taxation",
    title: "Personal Tax Advisory",
    intro: "We help salaried employees, business professionals, HUFs, and high-net-worth individuals file accurate income tax returns and optimize their tax liability.",
    sections: [
      { heading: "Services Offered", bullets: ["ITR filing for individuals (ITR-1 to ITR-4)", "HUF tax return filing", "Capital gains computation (shares, property, mutual funds)", "Advance tax computation and payment", "Old vs new regime analysis", "NRI income tax return filing"] },
      { heading: "Key Deductions to Maximize", bullets: ["Section 80C: Up to ₹1.5 lakh (PPF, LIC, ELSS, home loan principal)", "Section 80D: Medical insurance premium", "Section 24(b): Home loan interest up to ₹2 lakh", "Section 80CCD(1B): NPS — additional ₹50,000 deduction", "Section 80G: Donations to approved charities"] },
    ],
  },

  // ─── GST ──────────────────────────────────────────────────────────────
  {
    slug: "gst-advisory-compliance", parentSlug: "goods-and-service-tax",
    title: "GST Advisory and Compliance Service",
    intro: "GST compliance is critical to avoid blocked Input Tax Credit, penalties, and legal notices. We provide end-to-end GST advisory and ongoing compliance management.",
    sections: [
      { heading: "Advisory Services", bullets: ["GST impact analysis on business transactions", "HSN / SAC code classification", "ITC optimization and reconciliation", "Place of supply determination", "Contract review from GST perspective", "Reverse charge mechanism analysis"] },
      { heading: "Compliance Services", bullets: ["Monthly / quarterly GSTR-1 and GSTR-3B filing", "GST payment and interest computation", "Annual return GSTR-9 and reconciliation (GSTR-9C)", "E-way bill compliance", "Reply to GST notices and summons"] },
    ],
  },
  {
    slug: "gst-litigation", parentSlug: "goods-and-service-tax",
    title: "GST Litigation Services",
    intro: "GST disputes require prompt and expert handling. We represent clients at all stages from show cause notice through GST Tribunal and High Court.",
    sections: [
      { heading: "Disputes We Handle", bullets: ["Reply to Show Cause Notices (SCN)", "Personal hearings before GST officers", "First appeals (Section 107) before Appellate Authority", "Second appeals (Section 112) before GST Appellate Tribunal", "Writ petitions before High Courts", "Advance Ruling (AAR / AAAR) applications"] },
      { heading: "Common GST Dispute Areas", bullets: ["Denial of Input Tax Credit", "Classification disputes — wrong HSN/SAC code", "GSTR-1 vs GSTR-3B vs books mismatch", "Demands on exempt or nil-rated supplies", "Anti-profiteering investigations"] },
    ],
  },
  {
    slug: "gst-registration", parentSlug: "goods-and-service-tax",
    title: "GST Registration",
    intro: "GST registration is mandatory for businesses with turnover above threshold (₹40 lakh for goods, ₹20 lakh for services) and for certain specific categories regardless of turnover.",
    sections: [
      { heading: "Mandatory Registration Categories", bullets: ["Inter-state suppliers of goods or services", "E-commerce sellers and operators", "Persons liable under reverse charge mechanism", "Non-resident taxable persons", "Input Service Distributors (ISD)"] },
      { heading: "Documents Required", bullets: ["PAN of business / proprietor / partners / directors", "Aadhaar of authorized signatory", "Business address proof (electricity bill / rent agreement)", "Bank statement / cancelled cheque", "Certificate of incorporation (for companies)", "Partnership Deed / LLP Agreement"] },
    ],
  },
  {
    slug: "gst-returns", parentSlug: "goods-and-service-tax",
    title: "GST Return Filing",
    intro: "Timely and accurate GST return filing is essential to claim Input Tax Credit and avoid penalties. We handle all types of GST returns for businesses of all sizes.",
    sections: [
      { heading: "Key GST Returns and Due Dates", bullets: ["GSTR-1: Outward supplies — 11th of next month (monthly) / 13th (quarterly)", "GSTR-3B: Summary return + tax payment — 20th of next month", "GSTR-9: Annual return — 31st December of following FY", "GSTR-9C: Reconciliation statement — 31st December (if turnover > ₹5 crore)"] },
      { heading: "Consequences of Late Filing", bullets: ["Late fee: ₹50 per day (CGST + SGST)", "Interest @ 18% per annum on late tax payment", "Blocking of e-way bills for prolonged non-filers", "Suspension / cancellation of GSTIN"] },
    ],
  },
  {
    slug: "gst-annual-return", parentSlug: "goods-and-service-tax",
    title: "GST Annual Return (GSTR-9)",
    intro: "GSTR-9 is the annual return consolidating all monthly/quarterly returns filed during the financial year. It is due by 31st December and is mandatory for all regular taxpayers (except composition dealers and casual taxable persons).",
    sections: [
      { heading: "What GSTR-9 Covers", bullets: ["Outward supplies — taxable, exempt, nil-rated, non-GST", "Inward supplies and ITC availed, reversed, ineligible", "Tax paid as declared in returns", "Demands and refunds during the year"] },
      { heading: "GSTR-9C (Reconciliation Statement)", content: "Taxpayers with aggregate turnover exceeding ₹5 crore must also file GSTR-9C, reconciling the GSTR-9 data with audited financial statements. It is now self-certified (auditor certification removed from FY 2021-22 onwards)." },
    ],
  },
  {
    slug: "gst-eway-bill", parentSlug: "goods-and-service-tax",
    title: "GST E-way Bill Compliance",
    intro: "An e-way bill must be generated before movement of goods worth more than ₹50,000. It applies to inter-state movement of goods and intra-state movement in states that have notified the requirement.",
    sections: [
      { heading: "When E-way Bill is Required", bullets: ["Movement of goods for supply (sales)", "Branch transfers and job work movement", "Movement by road, rail, air, or vessel", "Consignment value exceeds ₹50,000"] },
      { heading: "Validity of E-way Bill", bullets: ["Up to 200 km: 1 day", "Every additional 200 km (or part): 1 day", "Can be extended before expiry", "OD Cargo: 1 day per 20 km"] },
      { heading: "Penalty for Non-Compliance", content: "Goods without a valid e-way bill are liable for seizure and a penalty equal to the tax due or ₹10,000, whichever is higher." },
    ],
  },
  {
    slug: "lut-in-gst", parentSlug: "goods-and-service-tax",
    title: "Letter of Undertaking (LUT) in GST",
    intro: "Exporters can make zero-rated supplies without paying IGST upfront by furnishing a Letter of Undertaking (LUT) in Form RFD-11 on the GST portal. This avoids blocking working capital and allows refund of unutilized ITC.",
    sections: [
      { heading: "Who Can File LUT?", bullets: ["Any registered taxpayer exporting goods or services", "Suppliers to SEZ units or developers", "Merchant and manufacturer exporters", "Note: Persons prosecuted for tax evasion > ₹2.5 crore cannot file LUT"] },
      { heading: "Process", bullets: ["Log in to GST portal > Services > User Services > Furnish LUT", "Select FY and fill in LUT details and export history", "Submit with DSC or EVC", "LUT valid for entire financial year once approved"] },
    ],
  },

  // ─── ROC COMPLIANCES ──────────────────────────────────────────────────
  {
    slug: "annual-compliance-pvt-ltd", parentSlug: "roc-compliances",
    title: "Annual Compliance for Private Limited Company",
    intro: "Every Private Limited Company must fulfil mandatory annual compliance requirements under the Companies Act, 2013. Non-compliance attracts heavy penalties and can lead to director disqualification.",
    sections: [
      { heading: "Mandatory Annual MCA Filings", bullets: ["AOC-4: Financial Statements — within 30 days of AGM", "MGT-7 / MGT-7A: Annual Return — within 60 days of AGM", "ADT-1: Auditor Appointment — within 15 days of AGM", "DIR-3 KYC: Director KYC — by 30th September annually", "DPT-3: Return of Deposits — by 30th June (if applicable)", "MSME-1: Outstanding MSME payments — half-yearly"] },
      { heading: "Other Key Requirements", bullets: ["Hold AGM within 6 months of financial year end", "4 Board Meetings per year (not more than 120 days gap)", "Statutory Audit by a Chartered Accountant", "Income Tax Return and GST Return filing"] },
    ],
  },
  {
    slug: "annual-compliance-llp", parentSlug: "roc-compliances",
    title: "Annual Compliance of LLP",
    intro: "Every LLP must file Form 11 (Annual Return) and Form 8 (Statement of Accounts and Solvency) with the MCA annually. Non-filing attracts a late fee of ₹100 per day with no cap.",
    sections: [
      { heading: "Mandatory Filings", bullets: ["Form 11 (Annual Return): due by 30th May", "Form 8 (Statement of Accounts): due by 30th October", "Income Tax Return: by 31st October (if audit applicable)", "DIR-3 KYC for Designated Partners: by 30th September"] },
      { heading: "When is Audit Mandatory?", bullets: ["Turnover exceeds ₹40 lakh in a financial year", "Contribution by partners exceeds ₹25 lakh"] },
    ],
  },
  {
    slug: "nidhi-company-compliance", parentSlug: "roc-compliances",
    title: "Nidhi Company Compliance",
    intro: "Nidhi Companies have specific compliance requirements under the Nidhi Rules, 2014 in addition to regular Company Law filings.",
    sections: [
      { heading: "Nidhi-Specific Filings", bullets: ["Form NDH-1: Return of Statutory Compliances — within 90 days of FY end", "Form NDH-2: Application for extension if criteria not met in time", "Form NDH-3: Half-yearly return — within 30 days of half-year end", "Maintain minimum 200 members and NOF:deposits ratio of 1:20 at all times"] },
    ],
  },
  {
    slug: "section-8-compliance", parentSlug: "roc-compliances",
    title: "Section 8 Company Compliance",
    intro: "Section 8 Companies (non-profit companies) must comply with all Company Law requirements plus specific non-profit restrictions.",
    sections: [
      { heading: "Annual Compliance Requirements", bullets: ["AOC-4 (Financial Statements) and MGT-7 (Annual Return) with MCA", "Statutory Audit", "Income Tax Return — claiming exemption under Section 12A", "80G certificate renewal (now permanent after 2021)", "AGM within 6 months of financial year end"] },
      { heading: "Special Restrictions", bullets: ["No dividends to members", "Income must be applied only for stated charitable objectives", "No alteration of MoA and AoA without Central Government approval", "Merger only with another Section 8 Company"] },
    ],
  },
  {
    slug: "nbfc-compliance", parentSlug: "roc-compliances",
    title: "NBFC Compliance",
    intro: "NBFCs are subject to both Companies Act compliance and RBI regulatory requirements. Our team manages the full compliance calendar.",
    sections: [
      { heading: "RBI Compliance", bullets: ["Annual Return to RBI (NBS-1, NBS-2, NBS-7 etc.)", "Capital Adequacy Ratio maintenance", "Asset classification and provisioning norms", "Fair Practices Code and KYC / AML compliance"] },
      { heading: "MCA Compliance", bullets: ["Statutory Audit and filing of AOC-4 / MGT-7", "Board Meetings — minimum 4 per year", "Director KYC (DIR-3 KYC) annually", "Director / Shareholder disclosures"] },
    ],
  },
  {
    slug: "winding-pvt-ltd", parentSlug: "roc-compliances",
    title: "Winding Up of Private Limited Company",
    intro: "A Private Limited Company can be wound up voluntarily through Fast Track Exit (Strike Off under Section 248) or through the NCLT. We guide companies through the most appropriate and efficient route.",
    sections: [
      { heading: "Strike Off Eligibility (Fast Track Exit)", bullets: ["Company has never commenced business, OR", "Company has not carried on any business for 2 or more financial years", "All pending MCA and Income Tax filings are up to date", "No outstanding liabilities, legal proceedings, or bank accounts"] },
    ],
  },
  {
    slug: "closure-of-llp", parentSlug: "roc-compliances",
    title: "Closure of LLP",
    intro: "A dormant or defunct LLP can be struck off the register by filing Form 24 under Rule 37 of the LLP Rules, 2009.",
    sections: [
      { heading: "Eligibility for Strike Off", bullets: ["LLP never commenced business, OR ceased business for 1+ year", "No outstanding liabilities", "All annual filings (Form 11, Form 8, ITR) up to date", "No pending legal proceedings"] },
      { heading: "Process", bullets: ["Prepare NIL Statement of Assets & Liabilities", "File Form 24 with indemnity bond and affidavit by all Designated Partners", "RoC publishes notice in Official Gazette after approval"] },
    ],
  },
  {
    slug: "revival-struck-off", parentSlug: "roc-compliances",
    title: "Revival of Struck Off Companies",
    intro: "Companies struck off the register can be restored through application to the NCLT under Section 252 of the Companies Act, 2013, provided the applicant can show sufficient cause.",
    sections: [
      { heading: "Who Can Apply?", bullets: ["Any member or creditor of the company", "Any workman or employee", "Directors of the company", "Registrar of Companies"] },
      { heading: "Grounds for Revival", bullets: ["Aggrieved by the striking off", "Company had subsisting assets or pending liabilities at the time", "Legal proceedings were pending in the company's name"] },
    ],
  },

  // ─── AUDIT & ASSURANCE ────────────────────────────────────────────────
  {
    slug: "tax-audit", parentSlug: "audit-and-assurance",
    title: "Tax Audit (Section 44AB)",
    intro: "A Tax Audit is mandatory for businesses with turnover exceeding ₹1 crore (₹10 crore if ≥95% transactions are digital) and for professionals with gross receipts exceeding ₹50 lakh. The CA issues a report in Form 3CA/3CB with Form 3CD.",
    sections: [
      { heading: "Applicability", bullets: ["Business with gross turnover > ₹1 crore (threshold ₹10 crore for primarily digital transactions)", "Professional with gross receipts > ₹50 lakh", "Persons under 44AD/44ADA/44AE declaring lower income than presumptive basis"] },
      { heading: "Form 3CD — Key Clauses", content: "Form 3CD has 44 clauses covering: particulars of business, method of accounting, stock valuation, depreciation, loans exceeding ₹20,000 in cash, TDS compliance, deductions claimed, and income under various heads." },
    ],
  },
  {
    slug: "due-diligence", parentSlug: "audit-and-assurance",
    title: "Financial Due Diligence",
    intro: "Financial Due Diligence verifies the financial health, earnings quality, and risk profile of a business before M&A, investment, or financing transactions.",
    sections: [
      { heading: "Areas Covered", bullets: ["Quality of Earnings (QoE) analysis", "Working capital analysis and normalization", "Net debt and debt-like items", "Contingent liabilities and off-balance-sheet items", "Related party transaction review", "Tax compliance and tax risk assessment"] },
    ],
  },
  {
    slug: "management-audits", parentSlug: "audit-and-assurance",
    title: "Management Audit",
    intro: "A Management Audit evaluates the efficiency and effectiveness of management practices and internal controls. It identifies operational inefficiencies and control weaknesses before they cause financial loss.",
    sections: [
      { heading: "Scope", bullets: ["Review of organizational structure and reporting lines", "Internal control system evaluation", "Planning and budgeting process review", "Management information systems (MIS) assessment", "HR policies and performance management review"] },
    ],
  },
  {
    slug: "certification-services", parentSlug: "audit-and-assurance",
    title: "Certification Services",
    intro: "We issue a wide range of CA certificates and reports required by banks, regulatory authorities, government bodies, and for visa and tender applications.",
    sections: [
      { heading: "Certificates We Issue", bullets: ["Net Worth Certificate (bank loans, visa, tenders)", "Turnover Certificate (MSME, finance)", "Form 15CA / 15CB (non-resident remittances)", "Utilization Certificate for government grants", "Project Report certification for bank loans", "Stock Audit Certificate", "Export benefit certificates (RoSCTL, RoDTEP)"] },
    ],
  },
  {
    slug: "agreed-upon-procedures", parentSlug: "audit-and-assurance",
    title: "Agreed Upon Procedures (AUP)",
    intro: "AUP engagements involve performing specific procedures agreed with the client and reporting factual findings without expressing an overall opinion. Governed by SRS 4400 issued by ICAI.",
    sections: [
      { heading: "Common AUP Engagements", bullets: ["Verification of debtors/creditors for bank purposes", "Stock count verification on a specific date", "Compliance check for specific contract or loan covenant terms", "Subsidy / grant utilization verification", "Specific transaction verification for litigation support"] },
    ],
  },
];
