// ============================================================
// LICENSES DATA — Add, remove or modify license services here
// ============================================================

export interface LicenseItem {
  title: string;
  description: string;
}

export interface LicenseCategory {
  category: string;
  items: LicenseItem[];
}

export const licenses: LicenseCategory[] = [
  {
    category: "Registrations",
    items: [
      { title: "Provident Fund Registration", description: "Mandatory PF registration for establishments with 20+ employees under EPF Act." },
      { title: "ESIC Registration", description: "Employee State Insurance registration for establishments with 10+ employees." },
      { title: "Shops & Establishment Registration", description: "Mandatory registration under the respective state Shops & Establishments Act." },
      { title: "Udyam Registration", description: "MSME registration for micro, small, and medium enterprises for government benefits." },
      { title: "NSIC Registration", description: "National Small Industries Corporation registration for small enterprises." },
      { title: "RERA Registration", description: "Real Estate Regulatory Authority registration for real estate projects and agents." },
      { title: "FIEO Registration", description: "Federation of Indian Export Organisations membership for exporters." },
    ],
  },
  {
    category: "Food & Health Licenses",
    items: [
      { title: "FSSAI Registration/License", description: "Food Safety and Standards Authority of India license for food businesses." },
      { title: "Eating House License", description: "License required to operate restaurants, cafes, and eating establishments." },
      { title: "Drug License", description: "License for manufacturing, selling, or distributing pharmaceutical products." },
      { title: "AYUSH License", description: "License for Ayurvedic, Yoga, Unani, Siddha, and Homeopathy product manufacturing." },
    ],
  },
  {
    category: "Intellectual Property",
    items: [
      { title: "Trademark Registration", description: "Protect your brand name, logo, and tagline through trademark registration." },
      { title: "Copyright Registration", description: "Copyright protection for literary, artistic, musical, and dramatic works." },
      { title: "Design Registration", description: "Protect the visual appearance of industrial products through design registration." },
      { title: "Provisional Patent", description: "File a provisional patent application to secure priority date for your invention." },
      { title: "Patent Registration", description: "Complete patent registration for protection of novel inventions." },
    ],
  },
  {
    category: "Trade & Export Licenses",
    items: [
      { title: "Import Export Code", description: "IEC code mandatory for all importers and exporters in India." },
      { title: "Trade License", description: "Municipal/local body license to carry out business in a specific area." },
      { title: "APEDA Registration", description: "Registration for exporters of agricultural and processed food products." },
      { title: "Barcode Registration", description: "GS1 India barcode registration for product identification." },
    ],
  },
  {
    category: "Industry Specific Licenses",
    items: [
      { title: "ISO Certification", description: "International quality management system certification (ISO 9001, 14001, etc.)." },
      { title: "DOT OSP License", description: "Department of Telecom license for Other Service Providers (BPO/IT)." },
      { title: "Factory License", description: "License required to operate a manufacturing factory under the Factories Act." },
      { title: "PSARA License", description: "Private Security Agencies Regulation Act license for security businesses." },
      { title: "Professional Tax", description: "Registration and compliance for professional tax in applicable states." },
      { title: "Liquor License", description: "License for manufacturing, distribution, or retail sale of alcoholic beverages." },
      { title: "Music License", description: "PPL/IPRS license for playing copyrighted music in commercial establishments." },
    ],
  },
  {
    category: "Compliance & Certifications",
    items: [
      { title: "FCRA Registration", description: "Foreign Contribution Regulation Act registration for NGOs receiving foreign funds." },
      { title: "BIS Registration", description: "Bureau of Indian Standards registration for product quality certification." },
      { title: "CE Registration", description: "CE marking certification for products exported to the European Union." },
      { title: "FDA Certification", description: "Food and Drug Administration certification for products exported to USA." },
      { title: "GMP Certification", description: "Good Manufacturing Practice certification for pharmaceutical and food industries." },
      { title: "NOC Pollution Control Board", description: "No Objection Certificate from state/central pollution control board." },
    ],
  },
];
