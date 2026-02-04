import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: Mail,
      text: "graphicgeeks@geu.ac.in",
      href: "mailto:graphicgeeks@geu.ac.in",
    },
    { icon: Phone, text: "+91 88404 44355", href: "tel:+918840444355" },
    { icon: MapPin, text: "Graphic Era University, Dehradun", href: "#" },
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold mb-6 text-foreground">Contact Us</h4>
      <ul className="space-y-4">
        {contactInfo.map((contact, index) => {
          const IconComponent = contact.icon;
          return (
            <li key={index}>
              <a
                href={contact.href}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <IconComponent className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{contact.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactInfo;
