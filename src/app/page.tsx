import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import ServiceCard from "@/components/ServiceCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import NewsTicker from "@/components/NewsTicker";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export default function Home() {
  return (
    <>
      <HeroBanner />

      {/* Welcome Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to {siteConfig.firmName}
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 leading-relaxed text-lg">
              {siteConfig.firmDescription}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center mt-6 px-6 py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Know More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive financial, taxation, and compliance services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <WhyChooseUs />

      <NewsTicker />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Query? Get in Touch</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Our team of expert Chartered Accountants is here to help you with all your
            financial and compliance needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-light transition-colors shadow-lg text-lg"
          >
            Post Your Query
          </Link>
        </div>
      </section>
    </>
  );
}
