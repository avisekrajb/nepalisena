// src/components/sections/ImportantLinks.jsx
import { Container } from "../ui/Section";
import { ExternalLink } from "lucide-react";

const linksData = {
  "office-president": {
    title: "Office of President Nepal",
    description: "Official website of the President of Nepal",
    url: "https://president.gov.np"
  },
  "office-pm": {
    title: "Office of Prime Minister",
    description: "Official website of the Prime Minister of Nepal",
    url: "https://opmcm.gov.np"
  },
  "office-nid": {
    title: "Office of NID Nepal",
    description: "National Identity Card Management System",
    url: "https://nid.gov.np"
  },
  "nepal-army": {
    title: "Nepal Army",
    description: "Official website of Nepal Army",
    url: "https://nepalarmy.mil.np"
  },
  "apf-nepal": {
    title: "APF Nepal",
    description: "Armed Police Force Nepal",
    url: "https://apf.gov.np"
  }
};

export function ImportantLinks({ id }) {
  const linkData = linksData[id];
  
  if (!linkData) return null;
  
  return (
    <section id={id} className="py-16 bg-gray-50 scroll-mt-28">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-display font-semibold text-army mb-2">
              {linkData.title}
            </h3>
            <p className="text-gray-600 mb-4">{linkData.description}</p>
            <a
              href={linkData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-army hover:text-army-dark font-medium transition-colors"
            >
              Visit Website
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}