import { DropdownSection } from "./DropdownSection";
import { Award, Calendar, CheckCircle } from "lucide-react";

export function Results() {
  const results = [
    {
      title: "Leadership Training Program Results",
      date: "December 2024",
      status: "Completed",
      participants: 45,
    },
    {
      title: "Security Certification Exam",
      date: "November 2024",
      status: "Published",
      participants: 120,
    },
    {
      title: "Veterans Skills Assessment",
      date: "November 2024",
      status: "Available",
      participants: 78,
    },
  ];

  return (
    <DropdownSection title="Results">
      <div className="grid grid-cols-1 gap-6">
        {results.map((result) => (
          <div key={result.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-army mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-army">{result.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {result.date}
                    </span>
                    <span>{result.participants} Participants</span>
                  </div>
                </div>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                {result.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}