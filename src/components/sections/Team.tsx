import { motion } from "framer-motion";
import { Container, SectionTitle } from "../ui/Section";
import { team } from "@/data/site";

export function Team() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <Container>
        <SectionTitle
          eyebrow="Leadership"
          title="कार्यकारी समिति"
          desc="अनुभव, अनुशासन र नेतृत्वले संस्थालाई निरन्तर अगाडि बढाइरहेको हाम्रो टोली।"
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="card-surface overflow-hidden group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {m.roleNp} · {m.role}
                </div>
                <h3 className="mt-1.5 text-lg font-semibold leading-snug">{m.nameNp}</h3>
                <p className="text-sm text-muted-foreground">{m.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
