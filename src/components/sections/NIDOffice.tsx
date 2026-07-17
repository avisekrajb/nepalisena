import { DropdownSection } from "./DropdownSection";
import { Building, Mail, Phone, Globe, Shield } from "lucide-react";

export function NIDOffice() {
  const info = {
    name: "Office of NID Nepal",
    address: "Kathmandu, Nepal",
    phone: "+977-1-4433221",
    email: "info@nid.gov.np",
    website: "www.nid.gov.np",
    description: "National Identification Card Office - Government of Nepal.",
  };

  return (
    <DropdownSection title="Office of NID Nepal">
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="flex items-start gap-4">
          <Shield className="h-12 w-12 text-army flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-bold text-army">{info.name}</h3>
            <p className="text-gray-600 mt-2">{info.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Building className="h-4 w-4" />
                {info.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                {info.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                {info.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe className="h-4 w-4" />
                <a href={info.website} target="_blank" rel="noopener noreferrer" className="text-army hover:underline">
                  {info.website}
                </a>
              </div>
            </div>
            <button className="mt-4 bg-army text-white px-6 py-2 rounded-lg text-sm hover:bg-army/90 transition-colors">
              Visit Official Website
            </button>
          </div>
        </div>
      </div>
    </DropdownSection>
  );
}