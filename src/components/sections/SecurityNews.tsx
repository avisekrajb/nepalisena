import { DropdownSection } from "./DropdownSection";
import { Shield, Calendar, AlertTriangle } from "lucide-react";

export function SecurityNews() {
  const news = [
    {
      title: "Border Security Enhancement",
      date: "December 14, 2024",
      type: "Security Update",
      description: "New border surveillance systems deployed to strengthen national security.",
    },
    {
      title: "Cybersecurity Training Program",
      date: "December 11, 2024",
      type: "Training",
      description: "Advanced cybersecurity training for government agencies completed successfully.",
    },
    {
      title: "National Security Summit",
      date: "December 8, 2024",
      type: "Event",
      description: "Annual national security summit brings together defense experts and policymakers.",
    },
  ];

  return (
    <DropdownSection title="Security News">
      <div className="space-y-6">
        {news.map((item) => (
          <div key={item.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-army">{item.title}</h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1">
                <Shield className="h-3 w-3" />
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