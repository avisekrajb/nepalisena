import { DropdownSection } from "./DropdownSection";
import { FileText, Calendar, User } from "lucide-react";

export function Articles() {
  const articles = [
    {
      title: "The Future of National Security",
      author: "Col. Ram Thapa",
      date: "December 2024",
      summary: "An analysis of emerging security challenges and opportunities for Nepal.",
    },
    {
      title: "Veterans in Nation Building",
      author: "Maj. Gen. Krishna Sharma",
      date: "November 2024",
      summary: "The role of ex-army personnel in Nepal's development journey.",
    },
    {
      title: "Diplomacy and Defense",
      author: "Brig. Gen. Sita Gurung",
      date: "November 2024",
      summary: "Integrating diplomatic and defense strategies for national security.",
    },
  ];

  return (
    <DropdownSection title="Articles">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div key={article.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <FileText className="h-8 w-8 text-army flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-army">{article.title}</h3>
                <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{article.summary}</p>
                <button className="text-army text-sm font-medium hover:underline mt-2">
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}