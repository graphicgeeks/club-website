import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const usePeopleTimeline = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        scrollTrigger: {
          trigger: container.current,
          start: "top -20%",
          end: `top -100%`,
          markers: true,
        },
      });

      // Section text fade-in
      tl.fromTo(
        ".text-container",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }
      );

      tl.fromTo(
        ".profile-card",
        {
          opacity: 0,
          y: 40,
          stagger: 0.8
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }
      );
    },
    { scope: container }
  );

  return container;
};

export default usePeopleTimeline;
