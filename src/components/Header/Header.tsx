import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import clubLogo from "@/assets/club-logo.webp";
import collegeLogo from "@/assets/college-logo.png";
import Navbar from "./Navbar";
import { scrollToSection } from "@/utils/scrollToSection";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-[#111]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={clubLogo} alt="Graphic Geeks Logo" className="h-12 w-12" />
          <div className="hidden md:flex flex-col">
            <h1 className="text-xl font-bold gradient-text">Graphic Geeks</h1>
            <span className="text-xs text-muted-foreground">
              Graphic Era College
            </span>
          </div>
        </div>

        <Navbar />

        <div className="flex items-center space-x-4">
          {/* <img src={collegeLogo} alt="Graphic Era College" className="h-10 w-10" /> */}
          <ThemeToggle />
          <Button
            onClick={() => scrollToSection("join-event")}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium px-6 py-2 rounded-full"
          >
            Join Event
          </Button>
        </div>
      </div>
    </header>
  );
}
