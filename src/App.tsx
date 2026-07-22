// App.tsx
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Statistics } from "./components/sections/Statistics";
import { Services } from "./components/sections/Services";
import { Team } from "./components/sections/Team";
import { Activities } from "./components/sections/Activities";
import { Gallery } from "./components/sections/Gallery";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Sports } from "./components/sections/Sports";
import { NoticeProvider } from "./context/NoticeContext";
import NoticeModal from "./components/NoticeModal";
import NoticeButton from "./components/NoticeButton";

// Section components mapping for dropdown items
const sectionComponents: Record<string, React.ReactNode> = {
  Hero: <Hero />,
  About: <About />,
  Statistics: <Statistics />,
  Services: <Services />,
  Team: <Team />,
  Activities: <Activities />,
  Gallery: <Gallery />,
  Testimonials: <Testimonials />,
  FAQ: <FAQ />,
  Contact: <Contact />,
  Sports: <Sports />,
  Introduction: <About />,
  Mission: <About />,
  ManagingDirector: <About />,
  Director: <About />,
  Security: <Activities />,
  Diplomacy: <Activities />,
  Leadership: <Activities />,
  EagleNews: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Eagle Think Tank News</h2>
    </div>
  ),
  SecurityNews: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Security News</h2>
    </div>
  ),
  UNNews: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">UN News</h2>
    </div>
  ),
  EnvironmentNews: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Environment News</h2>
    </div>
  ),
  Books: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Books</h2>
    </div>
  ),
  Articles: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Articles</h2>
    </div>
  ),
  Interviews: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Interviews</h2>
    </div>
  ),
  GONNotices: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">GON Notices</h2>
    </div>
  ),
  Results: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Results</h2>
    </div>
  ),
  Photos: <Gallery />,
  Videos: <Gallery />,
  Calendar: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Calendar</h2>
    </div>
  ),
  FAQs: <FAQ />,
  PresidentOffice: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Office of President Nepal</h2>
    </div>
  ),
  PMOffice: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Office of Prime Minister</h2>
    </div>
  ),
  NIDOffice: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Office of NID Nepal</h2>
    </div>
  ),
  NepalArmy: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">Nepal Army</h2>
    </div>
  ),
  APF: (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">APF Nepal</h2>
    </div>
  ),
};

function AppContent() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionComponents[hash]) {
        setActiveSection(hash);
      } else {
        setActiveSection(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    if (section) {
      window.location.hash = section;
    } else {
      window.location.hash = '';
    }
  };

  const renderContent = () => {
    if (activeSection && sectionComponents[activeSection]) {
      return sectionComponents[activeSection];
    }

    return (
      <>
        <Hero />
        <About />
        <Statistics />
        <Services />
        <Team />
        <Activities />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      <main>{renderContent()}</main>
      <Footer />
      <NoticeModal />
    </div>
  );
}

export default function App() {
  return (
    <NoticeProvider>
      <AppContent />
    </NoticeProvider>
  );
}
