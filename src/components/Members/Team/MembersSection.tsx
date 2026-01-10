import useMemberTimeline from "@/animations/Member Section Animation/useMemberTimeline";
import AllMemberSectionList from "./AllMemberSectionList";
import Showcase from "../Showcase";
import "./member-section.css";

const MembersSection = () => {
  const containerRef = useMemberTimeline();

  return (
    <section
      ref={containerRef}
      id="members"
      className="bg-[#487BCA] text-white dark:bg-[#111] py-20"
    >
      <div className="container mx-auto px-4">
        <div className="team-text-container text-center mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold mb-4 pb-2 dark:gradient-text">
            Our Amazing Team
          </h2>
          <p className="text-md md:text-xl lg:text-xl dark:text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals who drive innovation and excellence
            in our club
          </p>
        </div>

        {/* Core Leadership Team */}
        <Showcase title={"President Bench"} type={"President-Bench"} />

        {/* Core Team Head */}
        <Showcase title={"Team Heads"} type={"Team-Heads"} />

        {/* All Members Section */}
        <AllMemberSectionList />
      </div>
    </section>
  );
};

export default MembersSection;
