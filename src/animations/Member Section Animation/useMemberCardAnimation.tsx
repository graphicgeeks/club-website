import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useMemberCardAnimation = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (context) => {
      const card = context.selector(".member-card");
      const btn = context.selector(".show-team-btn");

      if (!card.length) return;

      const tl = gsap.timeline({
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 60%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        card,
        {
          scale: 1.2,
          y: 20,
          opacity: 0,
        },
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      );

      if (btn.length) {
        tl.fromTo(
          btn,
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        );
      }
    },
    { scope: container },
  );

  return container;
};

export default useMemberCardAnimation;
