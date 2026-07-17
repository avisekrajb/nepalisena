import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Award } from "lucide-react";
import { Container, SectionTitle } from "../ui/Section";
import { members, type MemberCategory } from "@/data/site";

const filters: ("All" | MemberCategory)[] = [
  "All",
  "Executive Committee",
  "Life Members",
  "Veterans",
  "General Members",
];

export function Members() {
  const [q, setQ] = useState("");
  const [f, setF] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    return members.filter((m) => {
      const matchF = f === "All" || m.category === f;
      const matchQ =
        !q ||
        m.name.toLowerCase().includes(q.toLowerCase()) ||
        m.district.toLowerCase().includes(q.toLowerCase()) ||
        m.branch.toLowerCase().includes(q.toLowerCase());
      return matchF && matchQ;
    });
  }, [q, f]);

  return (
    <section id="members" className="py-24 sm:py-32 bg-muted">
      <Container>
        <SectionTitle
          eyebrow="Our Members"
          title="सदस्य निर्देशिका"
          desc="हाम्रो संस्थाका सम्मानित सदस्यहरू — देशका विभिन्न जिल्ला र सैन्य शाखाबाट।"
        />

        <div className="mt-10 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, district, or branch…"
              className="w-full h-12 pl-11 pr-4 rounded-xl bg-white border border-border text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((cat) => (
              <button
                key={cat}
                onClick={() => setF(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                  f === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((m) => (
              <motion.article
                layout
                key={m.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="card-surface p-5 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-full object-cover border-2 border-border shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
                      {m.category}
                    </div>
                    <h3 className="mt-0.5 font-semibold leading-snug text-[0.95rem]">{m.name}</h3>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{m.district}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Award className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{m.years} yrs</span>
                  </div>
                  <div className="col-span-2 text-muted-foreground truncate">{m.branch}</div>
                </div>
                <span className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/8 text-primary text-[0.7rem] font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {m.status}
                </span>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">
            No members match your search.
          </div>
        )}
      </Container>
    </section>
  );
}
