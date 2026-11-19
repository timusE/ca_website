import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft } from "lucide-react";

const knowledgePages: Record<string, {
  title: string;
  intro: string;
  points: string[];
  externalUrl: string;
}> = {
  "income-tax-act": {
    title: "Income Tax Act, 1961",
    intro: "The Income Tax Act, 1961 is the principal legislation governing taxation of income in India. It specifies taxable income heads, deductions, exemptions, rates, procedures, and penalties applicable to individuals, HUFs, firms, companies, and other entities.",
    points: ["Contains 298 sections and 14 schedules", "Covers all heads of income: Salary, House Property, Business/Profession, Capital Gains, Other Sources", "Specifies deductions under Chapter VI-A (80C, 80D, 80G, etc.)", "Amended annually through the Finance Act (Union Budget)", "Administered by the Central Board of Direct Taxes (CBDT)"],
    externalUrl: "https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
  },
  "companies-act": {
    title: "Companies Act, 2013",
    intro: "The Companies Act, 2013 is the primary legislation governing formation, management, and dissolution of companies in India. It replaced the Companies Act, 1956 and introduced significant reforms in corporate governance.",
    points: ["Contains 470 sections organized in 29 chapters", "Governs incorporation, share capital, directors, meetings, accounts, and audit", "Introduced concept of One Person Company (OPC) and Small Companies", "National Company Law Tribunal (NCLT) established as adjudicating authority", "Administered by the Ministry of Corporate Affairs (MCA)", "Significant amendments introduced through Companies (Amendment) Acts of 2017, 2019, and 2020"],
    externalUrl: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/acts.html",
  },
  "companies-donation-fund-act": {
    title: "Companies (Donation to National Funds) Act, 1951",
    intro: "This Act regulates donations made by companies to national funds such as the Prime Minister's National Relief Fund, the National Defence Fund, and similar national purpose funds.",
    points: ["Governs corporate donations to national relief and welfare funds", "Donations eligible for deduction under Section 80G of Income Tax Act", "Companies must maintain records of donations made", "Applicable to all types of companies registered in India"],
    externalUrl: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/acts.html",
  },
  "llp-act": {
    title: "Limited Liability Partnership Act, 2008",
    intro: "The LLP Act, 2008 introduced the Limited Liability Partnership as a new form of business entity in India, combining the advantages of a partnership with the limited liability of a company.",
    points: ["Provides for incorporation, management, and winding up of LLPs", "LLP is a body corporate with perpetual succession", "Partners have limited liability (only to the extent of their contribution)", "Designated Partners must obtain a Designated Partner Identification Number (DPIN)", "Administered by the Ministry of Corporate Affairs through the Registrar of LLPs", "LLP Agreement governs rights and duties of partners"],
    externalUrl: "https://www.mca.gov.in/content/mca/global/en/acts-rules/ebooks/acts.html",
  },
  "partnership-act": {
    title: "Indian Partnership Act, 1932",
    intro: "The Indian Partnership Act, 1932 governs the formation, operation, rights, and dissolution of partnership firms in India. It remains the primary legislation for general (non-LLP) partnerships.",
    points: ["Defines partnership as a relation between persons who have agreed to share profits of a business", "Registration of partnership firms is optional but recommended", "Partnership Deed governs the firm — must be on proper stamp paper", "Maximum 50 partners in a banking firm; 20 in others", "Partners have unlimited personal liability for firm's debts", "Firm dissolves on death, insolvency, or retirement of a partner unless deed provides otherwise"],
    externalUrl: "https://legislative.gov.in/sites/default/files/A1932-09.pdf",
  },
  "societies-registration-act": {
    title: "Societies Registration Act, 1860",
    intro: "The Societies Registration Act, 1860 provides for registration of societies formed for promotion of literature, science, fine arts, charitable purposes, or diffusion of political education.",
    points: ["Minimum 7 persons required to form a society", "Memorandum of Association and Rules & Regulations required for registration", "Registration with Registrar of Societies in the relevant state", "Society can own property, sue and be sued in its own name", "Annual general meeting and annual list of governing body members must be filed", "Eligible for income tax exemption under 12A and 80G"],
    externalUrl: "https://legislative.gov.in/sites/default/files/A1860-21.pdf",
  },
  "competition-act": {
    title: "Competition Act, 2002",
    intro: "The Competition Act, 2002 prohibits anti-competitive agreements, abuse of dominant position, and regulates combinations (mergers and acquisitions) to promote competition in Indian markets.",
    points: ["Prohibits anti-competitive agreements (cartels, price-fixing, bid-rigging)", "Prohibits abuse of dominant market position", "Mandatory notification to CCI for combinations above prescribed thresholds", "Competition Commission of India (CCI) is the regulator", "Penalties up to 10% of average turnover for violations", "Significant for M&A transactions — CCI approval required above threshold"],
    externalUrl: "https://www.cci.gov.in/competition-act",
  },
  "mrtp-act": {
    title: "Monopolies and Restrictive Trade Practices Act, 1969",
    intro: "The MRTP Act, 1969 was repealed and replaced by the Competition Act, 2002. However, it remains historically significant and pending cases under MRTP are handled by the Competition Appellate Tribunal.",
    points: ["Enacted to control monopolies and prevent concentration of economic power", "Prohibited restrictive trade practices and unfair trade practices", "MRTP Commission was the regulatory body (now dissolved)", "Replaced by Competition Act, 2002 with effect from September 2009", "Pending MRTP cases were transferred to the National Commission under Consumer Protection Act"],
    externalUrl: "https://legislative.gov.in/sites/default/files/A1969-54.pdf",
  },
  "chartered-accountants-act": {
    title: "Chartered Accountants Act, 1949",
    intro: "The Chartered Accountants Act, 1949 established the Institute of Chartered Accountants of India (ICAI) and governs the profession of Chartered Accountancy in India, including membership, examinations, ethics, and discipline.",
    points: ["Established ICAI as the statutory body for regulating CA profession in India", "Specifies qualifications and examinations for CA membership (Foundation, Intermediate, Final)", "Governs ethical conduct through the Code of Ethics", "Provides for disciplinary proceedings against members for professional misconduct", "ICAI is administered by an elected Council with President and Vice-President", "Only ICAI members can sign audit reports, tax audit reports, and certain certificates"],
    externalUrl: "https://www.icai.org/post.html?post_id=10103",
  },
  "company-secretaries-act": {
    title: "Company Secretaries Act, 1980",
    intro: "The Company Secretaries Act, 1980 established the Institute of Company Secretaries of India (ICSI) and governs the profession of Company Secretary in India.",
    points: ["Established ICSI as the statutory body for the CS profession", "CS qualification requires passing Foundation, Executive, and Professional programmes", "Practising Company Secretaries can appear before CLB, NCLT, and other authorities", "Companies above a certain size must appoint a qualified Company Secretary", "Governs ethics, discipline, and professional conduct of CS members"],
    externalUrl: "https://www.icsi.edu/",
  },
  "cost-accountants-act": {
    title: "Cost and Works Accountants Act, 1959",
    intro: "The Cost and Works Accountants Act, 1959 established the Institute of Cost Accountants of India (ICAI-CMA, formerly ICWAI) and regulates the profession of Cost and Management Accountancy.",
    points: ["Established ICAI-CMA as the statutory body for cost accountancy", "Cost Audit is mandatory for certain industries under Companies Act", "CMA qualification covers cost accounting, management accounting, and financial management", "Practising CMAs can conduct cost audits and certify cost statements", "ICAI-CMA has regional councils across India"],
    externalUrl: "https://icmai.in/",
  },
  "wealth-tax-act": {
    title: "Wealth Tax Act, 1957",
    intro: "The Wealth Tax Act, 1957 levied tax on the net wealth of individuals, HUFs, and companies. It was abolished with effect from Assessment Year 2016-17 (Finance Act, 2015). Understanding its historical provisions is relevant for legacy compliance.",
    points: ["Abolished with effect from AY 2016-17 (Budget 2015)", "Previously levied at 1% on net wealth exceeding ₹30 lakh", "Covered assets like residential properties, vehicles, jewellery, cash", "Surcharge on wealth tax was also applicable", "Returns for periods up to AY 2015-16 may still need to be filed / assessed", "Replaced by additional surcharge on super-rich taxpayers under Income Tax Act"],
    externalUrl: "https://incometaxindia.gov.in/pages/acts/wealth-tax-act.aspx",
  },
};

