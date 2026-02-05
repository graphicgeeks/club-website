import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useProfileCardTimeline = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (context) => {
      if (!container.current) return;

      const cards = context.selector(".profile-card");
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: "5rem",
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%",
            end: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: container },
  );

  return container;
};

export default useProfileCardTimeline;
