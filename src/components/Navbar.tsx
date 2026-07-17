import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Container } from "./ui/Section";
import logo from "@/assets/logo1.jpeg";
import logoRight from "@/assets/flag.png";

// Navigation configuration with dropdown items
export const navConfig = {
  about: {
    label: "About Us",
    href: "#about",
    dropdown: [
      { label: "Introduction", href: "#introduction", component: "Introduction" },
      { label: "Mission", href: "#mission", component: "Mission" },
      { label: "Managing Director", href: "#managing-director", component: "ManagingDirector" },
      { label: "Director", href: "#director", component: "Director" },
    ],
  },
  activities: {
    label: "Activities",
    href: "#activities",
    dropdown: [
      { label: "Security", href: "#security", component: "Security" },
      { label: "Diplomacy", href: "#diplomacy", component: "Diplomacy" },
      { label: "Leadership", href: "#leadership", component: "Leadership" },
    ],
  },
  news: {
    label: "News",
    href: "#news",
    dropdown: [
      { label: "Eagle Think Tank News", href: "#eagle-news", component: "EagleNews" },
      { label: "Security News", href: "#security-news", component: "SecurityNews" },
      { label: "UN News", href: "#un-news", component: "UNNews" },
      { label: "Environment News", href: "#environment-news", component: "EnvironmentNews" },
    ],
  },
  publication: {
    label: "Publications",
    href: "#publications",
    dropdown: [
      { label: "Books", href: "#books", component: "Books" },
      { label: "Articles", href: "#articles", component: "Articles" },
      { label: "Interviews", href: "#interviews", component: "Interviews" },
    ],
  },
  notices: {
    label: "Notices",
    href: "#notices",
    dropdown: [
      { label: "GON Notices", href: "#gon-notices", component: "GONNotices" },
      { label: "Results", href: "#results", component: "Results" },
    ],
  },
  gallery: {
    label: "Gallery",
    href: "#gallery",
    dropdown: [
      { label: "Photos", href: "#photos", component: "Photos" },
      { label: "Videos", href: "#videos", component: "Videos" },
    ],
  },
  events: {
    label: "Events",
    href: "#events",
    dropdown: [
      { label: "Calendar", href: "#calendar", component: "Calendar" },
      { label: "Sports", href: "#sports", component: "Sports" },
    ],
  },
  training: {
    label: "Training",
    href: "#training",
    dropdown: [],
  },
  security: {
    label: "Security Co.",
    href: "#security-co",
    dropdown: [],
  },
  asksmes: {
    label: "AskSMEs",
    href: "#asksmes",
    dropdown: [
      { label: "FAQs", href: "#faqs", component: "FAQs" },
    ],
  },
  links: {
    label: "Links",
    href: "#links",
    dropdown: [
      { label: "Office of President Nepal", href: "#president-office", component: "PresidentOffice" },
      { label: "Office of Prime Minister", href: "#pm-office", component: "PMOffice" },
      { label: "Office of NID Nepal", href: "#nid-office", component: "NIDOffice" },
      { label: "Nepal Army", href: "#nepal-army", component: "NepalArmy" },
      { label: "APF Nepal", href: "#apf", component: "APF" },
    ],
  },
  contact: {
    label: "Contact",
    href: "#contact",
    dropdown: [],
  },
};

type NavKey = keyof typeof navConfig;

interface NavbarProps {
  activeSection?: string | null;
  onSectionChange?: (section: string) => void;
}

