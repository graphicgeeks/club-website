const QuickLinks = () => {
  const quickLinks = [
    { name: "About Club", href: "#intro" },
    { name: "Our Faculty", href: "#faculty" },
    { name: "Members", href: "#members" },
    { name: "Events", href: "#events" },
    { name: "Skills", href: "#skills" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold mb-6 text-foreground">
        Quick Links
      </h4>
      <ul className="space-y-3">
        {quickLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
