import { DropdownSection } from "./DropdownSection";
import { User, Mail, Phone } from "lucide-react";

export function ManagingDirector() {
  return (
    <DropdownSection title="Managing Director">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/3">
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="w-48 h-48 bg-army/10 rounded-full mx-auto flex items-center justify-center">
              <User className="h-24 w-24 text-army" />
            </div>
            <h3 className="text-xl font-bold text-army mt-4">Col. Ram Bahadur Thapa</h3>
            <p className="text-gray-600">Managing Director</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4 text-army" />
                <span>ram.thapa@nnea.org.np</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-army" />
                <span>+977-1-1234567</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="text-gray-700">
            Col. Ram Bahadur Thapa brings over 30 years of distinguished service in the Nepal Army. 
            As the Managing Director of NNEA, he leads the organization with vision, dedication, and 
            unwavering commitment to the welfare of ex-army personnel.
          </p>
          <div className="mt-4 bg-army/5 p-4 rounded-lg">
            <h4 className="font-semibold text-army">Vision for NNEA</h4>
            <p className="text-gray-600 text-sm mt-2">
              "To create a self-sustaining ecosystem that supports our veterans through their transition 
              from military to civilian life, ensuring they lead dignified and fulfilling lives."
            </p>
          </div>
        </div>
      </div>
    </DropdownSection>
  );
}