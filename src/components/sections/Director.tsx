import { DropdownSection } from "./DropdownSection";
import { Users, Award, BookOpen } from "lucide-react";

export function Director() {
  const directors = [
    {
      name: "Maj. Gen. Krishna Sharma",
      role: "Director of Operations",
      expertise: "Strategic Planning",
    },
    {
      name: "Brig. Gen. Sita Gurung",
      role: "Director of Welfare",
      expertise: "Veteran Affairs",
    },
    {
      name: "Col. Hari Prasad Adhikari",
      role: "Director of Training",
      expertise: "Professional Development",
    },
  ];

  return (
    <DropdownSection title="Board of Directors">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {directors.map((director) => (
          <div key={director.name} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-8 w-8 text-army" />
              <div>
                <h3 className="font-semibold text-army">{director.name}</h3>
                <p className="text-sm text-gray-600">{director.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Award className="h-4 w-4" />
              <span>Expertise: {director.expertise}</span>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}