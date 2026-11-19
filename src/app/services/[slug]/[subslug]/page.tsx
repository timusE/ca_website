import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";
import { services } from "@/data/services";
import { findSubService, getSubServicesByParent, allSubServices } from "@/data/sub";
import { siteConfig } from "@/data/siteConfig";

export async function generateStaticParams() {
  return allSubServices.map((s) => ({
    slug: s.parentSlug,
    subslug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subslug: string }>;
}): Promise<Metadata> {
  const { slug, subslug } = await params;
  const page = findSubService(slug, subslug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.intro.slice(0, 160),
  };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ slug: string; subslug: string }>;
}) {
  const { slug, subslug } = await params;
  const page = findSubService(slug, subslug);
  if (!page) notFound();

  const parentService = services.find((s) => s.slug === slug);
  const siblings = getSubServicesByParent(slug).filter((s) => s.slug !== subslug);

  return (
    <>
      {/* Page Header — clean gray like KM Agarwal */}
      <section className="bg-gray-100 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/services/${slug}`}
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-3"
          >
            <ArrowLeft size={14} />
            {parentService?.title ?? "Services"}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{page.title}</h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Article */}
            <article className="lg:col-span-2 prose prose-gray max-w-none">
              <p className="text-gray-600 text-base leading-relaxed mb-8 not-prose">
                {page.intro}
              </p>

              {page.sections.map((section, i) => (
                <div key={i} className="mb-8 not-prose">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {section.heading}
                  </h2>
                  <div className="w-10 h-0.5 bg-secondary mb-4 rounded-full" />

                  {section.content && (
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {section.content}
                    </p>
                  )}

                  {section.bullets && (
                    <ul className="space-y-2">
                      {section.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* CTA */}
              <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10 not-prose">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  Need assistance with {page.title}?
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Our experts are ready to help. Get in touch for a free consultation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Contact Us
                  </Link>
                  <a
                    href={`tel:${siteConfig.contact.phone[0]}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary text-primary text-sm font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <Phone size={15} />
                    {siteConfig.contact.phone[0]}
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Get in Touch card */}
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Get in Touch</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Talk to our experts for personalized advice on {page.title}.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Send Enquiry
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone[0]}`}
                  className="mt-3 block text-center px-4 py-2.5 border border-white/30 text-white text-sm rounded-lg hover:bg-white/10 transition-colors"
                >
                  {siteConfig.contact.phone[0]}
                </a>
              </div>

              {/* Related services in same category */}
              {siblings.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">
                    Related Services
                  </h3>
                  <ul className="space-y-1">
                    {siblings.slice(0, 8).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${slug}/${s.slug}`}
                          className="block text-sm text-gray-600 hover:text-primary py-1.5 border-b border-gray-50 hover:border-primary/20 transition-colors"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {parentService && (
                    <Link
                      href={`/services/${slug}`}
                      className="mt-3 block text-xs text-primary font-medium hover:underline"
                    >
                      View all {parentService.title} →
                    </Link>
                  )}
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
