import { DropdownSection } from "./DropdownSection";
import { Leaf, Calendar } from "lucide-react";

export function EnvironmentNews() {
  const news = [
    {
      title: "Green Nepal Initiative",
      date: "December 12, 2024",
      type: "Conservation",
      description: "Veterans lead tree plantation drive across seven provinces.",
    },
    {
      title: "Climate Change Awareness Campaign",
      date: "December 10, 2024",
      type: "Awareness",
      description: "Campaign to raise awareness about climate change impacts in Nepal.",
    },
  ];

  return (
    <DropdownSection title="Environment News">
      <div className="space-y-6">
        {news.map((item) => (
          <div key={item.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-army">{item.title}</h3>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-1">
                <Leaf className="h-3 w-3" />
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
