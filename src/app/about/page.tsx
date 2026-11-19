import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { team, firmHistory } from "@/data/team";
import Stats from "@/components/Stats";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.firmName} — our history, mission, vision, and team of expert Chartered Accountants.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-3">About Us</h1>
          <p className="text-gray-200 text-lg max-w-2xl">
            Know more about {siteConfig.firmName} and our commitment to professional excellence.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {siteConfig.firmName}
              </h2>
              <div className="w-16 h-1 bg-secondary mb-6 rounded-full" />
              <p className="text-gray-600 leading-relaxed mb-4">
                {firmHistory.aboutText}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Established in <strong>{firmHistory.established}</strong>, the firm has been serving
                clients with dedication and professionalism. We cater to a diverse clientele
                including startups, SMEs, corporates, NRIs, and high-net-worth individuals.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">{firmHistory.mission}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">{firmHistory.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Core Values</h2>
            <p className="text-gray-500">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {firmHistory.values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
              >
                <CheckCircle size={22} className="text-secondary shrink-0" />
                <span className="font-medium text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Team Section — KM Agarwal horizontal style */}
      <section id="team" className="scroll-mt-28">
        <div className="bg-gray-100 border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          </div>
        </div>
        <div className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {team.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
