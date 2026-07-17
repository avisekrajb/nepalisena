import { useState } from "react";
import { Container } from "../ui/Section";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is NNEA?",
      answer:
        "NNEA (Nepal National Ex-Army Association) is a non-profit organization dedicated to serving the interests of retired army personnel and their families in Nepal.",
    },
    {
      question: "Who can become a member of NNEA?",
      answer:
        "All retired army personnel who have served in the Nepal Army are eligible for membership. This includes officers, JCOs, and other ranks.",
    },
    {
      question: "What services does NNEA provide?",
      answer:
        "NNEA provides welfare support, healthcare assistance, social networking opportunities, professional development programs, and representation for members' interests.",
    },
    {
      question: "How can I contact NNEA?",
      answer:
        "You can contact us through our office in Kathmandu, by phone at +977-1-1234567, or by email at info@nnea.org.np.",
    },
    {
      question: "Does NNEA organize events?",
      answer:
        "Yes, NNEA regularly organizes events including annual general meetings, sports events, health camps, and social gatherings for members and their families.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-army mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-army">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-army transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
