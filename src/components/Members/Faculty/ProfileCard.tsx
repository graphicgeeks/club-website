import { Card, CardContent } from "@/components/ui/card";

export function ProfileCard({ member }) {
  return (
    <Card className="profile-card glass-card hover:glow-effect transform hover:-translate-y-2 group">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-foreground">
            {member.name}
          </h3>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            {member.description}
          </p>
          <a
            className="underline text-sm text-cyan-500"
            href={member.linkedin}
            target="_blank"
          >
            Visit LinkedIn
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
