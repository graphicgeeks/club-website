import useShowcaseTimeline from "@/animations/Member Section Animation/useShowcaseTimeline";
import { presidentBench } from "@/data/presidentBench";
import MemberCardList from "./Team/MemberCardList";
import { teamHeads } from "@/data/teamHeads";

interface ShowcaseProps {
  title: string;
  type: "President-Bench" | "Team-Heads";
}

//   ## Proper Review for this block  ##
// type toggleTeamType = {
//   [key: number]: boolean;
// };
//   ## Proper Review for this block  ##

const Showcase = ({ title, type }: ShowcaseProps) => {
  const containerRef = useShowcaseTimeline();
  const isTeamHead = type === "Team-Heads";

  //   ## Proper Review for this block  ##
  //   const [expandedTeams, setExpandedTeams] = useState<toggleTeamType>({});

  //   const toggleTeam = (index: number) => {
  //     setExpandedTeams((prev) => ({
  //       ...prev,
  //       [index]: !prev[index],
  //     }));
  //   };
  //   ## Proper Review for this block  ##

  return (
    <div
      ref={containerRef}
      className="h-screen pt-[12rem] md:pt-[20rem] lg:pt-[12rem] flex flex-col gap-5"
    >
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
