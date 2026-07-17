import { DropdownSection } from "./DropdownSection";
import { Users, Award, Star, Target } from "lucide-react";

export function Leadership() {
  const programs = [
    {
      icon: Users,
      title: "Leadership Training",
      description: "Comprehensive leadership development programs for veterans.",
    },
    {
      icon: Award,
      title: "Mentorship Program",
      description: "Connecting experienced leaders with young professionals.",
    },
    {
      icon: Star,
      title: "Excellence Awards",
      description: "Recognizing outstanding leadership in the veteran community.",
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Developing strategic leadership capabilities for organizational success.",
    },
  ];

  return (
    <DropdownSection title="Leadership Programs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((program) => (
          <div key={program.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <program.icon className="h-8 w-8 text-army" />
              <h3 className="text-xl font-semibold text-army">{program.title}</h3>
            </div>
            <p className="text-gray-600 mt-3">{program.description}</p>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}