import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { allMembers } from "@/data/allMembers";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const AllMemberSectionList = () => {
  const [showAllMembers, setShowAllMembers] = useState(false);

  return (
    <div className="text-center">
      <Button
        onClick={() => setShowAllMembers(!showAllMembers)}
        variant="outline"
        size="lg"
        className="mb-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-black dark:text-white"
      >
        {showAllMembers ? "Hide" : "View All"} Club Members
        {showAllMembers ? (
          <ChevronUp className="ml-2 h-5 w-5" />
        ) : (
          <ChevronDown className="ml-2 h-5 w-5" />
        )}
      </Button>

      {showAllMembers && (
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            All Club Members
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allMembers.map((member, index) => (
              <Card
                key={index}
                className="glass-card hover:glow-effect transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-1">
                    {member.position}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {member.year}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllMemberSectionList;
