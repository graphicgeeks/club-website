import GlassCard from "./GlassCard";
import { Users, Code, Trophy } from "lucide-react";

const GlassCardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pb-8 lg:pb-0">
      <GlassCard Icon={Users} title={"50+ Active Members"} text={"A diverse community of tech enthusiasts"} />
      <GlassCard Icon={Code} title={"Multiple Domains"} text={"Web Dev, AI/ML, Android, and more"} />
      <GlassCard Icon={Trophy} title={"Award Winning"} text={"Multiple hackathon victories"} />
    </div>
  );
};

export default GlassCardContainer;
