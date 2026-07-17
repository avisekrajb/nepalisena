// src/components/sections/Calendar.jsx
import { Container } from "../ui/Section";

export function Calendar({ id }) {
  return (
    <section id={id} className="py-16 bg-white scroll-mt-28">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-army mb-6">
            Event Calendar
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
              <div className="text-center min-w-[80px]">
                <div className="text-2xl font-bold text-army">17</div>
                <div className="text-sm text-gray-600">July 2026</div>
              </div>
              <div>
                <h4 className="font-semibold text-army">Event Name 1</h4>
                <p className="text-gray-600">Description of the event</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
              <div className="text-center min-w-[80px]">
                <div className="text-2xl font-bold text-army">20</div>
                <div className="text-sm text-gray-600">July 2026</div>
              </div>
              <div>
                <h4 className="font-semibold text-army">Event Name 2</h4>
                <p className="text-gray-600">Description of the event</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}