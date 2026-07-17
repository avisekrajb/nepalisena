import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container, SectionTitle } from "../ui/Section";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="py-24 sm:py-32 bg-white">
      <Container>
        <SectionTitle eyebrow="Voices" title="सदस्यहरूको अनुभव" />

        <div className="mt-14 max-w-3xl mx-auto">
          <div className="relative card-surface p-8 sm:p-12 text-center min-h-[280px] flex flex-col justify-center">
            <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/15" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg sm:text-xl leading-relaxed text-foreground font-medium">
                  “{t.quote}”
                </p>
                <div className="mt-8">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Go to slide ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "bg-primary w-8" : "bg-border w-2"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((v) => (v + 1) % testimonials.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
