import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink } from "lucide-react";
import { toast } from "react-toastify";

const JoinClub = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
        Ready to Join Us?
      </h2>
      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
        Become part of an amazing community of tech enthusiasts, innovators, and
        future leaders. Start your journey with Graphic Geeks today!
      </p>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input placeholder="Enter your email address" className="flex-1" />
          <Button
            size="lg"
            onClick={() =>
              toast.info(
                "We're not accepting responses right now. Please check back soon 🙂"
              )
            }
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8"
          >
            Join Now <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <span>✓ Free membership</span>
          <span>✓ Exclusive workshops</span>
          <span>✓ Industry connections</span>
        </div>
      </div>
    </div>
  );
};

export default JoinClub;
