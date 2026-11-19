import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { getSubServicesByParent } from "@/data/sub";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent =
    (Icons as unknown as Record<string, React.ComponentType<any>>)[
      service.icon
    ] || Icons.Briefcase;

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 5);
  const subPages = getSubServicesByParent(slug);

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-4 text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <IconComponent size={32} className="text-secondary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{service.title}</h1>
              <p className="text-gray-200 mt-1">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <div className="w-12 h-1 bg-secondary mb-6 rounded-full" />
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {service.description}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle
                      size={18}
                      className="text-secondary mt-0.5 shrink-0"
                    />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Sub-service pages list */}
              {subPages.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Our {service.title} Services
                  </h3>
                  <div className="w-10 h-0.5 bg-secondary mb-5 rounded-full" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subPages.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/services/${slug}/${sub.slug}`}
                        className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                      >
                        <span className="text-gray-700 text-sm font-medium group-hover:text-primary transition-colors">
                          {sub.title}
                        </span>
                        <ArrowRight size={14} className="text-gray-300 group-hover:text-primary transition-colors shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Need help with {service.title}?
                </h3>
                <p className="text-gray-500 mb-6">
                  Our experts are ready to assist you. Get in touch today.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-xl border border-gray-100 p-6 sticky top-32">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Other Services</h3>
                <div className="space-y-2">
                  {otherServices.map((s) => {
                    const SIcon =
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (Icons as unknown as Record<string, React.ComponentType<any>>)[
                        s.icon
                      ] || Icons.Briefcase;
                    return (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <SIcon
                            size={16}
                            className="text-primary group-hover:text-white"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                          {s.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href="/services"
                  className="block mt-4 text-center text-sm text-primary font-medium hover:underline"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
