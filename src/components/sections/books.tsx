import { DropdownSection } from "./DropdownSection";
import { BookOpen, Star, Users } from "lucide-react";

export function Books() {
  const books = [
    {
      title: "Nepal's Security Challenges",
      author: "Col. Ram Thapa",
      year: "2024",
      description: "A comprehensive analysis of Nepal's security landscape.",
    },
    {
      title: "Veteran Leadership",
      author: "Maj. Gen. Krishna Sharma",
      year: "2023",
      description: "Lessons in leadership from Nepal's military veterans.",
    },
    {
      title: "Peace and Diplomacy",
      author: "Brig. Gen. Sita Gurung",
      year: "2023",
      description: "Nepal's role in international peacekeeping efforts.",
    },
  ];

  return (
    <DropdownSection title="Publications - Books">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((book) => (
          <div key={book.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start gap-3">
              <BookOpen className="h-8 w-8 text-army flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-army">{book.title}</h3>
                <p className="text-sm text-gray-600">By {book.author}</p>
                <p className="text-sm text-gray-500">{book.year}</p>
                <p className="text-gray-600 mt-2 text-sm">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}