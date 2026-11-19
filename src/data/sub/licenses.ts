export interface LicensePageContent {
  slug: string;
  title: string;
  intro: string;
  sections: { heading: string; content?: string; bullets?: string[] }[];
}

export const licensesContent: LicensePageContent[] = [
  {
    slug: "provident-fund-registration",
    title: "Provident Fund Registration",
    intro: "The Employees' Provident Fund (EPF) is a mandatory savings scheme for employees under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952. Every establishment with 20 or more employees must register with the EPFO.",
    sections: [
      { heading: "Applicability", bullets: ["Establishments with 20+ employees must mandatorily register", "Certain industries must register even with fewer than 20 employees", "Voluntary coverage available for smaller establishments", "Applicable to both full-time and contractual employees earning up to ₹15,000/month"] },
      { heading: "Key Compliance Requirements", bullets: ["Employer contributes 12% of basic salary + DA to EPF", "Employee contributes 12% of basic salary + DA", "Monthly ECR (Electronic Challan cum Return) filing by 15th of each month", "Annual return in Form 3A and 6A", "UAN generation and KYC linking for all employees"] },
      { heading: "Documents Required for Registration", bullets: ["PAN of the establishment", "Address proof of the business", "Bank account details", "Details of all employees (name, DOB, Aadhaar, salary)", "Partnership Deed / Certificate of Incorporation (as applicable)", "List of directors / partners / proprietor"] },
    ],
  },
  {
    slug: "esic-registration",
    title: "ESIC Registration",
    intro: "The Employees' State Insurance Corporation (ESIC) provides medical, maternity, disability, and other benefits to employees. Registration is mandatory for establishments with 10 or more employees (in most states) earning up to ₹21,000/month.",
    sections: [
      { heading: "Coverage and Benefits", bullets: ["Medical benefit: Full medical care for employee and family", "Sickness benefit: 70% of wages for up to 91 days", "Maternity benefit: Full wages for 26 weeks", "Disablement benefit: For work-related injury or occupational disease", "Dependent's benefit: Monthly pension to dependants on death of insured employee"] },
      { heading: "Contribution Rates", bullets: ["Employer contribution: 3.25% of wages", "Employee contribution: 0.75% of wages", "Employees earning up to ₹137/day are exempt from contribution but still covered", "Monthly contributions due by 15th of the following month"] },
      { heading: "Documents Required", bullets: ["PAN of establishment", "Aadhaar and salary details of all employees", "Bank account details", "Address proof of business premises"] },
    ],
  },
  {
    slug: "shops-establishment-registration",
    title: "Shops & Establishment Registration",
    intro: "Every commercial establishment including shops, offices, hotels, restaurants, and amusement centres must register under the respective state's Shops and Commercial Establishments Act. This is one of the first registrations required after starting a business.",
    sections: [
      { heading: "Why It Is Required", bullets: ["Mandatory for all commercial establishments (shops, offices, restaurants, hotels)", "Required to open a current bank account in most banks", "Proof of legal business establishment", "Regulates working hours, holidays, overtime, and employment conditions", "Required for obtaining other licences like GST, FSSAI, etc."] },
      { heading: "Documents Required", bullets: ["PAN of proprietor / partners / directors", "Aadhaar / address proof of owner", "Business address proof (rent agreement / electricity bill)", "Proof of commencement of business", "Number of employees"] },
    ],
  },
  {
    slug: "udyam-registration",
    title: "Udyam Registration (MSME)",
    intro: "Udyam Registration is the official MSME (Micro, Small & Medium Enterprise) registration issued by the Ministry of MSME based on turnover and investment criteria. It replaces the earlier Udyog Aadhaar Memorandum (UAM) system.",
    sections: [
      { heading: "Eligibility Criteria", bullets: ["Micro Enterprise: Investment ≤ ₹1 crore, Turnover ≤ ₹5 crore", "Small Enterprise: Investment ≤ ₹10 crore, Turnover ≤ ₹50 crore", "Medium Enterprise: Investment ≤ ₹50 crore, Turnover ≤ ₹250 crore", "All types of businesses — manufacturing and service sector"] },
      { heading: "Benefits of Udyam Registration", bullets: ["Priority sector lending and lower interest rates from banks", "Protection against delayed payments (MSME Samadhaan portal)", "Government tender benefits and exemptions", "Eligibility for various government schemes and subsidies", "Easier credit facilities and collateral-free loans under CGTMSE", "Concession in electricity bills and tax rebates"] },
    ],
  },
  {
    slug: "nsic-registration",
    title: "NSIC Registration",
    intro: "National Small Industries Corporation (NSIC) registration helps small enterprises get benefits under various government schemes. NSIC operates the Single Point Registration Scheme (SPRS) for MSMEs to participate in government purchases without paying EMD.",
    sections: [
      { heading: "Benefits of NSIC Registration", bullets: ["Exemption from Earnest Money Deposit (EMD) in government tenders", "Issue of Tender Sets free of cost", "Preferential treatment in government procurement", "Access to raw material assistance, marketing support, and technology support"] },
    ],
  },
  {
    slug: "fssai-registration",
    title: "FSSAI Registration / License",
    intro: "FSSAI (Food Safety and Standards Authority of India) registration or licence is mandatory for all food business operators (FBOs) in India. It ensures that food products meet safety and hygiene standards prescribed under the Food Safety and Standards Act, 2006.",
    sections: [
      { heading: "Types of FSSAI Licence", bullets: ["FSSAI Basic Registration: Annual turnover up to ₹12 lakh — State licence", "FSSAI State Licence: Turnover ₹12 lakh to ₹20 crore — State authority", "FSSAI Central Licence: Turnover above ₹20 crore OR import/export — Central authority"] },
      { heading: "Who Needs FSSAI?", bullets: ["Restaurants, hotels, dhabas, and eating establishments", "Food manufacturers, processors, and packagers", "Food importers and exporters", "Food distributors, retailers, and wholesalers", "Online food aggregators (Zomato, Swiggy sellers)", "Petty food vendors (basic registration)"] },
      { heading: "Documents Required", bullets: ["PAN and Aadhaar of proprietor / directors", "Proof of business premises (rent agreement / electricity bill)", "Food safety management plan", "List of food products to be manufactured / sold", "NOC from local authority (for manufacturing units)"] },
    ],
  },
  {
    slug: "eating-house-license",
    title: "Eating House License",
    intro: "An Eating House Licence is required from the local Police Commissioner or Municipal Authority to legally operate a restaurant, café, dhaba, canteen, or any food service establishment. It is separate from FSSAI registration.",
    sections: [
      { heading: "Requirement", content: "Any establishment that provides cooked food and beverages to customers for consumption on the premises requires this licence. It is issued by the local Commissioner of Police in metropolitan areas or by municipal authorities in other areas." },
      { heading: "Documents Required", bullets: ["Application form", "NOC from Fire Department", "FSSAI registration / licence", "Identity and address proof of owner", "Proof of address of the eating house", "Photographs of the premises", "Proof of ownership or lease agreement"] },
    ],
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    intro: "A Trademark is a unique sign, symbol, logo, word, or combination that distinguishes the goods or services of one entity from another. Registration under the Trade Marks Act, 1999 grants exclusive rights to use the trademark and legal protection against infringement.",
    sections: [
      { heading: "Why Register a Trademark?", bullets: ["Exclusive right to use the mark for registered goods/services", "Legal presumption of ownership in case of disputes", "Right to sue for infringement and claim damages", "Can be licensed and assigned as an asset", "Use of ® symbol after registration", "Protection for 10 years, renewable indefinitely"] },
      { heading: "Trademark Registration Process", bullets: ["Conduct a trademark search to check availability", "File application in Form TM-A with the appropriate class(es)", "Examination by Trade Marks Registry (usually 12-18 months)", "Publication in Trade Marks Journal for opposition", "Registration certificate issued if no opposition or opposition overcome"] },
      { heading: "Documents Required", bullets: ["Applicant's PAN and address proof", "Logo / word mark in prescribed format", "Power of Attorney (Form TM-48) if filed through agent", "MSME / Startup India certificate for fee concession"] },
    ],
  },
  {
    slug: "import-export-code",
    title: "Import Export Code (IEC)",
    intro: "Import Export Code (IEC) is a 10-digit code issued by DGFT (Directorate General of Foreign Trade) that is mandatory for businesses involved in import or export of goods and services. No import or export can be made without a valid IEC.",
    sections: [
      { heading: "Who Needs IEC?", bullets: ["Any person / firm / company wishing to import goods into India", "Any person / firm / company wishing to export goods from India", "Service exporters receiving foreign exchange (for certain services)", "Note: IEC is NOT required for goods imported/exported for personal use, not for commercial purposes"] },
      { heading: "Benefits of IEC", bullets: ["Enables import and export of goods and services", "Required to receive export remittances from banks", "Access to DGFT export promotion schemes (RoDTEP, RoSCTL, MEIS/SEIS)", "Required for customs clearance of shipments", "No annual compliance — one-time registration"] },
      { heading: "Documents Required", bullets: ["PAN of the firm / company / individual", "Address proof of establishment", "Bank account details (cancelled cheque or bank certificate)", "Digital photograph of the signatory"] },
    ],
  },
  {
    slug: "iso-certification",
    title: "ISO Certification",
    intro: "ISO Certifications from the International Organization for Standardization are globally recognized standards that demonstrate the quality, safety, and efficiency of an organization's products, services, and management systems.",
    sections: [
      { heading: "Popular ISO Standards", bullets: ["ISO 9001:2015 — Quality Management System (most widely used)", "ISO 14001:2015 — Environmental Management System", "ISO 45001:2018 — Occupational Health & Safety", "ISO 27001:2022 — Information Security Management System", "ISO 22000 — Food Safety Management System", "ISO 13485 — Medical Devices Quality Management"] },
      { heading: "Benefits of ISO Certification", bullets: ["Enhanced credibility and customer confidence", "Eligibility for government tenders that require ISO certification", "Improved operational processes and efficiency", "International recognition for export market entry", "Competitive advantage over non-certified competitors"] },
    ],
  },
  {
    slug: "rera-registration",
    title: "RERA Registration",
    intro: "The Real Estate (Regulation and Development) Act, 2016 (RERA) mandates registration of real estate projects and real estate agents with the state RERA authority. It aims to protect homebuyers and promote transparency in the sector.",
    sections: [
      { heading: "Who Must Register Under RERA?", bullets: ["All residential and commercial projects with more than 8 apartments or land area more than 500 sq. mt.", "Real estate agents involved in buying or selling of RERA registered projects", "Existing incomplete projects must also register", "Promoters and developers of new projects"] },
      { heading: "Benefits for Homebuyers", bullets: ["Mandatory escrow account for project funds (minimum 70%)", "Promoter cannot change project plans without buyer consent", "Right to receive information about the project status", "Compensation for delays and defects", "Complaints redressal through RERA authority"] },
    ],
  },
  {
    slug: "trade-license",
    title: "Trade License",
    intro: "A Trade Licence is issued by the local municipal authority (Municipal Corporation / Panchayat) allowing a person or business to carry on a specific trade or business within the jurisdiction. It ensures businesses operate within safety and health regulations.",
    sections: [
      { heading: "Who Needs a Trade Licence?", bullets: ["Shops, restaurants, hotels, warehouses, factories", "Pharmacies, medical stores, and clinics", "Educational institutions and coaching centres", "Any commercial activity within municipal limits"] },
      { heading: "Documents Required", bullets: ["Application form to the municipal authority", "PAN and address proof of applicant", "Proof of business premises (rent agreement / sale deed)", "Identity proof of proprietor / partners / directors", "NOC from Fire Department (for certain establishments)", "Building completion certificate (if applicable)"] },
    ],
  },
  {
    slug: "professional-tax",
    title: "Professional Tax Registration",
    intro: "Professional Tax is a state-level tax levied on individuals engaged in a profession, trade, calling, or employment. It is applicable in states like Maharashtra, Karnataka, West Bengal, Tamil Nadu, Andhra Pradesh, Telangana, Gujarat, and others.",
    sections: [
      { heading: "Employer Registration", bullets: ["Employers must register under the state's Professional Tax Act", "Must deduct PT from employees' salaries and remit to state government", "PT return filing — monthly in some states, annually in others", "Certificate of Enrollment issued to the employer"] },
      { heading: "Employee / Professional Registration", bullets: ["Self-employed professionals (doctors, lawyers, CAs, architects) must register separately", "Certificate of Registration issued", "Annual payment of professional tax by due date", "Maximum PT slab: ₹2,500 per year (varies by state)"] },
    ],
  },
  {
    slug: "dot-osp-license",
    title: "DOT OSP License",
    intro: "An Other Service Provider (OSP) registration from the Department of Telecommunications (DoT) is required for entities providing application services such as call centres, BPO, telemarketing, IT-enabled services, and similar services using Public Switched Telephone Network (PSTN) infrastructure.",
    sections: [
      { heading: "Who Needs OSP Registration?", bullets: ["Business Process Outsourcing (BPO) companies", "Call centres — both domestic and international", "Telemarketing companies", "IT-enabled service providers using PSTN/ISDN/VOIP"] },
      { heading: "Types of OSP", bullets: ["Domestic OSP: Services within India only", "International OSP: Services to international clients"] },
    ],
  },
  {
    slug: "barcode-registration",
    title: "Barcode Registration",
    intro: "Barcodes are globally standardized product identifiers issued through GS1 India (previously EAN India). A barcode is essential for retail sale of products through supermarkets, e-commerce platforms, and for export of goods.",
    sections: [
      { heading: "Why Register Barcodes?", bullets: ["Mandatory for listing products on Amazon, Flipkart, and other e-commerce portals", "Required for products sold in large retail chains (Big Bazaar, Reliance Retail, D-Mart)", "Essential for export products to many countries", "Helps with inventory management and supply chain tracking"] },
      { heading: "Types of Barcodes", bullets: ["EAN-13 (most common for retail products)", "UPC-A (used for US and Canada market)", "QR Codes (used for digital information)", "GS1-128 (used in logistics and shipping)"] },
    ],
  },
  {
    slug: "copyright-registration",
    title: "Copyright Registration",
    intro: "Copyright is an automatic right that arises the moment an original creative work is created. However, registration with the Copyright Office provides legal evidence of ownership and is essential for enforcing rights in case of infringement.",
    sections: [
      { heading: "What Can Be Copyrighted?", bullets: ["Literary works (books, articles, computer programs)", "Musical works and sound recordings", "Artistic works (paintings, sculptures, photographs)", "Cinematographic films", "Broadcasting and podcast content", "Architectural drawings and designs"] },
      { heading: "Benefits of Registration", bullets: ["Creates a public record of ownership", "Helps in litigation — registered copyright is prima facie evidence", "Required for some foreign copyright protection", "Protection lasts for the lifetime of the author + 60 years"] },
    ],
  },
  {
    slug: "design-registration",
    title: "Design Registration",
    intro: "Design Registration under the Designs Act, 2000 protects the visual appearance or aesthetics of an industrial product — its shape, configuration, pattern, ornament, or composition of lines or colors. It is distinct from trademark and patent protection.",
    sections: [
      { heading: "What Can Be Registered as a Design?", bullets: ["Shape and configuration of a product", "Pattern or ornament applied to a product", "Composition of lines or colors in a product", "Does NOT cover technical or functional features"] },
      { heading: "Benefits of Design Registration", bullets: ["Exclusive right to use the design for 10 years (extendable by 5 more years)", "Right to sue for infringement and claim damages", "Deters competitors from copying the product's appearance", "Enhances brand value and product differentiation"] },
    ],
  },
  {
    slug: "provisional-patent",
    title: "Provisional Patent Application",
    intro: "A Provisional Patent Application is filed to secure a priority date for an invention when the invention is not fully developed. It gives the inventor 12 months to file the complete (non-provisional) patent application.",
    sections: [
      { heading: "Why File a Provisional Application?", bullets: ["Secures the priority date immediately", "Allows use of 'Patent Pending' label", "12 months to test, develop, and fund the invention", "Lower cost than a complete specification", "Priority date establishes your claim over any subsequent similar invention"] },
      { heading: "Documents Required", bullets: ["Description of the invention (provisional specification)", "Name and address of inventor(s)", "Form-1 (Application for Grant of Patent)", "Proof of right to file (assignment deed if different from inventor)"] },
    ],
  },
  {
    slug: "patent-registration",
    title: "Patent Registration",
    intro: "A Patent grants the inventor an exclusive right to make, use, sell, and import the patented invention in India for 20 years from the filing date, in exchange for public disclosure of the invention.",
    sections: [
      { heading: "Patentability Criteria", bullets: ["The invention must be novel (not known or used before)", "Must involve an inventive step (non-obvious to a person skilled in the field)", "Must be capable of industrial application", "Must not fall under non-patentable subject matter (e.g., mathematical methods, business methods, natural phenomena)"] },
      { heading: "Patent Application Process", bullets: ["File provisional or complete specification with Indian Patent Office", "Publication in Patent Journal (18 months from filing)", "Request for Examination within 48 months of priority date", "Examination and response to objections (First Examination Report)", "Patent granted after all objections cleared"] },
    ],
  },
  {
    slug: "drug-license",
    title: "Drug License",
    intro: "A Drug Licence is mandatory for manufacturing, selling, distributing, or stocking pharmaceutical products, cosmetics, or medical devices. It is issued under the Drugs and Cosmetics Act, 1940 by the State Licensing Authority or Central Licensing Authority.",
    sections: [
      { heading: "Types of Drug Licence", bullets: ["Retail Drug Licence: For retail pharmacy / chemist shops", "Wholesale Drug Licence: For wholesale dealers", "Manufacturing Licence: For drug manufacturers (issued by State FDA)", "Multi-drug Licence for large chain pharmacies"] },
      { heading: "Documents Required", bullets: ["Application in Form 19 / Form 20 (as applicable)", "Proof of premises (rent agreement / ownership deed)", "Registered pharmacist certificate", "Educational qualifications of pharmacist", "Site plan and layout of the premises"] },
    ],
  },
  {
    slug: "psara-license",
    title: "PSARA License",
    intro: "The Private Security Agencies Regulation Act, 2005 (PSARA) requires all private security agencies operating in India to obtain a licence from the controlling authority of the state in which they operate.",
    sections: [
      { heading: "Who Needs a PSARA Licence?", content: "Any agency that provides private security guards to establishments, offices, factories, residences, banks, or other premises requires a PSARA licence. This applies to both newly established agencies and existing ones." },
      { heading: "Key Requirements", bullets: ["Principal employer must be an Indian citizen", "Security guards must undergo training at government-recognized training institutes", "Agency must maintain proper records of guards — identity, antecedents, training", "Police verification of all security personnel mandatory", "Renewal every 5 years"] },
    ],
  },
  {
    slug: "apeda-registration",
    title: "APEDA Registration",
    intro: "APEDA (Agricultural and Processed Food Products Export Development Authority) registration is mandatory for exporters of scheduled products including fruits, vegetables, meat, dairy, cereals, processed foods, and floriculture.",
    sections: [
      { heading: "Products Requiring APEDA Registration", bullets: ["Fresh fruits and vegetables", "Processed fruits and vegetables (jams, juices, pickles)", "Meat and meat products", "Poultry and dairy products", "Cereals and cereal products", "Groundnuts, peanuts, and walnuts", "Floriculture and seeds"] },
      { heading: "Benefits", bullets: ["Mandatory for export of scheduled agricultural products", "Access to APEDA financial assistance and export promotion schemes", "Registration allows participation in buyer-seller meets and trade fairs", "Credibility certificate for international buyers"] },
    ],
  },
  {
    slug: "ayush-license",
    title: "AYUSH License",
    intro: "An AYUSH Licence is required for manufacturing Ayurvedic, Yoga & Naturopathy, Unani, Siddha, and Homeopathy (AYUSH) products. It is issued by the State Licensing Authority under the Ministry of AYUSH.",
    sections: [
      { heading: "Who Needs an AYUSH Licence?", bullets: ["Manufacturers of Ayurvedic, Unani, Siddha, or Homeopathic formulations", "Companies producing herbal health supplements claiming AYUSH benefits", "Manufacturers of traditional medicinal products"] },
      { heading: "Requirements", bullets: ["Manufacturing premises meeting GMP (Good Manufacturing Practice) standards", "Qualified technical staff (Ayurvedic physician / pharmacist)", "Testing laboratory facilities or arrangement with approved external lab", "Compliance with Drugs and Cosmetics Act and Schedule T (GMP)"] },
    ],
  },
  {
    slug: "factory-license",
    title: "Factory License",
    intro: "A Factory Licence under the Factories Act, 1948 is mandatory for any premises using power and employing 10 or more workers, or not using power but employing 20 or more workers in a manufacturing process.",
    sections: [
      { heading: "Applicability", bullets: ["Power-using premises with 10+ workers", "Non-power premises with 20+ workers", "Applicable across all manufacturing sectors", "Renewal required annually (in most states)"] },
      { heading: "Key Compliance Under Factories Act", bullets: ["Maintenance of working hours — max 48 hours/week, 9 hours/day", "Overtime payment at double the rate", "Mandatory safety provisions (guards, fire exits, first aid)", "Annual leave entitlements for workers", "Prohibition of child labour", "Maintenance of registers and records"] },
    ],
  },
  {
    slug: "liquor-license",
    title: "Liquor License",
    intro: "A Liquor Licence is required to manufacture, distribute, or sell alcoholic beverages in India. Liquor is a state subject in India, so licensing is regulated by each state's excise department with varying rules and fees.",
    sections: [
      { heading: "Types of Liquor Licences", bullets: ["FL-1: Wholesale licence (off-premises sale)", "FL-2: Retail licence for wine shops (off-premises consumption)", "FL-3: Bar licence (on-premises consumption)", "FL-4: Hotel bar licence", "Brewery / Distillery licence for manufacturers"] },
      { heading: "General Requirements", bullets: ["Application to State Excise Department", "Background verification of the applicant", "Proof of adequate premises with minimum area as prescribed", "No proximity to schools, temples, or hospitals (distance norms apply)", "Renewable annually by paying prescribed fee"] },
    ],
  },
  {
    slug: "fcra-registration",
    title: "FCRA Registration",
    intro: "The Foreign Contribution Regulation Act, 2010 (FCRA) regulates the acceptance and utilisation of foreign contributions by NGOs, trusts, societies, and Section 8 companies. FCRA registration is mandatory to legally receive foreign donations.",
    sections: [
      { heading: "Who Can Apply for FCRA?", bullets: ["NGOs, charitable trusts, societies, and Section 8 companies", "Organizations with minimum 3 years of existence and demonstrated activities", "Must have spent ₹15 lakh on charitable activities in last 3 financial years", "Not engaged in activities detrimental to national interest"] },
      { heading: "Compliance Requirements", bullets: ["Maintain a separate FCRA bank account at SBI, New Delhi Main Branch", "Annual FC-4 return filing with Ministry of Home Affairs by 31st December", "Utilization of foreign funds only for approved purposes", "FCRA registration valid for 5 years; renewal required"] },
    ],
  },
  {
    slug: "bis-registration",
    title: "BIS Registration",
    intro: "Bureau of Indian Standards (BIS) certification (ISI Mark) is mandatory for certain categories of products under various BIS schemes. It ensures products meet Indian quality and safety standards.",
    sections: [
      { heading: "BIS Certification Schemes", bullets: ["Product Certification Scheme: ISI mark on products like electrical goods, cement, steel, packaged food", "Mandatory Certification: For over 300 products under Quality Control Orders", "Hallmarking: For gold and silver jewellery", "Foreign Manufacturers Certification Scheme (FMCS): For imported products"] },
      { heading: "Products Requiring Mandatory BIS Certification", bullets: ["Electronic goods: Mobile phones, laptops, chargers, LED lights", "Steel and cement products", "LPG cylinders and valves", "Helmets and safety equipment", "Packaged drinking water (ISI certified)"] },
    ],
  },
  {
    slug: "ce-registration",
    title: "CE Marking Certification",
    intro: "CE Marking is a mandatory conformity mark for products sold in the European Economic Area (EEA). It indicates that the product meets EU safety, health, and environmental protection standards.",
    sections: [
      { heading: "Products Requiring CE Marking", bullets: ["Electrical and electronic equipment (Low Voltage Directive)", "Medical devices", "Machinery and equipment", "Personal protective equipment (PPE)", "Construction products", "Toys and children's products"] },
      { heading: "CE Marking Process", bullets: ["Identify applicable EU Directives for the product", "Conduct conformity assessment (self-declaration or via Notified Body)", "Prepare Technical Documentation file", "Draw up EU Declaration of Conformity", "Affix CE Mark on the product"] },
    ],
  },
  {
    slug: "fda-certification",
    title: "FDA Certification (US FDA)",
    intro: "For products exported to the United States, FDA (U.S. Food and Drug Administration) approval or registration may be required. This applies to food products, dietary supplements, medical devices, cosmetics, and drugs exported to the US.",
    sections: [
      { heading: "Products Requiring US FDA Approval", bullets: ["Food products and dietary supplements for US market", "Medical devices (Class I, II, III)", "Pharmaceutical drugs for US market", "Cosmetics and personal care products", "Veterinary products"] },
      { heading: "Key Requirements for Food Exporters", bullets: ["FDA facility registration mandatory for all food facilities exporting to US", "Prior notice requirement before shipment of food", "FSMA (Food Safety Modernization Act) compliance — FSVP (Foreign Supplier Verification Program)", "Labeling compliance with US FDA nutrition label requirements"] },
    ],
  },
  {
    slug: "gmp-certification",
    title: "GMP Certification",
    intro: "Good Manufacturing Practice (GMP) certification ensures that products are consistently produced and controlled according to quality standards. It is mandatory for pharmaceutical manufacturers and recommended for food, cosmetics, and medical device manufacturers.",
    sections: [
      { heading: "Who Needs GMP Certification?", bullets: ["Pharmaceutical manufacturers (mandatory under Schedule M of Drugs and Cosmetics Act)", "AYUSH product manufacturers", "Food manufacturers targeting export or institutional sales", "Cosmetics manufacturers exporting to regulated markets", "Medical device manufacturers"] },
      { heading: "Key GMP Requirements", bullets: ["Clean and hygienic manufacturing environment", "Validated manufacturing processes", "Qualified personnel and adequate training", "Proper documentation and record-keeping", "Quality control testing at each stage", "Regular audits by internal and external auditors"] },
    ],
  },
  {
    slug: "music-license",
    title: "Music License (PPL / IPRS)",
    intro: "Any commercial establishment playing copyrighted music — including restaurants, hotels, retail shops, gyms, airlines, and radio stations — requires a music licence from PPL (Phonographic Performance Limited) and/or IPRS (Indian Performing Right Society).",
    sections: [
      { heading: "Two Types of Music Licences Required", bullets: ["PPL Licence: For playing sound recordings (the actual recording of a song)", "IPRS Licence: For the underlying musical and literary work (the composition and lyrics)", "Both licences are typically required for commercial use of most songs"] },
      { heading: "Who Needs a Music Licence?", bullets: ["Restaurants, bars, and cafes", "Hotels and hospitality businesses", "Gyms, fitness centres, and spas", "Retail stores and malls", "Events and concerts", "Online streaming and digital platforms"] },
    ],
  },
  {
    slug: "noc-pollution-control-board",
    title: "NOC from Pollution Control Board",
    intro: "Any industry or activity likely to cause pollution must obtain a No Objection Certificate (NOC) — also called Consent to Establish (CTE) and Consent to Operate (CTO) — from the State Pollution Control Board (SPCB) before commencing operations.",
    sections: [
      { heading: "Categories of Industries", bullets: ["Red Category: Highly polluting industries (cement, thermal power, chemicals)", "Orange Category: Moderately polluting (food processing, textiles, printing)", "Green Category: Low polluting (electronics assembly, light engineering)", "White Category: Non-polluting (IT services, garment stitching without dyeing)"] },
      { heading: "Consent to Establish vs Consent to Operate", bullets: ["Consent to Establish (CTE): Required before setting up the industry", "Consent to Operate (CTO): Required before commencing production", "Renewal: CTO must be renewed periodically (1 to 5 years depending on category)", "Online filing available on most state SPCB portals"] },
    ],
  },
  {
    slug: "fieo-registration",
    title: "FIEO Registration",
    intro: "FIEO (Federation of Indian Export Organisations) is the apex export promotion council of India. FIEO membership provides exporters with a recognized certificate of registration-cum-membership (RCMC) which is required to avail duty exemptions and export promotion schemes.",
    sections: [
      { heading: "Benefits of FIEO Membership", bullets: ["RCMC certificate required to claim FTP (Foreign Trade Policy) benefits", "Access to export promotion schemes (RoDTEP, SEIS, etc.)", "Participation in international trade fairs organized by FIEO", "Market intelligence and export advisory support", "Networking with international buyers and trade delegations"] },
    ],
  },
];
