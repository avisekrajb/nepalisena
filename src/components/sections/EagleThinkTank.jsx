// src/components/sections/EagleThinkTank.jsx
export function EagleThinkTank({ id }) {
    return (
      <section id={id} className="py-16 bg-gray-50 scroll-mt-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-army mb-6">
              Eagle Think Tank News
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Latest updates and insights from the Eagle Think Tank initiative.
              </p>
              <div className="space-y-4 mt-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-army">News Article 1</h4>
                  <p className="text-gray-600 text-sm">Published: July 17, 2026</p>
                  <p className="text-gray-700 mt-2">Brief description of the news article...</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-army">News Article 2</h4>
                  <p className="text-gray-600 text-sm">Published: July 16, 2026</p>
                  <p className="text-gray-700 mt-2">Brief description of the news article...</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }