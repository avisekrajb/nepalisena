import { DropdownSection } from "./DropdownSection";
import { FileText, Calendar, AlertCircle } from "lucide-react";

export function GONNotices() {
  const notices = [
    {
      title: "Government Notice - Pension Update",
      date: "December 15, 2024",
      type: "Pension",
      description: "Revision of pension benefits for retired military personnel.",
    },
    {
      title: "Veterans Welfare Fund",
      date: "December 10, 2024",
      type: "Welfare",
      description: "New welfare fund established for ex-army personnel.",
    },
    {
      title: "Policy Update - Veterans Employment",
      date: "December 5, 2024",
      type: "Policy",
      description: "New government policy to support veteran employment opportunities.",
    },
  ];

  return (
    <DropdownSection title="GON Notices">
      <div className="space-y-6">
        {notices.map((notice) => (
          <div key={notice.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <FileText className="h-6 w-6 text-army mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-army">{notice.title}</h3>
                  <p className="text-gray-600 mt-2">{notice.description}</p>
                </div>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
                <AlertCircle className="h-3 w-3" />
                {notice.type}
              </span>
            </div>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {notice.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}
