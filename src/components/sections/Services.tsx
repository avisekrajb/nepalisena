import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  GraduationCap,
  Siren,
  Droplet,
  LifeBuoy,
  Home,
} from "lucide-react";
import { Container, SectionTitle } from "../ui/Section";
import { services } from "@/data/site";

const iconMap = {
  HeartHandshake,
  ShieldCheck,
  Stethoscope,
  GraduationCap,
  Siren,
  Droplet,
  LifeBuoy,
  Home,
} as const;

export function Services() {
  return (
    <section className="py-24 sm:py-32 bg-muted">
      <Container>
        <SectionTitle
          eyebrow="What We Do"
          title="सेवाका क्षेत्रहरू"
          desc="भूपू सैनिक परिवार र समुदायको हितका लागि निरन्तर सञ्चालित प्रमुख कार्यक्रम।"
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                whileHover={{ y: -6 }}
                className="card-surface p-6 hover:border-primary/40 group"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
