import { DropdownSection } from "./DropdownSection";
import { Flag, Heart, Star } from "lucide-react";

export function Mission() {
  return (
    <DropdownSection title="Our Mission">
      <div className="space-y-6">
        <p className="text-gray-700 text-lg">
          Our mission is to ensure the well-being, dignity, and empowerment of Nepal's ex-army
          personnel through comprehensive support programs, advocacy, and community engagement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-army/5 p-6 rounded-lg">
            <Flag className="h-8 w-8 text-army mb-3" />
            <h4 className="font-semibold">Service</h4>
            <p className="text-gray-600 text-sm">Providing essential services to veterans</p>
          </div>
          <div className="bg-army/5 p-6 rounded-lg">
            <Heart className="h-8 w-8 text-army mb-3" />
            <h4 className="font-semibold">Care</h4>
            <p className="text-gray-600 text-sm">Caring for our heroes and their families</p>
          </div>
          <div className="bg-army/5 p-6 rounded-lg">
            <Star className="h-8 w-8 text-army mb-3" />
            <h4 className="font-semibold">Excellence</h4>
            <p className="text-gray-600 text-sm">Striving for excellence in all we do</p>
          </div>
        </div>
      </div>
    </DropdownSection>
  );
}
