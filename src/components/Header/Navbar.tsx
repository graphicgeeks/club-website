import { scrollToSection } from "@/utils/scrollToSection";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <button
        onClick={() => scrollToSection("intro")}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("faculty")}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Faculty
      </button>
      <button
        onClick={() => scrollToSection("founders")}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Founders
      </button>
      <button
        onClick={() => scrollToSection("members")}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Members
      </button>
      <button
        onClick={() => scrollToSection("events")}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Events
      </button>
      <button
        onClick={() => scrollToSection("skills")}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Skills
      </button>
      <button
        onClick={() => scrollToSection("gallery")}
        className="text-sm font-medium hover:text-primary transition-colors"
      >
        Gallery
      </button>
    </nav>
  );
};

export default Navbar;
