import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Container, SectionTitle } from "../ui/Section";
import { gallery, galleryCategories } from "@/data/site";

// Generate gallery items from 3.jpeg to 20.jpeg, excluding single-person photos (3 and 19)
const excludedPhotoNumbers = [3, 19];
const generateGalleryItems = () => {
  const items = [];
  const categories = ["Events", "Meetings", "Community Service"];

  for (let i = 3; i <= 20; i++) {
    if (excludedPhotoNumbers.includes(i)) continue;
    const category = categories[i % categories.length];
    items.push({
      src: `/${i}.jpeg`,
      cat: category,
      h: i % 3 === 0 ? "320px" : i % 3 === 1 ? "280px" : "360px",
    });
  }
  return items;
};

export function Gallery() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  // Use generated items instead of imported gallery
  const galleryItems = generateGalleryItems();
  const items = cat === "All" ? galleryItems : galleryItems.filter((g) => g.cat === cat);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-muted">
      <Container>
        <SectionTitle
          eyebrow="Gallery"
          title="तस्बिर संग्रह"
          desc="विभिन्न कार्यक्रम, बैठक र सामुदायिक सेवाका दृश्यहरू।"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                cat === c
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]"
        >
          <AnimatePresence>
            {items.map((g, i) => (
              <motion.div
                layout
                key={g.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                className="mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-white border border-border cursor-pointer group"
                onClick={() => setLightbox(g.src)}
                style={{ minHeight: g.h }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.cat}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ minHeight: g.h }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/fallback.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/30 transition-colors duration-300 flex items-end p-4">
                    <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-white text-xs font-semibold uppercase tracking-wider">
                      {g.cat}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm grid place-items-center p-5 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/fallback.jpg";
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
