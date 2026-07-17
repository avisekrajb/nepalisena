import { DropdownSection } from "./DropdownSection";
import { Shield, AlertCircle, Users, Award } from "lucide-react";

export function APF() {
  const info = {
    name: "Armed Police Force Nepal",
    motto: "Service, Security, Discipline",
    established: "2001",
    description: "The Armed Police Force Nepal is a paramilitary force responsible for border security, counter-insurgency, and maintaining law and order.",
  };

  const roles = [
    { icon: Shield, text: "Border Security" },
    { icon: AlertCircle, text: "Counter-Insurgency" },
    { icon: Users, text: "Peacekeeping" },
    { icon: Award, text: "Disaster Management" },
  ];

  return (
    <DropdownSection title="APF Nepal">
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
          {roles.map((role) => (
            <div key={role.text} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200">
              <role.icon className="h-8 w-8 text-army mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-700">{role.text}</p>
            </div>
          ))}
        </div>
      </div>
    </DropdownSection>
  );
}