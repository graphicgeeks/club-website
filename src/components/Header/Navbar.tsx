import { scrollToSection } from "@/utils/scrollToSection";

type NavItem = {
  scroll: string;
  name: string;
};

type NavProps = {
  navdata: NavItem[];
};

const Navbar = ({ navdata }: NavProps) => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {navdata.map((nav, idx) => {
        return (
          <button
            key={idx}
            onClick={() => scrollToSection(nav.scroll)}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {nav.name}
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
