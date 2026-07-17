import { DropdownSection } from "./DropdownSection";
import { Globe, Handshake, Flag, Users } from "lucide-react";

export function Diplomacy() {
  const diplomaticActivities = [
    {
      icon: Globe,
      title: "International Relations",
      description: "Building bridges with international veteran organizations.",
    },
    {
      icon: Handshake,
      title: "Peace Initiatives",
      description: "Promoting peace and stability through diplomatic engagement.",
    },
    {
      icon: Flag,
      title: "UN Peacekeeping",
      description: "Supporting Nepal's commitment to UN peacekeeping missions.",
    },
    {
      icon: Users,
      title: "Veteran Diplomacy",
      description: "Fostering international cooperation among veteran communities.",
    },
  ];

  return (
    <DropdownSection title="Diplomatic Activities">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {diplomaticActivities.map((activity) => (
          <div key={activity.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <activity.icon className="h-8 w-8 text-army" />
              <h3 className="text-xl font-semibold text-army">{activity.title}</h3>
            </div>
            <p className="text-gray-600 mt-3">{activity.description}</p>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}