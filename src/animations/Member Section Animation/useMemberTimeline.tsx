import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useMemberTimeline = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 30%",
          end: `top top`,
        },
      });

      // Section text fade-in
      tl.fromTo(
        ".team-text-container",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
      );
    },
    { scope: container },
  );

  return container;
};

export default useMemberTimeline;
