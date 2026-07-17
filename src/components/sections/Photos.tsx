import { DropdownSection } from "./DropdownSection";
import { Image, Calendar, Camera } from "lucide-react";

export function Photos() {
  const albums = [
    {
      title: "Annual Veterans Gathering 2024",
      date: "December 2024",
      count: 45,
      cover: "Veterans gathering",
    },
    {
      title: "Security Training Program",
      date: "November 2024",
      count: 32,
      cover: "Training session",
    },
    {
      title: "Diplomatic Reception",
      date: "October 2024",
      count: 28,
      cover: "Reception event",
    },
  ];

  return (
    <DropdownSection title="Photo Gallery">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((album) => (
          <div key={album.title} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-army/20 to-army/5 flex items-center justify-center">
              <Camera className="h-16 w-16 text-army/30" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-army">{album.title}</h3>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {album.date}
                </span>
                <span className="flex items-center gap-1">
                  <Image className="h-3 w-3" />
                  {album.count} photos
                </span>
              </div>
              <button className="mt-3 text-army text-sm font-medium hover:underline">
                View Album →
              </button>
            </div>
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}