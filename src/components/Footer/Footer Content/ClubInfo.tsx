import collegeLogo from "@/assets/college-logo.png";
import clubLogo from "@/assets/club-logo.webp";

const ClubInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-6">
        <img src={clubLogo} alt="Graphic Geeks" className="h-12 w-12" />
        <div>
          <h3 className="text-xl font-bold text-foreground">Graphic Geeks</h3>
          <p className="text-sm text-muted-foreground">Tech Innovation Club</p>
        </div>
      </div>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Empowering students with cutting-edge technology skills and fostering
        innovation at Graphic Era University.
      </p>
      <div className="flex items-center space-x-2">
        <img src={collegeLogo} alt="Graphic Era College" className="h-8 w-8" />
        <span className="text-sm text-muted-foreground">
          Graphic Era University
        </span>
      </div>
    </div>
  );
};

export default ClubInfo;
