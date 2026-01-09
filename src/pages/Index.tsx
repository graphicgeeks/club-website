import { Header } from "@/components/Header/Header";
import { HeroSection } from "@/components/Hero Section/HeroSection";
import { MembersSection } from "@/components/Members/MembersSection";
import { EventsSection } from "@/components/Events Section/EventsSection";
import { SkillsSection } from "@/components/Skills Section/SkillsSection";
import { GallerySection } from "@/components/Gallery Section/GallerySection";
import { Footer } from "@/components/Footer/Footer";

// People Section Data
import { faculty } from "@/data/faculty";
import { founders } from "@/data/founders";
import { PeopleSection } from "@/components/Members/PeopleSection";
import AboutSection from "@/components/About Section/AboutSection";
import IntroSection from "@/components/Intro Section/IntroSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <IntroSection />
        <PeopleSection
          id={"faculty"}
          title="Our Faculty"
          subtitle="Meet the brilliant minds who guide and mentor our club members towards excellence"
          people={faculty}
          />
          {/* 
        <PeopleSection
          id={"founders"}
          title="Our Founders"
          subtitle="Guiding us with invaluable knowledge"
          people={founders}
          />
        <MembersSection />
        <EventsSection />
        <SkillsSection />
        <GallerySection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
