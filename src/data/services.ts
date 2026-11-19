// ============================================================
// SERVICES DATA — Add, remove or modify services here
// ============================================================

export interface SubService {
  id: string;   // used as anchor #id in URL
  title: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
  subServices?: SubService[]; // renders as anchor sections in detail page
}

export const services: Service[] = [
  {
    id: "startup-registration",
    slug: "startup-registration",
    title: "Startup Registration",
    shortDescription:
      "Complete startup incorporation and registration services including company formation, LLP registration, and MSME registration.",
    description:
      "We provide end-to-end startup registration services to help entrepreneurs turn their ideas into legally recognized businesses. Our team assists with company incorporation under the Companies Act, LLP registration, partnership firm registration, sole proprietorship setup, and MSME/Udyam registration. We also guide startups through DPIIT recognition for tax benefits and funding eligibility.",
    icon: "Rocket",
    features: [
      "Private Limited Company Registration",
      "LLP Registration",
      "One Person Company (OPC) Registration",
      "Partnership Firm Registration",
      "MSME / Udyam Registration",
      "DPIIT Startup Recognition",
      "Trade License & Shop Act Registration",
    ],
    subServices: [
      { id: "proprietorship", title: "Proprietorship" },
      { id: "partnership", title: "Partnership" },
      { id: "one-person-company", title: "One Person Company" },
      { id: "limited-liability-partnership", title: "Limited Liability Partnership" },
      { id: "private-limited-company", title: "Private Limited Company" },
      { id: "public-limited-company", title: "Public Limited Company" },
      { id: "nidhi-company", title: "Nidhi Company" },
      { id: "producer-company", title: "Producer Company" },
      { id: "section-8-company", title: "Section 8 Company" },
      { id: "trust-registration", title: "Trust Registration" },
      { id: "society-registration", title: "Society Registration" },
    ],
  },
  {
    id: "direct-taxation",
    slug: "direct-taxation",
    title: "Direct Taxation",
    shortDescription:
      "Expert income tax planning, return filing, assessment handling, and tax advisory services for individuals and businesses.",
    description:
      "Our direct taxation services cover the entire spectrum of income tax compliance and advisory. From individual ITR filing to corporate tax planning, we ensure our clients are fully compliant while optimizing their tax liability. We handle income tax assessments, appeals, and represent clients before tax authorities.",
    icon: "Calculator",
    features: [
      "Income Tax Return Filing (ITR)",
      "Tax Planning & Advisory",
      "Advance Tax Computation",
      "TDS/TCS Return Filing",
      "Income Tax Assessment Handling",
      "Appeals & Representations",
      "Capital Gains Tax Advisory",
      "NRI Taxation Services",
    ],
    subServices: [
      { id: "corporate-tax-advisory", title: "Corporate Tax Advisory & Compliance" },
      { id: "international-tax-advisory", title: "International Tax Advisory & Compliance" },
      { id: "transfer-pricing", title: "Transfer Pricing Study & Documentation" },
      { id: "litigation-representation", title: "Litigation & Representation Assistance" },
      { id: "personal-tax-advisory", title: "Personal Tax Advisory" },
    ],
  },
  {
    id: "goods-and-service-tax",
    slug: "goods-and-service-tax",
    title: "Goods & Service Tax (GST)",
    shortDescription:
      "Comprehensive GST registration, return filing, refund claims, and compliance management services.",
    description:
      "We provide complete GST solutions including registration, monthly/quarterly return filing, annual return filing, GST audit, refund claims, and advisory on GST implications for your business transactions. Our team stays updated with the latest GST amendments to ensure accurate compliance.",
    icon: "Receipt",
    features: [
      "GST Registration (New / Amendment / Cancellation)",
      "Monthly & Quarterly Return Filing (GSTR-1, GSTR-3B)",
      "Annual Return Filing (GSTR-9 / GSTR-9C)",
      "GST Refund Claims",
      "GST Audit",
      "E-way Bill Compliance",
      "GST Advisory & Consultation",
      "GST Litigation Support",
    ],
    subServices: [
      { id: "gst-advisory-compliance", title: "GST Advisory and Compliance Service" },
      { id: "gst-litigation", title: "GST Litigation Services" },
      { id: "gst-registration", title: "GST Registration" },
      { id: "gst-returns", title: "GST Returns" },
      { id: "gst-annual-return", title: "GST Annual Return" },
      { id: "gst-eway-bill", title: "GST E-way Bill" },
      { id: "lut-in-gst", title: "LUT in GST" },
    ],
  },
  {
    id: "roc-compliances",
    slug: "roc-compliances",
    title: "ROC Compliances",
    shortDescription:
      "Annual ROC filings, company law compliances, board resolutions, and MCA form filings for companies and LLPs.",
    description:
      "We assist companies and LLPs in maintaining their statutory compliances with the Registrar of Companies. Our services include annual filing of financial statements and annual returns, event-based compliances like change of directors, registered office, share capital alterations, and more.",
    icon: "Building2",
    features: [
      "Annual Return Filing (AOC-4, MGT-7)",
      "LLP Annual Filing (Form 8, Form 11)",
      "Director Appointment / Resignation (DIR forms)",
      "Registered Office Change",
      "Share Capital Alteration",
      "Charge Registration & Satisfaction",
      "Strike Off / Winding Up",
      "Company Name Change",
    ],
    subServices: [
      { id: "annual-compliance-pvt-ltd", title: "Annual Compliance for Private Limited Company" },
      { id: "annual-compliance-llp", title: "Annual Compliance of LLP" },
      { id: "nidhi-company-compliance", title: "Nidhi Company Compliance" },
      { id: "section-8-compliance", title: "Section 8 Company Compliance" },
      { id: "nbfc-compliance", title: "NBFC Compliance" },
      { id: "winding-pvt-ltd", title: "Winding Private Limited Company" },
      { id: "closure-of-llp", title: "Closure of LLP" },
      { id: "revival-struck-off", title: "Revival of Struck Off Companies" },
    ],
  },
  {
    id: "audit-and-assurance",
    slug: "audit-and-assurance",
    title: "Audit & Assurance",
    shortDescription:
      "Statutory audit, tax audit, internal audit, and special purpose audits conducted with the highest professional standards.",
    description:
      "Our audit and assurance services provide stakeholders with confidence in the accuracy and reliability of financial information. We conduct statutory audits, tax audits, internal audits, GST audits, and special purpose audits following the Standards on Auditing issued by ICAI.",
    icon: "ShieldCheck",
    features: [
      "Statutory Audit",
      "Tax Audit (Section 44AB)",
      "Internal Audit",
      "GST Audit",
      "Bank Audit",
      "Stock Audit",
      "Forensic Audit",
      "Due Diligence",
    ],
    subServices: [
      { id: "tax-audit", title: "Tax Audit" },
      { id: "due-diligence", title: "Due Diligence" },
      { id: "management-audits", title: "Management Audits" },
      { id: "certification-services", title: "Certification Services" },
      { id: "agreed-upon-procedures", title: "Agreed Upon Procedures" },
    ],
  },
  {
    id: "dgft",
    slug: "dgft",
    title: "DGFT",
    shortDescription:
      "Import-export code registration, DGFT licensing, and foreign trade policy advisory services.",
    description:
      "We assist businesses in obtaining Importer Exporter Code (IEC), various DGFT licenses and authorizations, and navigating the complexities of India's Foreign Trade Policy. Our team helps exporters claim benefits under schemes like RoDTEP, MEIS/SEIS, and Advance Authorization.",
    icon: "Globe",
    features: [
      "IEC (Import Export Code) Registration",
      "DGFT License Applications",
      "Advance Authorization",
      "EPCG License",
      "RoDTEP / RoSCTL Claims",
      "Star Export House Certification",
      "Foreign Trade Policy Advisory",
    ],
  },
  {
    id: "customs",
    slug: "customs",
    title: "Customs",
    shortDescription:
      "Customs duty advisory, classification disputes, valuation matters, and customs compliance services.",
    description:
      "Our customs services help importers and exporters navigate the complex landscape of customs duties, tariff classifications, and compliance requirements. We assist with customs duty optimization, valuation disputes, classification matters, and represent clients before customs authorities.",
    icon: "Container",
    features: [
      "Customs Duty Advisory",
      "Tariff Classification",
      "Customs Valuation",
      "Customs Refund Claims",
      "Anti-Dumping Duty Matters",
      "Customs Audit Support",
      "Appeals & Representations",
    ],
  },
  {
    id: "rbi",
    slug: "rbi",
    title: "RBI",
    shortDescription:
      "RBI regulatory compliance, NBFC registration, foreign exchange management, and reporting under RBI guidelines.",
    description:
      "We provide advisory and compliance services related to Reserve Bank of India regulations. This includes NBFC registration and compliance, ECB filings, ODI/FDI reporting, and ensuring that businesses adhere to RBI's foreign exchange regulations and guidelines.",
    icon: "Landmark",
    features: [
      "NBFC Registration & Compliance",
      "ECB (External Commercial Borrowings) Filing",
      "FDI Reporting (FC-GPR, FC-TRS)",
      "ODI (Overseas Direct Investment) Compliance",
      "Annual Return on Foreign Liabilities & Assets (FLA)",
      "RBI Compounding Applications",
    ],
    subServices: [
      { id: "nbfc-registration", title: "NBFC Registration" },
      { id: "payment-gateway-license", title: "Payment Gateway License" },
      { id: "nbfc-takeover", title: "NBFC Takeover" },
      { id: "nbfc-collaboration", title: "NBFC Collaboration" },
      { id: "nbfc-account-aggregator-license", title: "NBFC Account Aggregator License" },
      { id: "ffmc-license", title: "FFMC License" },
      { id: "microfinance-company-registration", title: "Microfinance Company Registration" },
      { id: "housing-finance-company-registration", title: "Housing Finance Company Registration" },
      { id: "prepaid-wallet-license", title: "Prepaid Wallet License" },
      { id: "peer-to-peer-lending-license", title: "Peer to Peer Lending License" },
      { id: "payment-bank-license", title: "Payment Bank License" },
    ],
  },
  {
    id: "sebi",
    slug: "sebi",
    title: "SEBI",
    shortDescription:
      "SEBI registration, compliance advisory, and regulatory filings for listed companies and market intermediaries.",
    description:
      "Our SEBI practice assists listed companies, market intermediaries, and investment vehicles with regulatory compliance. We help with SEBI registrations, LODR compliance, insider trading regulations, takeover code advisory, and representation before SEBI.",
    icon: "TrendingUp",
    features: [
      "SEBI Registration (Various Categories)",
      "LODR Compliance for Listed Companies",
      "Insider Trading Regulations Compliance",
      "Takeover Code Advisory",
      "AIF / PMS Registration & Compliance",
      "SEBI Inspection & Audit Support",
    ],
    subServices: [
      { id: "alternate-investment-fund-registration", title: "Alternate Investment Fund Registration (AIFs)" },
      { id: "mergers-and-acquisitions", title: "Mergers and Acquisitions" },
    ],
  },
  {
    id: "fema",
    slug: "fema",
    title: "FEMA",
    shortDescription:
      "Foreign Exchange Management Act compliance, cross-border transaction advisory, and RBI reporting services.",
    description:
      "We specialize in FEMA compliance and advisory services covering inbound and outbound investments, cross-border transactions, foreign exchange remittances, and regulatory reporting. Our team ensures that businesses and individuals comply with FEMA regulations while optimizing their international operations.",
    icon: "ArrowLeftRight",
    features: [
      "FDI Compliance & Reporting",
      "ODI Compliance & Reporting",
      "ECB Compliance",
      "FEMA Advisory for Cross-border Transactions",
      "Liaison / Branch / Project Office Setup",
      "Compounding of FEMA Contraventions",
      "Annual Performance Report (APR) Filing",
    ],
    subServices: [
      { id: "project-office-registration", title: "Project Office Registration" },
      { id: "branch-office-registration", title: "Branch Office Registration" },
      { id: "fema-compliance", title: "FEMA Compliance" },
      { id: "liaison-office-registration", title: "Liaison Office Registration" },
    ],
  },
  {
    id: "irda",
    slug: "irda",
    title: "IRDA",
    shortDescription:
      "Insurance regulatory compliance, IRDA registration, and advisory services for insurance sector entities.",
    description:
      "We provide advisory and compliance services for entities regulated by the Insurance Regulatory and Development Authority of India (IRDAI). This includes registration assistance, regulatory compliance, actuarial reporting support, and representation before IRDAI.",
    icon: "Shield",
    features: [
      "IRDA Registration & Licensing",
      "Insurance Company Compliance",
      "Broker / Agent Registration",
      "Regulatory Reporting",
      "IRDA Inspection Support",
      "Insurance Advisory Services",
    ],
    subServices: [
      { id: "insurance-broker-license", title: "Insurance Broker License" },
      { id: "insurance-company-license", title: "Insurance Company License" },
      { id: "insurance-web-aggregator-license", title: "Insurance Web Aggregator License" },
    ],
  },
];
