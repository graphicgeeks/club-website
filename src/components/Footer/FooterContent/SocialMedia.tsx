import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/graphic_geeks_geu/",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
    { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-500" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a
            key={index}
            href={social.url}
            className={`flex items-center space-x-2 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 text-muted-foreground ${social.color} transition-all duration-300 group`}
          >
            <IconComponent className="h-5 w-5" />
            <span className="text-sm font-medium">{social.name}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
