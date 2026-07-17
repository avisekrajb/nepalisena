import { DropdownSection } from "./DropdownSection";
import { Shield, Award, Lock, Eye } from "lucide-react";

export function Security() {
  const services = [
    {
      icon: Shield,
      title: "Security Consulting",
      description: "Expert security consulting services for organizations and government agencies.",
    },
    {
      icon: Lock,
      title: "Risk Assessment",
      description: "Comprehensive security risk assessment and mitigation strategies.",
    },
    {
      icon: Eye,
      title: "Surveillance",
      description: "Advanced surveillance and monitoring solutions.",
    },
    {
      icon: Award,
      title: "Training Programs",
      description: "Professional security training for personnel and organizations.",
    },
  ];

  return (
    <DropdownSection title="Security Services">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <service.icon className="h-8 w-8 text-army" />
              <h3 className="text-xl font-semibold text-army">{service.title}</h3>
            </div>
            <p className="text-gray-600 mt-3">{service.description}</p>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}