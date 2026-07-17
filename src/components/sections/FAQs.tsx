import { DropdownSection } from "./DropdownSection";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can join NNEA?",
      answer: "All retired and ex-army personnel of Nepal Army are eligible to join NNEA.",
    },
    {
      question: "What services does NNEA provide?",
      answer: "NNEA provides welfare services, training programs, security consulting, and diplomatic support to veterans.",
    },
    {
      question: "How can I contact NNEA?",
      answer: "You can contact us through our office in Kathmandu or via our official email and phone numbers listed on the Contact page.",
    },
  ];

  return (
    <DropdownSection title="Frequently Asked Questions">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
            >
              <span className="flex items-center gap-3 font-medium text-army">
                <HelpCircle className="h-5 w-5" />
                {faq.question}
              </span>
              <ChevronDown className={`h-5 w-5 text-army transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`} />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </DropdownSection>
  );
}