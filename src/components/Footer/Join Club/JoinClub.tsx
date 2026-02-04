import JoinClubContent from "./JoinClubContent";
import QRCard from "./QRCard";

const JoinClub = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 border-2">
      <JoinClubContent />
      <QRCard />
    </div>
  );
};

export default JoinClub;
