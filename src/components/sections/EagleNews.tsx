import { DropdownSection } from "./DropdownSection";
import { Newspaper, Calendar, ChevronRight } from "lucide-react";

export function EagleNews() {
  const news = [
    {
      title: "Eagle Think Tank Summit 2024",
      date: "December 15, 2024",
      summary: "Annual security and strategic affairs summit concluded successfully.",
    },
    {
      title: "Veterans Employment Initiative",
      date: "December 10, 2024",
      summary: "New program launched to support veteran employment opportunities.",
    },
    {
      title: "Strategic Partnership Announcement",
      date: "December 5, 2024",
      summary: "NNEA forms strategic partnership with international veteran organizations.",
    },
  ];

  return (
    <DropdownSection title="Eagle Think Tank News">
      <div className="space-y-4">
        {news.map((item) => (
          <div key={item.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <Newspaper className="h-5 w-5 text-army mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-army">{item.title}</h3>
                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{item.summary}</p>
                <button className="text-army text-sm font-medium flex items-center gap-1 mt-2 hover:underline">
                  Read More <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}