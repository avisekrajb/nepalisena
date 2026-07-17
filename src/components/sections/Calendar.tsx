import { DropdownSection } from "./DropdownSection";
import { Calendar, Clock, MapPin } from "lucide-react";

export function Calendar() {
  const events = [
    {
      date: "December 20, 2024",
      title: "Annual Veterans' Gathering",
      location: "Kathmandu",
      time: "10:00 AM",
    },
    {
      date: "January 15, 2025",
      title: "Security Symposium",
      location: "Pokhara",
      time: "9:00 AM",
    },
    {
      date: "February 10, 2025",
      title: "Diplomatic Reception",
      location: "Kathmandu",
      time: "6:00 PM",
    },
  ];

  return (
    <DropdownSection title="Event Calendar">
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-center bg-army/10 p-3 rounded-lg min-w-[80px]">
                <div className="text-2xl font-bold text-army">
                  {event.date.split(",")[0].split(" ")[1]}
                </div>
                <div className="text-xs text-gray-600">
                  {event.date.split(",")[0].split(" ")[0]}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-army">{event.title}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {event.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}