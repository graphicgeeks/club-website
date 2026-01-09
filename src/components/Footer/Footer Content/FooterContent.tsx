import ContactInfo from "../ContactInfo";
import SocialMedia from "./SocialMedia";
import QuickLinks from "./QuickLinks";
import ClubInfo from "./ClubInfo";

const FooterContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <ClubInfo />

      <QuickLinks />
      <ContactInfo />
      <div>
        <h4 className="text-lg font-semibold mb-6 text-foreground">
          Follow Us
        </h4>
        <SocialMedia />
      </div>
    </div>
  );
};

export default FooterContent;
