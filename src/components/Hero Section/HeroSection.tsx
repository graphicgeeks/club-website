import useHeroTimeline from "@/animations/Hero Section Animation/useHeroTimeline";
import GlassCardContainer from "./GlassCardContainer";
import HeroBtnContainer from "./HeroBtnContainer";
import "./herosection.css";

export function HeroSection() {
  const containerRef = useHeroTimeline();

  return (
    <section
      ref={containerRef}
      className="hero-section min-h-screen flex items-center justify-center dark:text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mt-10 lg:mt-0">
          <h1 className="hero-h1 text-5xl md:text-7xl font-bold mb-6 text-white">
            Graphic Geeks
          </h1>
          <p className="hero-text text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Where creativity meets technology. Join the most innovative tech
            club at Graphic Era College.
          </p>

          <HeroBtnContainer />
          <GlassCardContainer />
        </div>
      </div>
    </section>
  );
}
