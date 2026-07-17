// src/components/sections/Pillar2Diplomacy.jsx
export function Pillar2Diplomacy({ id }) {
    return (
      <section id={id} className="py-16 bg-gray-50 scroll-mt-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-army mb-6">
              Pillar 2: Diplomacy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Our second pillar focuses on diplomatic initiatives and international 
                relations involving ex-army personnel.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li>International veterans' cooperation</li>
                <li>Peacekeeping initiatives</li>
                <li>Cross-border collaboration</li>
                <li>Diplomatic exchanges</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    );
  }