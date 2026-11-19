import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.firmName}. Post your query and our team of expert Chartered Accountants will get back to you.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Have a query? Get in touch with our team. We are here to help you with all your
            financial and compliance needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Post Your Query</h2>
              <p className="text-gray-500 mb-6">
                Fill in the form below and our team will respond within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <div className="bg-white rounded-xl border border-gray-100 p-6 sticky top-32 space-y-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Get in Touch</h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Office Address</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      {siteConfig.contact.address.line1}
                      <br />
                      {siteConfig.contact.address.line2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Phone</h4>
                    {siteConfig.contact.phone.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="block text-gray-500 text-sm mt-1 hover:text-primary transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Email</h4>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-gray-500 text-sm mt-1 hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 text-sm">Working Hours</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Mon – Sat: 10:00 AM – 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              src={siteConfig.contact.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