const allSlugs = Object.keys(knowledgePages);

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = knowledgePages[slug];
  if (!page) return {};
  return { title: page.title, description: page.intro.slice(0, 160) };
}

export default async function KnowledgePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = knowledgePages[slug];
  if (!page) notFound();

  const others = allSlugs.filter((s) => s !== slug);

  return (
    <>
      <section className="bg-gray-100 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/links" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-3">
            <ArrowLeft size={14} /> Knowledge Base
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{page.title}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <p className="text-gray-600 text-base leading-relaxed mb-8">{page.intro}</p>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Key Provisions</h2>
              <div className="w-10 h-0.5 bg-secondary mb-4 rounded-full" />
              <ul className="space-y-2 mb-8">
                {page.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href={page.externalUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                <ExternalLink size={15} />
                View Official Text
              </a>
            </article>

            <aside>
              <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">Other Acts</h3>
                <ul className="space-y-1">
                  {others.map((s) => (
                    <li key={s}>
                      <Link href={`/knowledge/${s}`} className="block text-sm text-gray-600 hover:text-primary py-1.5 border-b border-gray-50 transition-colors">
                        {knowledgePages[s].title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Need Legal Advice?</h3>
                <p className="text-blue-200 text-sm mb-4">Our team can help you understand and comply with these laws.</p>
                <Link href="/contact" className="block text-center px-4 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg">
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
