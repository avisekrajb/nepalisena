import { DropdownSection } from "./DropdownSection";
import { Shield, Award, Users, Target } from "lucide-react";

export function NepalArmy() {
  const info = {
    name: "Nepal Army",
    motto: "Service, Sacrifice, Security",
    established: "1768",
    description:
      "The Nepal Army is the primary military force of Nepal, dedicated to protecting national sovereignty and territorial integrity.",
  };

  const features = [
    { icon: Shield, text: "National Defense" },
    { icon: Award, text: "UN Peacekeeping" },
    { icon: Users, text: "Disaster Response" },
    { icon: Target, text: "Nation Building" },
  ];

  return (
    <DropdownSection title="Nepal Army">
      <div className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex items-center gap-4">
            <Shield className="h-12 w-12 text-army" />
            <div>
              <h3 className="text-2xl font-bold text-army">{info.name}</h3>
              <p className="text-lg text-army/80 italic">"{info.motto}"</p>
              <p className="text-sm text-gray-500">Established: {info.established}</p>
            </div>
          </div>
        </div>

        <p className="text-gray-700">{info.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.text}
              className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200"
            >
              <feature.icon className="h-8 w-8 text-army mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </DropdownSection>
  );
}
