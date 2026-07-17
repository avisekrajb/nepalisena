import { DropdownSection } from "./DropdownSection";
import { Users, Target, Shield } from "lucide-react";

export function Introduction() {
  return (
    <DropdownSection title="Introduction">
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700">
          Nepal National Ex-Army Association (NNEA) is a premier organization dedicated to the welfare and 
          rehabilitation of retired military personnel. Established with the vision of serving those who 
          have served the nation, NNEA stands as a beacon of hope and support for our veterans.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Users className="h-12 w-12 text-army mx-auto mb-4" />
            <h3 className="font-semibold text-army">Community</h3>
            <p className="text-gray-600 text-sm">Strong network of veterans</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Target className="h-12 w-12 text-army mx-auto mb-4" />
            <h3 className="font-semibold text-army">Mission</h3>
            <p className="text-gray-600 text-sm">Dedicated to veteran welfare</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Shield className="h-12 w-12 text-army mx-auto mb-4" />
            <h3 className="font-semibold text-army">Security</h3>
            <p className="text-gray-600 text-sm">National security expertise</p>
          </div>
        </div>
      </div>
    </DropdownSection>
  );
}