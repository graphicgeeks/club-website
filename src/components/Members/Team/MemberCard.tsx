import { Member } from "./interface/teamInterface";
import { useState } from "react";

interface MemberCardProps {
  index: number;
  member: Member;
  isTeamHead: boolean;
}

const MemberCard = ({ index, member, isTeamHead }: MemberCardProps) => {
  const [moved, setMoved] = useState(false);

  function toggleTeam() {
    setMoved((prev) => !prev);
  }

  return (
    <div className="member-card-overlay absolute top-0 left-1/2 w-[20rem] md:w-fit lg:w-fit flex flex-col gap-4 -translate-x-1/2 overflow-x-hidden text-black dark:text-white">
      <div className="member-card p-4 rounded-lg transition-transform duration-700 relative">
        {/* Display Side */}
        <div className="front w-full flex flex-col md:flex-row lg:flex-row gap-5">
          <div className="team-img-container h-[15rem] w-full md:w-[15rem] lg:w-[15rem]">
            <img
              src={member.image}
              className="h-full w-full object-cover rounded-lg"
              alt={`${member.name}'s pfp`}
            />
          </div>
          <div className="team-details w-[20rem] flex flex-col justify-between gap-4 md:py-4 lg:py-4">
            <div>
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <h3 className="text-sm">
                <span>Role: </span>
                <span className="text-blue-900 dark:text-blue-500 tracking-wider uppercase font-semibold underline">
                  {member.position}
                </span>
              </h3>
            </div>
            <p className="text-sm text-gray-900 dark:text-gray-400">
              {member.description}
            </p>
          </div>
        </div>

        {/* Right Side for Team Heads */}
        {isTeamHead && (
          <div
            className="back absolute top-0 left-0 h-full w-full bg-zinc-900 border-2 border-grey text-white rounded-lg flex flex-col gap-2 justify-start p-4"
            style={{
              transform: moved ? "translateX(0)" : "translateX(100%)",
            }}
          >
            {member.team.map((team, index) => {
              return (
                <span key={team.name} className="">
                  {index + 1}. {team.name}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {isTeamHead && (
        <button
          onClick={toggleTeam}
          className="show-team-btn border-2 w-full py-2 rounded-lg cursor-pointer bg-zinc-900 text-white active:scale-95"
        >
          {moved ? "Hide Team" : "Show Team"}
        </button>
      )}
    </div>
  );
};

export default MemberCard;