export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  // Update URL hash without scrolling
  const updateURLHash = (hash: string) => {
    if (hash) {
      window.location.hash = hash;
    } else {
      // Remove hash for home
      const url = window.location.href.split('#')[0];
      window.history.replaceState(null, '', url);
    }
  };

  // Handle nav button click (parent items like "About Us", "Activities", etc.)
  const handleNavClick = (key: string, e: React.MouseEvent) => {
    e.preventDefault();
    const config = navConfig[key as NavKey];
    
    if (config.dropdown && config.dropdown.length > 0) {
      // Toggle dropdown
      setActiveDropdown(activeDropdown === key ? null : key);
    } else {
      // For items without dropdown (Training, Security Co., Contact, etc.)
      setActiveDropdown(null);
      if (onSectionChange) {
        onSectionChange(key);
      }
      // Update URL with section hash
      updateURLHash(config.href.replace('#', ''));
      const element = document.querySelector(config.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle dropdown item click - UPDATE URL AND SHOW SECTION
  const handleDropdownClick = (component: string, href: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // ✅ Update URL hash with the dropdown href
    updateURLHash(href.replace('#', ''));
    
    // ✅ Show the dropdown component
    if (onSectionChange) {
      onSectionChange(component);
    }
    
    setActiveDropdown(null);
    setMobileDropdown(null);
    setOpen(false);
    
    // Scroll to the section element
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const navItems = Object.entries(navConfig);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_2px_rgba(16,24,40,0.08)]" : ""
        }`}
      >
        {/* Top bar - Golden Yellow Background */}
        <div className="relative bg-[#FFD700] border-b-2 border-army/20 py-2">
          <Container className="flex h-24 items-center justify-between">
            <a 
              href="#home" 
              className="flex items-center gap-4 group" 
              onClick={(e) => {
                e.preventDefault();
                // Clear URL hash
                const url = window.location.href.split('#')[0];
                window.history.replaceState(null, '', url);
                if (onSectionChange) onSectionChange("Hero");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full overflow-hidden bg-white ring-2 ring-army/30 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:ring-army/60">
                <img src={logo} alt="Official logo" className="h-full w-full object-cover" />
              </span>
              <div className="min-w-0">
                <div className="font-display font-extrabold text-xl md:text-2xl leading-tight tracking-tight text-army">
                  नेपाल राष्ट्रिय भूतपूर्व सैनिक संघ
                </div>
                <div className="font-display font-semibold text-sm md:text-base leading-snug text-army/80">
                  Nepal National Ex - Army Association
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <span className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden bg-white ring-2 ring-army/30 shadow-md">
                  <img src={logoRight} alt="Secondary logo" className="h-full w-full object-cover" />
                </span>
              </div>

              <button
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden grid h-11 w-11 place-items-center rounded-lg text-army hover:bg-army/10 transition-colors"
                aria-label="Toggle menu"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </Container>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block bg-army shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] relative overflow-visible">
          <Container className="flex items-center justify-between overflow-visible">
            <div className="flex items-center gap-1 overflow-visible no-scrollbar flex-1">
              {navItems.map(([key, config]) => (
                <div
                  key={key}
                  className="relative group flex-shrink-0"
                  onMouseEnter={() => {
                    if (config.dropdown && config.dropdown.length > 0) {
                      setActiveDropdown(key);
                    }
                  }}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                  }}
                >
                  <button
                    onClick={(e) => handleNavClick(key, e)}
                    className={`relative px-3 py-2.5 text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap flex items-center gap-1.5 rounded-md hover:bg-white/10 ${
                      activeSection === key || (config.dropdown?.some(d => d.component === activeSection)) 
                        ? "text-white bg-white/10" 
                        : ""
                    }`}
                  >
                    {config.label}
                    {config.dropdown && config.dropdown.length > 0 && (
                      <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                        activeDropdown === key ? "rotate-180" : ""
                      }`} />
                    )}
                  </button>

                  {/* Dropdown */}
                  {config.dropdown && config.dropdown.length > 0 && (
                    <AnimatePresence>
                      {(activeDropdown === key) && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-[calc(100%-2px)] w-64 bg-white rounded-b-lg shadow-xl border border-gray-200 overflow-hidden z-[9999]"
                        >
                          {config.dropdown.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              onClick={(e) => handleDropdownClick(item.component, item.href, e)}
                              className={`block px-4 py-2.5 text-sm text-gray-700 hover:bg-army hover:text-white transition-colors ${
                                activeSection === item.component ? "bg-army text-white" : ""
                              }`}
                            >
                              {item.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="relative px-3 py-2.5 text-white/90 hover:text-white transition-colors flex-shrink-0 rounded-md hover:bg-white/10"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </Container>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-army overflow-hidden max-h-[80vh] overflow-y-auto relative z-[9999]"
            >
              <Container className="py-4 flex flex-col gap-1">
                {navItems.map(([key, config]) => {
                  const isMobileOpen = mobileDropdown === key;
                  
                  return (
                    <div key={key} className="border-b border-white/10 last:border-0">
                      <button
                        onClick={() => {
                          if (config.dropdown && config.dropdown.length > 0) {
                            setMobileDropdown(isMobileOpen ? null : key);
                          } else {
                            setOpen(false);
                            if (onSectionChange) onSectionChange(key);
                            // Update URL
                            updateURLHash(config.href.replace('#', ''));
                            document.querySelector(config.href)?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="w-full px-4 py-3 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors flex items-center justify-between"
                      >
                        {config.label}
                        {config.dropdown && config.dropdown.length > 0 && (
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                            isMobileOpen ? "rotate-180" : ""
                          }`} />
                        )}
                      </button>
                      {config.dropdown && config.dropdown.length > 0 && (
                        <AnimatePresence>
                          {isMobileOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1 pb-2"
                            >
                              {config.dropdown.map((item) => (
                                <a
                                  key={item.href}
                                  href={item.href}
                                  onClick={(e) => handleDropdownClick(item.component, item.href, e)}
                                  className="block px-4 py-2.5 rounded-lg text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                  {item.label}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}

                {/* Search in mobile menu */}
                <button
                  onClick={() => {
                    setOpen(false);
                    setSearchOpen(true);
                  }}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Search Modal/Popup */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 md:pt-32 px-4"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              ref={searchRef}
              initial={{ y: -50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center p-4">
                  <Search className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for news, events, notices..."
                    className="w-full px-4 py-2 text-lg outline-none bg-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                {searchQuery && (
                  <div className="px-4 pb-4">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-gold text-white font-medium rounded-lg hover:bg-gold/90 transition-colors"
                    >
                      Search for "{searchQuery}"
                    </button>
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}