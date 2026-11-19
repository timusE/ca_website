import Link from "next/link";
import * as Icons from "lucide-react";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  variant?: "grid" | "compact";
}

export default function ServiceCard({ service, variant = "grid" }: ServiceCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<any>>)[service.icon] || Icons.Briefcase;

  if (variant === "compact") {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group"
      >
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
          <IconComponent size={20} className="text-primary group-hover:text-white" />
        </div>
        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">
          {service.title}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
        <IconComponent
          size={28}
          className="text-primary group-hover:text-white transition-colors"
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
        {service.shortDescription}
      </p>
      <div className="mt-4 text-primary font-medium text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        Learn More →
      </div>
    </Link>
  );
}
