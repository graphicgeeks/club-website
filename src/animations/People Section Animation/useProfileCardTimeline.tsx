import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useProfileCardTimeline = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: `top`,
        },
      });

      tl.fromTo(
        ".profile-card",
        {
          opacity: 0,
          y: "5rem",
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
        }
      );
    },
    { scope: container }
  );

  return container;
};

export default useProfileCardTimeline;
