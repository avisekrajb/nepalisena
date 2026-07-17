import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2, Heart } from "lucide-react";
import { Container, SectionTitle } from "../ui/Section";
import { timeline } from "@/data/site";

const pillars = [
  {
    icon: Target,
    title: "Mission",
    text: "भूपू सैनिकहरूको एकता, कल्याण र समाज सेवामार्फत राष्ट्र निर्माणमा योगदान।",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "मर्यादित, आत्मनिर्भर र सामाजिक जिम्मेवारीयुक्त भूपू सैनिक समुदाय।",
  },
  {
    icon: CheckCircle2,
    title: "Objectives",
    text: "कल्याण, सीप विकास, स्वास्थ्य सेवा, विपद् व्यवस्थापन र सामुदायिक कार्यक्रम।",
  },
  { icon: Heart, title: "Core Values", text: "अनुशासन, इमानदारी, देशभक्ति, सेवा र आपसी सम्मान।" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="eyebrow mb-3">About the Association</div>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-[1.15]">
              भूपू सैनिकहरूको साझा मञ्च —{" "}
              <span className="text-primary">सम्मान र सेवाको निरन्तरता</span>
            </h2>
            <div className="mt-6 space-y-4 text-[1.02rem] text-muted-foreground leading-relaxed">
              <p>
                नेपाल भूपू सैनिक संघ अवकाशप्राप्त नेपाली सैनिकहरूको एक स्वयंसेवी सामाजिक संस्था हो।
                लामो सैन्य सेवापछि पनि राष्ट्र र समाजप्रतिको जिम्मेवारीलाई निरन्तरता दिँदै यो
                संस्थाले एकजुट भूपू सैनिक परिवारको निर्माण गरेको छ।
              </p>
              <p>
                कल्याण, स्वास्थ्य सहयोग, सीप विकास, विपद् प्रतिकार्य, रक्तदान अभियान र सामुदायिक
                विकासजस्ता क्षेत्रमा संस्था सक्रिय रहँदै आएको छ। अवकाशप्राप्त सैनिक तथा उनका
                परिवारको जीवनयापन मर्यादित बनाउनु र देशको सामाजिक ताँदो थप बलियो बनाउनु हाम्रो
                प्राथमिकता हो।
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-surface p-5 hover:border-primary/30"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="eyebrow mb-6">Our Journey</div>
            <div className="relative pl-8 border-l-2 border-border">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pb-10 last:pb-0"
                >
                  <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full bg-white border-2 border-primary">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {t.year}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
