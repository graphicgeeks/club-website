import JoinClub from "./JoinClub";
import QRCard from "./QRCard";
import FooterContent from "./Footer Content/FooterContent";
import BottomBar from "./BottomBar";

export function Footer() {
  return (
    <footer
      id="join"
      className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-t"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <JoinClub />
          <QRCard />
        </div>

        <FooterContent />
        <BottomBar />
      </div>
    </footer>
  );
}
