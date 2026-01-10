import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useShowcaseTimeline = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".member-card-overlay");

      const tl = gsap.timeline({
        ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${cards.length * 80}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        ".showcase-head",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          opacity: 1,
          y: 0,
        }
      );

      // Cards reveal one by one
      cards.forEach((card, index) => {
        tl.set(card, {
          zIndex: index + 1, // higher index = on top
        });

        tl.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.95,
            y: 60,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
          },
          "+=0.3"
        );

        // Fade OUT (skip last card)
        if (index !== cards.length - 1) {
          tl.fromTo(
            card,
            {
              opacity: 1,
              scale: 1,
              y: 0,
            },
            {
              opacity: 0,
              scale: 0.95,
              y: -60,
              duration: 0.6,
            },
            "+=0.3"
          );
        }
      });
    },
    { scope: container }
  );

  return container;
};

export default useShowcaseTimeline;
