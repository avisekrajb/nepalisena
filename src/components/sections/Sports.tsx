import { DropdownSection } from "./DropdownSection";
import { Trophy, Calendar, Users, Medal } from "lucide-react";

export function Sports() {
  const events = [
    {
      title: "Veterans Sports Tournament",
      date: "December 2024",
      type: "Tournament",
      participants: 120,
      winner: "Team Kathmandu",
    },
    {
      title: "Annual Marathon",
      date: "November 2024",
      type: "Marathon",
      participants: 250,
      winner: "Col. Ram Thapa",
    },
    {
      title: "Friendly Cricket Match",
      date: "October 2024",
      type: "Cricket",
      participants: 60,
      winner: "Team Pokhara",
    },
  ];

  return (
    <DropdownSection title="Sports Events">
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <Trophy className="h-8 w-8 text-army" />
                <div>
                  <h3 className="text-xl font-semibold text-army">{event.title}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {event.participants} participants
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                {event.type}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-army">
              <Medal className="h-4 w-4" />
              <span className="font-medium">Winner: {event.winner}</span>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}