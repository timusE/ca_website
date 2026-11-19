import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { usefulLinks } from "@/data/links";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "News & Updates", href: "/news" },
    { label: "Due Date Reminders", href: "/due-dates" },
    { label: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Direct Taxation", href: "/services/direct-taxation" },
    { label: "GST Services", href: "/services/goods-and-service-tax" },
    { label: "Audit & Assurance", href: "/services/audit-and-assurance" },
    { label: "ROC Compliances", href: "/services/roc-compliances" },
    { label: "Startup Registration", href: "/services/startup-registration" },
    { label: "FEMA", href: "/services/fema" },
  ];

  const importantPortals = usefulLinks
    .flatMap((cat) => cat.links)
    .slice(0, 6);

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                KA
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">{siteConfig.firmName}</div>
                <div className="text-xs text-gray-300">{siteConfig.firmTagline}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {siteConfig.firmDescription}
            </p>
            <div className="flex gap-3">
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-secondary transition-colors">f</a>
              )}
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-secondary transition-colors">in</a>
              )}
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-secondary transition-colors">X</a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-secondary transition-colors">ig</a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-secondary">Connect With Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                <span>{siteConfig.contact.address.full}</span>
              </li>
              {siteConfig.contact.phone.map((phone) => (
                <li key={phone} className="flex items-center gap-3 text-sm text-gray-300">
                  <Phone size={16} className="shrink-0 text-secondary" />
                  <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={16} className="shrink-0 text-secondary" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium text-sm mb-2 text-secondary">Important Portals</h4>
              <ul className="space-y-1">
                {importantPortals.map((portal) => (
                  <li key={portal.url}>
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-xs hover:text-white transition-colors"
                    >
                      {portal.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteConfig.firmName}. All rights reserved.</p>
          <p>Designed & Developed with professionalism</p>
        </div>
      </div>
    </footer>
  );
}
