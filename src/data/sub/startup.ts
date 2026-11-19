import type { SubServiceContent } from "./types";

export const startupSubServices: SubServiceContent[] = [
  {
    slug: "proprietorship", parentSlug: "startup-registration",
    title: "Proprietorship Registration",
    intro: "A Sole Proprietorship is the simplest business structure in India, owned and managed by a single individual. The owner and the business are the same legal entity. It is ideal for freelancers, shopkeepers, and small service providers.",
    sections: [
      { heading: "What is a Sole Proprietorship?", content: "A proprietorship is an unincorporated business owned by one person who is personally liable for all business debts. The proprietor makes all decisions and retains all profits. There is no formal registration requirement, though sector-specific licences are needed." },
      { heading: "Key Registrations Required", bullets: ["GST Registration (if turnover exceeds threshold)", "MSME / Udyam Registration", "Shop & Establishment Registration (state-specific)", "Trade License from local municipality", "FSSAI License (for food businesses)", "Current bank account in business name"] },
      { heading: "Documents Required", bullets: ["PAN Card of proprietor", "Aadhaar Card / Voter ID", "Business address proof (electricity bill / rent agreement)", "Cancelled cheque / bank statement", "Passport-size photograph"] },
      { heading: "Benefits & Limitations", bullets: ["✓ Easiest and cheapest to set up", "✓ Complete control, all profits retained", "✓ Minimal compliance requirements", "✗ Unlimited personal liability", "✗ Difficult to raise external funding", "✗ No perpetual succession"] },
    ],
  },
  {
    slug: "partnership", parentSlug: "startup-registration",
    title: "Partnership Firm Registration",
    intro: "A Partnership Firm is formed by two or more persons who agree to share profits and losses in a defined ratio. Governed by the Indian Partnership Act, 1932, it is one of the oldest forms of business in India.",
    sections: [
      { heading: "What is a Partnership?", content: "Two or more persons carry on business jointly under a written Partnership Deed that defines capital contributions, profit-sharing ratios, and management rights. Registration with the Registrar of Firms is optional but strongly recommended." },
      { heading: "Key Contents of Partnership Deed", bullets: ["Name and address of firm and all partners", "Nature of business", "Capital contribution of each partner", "Profit and loss sharing ratio", "Salary / commission payable to working partners", "Duration and dissolution terms"] },
      { heading: "Documents for Registration", bullets: ["Signed Partnership Deed on stamp paper", "PAN and Aadhaar of all partners", "Proof of principal place of business", "Application in Form I to Registrar of Firms", "Affidavit confirming details"] },
    ],
  },
  {
    slug: "one-person-company", parentSlug: "startup-registration",
    title: "One Person Company (OPC) Registration",
    intro: "An OPC is a private company with a single member introduced by the Companies Act, 2013. It gives solo entrepreneurs the benefit of limited liability while operating as a one-person business.",
    sections: [
      { heading: "Who Can Incorporate an OPC?", bullets: ["Only a natural person who is an Indian citizen and resident", "Cannot already be a member of another OPC", "A nominee must be appointed at incorporation"] },
      { heading: "Documents Required", bullets: ["PAN and Aadhaar of sole member", "Latest passport-size photograph", "Registered office proof (NOC + electricity bill)", "Consent of nominee in Form INC-3", "MoA and AoA"] },
      { heading: "Benefits", bullets: ["Limited liability — personal assets protected", "Separate legal entity", "Easier bank finance and contracts", "Full management control retained", "Lower compliance than Pvt Ltd"] },
    ],
  },
  {
    slug: "limited-liability-partnership", parentSlug: "startup-registration",
    title: "Limited Liability Partnership (LLP) Registration",
    intro: "An LLP combines partnership flexibility with limited liability protection. Introduced by the LLP Act, 2008, it is ideal for professionals, service firms, and businesses that want flexible management without unlimited personal liability.",
    sections: [
      { heading: "Minimum Requirements", bullets: ["Minimum 2 designated partners (one must be Indian resident)", "DPIN for all designated partners", "Registered office address in India", "No minimum capital requirement"] },
      { heading: "Documents Required", bullets: ["PAN and Aadhaar of all partners", "Proof of registered office", "Consent to act as Designated Partner (Form 9)", "LLP Agreement (filed within 30 days of incorporation)"] },
      { heading: "Annual Compliance", bullets: ["Form 11 – Annual Return by 30th May", "Form 8 – Statement of Accounts by 30th October", "Income Tax Return filing", "Audit mandatory if turnover > ₹40 lakh or contribution > ₹25 lakh"] },
    ],
  },
  {
    slug: "private-limited-company", parentSlug: "startup-registration",
    title: "Private Limited Company Registration",
    intro: "A Private Limited Company is the most preferred structure for startups and growing businesses. It offers limited liability, a separate legal identity, and the ability to raise institutional funding.",
    sections: [
      { heading: "Minimum Requirements", bullets: ["Minimum 2 directors (1 must be Indian resident)", "Minimum 2 shareholders", "DSC and DIN for all directors", "Unique company name ending in 'Private Limited'", "Registered office in India"] },
      { heading: "Documents Required", bullets: ["PAN and Aadhaar of directors and shareholders", "Registered office proof (NOC + electricity bill)", "MoA and AoA", "Declaration by first directors in Form INC-9"] },
      { heading: "Post-Incorporation Compliances", bullets: ["First Board Meeting within 30 days", "Open current bank account", "File Form 20A (Commencement of Business)", "Statutory Audit annually", "Annual filings: AOC-4 and MGT-7"] },
    ],
  },
  {
    slug: "public-limited-company", parentSlug: "startup-registration",
    title: "Public Limited Company Registration",
    intro: "A Public Limited Company can offer shares to the general public and can be listed on a stock exchange. It requires a minimum of 7 shareholders and 3 directors and has stricter regulatory requirements than a Pvt Ltd.",
    sections: [
      { heading: "Key Differences from Pvt Ltd", bullets: ["Minimum 7 members (vs 2 for Pvt Ltd)", "Minimum 3 directors", "Shares are freely transferable", "Can raise funds from the public via IPO", "Must hold AGM and comply with SEBI if listed"] },
    ],
  },
  {
    slug: "nidhi-company", parentSlug: "startup-registration",
    title: "Nidhi Company Registration",
    intro: "A Nidhi Company cultivates thrift and savings among its members by accepting deposits from and lending to members only. It is a Public Limited Company governed by Nidhi Rules, 2014.",
    sections: [
      { heading: "Minimum Requirements", bullets: ["Incorporated as Public Limited Company", "Minimum 200 members within one year", "Minimum Net Owned Funds (NOF) of ₹10 lakh", "NOF to deposits ratio must not exceed 1:20"] },
      { heading: "Key Compliance", bullets: ["Form NDH-1: Return of Statutory Compliances within 90 days of FY end", "Form NDH-3: Half-yearly return within 30 days of half-year end", "All regular Company Law annual filings"] },
    ],
  },
  {
    slug: "producer-company", parentSlug: "startup-registration",
    title: "Producer Company Registration",
    intro: "A Producer Company is formed by farmers and primary producers to collectively procure, process, market, and sell their produce. It is incorporated under the Companies Act, 2013.",
    sections: [
      { heading: "Who Can Form a Producer Company?", bullets: ["Minimum 10 individual producers OR 2 producer institutions", "Members must be primary producers (farmers, fishermen, craftsmen)", "Objective must relate to production, harvesting, procurement, processing, marketing"] },
      { heading: "Benefits", bullets: ["Collective bargaining for better prices", "Access to government schemes and subsidies", "Tax exemption under Section 10 of Income Tax Act", "Limited liability for all member-producers"] },
    ],
  },
  {
    slug: "section-8-company", parentSlug: "startup-registration",
    title: "Section 8 Company Registration",
    intro: "A Section 8 Company is a non-profit organization incorporated under the Companies Act, 2013 for promoting charity, education, arts, science, sports, religion, or environmental protection. Profits are reinvested towards objectives and cannot be distributed.",
    sections: [
      { heading: "Tax Benefits", bullets: ["Income tax exemption under Section 12A", "80G certificate for donors to claim deductions", "Stamp duty exemption on registration in most states", "Eligible for CSR funding"] },
      { heading: "Documents Required", bullets: ["PAN and Aadhaar of all directors", "Registered office proof", "MoA and AoA with non-profit objectives", "Central Government licence under Section 8"] },
    ],
  },
  {
    slug: "trust-registration", parentSlug: "startup-registration",
    title: "Trust Registration",
    intro: "A Trust transfers assets from the settlor to a trustee for the benefit of beneficiaries. Public trusts are registered with the Charity Commissioner; private trusts are governed by the Indian Trusts Act, 1882.",
    sections: [
      { heading: "Types of Trusts", bullets: ["Public Charitable Trust – for public benefit (education, health, religion)", "Private Trust – for specific beneficiaries (family trusts)", "Testamentary Trust – created by a Will"] },
      { heading: "Documents Required", bullets: ["Trust Deed on stamp paper", "PAN and Aadhaar of settlor and all trustees", "Registered office address proof", "Photographs of all trustees"] },
      { heading: "Tax Benefits for Public Trusts", bullets: ["Section 12A registration for income tax exemption", "80G certificate for donor deductions", "FCRA registration to receive foreign contributions", "Eligible for CSR funds from companies"] },
    ],
  },
  {
    slug: "society-registration", parentSlug: "startup-registration",
    title: "Society Registration",
    intro: "A Society is an association of persons formed for charitable, literary, scientific, or artistic purposes. Registered under the Societies Registration Act, 1860, it is ideal for NGOs, clubs, cultural associations, and professional bodies.",
    sections: [
      { heading: "Minimum Requirements", bullets: ["Minimum 7 persons to form a society", "Memorandum of Association and Rules & Regulations / Bye-laws required", "Application to Registrar of Societies in the relevant state"] },
      { heading: "Benefits", bullets: ["Separate legal entity status", "Can open bank accounts in the society's name", "Eligible for government grants", "Can apply for 12A and 80G exemptions", "Eligible for FCRA registration and CSR funds"] },
    ],
  },
];
