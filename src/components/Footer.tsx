import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { Container } from "./ui/Section";
import { nav, contact } from "@/data/site";
import logoRight from "@/assets/logo1.jpeg";

const useful = [
  { label: "Membership", href: "#contact" },
  { label: "Community Programs", href: "#about" },
  { label: "Blood Donation", href: "#about" },
  { label: "Volunteer", href: "#contact" },
];

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <footer className="bg-[#FFD700] text-army/90">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl overflow-hidden bg-white shadow-md ring-2 ring-army/20">
                <img
                  src={logoRight}
                  alt="Nepal National Ex-Army Association Logo"
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <div className="font-display font-extrabold text-army text-lg leading-tight">
                  नेपाल राष्ट्रिय भूतपूर्व सैनिक संघ
                </div>
                <div className="text-[0.65rem] font-semibold tracking-wider uppercase text-army/70">
                  Nepal National Ex-Army Association
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed max-w-sm text-army/80">
              भूपू सैनिकहरूको एकता, कल्याण र सामाजिक सेवामा समर्पित एक स्वयंसेवी संस्था — सम्मान,
              अनुशासन र राष्ट्रसेवाको निरन्तर यात्रामा।
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                {
                  label: "Facebook",
                  path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
                },
                {
                  label: "YouTube",
                  path: "M23.5 7.5s-.23-1.63-.94-2.35c-.9-.94-1.9-.95-2.37-1C16.9 3.9 12 3.9 12 3.9s-4.9 0-8.19.25c-.46.05-1.47.06-2.37 1C.73 5.87.5 7.5.5 7.5S.25 9.4.25 11.3v1.4c0 1.9.25 3.8.25 3.8s.23 1.63.94 2.35c.9.94 2.08.91 2.6 1.01C6 20.1 12 20.15 12 20.15s4.9-.01 8.19-.26c.46-.05 1.47-.06 2.37-1 .71-.72.94-2.35.94-2.35s.25-1.9.25-3.8v-1.4c0-1.9-.25-3.84-.25-3.84ZM9.75 15.02V8.48l6.3 3.28-6.3 3.26Z",
                },
                {
                  label: "LinkedIn",
                  path: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg bg-army/10 text-army hover:bg-army hover:text-white transition-all duration-300"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" items={nav} className="lg:col-span-2" />
          <FooterCol title="Useful Links" items={useful} className="lg:col-span-2" />

          <div className="lg:col-span-4">
            <h4 className="font-display font-semibold text-army text-base">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-army/70" />
                <span className="text-army/80">{contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-army/70" />
                <span className="text-army/80">{contact.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-army/70" />
                <span className="text-army/80">{contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-army/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-army/60">
          <div>
            © {new Date().getFullYear()} Nepal National Ex-Army Association. All rights reserved.
          </div>
          <div className="font-medium">Built with honor · सेवा · समर्पण</div>
        </div>
      </Container>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-army text-white shadow-elevated hover:bg-army/80 transition"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  className = "",
}: {
  title: string;
  items: { label: string; href: string }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="font-display font-semibold text-army text-base">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              className="text-army/70 hover:text-army transition-colors duration-200"
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
