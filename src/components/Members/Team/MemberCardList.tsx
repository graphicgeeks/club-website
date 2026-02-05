import { Member } from "./interface/teamInterface";
import MemberCard from "./MemberCard";

interface MemberCardListProps {
  people: Member[];
  isTeamHead: boolean
}

const MemberCardList = ({ isTeamHead, people }: MemberCardListProps) => {
  return (
    <div className="member-wrapper mb-4 mt-4 px-4 flex flex-col items-center gap-6 relative">
      {people.map((member, index) => {
        return <MemberCard key={member.name} index={index} isTeamHead={isTeamHead} member={member} />;
      })}
    </div>
  );
};

export default MemberCardList;
