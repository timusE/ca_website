import { Shield, Clock, Users, Award, HeadphonesIcon, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We uphold the highest standards of professional ethics and confidentiality in every engagement.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We ensure all compliance deadlines are met well in advance, giving you peace of mind.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of qualified professionals brings deep expertise across taxation, audit, and corporate law.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Every deliverable goes through rigorous quality checks to maintain professional excellence.",
  },
  {
    icon: HeadphonesIcon,
    title: "Client-Centric",
    description: "We provide personalized attention and customized solutions tailored to your specific needs.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "We don't just handle compliance — we help you plan strategically for sustainable business growth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We combine professional expertise with a client-first approach to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <reason.icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
