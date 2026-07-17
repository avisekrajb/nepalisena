import { DropdownSection } from "./DropdownSection";
import { Video, Calendar, Play } from "lucide-react";

export function Videos() {
  const videos = [
    {
      title: "NNEA Annual Report 2024",
      date: "December 2024",
      duration: "15:30",
      thumbnail: "Report video",
    },
    {
      title: "Veterans' Day Celebration",
      date: "November 2024",
      duration: "22:45",
      thumbnail: "Celebration video",
    },
    {
      title: "Security Awareness Campaign",
      date: "October 2024",
      duration: "18:20",
      thumbnail: "Awareness video",
    },
  ];

  return (
    <DropdownSection title="Video Gallery">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.title} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
            <div className="relative h-48 bg-gradient-to-br from-army/30 to-army/10 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-army fill-army" />
                </div>
              </div>
              <Video className="h-16 w-16 text-army/20" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-army">{video.title}</h3>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {video.date}
                </span>
                <span className="flex items-center gap-1">
                  <Video className="h-3 w-3" />
                  {video.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}