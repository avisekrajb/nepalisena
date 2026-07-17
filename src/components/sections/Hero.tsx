import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  HeartHandshake,
  HandHeart,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "../ui/Section";
import { whyJoin } from "@/data/site";

const iconMap = { Users, HeartHandshake, HandHeart, ShieldCheck } as const;

const personData = [
  { name: "Dr. Keshab Bahadur Bhandari", role: "President", image: "/20.jpeg" },
  { name: "Ram", role: "Director", image: "/1.jpeg" },
  { name: "Krishna", role: "Director", image: "/2.jpeg" },
  { name: "Hanuman", role: "Managing Director", image: "/2.jpeg" },
];

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  const [personIdx, setPersonIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  // Photos from 3.jpeg to 20.jpeg, excluding single-person photos (3 and 19)
  const excludedPhotoNumbers = [3, 19];
  const photos = Array.from({ length: 18 }, (_, i) => i + 3)
    .filter((n) => !excludedPhotoNumbers.includes(n))
    .map((n) => ({ id: n, src: `/${n}.jpeg` }));

  const next = () => {
    setSlide((p) => (p + 1) % photos.length);
  };

  const prev = () => {
    setSlide((p) => (p - 1 + photos.length) % photos.length);
  };

  const nextPerson = () => {
    setPersonIdx((p) => (p + 2) % personData.length);
  };

  const prevPerson = () => {
    setPersonIdx((p) => (p - 2 + personData.length) % personData.length);
  };

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    if (!hover) autoRef.current = setInterval(next, 4000);
  };

  useEffect(() => {
    if (!hover) autoRef.current = setInterval(next, 4000);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [hover]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title", { y: 40, opacity: 0, duration: 0.9 }, "-=0.3")
        .from(".hero-sub", { y: 24, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-badge", { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.3");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const visiblePersons = [
    personData[personIdx % personData.length],
    personData[(personIdx + 1) % personData.length],
  ];

  return (
    <section id="home" ref={rootRef} className="relative min-h-[100svh] flex flex-col bg-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=2000&q=80&auto=format&fit=crop"
          className="h-full w-full object-cover opacity-10"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,161,91,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="flex-1 flex items-center pt-40 pb-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Photo Slider */}
            <div className="relative w-full max-w-xl mx-auto lg:mr-auto">
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/80 backdrop-blur-sm border border-gray-200"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                  {photos.map((p) => (
                    <div key={p.id} className="min-w-full aspect-[4/3] relative bg-gray-50">
                      <img
                        src={p.src}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/fallback.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-3 py-1 rounded-full border border-gray-300">
                        {slide + 1} / {photos.length}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    prev();
                    resetAuto();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-gold text-gray-700 hover:text-white p-2 rounded-full transition-all z-10 border border-gray-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    next();
                    resetAuto();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-gold text-gray-700 hover:text-white p-2 rounded-full transition-all z-10 border border-gray-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSlide(i);
                        resetAuto();
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${slide === i ? "bg-gold w-6" : "bg-gray-300 hover:bg-gray-500"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-gray-700 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Nepal Bhupu Sainik Association
              </div>
              <h1 className="hero-title mt-6 font-display font-bold text-green-900 text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.1] tracking-tight">
                राष्ट्र सेवाबाट
                <br />
                <span className="text-green-900">समाज सेवातर्फ</span>
              </h1>

              <p className="hero-sub mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                नेपालका भूपू सैनिकहरूको एकता, सम्मान, सेवा र राष्ट्र निर्माणप्रतिको निरन्तर
                प्रतिबद्धता।
              </p>

              {/* Person Slider */}
              <div className="mt-8 relative">
                <div className="overflow-hidden">
                  <div className="grid grid-cols-2 gap-3">
                    <AnimatePresence mode="wait">
                      {visiblePersons.map((p, i) => (
                        <motion.div
                          key={`${p.name}-${personIdx}-${i}`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-3 hover:bg-gray-50 transition-all group"
                        >
                          <div className="flex flex-col items-center">
                            <div className="w-full aspect-square rounded-lg overflow-hidden bg-gold/10 border-2 border-gold/30 group-hover:border-gold/60 transition-all group-hover:scale-105">
                              <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = "none";
                                }}
                              />
                            </div>
                            <h4 className="mt-2 font-semibold text-sm text-blue-600 group-hover:text-blue-700 transition-colors">
                              {p.name}
                            </h4>
                            <p className="text-gray-500 text-xs font-medium">{p.role}</p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Person Slider Arrows */}
                <button
                  onClick={() => {
                    prevPerson();
                    resetAuto();
                  }}
                  className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-gold text-gray-700 hover:text-white p-1.5 rounded-full transition-all z-10 border border-gray-300 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    nextPerson();
                    resetAuto();
                  }}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-gold text-gray-700 hover:text-white p-1.5 rounded-full transition-all z-10 border border-gray-300 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Person Dots */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {Array.from({ length: Math.ceil(personData.length / 2) }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setPersonIdx(i * 2);
                        resetAuto();
                      }}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${Math.floor(personIdx / 2) === i ? "bg-gold w-4" : "bg-gray-300 hover:bg-gray-500"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Features */}
      <div className="relative pb-14">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyJoin.map((f) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={f.title}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="hero-badge rounded-2xl bg-white/95 backdrop-blur border border-gray-200 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-gold/40 transition-all"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
