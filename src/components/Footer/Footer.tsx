import JoinClub from "./Join Club/JoinClub";
import FooterContent from "./Footer Content/FooterContent";
import BottomBar from "./BottomBar";

export function Footer() {
  return (
    <footer
      id="join"
      className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-t"
    >
      <div className="container mx-auto px-4 py-16">
        {/* <JoinClub /> */}

        <FooterContent />
        <BottomBar />
      </div>
    </footer>
  );
}
