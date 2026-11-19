import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft } from "lucide-react";

const gstPages: Record<string, {
  title: string;
  intro: string;
  points: string[];
  externalUrl: string;
  externalLabel: string;
}> = {
  acts: {
    title: "GST Acts",
    intro: "The Goods and Services Tax is governed by a set of Central and State GST Acts passed by Parliament and State Legislatures respectively. These Acts form the legal backbone of the GST regime in India.",
    points: [
      "Central Goods and Services Tax Act, 2017 (CGST Act) — governs levy of central tax on intra-state supplies",
      "Integrated Goods and Services Tax Act, 2017 (IGST Act) — governs levy on inter-state supplies and imports",
      "Union Territory Goods and Services Tax Act, 2017 (UTGST Act) — applicable to Union Territories without legislature",
      "GST (Compensation to States) Act, 2017 — provides compensation to states for revenue loss due to GST implementation",
      "State GST Acts — each state has its own SGST Act applicable to intra-state supplies",
    ],
    externalUrl: "https://cbic-gst.gov.in/gst-acts.html",
    externalLabel: "View Acts on CBIC GST Portal",
  },
  rules: {
    title: "GST Rules",
    intro: "GST Rules provide detailed procedures and formats for compliance under the GST Acts. Rules are notified by the Central Government and cover registration, returns, invoicing, valuation, refunds, and more.",
    points: [
      "CGST Rules, 2017 — covers registration, returns, invoicing, valuation, input tax credit, refunds, and appeals",
      "IGST Rules, 2017 — covers place of supply and determination of IGST",
      "UTGST Rules, 2017 — applicable to Union Territories",
      "GST Compensation Cess Rules, 2017",
      "Rules are amended periodically through notifications issued by the CBIC",
    ],
    externalUrl: "https://cbic-gst.gov.in/gst-rules.html",
    externalLabel: "View Rules on CBIC GST Portal",
  },
  notification: {
    title: "GST Notifications",
    intro: "GST Notifications are official orders issued by the Central Board of Indirect Taxes and Customs (CBIC) to amend GST law, notify GST rates, extend due dates, grant exemptions, and specify procedures.",
    points: [
      "Rate Notifications — specify GST rates for goods and services under various schedules",
      "Exemption Notifications — exempt specific goods/services from GST",
      "Due Date Extensions — extend deadlines for return filing or payment",
      "Procedural Notifications — specify forms, formats, and procedures for compliance",
      "Notifications are numbered and published in the Official Gazette",
      "Taxpayers should regularly track CBIC notifications to stay compliant",
    ],
    externalUrl: "https://cbic-gst.gov.in/notification.html",
    externalLabel: "View Notifications on CBIC GST Portal",
  },
  forms: {
    title: "GST Forms",
    intro: "GST forms are prescribed by the CGST Rules for various compliance activities including registration, return filing, refunds, appeals, and assessments. Each form has a specific purpose and prescribed format.",
    points: [
      "Registration Forms: GST REG-01 to GST REG-30",
      "Return Forms: GSTR-1, GSTR-2A, GSTR-2B, GSTR-3B, GSTR-4, GSTR-5, GSTR-6, GSTR-7, GSTR-8, GSTR-9, GSTR-9C, GSTR-10",
      "Refund Forms: GST RFD-01 to GST RFD-11",
      "Assessment and Audit Forms: GST ASMT-01 to GST DRC-07",
      "Appeal Forms: GST APL-01 to GST APL-08",
      "All forms are available on the GST portal (www.gst.gov.in)",
    ],
    externalUrl: "https://www.gst.gov.in/download/returns",
    externalLabel: "View GST Forms on GST Portal",
  },
  circulars: {
    title: "GST Circulars",
    intro: "GST Circulars are issued by CBIC to clarify provisions of the GST law, provide guidance on specific issues, and ensure uniformity in implementation across the country. Circulars are binding on departmental officers.",
    points: [
      "Circulars clarify ambiguous provisions of GST Acts and Rules",
      "Address industry-specific queries and issues raised by trade and industry",
      "Provide guidance on complex transactions such as export of services, ITC eligibility, etc.",
      "Departmental circulars are binding on GST officers and create legitimate expectations for taxpayers",
      "Advance Rulings issued by AAR and AAAR also provide guidance on specific transactions",
    ],
    externalUrl: "https://cbic-gst.gov.in/gst-circulars.html",
    externalLabel: "View Circulars on CBIC GST Portal",
  },
};

const allTypes = Object.keys(gstPages);

export async function generateStaticParams() {
  return allTypes.map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const page = gstPages[type];
  if (!page) return {};
  return { title: page.title, description: page.intro.slice(0, 160) };
}

export default async function GSTPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const page = gstPages[type];
  if (!page) notFound();

  return (
    <>
      <section className="bg-gray-100 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services/goods-and-service-tax" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-3">
            <ArrowLeft size={14} /> GST Services
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{page.title}</h1>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <p className="text-gray-600 text-base leading-relaxed mb-8">{page.intro}</p>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Key Points</h2>
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
                {page.externalLabel}
              </a>
            </article>

            <aside>
              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">GST Resources</h3>
                <ul className="space-y-1">
                  {allTypes.map((t) => (
                    <li key={t}>
                      <Link href={`/gst/${t}`}
                        className={`block text-sm py-1.5 border-b border-gray-50 transition-colors ${t === type ? "text-primary font-semibold" : "text-gray-600 hover:text-primary"}`}>
                        {gstPages[t].title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 bg-primary rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">GST Advisory</h3>
                <p className="text-blue-200 text-sm mb-4">Need help with GST compliance? Our experts are here.</p>
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
