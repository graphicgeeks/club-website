import { presidentBench } from "@/data/presidentBench";
import MemberCardList from "./Team/MemberCardList";
import { teamHeads } from "@/data/teamHeads";

interface ShowcaseProps {
  title: string;
  type: "President-Bench" | "Team-Heads";
}

const Showcase = ({ title, type }: ShowcaseProps) => {
  const isTeamHead = type === "Team-Heads";

  return (
    <div className="mt-12">
      <div className="">
        <h3 className="showcase-head text-3xl font-bold text-center text-foreground text-white">
          {title}
        </h3>
      </div>

      <MemberCardList
        isTeamHead={isTeamHead}
        people={isTeamHead ? teamHeads : presidentBench}
      />
    </div>
  );
};

export default Showcase;
