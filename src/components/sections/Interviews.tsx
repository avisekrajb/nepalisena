import { DropdownSection } from "./DropdownSection";
import { Mic, Calendar, User, Play } from "lucide-react";

export function Interviews() {
  const interviews = [
    {
      title: "Veteran Leadership Insights",
      guest: "Col. Ram Thapa",
      date: "December 2024",
      description: "Discussion on leadership lessons from military service.",
    },
    {
      title: "Security Challenges in South Asia",
      guest: "Maj. Gen. Krishna Sharma",
      date: "November 2024",
      description: "Expert analysis of regional security dynamics.",
    },
    {
      title: "Women in Defense",
      guest: "Brig. Gen. Sita Gurung",
      date: "November 2024",
      description: "Breaking barriers and leading in the defense sector.",
    },
  ];

  return (
    <DropdownSection title="Interviews">
      <div className="space-y-6">
        {interviews.map((interview) => (
          <div key={interview.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="bg-army/10 p-3 rounded-full">
                <Mic className="h-6 w-6 text-army" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-army">{interview.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {interview.guest}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {interview.date}
                      </span>
                    </div>
                  </div>
                  <button className="bg-army text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-army/90 transition-colors">
                    <Play className="h-4 w-4" />
                    Listen
                  </button>
                </div>
                <p className="text-gray-600 mt-2">{interview.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}