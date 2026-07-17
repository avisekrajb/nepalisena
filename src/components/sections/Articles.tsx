import { DropdownSection } from "./DropdownSection";
import { FileText, Calendar, User } from "lucide-react";

export function Articles() {
  const articles = [
    {
      title: "The Future of Veteran Welfare",
      author: "Editorial Team",
      date: "November 2024",
      excerpt: "Exploring new approaches to veteran welfare in the 21st century.",
    },
    {
      title: "Military Diplomacy in South Asia",
      author: "Dr. Ram Thapa",
      date: "October 2024",
      excerpt: "The role of military diplomacy in regional stability.",
    },
  ];

  return (
    <DropdownSection title="Articles">
      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-army flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-army">{article.title}</h3>
                <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{article.excerpt}</p>
                <button className="mt-2 text-gold hover:text-gold/80 font-medium transition-colors">
                  Read Full Article →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}
