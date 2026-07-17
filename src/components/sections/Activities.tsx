import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { Container, SectionTitle } from "../ui/Section";
import { activities } from "@/data/site";

export function Activities() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <Container>
        <SectionTitle
          eyebrow="Recent Activities"
          title="हालैका गतिविधिहरू"
          desc="समाज र सदस्य परिवारका लागि सञ्चालित हाम्रा प्रमुख कार्यक्रमहरू।"
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="card-surface overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[0.7rem] font-semibold text-primary">
                  <Calendar className="h-3 w-3" /> {a.date}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug">{a.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground shrink-0 transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
