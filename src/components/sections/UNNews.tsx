import { DropdownSection } from "./DropdownSection";
import { Globe, Calendar, Flag } from "lucide-react";

export function UNNews() {
  const news = [
    {
      title: "Nepal's Contribution to UN Peacekeeping",
      date: "December 13, 2024",
      type: "Peacekeeping",
      description: "Nepal Army contingent receives recognition for exceptional service in UN missions.",
    },
    {
      title: "Sustainable Development Goals Progress",
      date: "December 9, 2024",
      type: "Development",
      description: "Nepal reports progress on SDG implementation with support from UN agencies.",
    },
    {
      title: "Human Rights Training Program",
      date: "December 6, 2024",
      type: "Training",
      description: "UN-supported human rights training for military personnel conducted successfully.",
    },
  ];

  return (
    <DropdownSection title="UN News">
      <div className="space-y-6">
        {news.map((item) => (
          <div key={item.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-army">{item.title}</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1">
                <Globe className="h-3 w-3" />
                {item.type}
              </span>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {item.date}
              </span>
            </div>
            <p className="text-gray-600 mt-3">{item.description}</p>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}