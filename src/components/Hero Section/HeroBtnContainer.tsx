import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/scrollToSection";
import { ArrowRight } from "lucide-react";

const HeroBtnContainer = () => {
  return (
    <div className="hero-btn-container flex flex-col sm:flex-row gap-4 justify-center mb-12">
      <Button
        onClick={() => scrollToSection("intro")}
        size="lg"
        className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-full text-lg"
      >
        Explore Our Club <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      {/* <Button
        onClick={() => scrollToSection("join")}
        variant="outline"
        size="lg"
        className="border-white text-primary hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-full text-lg"
      >
        Join Now
      </Button> */}
    </div>
  );
};

export default HeroBtnContainer;
