import type { SubServiceContent } from "./types";

export const regulatorySubServices: SubServiceContent[] = [
  // ─── RBI ──────────────────────────────────────────────────────────────
  {
    slug: "nbfc-registration", parentSlug: "rbi",
    title: "NBFC Registration",
    intro: "A Non-Banking Financial Company (NBFC) is a company registered under the Companies Act that carries on the business of loans, advances, acquisition of securities, leasing, or hire-purchase. NBFCs must obtain a Certificate of Registration (CoR) from the Reserve Bank of India.",
    sections: [
      { heading: "Types of NBFCs", bullets: ["Investment and Credit Company (ICC)", "NBFC-Microfinance Institution (NBFC-MFI)", "NBFC-Account Aggregator (NBFC-AA)", "Infrastructure Finance Company (IFC)", "Housing Finance Company (HFC)", "Core Investment Company (CIC)"] },
      { heading: "Minimum Net Owned Fund (NOF)", content: "Most NBFC categories require a minimum NOF of ₹10 crore. The NOF must be maintained at all times and evidenced through a banker's certificate." },
      { heading: "Documents for RBI Application", bullets: ["Certificate of Incorporation and MoA/AoA", "Audited financials for last 3 years", "Board resolution for NBFC application", "Business plan for next 5 years", "KYC and fit-and-proper declarations for all directors", "Banker's certificate confirming NOF"] },
    ],
  },
  {
    slug: "payment-gateway-license", parentSlug: "rbi",
    title: "Payment Gateway / Payment Aggregator License",
    intro: "Payment Aggregators (PAs) that facilitate online payments between merchants and customers must obtain RBI authorization. Pure Payment Gateways providing only technology infrastructure do not need a licence but must comply with RBI's security standards.",
    sections: [
      { heading: "Eligibility for Payment Aggregator Authorization", bullets: ["Must be incorporated as a company in India", "Minimum Net Worth: ₹15 crore at time of application", "Net Worth must reach ₹25 crore by end of third financial year", "PCI-DSS and PA-DSS compliance mandatory", "Board-approved merchant onboarding and risk management policy"] },
      { heading: "Documents Required", bullets: ["Company incorporation documents", "Audited financial statements", "Certificate of Net Worth from CA", "Business plan and merchant onboarding policy", "Escrow arrangement with a scheduled bank"] },
    ],
  },
  {
    slug: "nbfc-takeover", parentSlug: "rbi",
    title: "NBFC Takeover",
    intro: "Any acquisition of an NBFC resulting in a change of management or ownership requires prior written approval from the Reserve Bank of India. This applies to acquisitions of 26% or more shareholding or change of more than 30% of the board.",
    sections: [
      { heading: "When RBI Prior Approval is Required", bullets: ["Acquisition of 26% or more of the shares of an NBFC", "Change in more than 30% of directors in a year", "Transfer of shares to non-residents (also requires FEMA compliance)", "Change in principal business activity"] },
      { heading: "Documents for RBI Approval", bullets: ["Application letter with proposed acquisition details", "Due diligence report on the acquirer", "Source of funds for the acquisition", "Post-acquisition business plan", "Fit and proper declarations of incoming directors"] },
    ],
  },
  {
    slug: "nbfc-collaboration", parentSlug: "rbi",
    title: "NBFC Collaboration",
    intro: "NBFCs collaborate with banks and fintech companies through co-lending arrangements, business correspondent models, and technology partnerships. RBI has issued specific guidelines for co-lending models (CLM) and such collaborations require proper structuring and compliance.",
    sections: [
      { heading: "Types of NBFC Collaborations", bullets: ["Co-Lending Model (CLM) with scheduled commercial banks", "Business Correspondent (BC) arrangement", "Fintech partnerships for digital lending", "White-label product partnerships", "Securitization of loan portfolios"] },
      { heading: "RBI Co-Lending Guidelines", content: "Under RBI's Co-Lending Model, banks and NBFCs can jointly originate loans to priority sector beneficiaries. The bank must retain 80% of the loan on its books while the NBFC retains the remaining 20%. A board-approved co-lending agreement is mandatory." },
    ],
  },
  {
    slug: "nbfc-account-aggregator-license", parentSlug: "rbi",
    title: "NBFC Account Aggregator License",
    intro: "An NBFC-Account Aggregator (NBFC-AA) is a new class of NBFC that provides the service of retrieving and consolidating financial information of a customer held with various financial entities, with the customer's consent. It is governed by the RBI's Master Direction on NBFC-AA.",
    sections: [
      { heading: "Key Features of Account Aggregator", bullets: ["Acts only as a consent broker — does not store or sell data", "Uses a standardized framework approved by RBI and SEBI", "Minimum NOF of ₹2 crore required", "Must build a technology platform compliant with AA ecosystem standards", "All data transfer is encrypted and consent-driven"] },
    ],
  },
  {
    slug: "ffmc-license", parentSlug: "rbi",
    title: "FFMC License (Full-Fledged Money Changer)",
    intro: "Full-Fledged Money Changers (FFMCs) are entities authorized by RBI to undertake both purchase and sale of foreign exchange to residents and non-residents for private and business visits abroad, as well as encashment of traveller's cheques.",
    sections: [
      { heading: "Eligibility Requirements", bullets: ["Minimum Net Owned Funds: ₹25 lakh for single branch; ₹50 lakh for multiple branches", "Company registered under the Companies Act", "No criminal proceedings against promoters or directors", "Prior experience in financial services preferred"] },
      { heading: "Services Permitted for FFMCs", bullets: ["Purchase of foreign currency notes and traveller's cheques from residents and non-residents", "Sale of foreign currency and traveller's cheques for private/business visits abroad", "Encashment of foreign currency for inbound tourists"] },
    ],
  },
  {
    slug: "microfinance-company-registration", parentSlug: "rbi",
    title: "Microfinance Company Registration",
    intro: "NBFC-Microfinance Institutions (NBFC-MFI) provide small loans to economically disadvantaged individuals in rural and semi-urban areas. They are regulated by RBI and must meet specific qualifying asset and pricing norms.",
    sections: [
      { heading: "Qualifying Asset Criteria", bullets: ["At least 85% of net assets must be qualifying assets (loans to low-income borrowers)", "Household income limit: ₹3 lakh per annum (rural), ₹3 lakh (urban)", "Loan amount not to exceed ₹1.25 lakh per borrower", "Loan tenure: Minimum 24 months for loans above ₹30,000"] },
      { heading: "Net Owned Fund Requirement", content: "Minimum NOF of ₹5 crore (₹2 crore for North-East region) for NBFC-MFI registration with RBI." },
    ],
  },
  {
    slug: "housing-finance-company-registration", parentSlug: "rbi",
    title: "Housing Finance Company Registration",
    intro: "Housing Finance Companies (HFCs) are NBFCs that primarily provide loans for the purpose of purchase, construction, reconstruction, or repair of houses. HFCs were transferred from NHB (National Housing Bank) to RBI regulation in 2021.",
    sections: [
      { heading: "Minimum Requirements for HFC", bullets: ["Minimum Net Owned Funds: ₹20 crore", "At least 60% of net assets to be in housing finance", "Of that 60%, at least 50% must be to individual housing loans", "Registered as a company under the Companies Act"] },
    ],
  },
  {
    slug: "prepaid-wallet-license", parentSlug: "rbi",
    title: "Prepaid Payment Instrument (PPI) / Wallet License",
    intro: "Prepaid Payment Instruments (PPIs) like digital wallets, prepaid cards, and vouchers are regulated by RBI. Entities wishing to issue PPIs must obtain authorization from RBI under the Payment and Settlement Systems Act, 2007.",
    sections: [
      { heading: "Types of PPIs", bullets: ["Closed System PPIs — issued by a merchant for their own goods/services (e.g., brand gift cards)", "Semi-Closed System PPIs — can be used at a group of merchants but not for cash withdrawal (e.g., digital wallets like Paytm)", "Open System PPIs — issued by banks only, can be used anywhere including ATM withdrawals"] },
      { heading: "Eligibility for Semi-Closed PPI Licence", bullets: ["Minimum paid-up capital: ₹5 crore", "Positive net worth at all times", "Escrow account with a scheduled commercial bank mandatory", "KYC compliance for all PPI holders above ₹10,000 limit"] },
    ],
  },
  {
    slug: "peer-to-peer-lending-license", parentSlug: "rbi",
    title: "Peer to Peer (P2P) Lending License",
    intro: "NBFC-Peer to Peer (NBFC-P2P) platforms connect individual borrowers with individual lenders online. They are regulated by RBI's Master Directions for NBFC-P2P Lending Platform and require a Certificate of Registration from RBI.",
    sections: [
      { heading: "Key Regulatory Requirements", bullets: ["Minimum NOF of ₹2 crore", "Cap on aggregate exposure per lender: ₹50 lakh across all P2P platforms", "Cap per borrower across all P2P platforms: ₹50 lakh", "Maximum tenure of loan: 36 months", "Funds must flow through escrow accounts held by a bank trustee"] },
    ],
  },
  {
    slug: "payment-bank-license", parentSlug: "rbi",
    title: "Payment Bank License",
    intro: "Payment Banks are a new category of banks created by RBI to advance financial inclusion. They can accept demand deposits (up to ₹2 lakh per customer), issue debit cards, and offer remittance services, but cannot issue credit cards or give loans.",
    sections: [
      { heading: "Services Permitted", bullets: ["Acceptance of demand deposits up to ₹2 lakh per individual", "Issuance of ATM / debit cards", "Internet banking and mobile banking", "Bill payment and remittance services", "Forex services for individuals", "Distribution of insurance, mutual funds, pension products as BC"] },
      { heading: "Minimum Capital Requirement", content: "Minimum paid-up equity capital of ₹100 crore. Foreign shareholding subject to FDI policy for private sector banks." },
    ],
  },

  // ─── SEBI ────────────────────────────────────────────────────────────
  {
    slug: "alternate-investment-fund-registration", parentSlug: "sebi",
    title: "Alternate Investment Fund (AIF) Registration",
    intro: "Alternative Investment Funds (AIFs) are privately pooled investment vehicles that collect funds from sophisticated investors for investing in accordance with a defined investment policy. All AIFs must register with SEBI under the AIF Regulations, 2012.",
    sections: [
      { heading: "Categories of AIFs", bullets: ["Category I AIF: Infrastructure funds, SME funds, social venture funds, venture capital funds (government-encouraged)", "Category II AIF: PE funds, debt funds, real estate funds (no leverage allowed except for day-to-day operations)", "Category III AIF: Hedge funds — employ diverse and complex trading strategies, can use leverage"] },
      { heading: "Key Requirements for SEBI Registration", bullets: ["Minimum corpus: ₹20 crore (₹10 crore for angel funds)", "Minimum investment per investor: ₹1 crore (₹25 lakh for angel investors)", "Manager / Sponsor must have relevant experience in fund management", "Fee: ₹1 lakh application fee for registration"] },
    ],
  },
  {
    slug: "mergers-and-acquisitions", parentSlug: "sebi",
    title: "Mergers and Acquisitions (M&A) Advisory",
    intro: "Mergers and Acquisitions involve complex regulatory, tax, and financial considerations. Our team provides comprehensive M&A advisory covering SEBI Takeover Code, Competition Act filings, NCLT approval for mergers, and cross-border deal structuring.",
    sections: [
      { heading: "SEBI Takeover Code (SAST Regulations)", bullets: ["Acquisition of 25% or more shares triggers a mandatory open offer to public shareholders", "Open offer must be made for at least 26% of total shares", "Acquirer must appoint a SEBI-registered merchant banker as manager to open offer", "RBI approval needed for cross-border acquisitions"] },
      { heading: "Our M&A Services", bullets: ["Deal structuring and valuation", "Due diligence (financial, tax, legal)", "SEBI filings for open offer", "NCLT application for scheme of merger/demerger", "Competition Commission of India (CCI) approval", "FEMA compliance for cross-border transactions"] },
    ],
  },

  // ─── IRDA ────────────────────────────────────────────────────────────
  {
    slug: "insurance-broker-license", parentSlug: "irda",
    title: "Insurance Broker License",
    intro: "Insurance Brokers are intermediaries who arrange insurance contracts between insurance companies and clients on behalf of clients. They are licensed by IRDAI under the IRDAI (Insurance Brokers) Regulations, 2018.",
    sections: [
      { heading: "Types of Insurance Broker Licences", bullets: ["Direct Broker (Life) — arranges life insurance policies", "Direct Broker (General) — arranges general insurance policies", "Direct Broker (Life and General) — composite broker", "Reinsurance Broker — arranges reinsurance on behalf of insurers", "Composite Broker — both direct and reinsurance"] },
      { heading: "Minimum Capital Requirement", bullets: ["Direct Broker: ₹75 lakh paid-up capital", "Reinsurance Broker: ₹4 crore paid-up capital", "Composite Broker: ₹5 crore paid-up capital", "Net Worth must be maintained above minimum capital at all times"] },
    ],
  },
  {
    slug: "insurance-company-license", parentSlug: "irda",
    title: "Insurance Company License",
    intro: "Setting up an insurance company in India requires a Certificate of Registration from IRDAI. The process involves meeting substantial capital requirements, fulfilling fit-and-proper criteria for promoters, and obtaining IRDAI's approval at multiple stages.",
    sections: [
      { heading: "Minimum Capital Requirement", bullets: ["Life Insurance: ₹100 crore", "General Insurance: ₹100 crore", "Health Insurance: ₹100 crore", "Reinsurance: ₹200 crore"] },
      { heading: "Key Steps in Licensing Process", bullets: ["Stage 1: In-principle approval from IRDAI", "Stage 2: Incorporation of company and deposit of capital", "Stage 3: Application for Certificate of Registration with full documentation", "Stage 4: IRDAI inspection and final approval"] },
    ],
  },
  {
    slug: "insurance-web-aggregator-license", parentSlug: "irda",
    title: "Insurance Web Aggregator License",
    intro: "Insurance Web Aggregators are entities that operate websites to provide comparative information on insurance products of different insurers and facilitate purchase of insurance through the portal. They are regulated by IRDAI.",
    sections: [
      { heading: "Requirements for Web Aggregator License", bullets: ["Minimum paid-up capital: ₹25 lakh", "Must be a company registered in India", "Principal Officer must pass a 50-hour training and examination", "Website must display comparative information without misrepresentation", "Cannot advise or recommend specific insurance products"] },
    ],
  },

  // ─── FEMA ────────────────────────────────────────────────────────────
  {
    slug: "project-office-registration", parentSlug: "fema",
    title: "Project Office Registration",
    intro: "Foreign companies awarded contracts in India can set up a Project Office to execute the contract. RBI's general permission allows foreign companies to establish project offices provided certain conditions are met.",
    sections: [
      { heading: "RBI General Permission Conditions", bullets: ["Contract secured from an Indian company", "Contract funded by inward remittance from abroad, OR by bilateral/multilateral agency, OR by India-based bank", "Contract awarded under competitive bidding", "No inter-company cross-charges except for the project"] },
      { heading: "Compliance Requirements", bullets: ["Annual Activity Certificate from Chartered Accountant filed with AD bank", "Audited accounts filed with AD bank annually", "Remittance of profits/surplus only through AD bank", "Project Office must be closed on completion of project"] },
    ],
  },
  {
    slug: "branch-office-registration", parentSlug: "fema",
    title: "Branch Office Registration",
    intro: "Foreign companies can set up Branch Offices in India to carry on the same activities as their parent company. Unlike subsidiaries, branch offices are extensions of the foreign parent and can repatriate profits without dividend distribution tax.",
    sections: [
      { heading: "Permitted Activities for Branch Offices", bullets: ["Export / import of goods", "Rendering professional or consultancy services", "Carrying out research work for the parent company", "Acting as buying / selling agent for parent", "Rendering technical support for products supplied by parent"] },
      { heading: "Prohibited Activities", bullets: ["Retail trading (unless prior approval obtained)", "Agriculture or plantation activities", "Real estate business (except leasing office space)", "Acting as an insurance agent"] },
    ],
  },
  {
    slug: "fema-compliance", parentSlug: "fema",
    title: "FEMA Compliance",
    intro: "The Foreign Exchange Management Act, 1999 (FEMA) regulates all cross-border foreign exchange transactions in India. Businesses and individuals undertaking international transactions must comply with FEMA to avoid penalties and compounding proceedings.",
    sections: [
      { heading: "Key FEMA Compliance Areas", bullets: ["FDI reporting in Form FC-GPR (within 30 days of allotment) and FC-TRS (within 60 days of transfer)", "ECB compliance: filing of Form 83 and Loan Registration Number (LRN)", "ODI reporting: Form ODI for overseas investments", "Annual Performance Report (APR) for Indian companies investing abroad", "Annual Return on Foreign Liabilities and Assets (FLA) — due by 15 July"] },
      { heading: "Penalties for FEMA Violations", content: "FEMA violations can attract a penalty up to three times the amount of foreign exchange involved, or up to ₹2 lakh if amount cannot be quantified, and daily penalty for continuing violation. Compounding of offences is available under Section 15." },
    ],
  },
  {
    slug: "liaison-office-registration", parentSlug: "fema",
    title: "Liaison Office Registration",
    intro: "A Liaison Office (LO) acts as a communication channel between the foreign parent company and its Indian business contacts. It cannot undertake commercial or industrial activities and is not allowed to earn any income in India.",
    sections: [
      { heading: "Permitted Activities", bullets: ["Representing the parent company", "Collecting and transmitting information about the Indian market", "Promoting import / export of goods", "Facilitating technical / financial collaborations"] },
      { heading: "Annual Compliance", bullets: ["Annual Activity Certificate (AAC) from a Chartered Accountant filed with RBI through AD bank", "Audited financial statements submitted annually", "LO is typically permitted for 3 years; renewal required thereafter"] },
    ],
  },
];
