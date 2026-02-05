import { splitWordsToSpans } from "@/utils/splitWordsToSpans";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useAboutTimeline = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          // end: "top -20%", // accept if want automatic
          end: "top -100%", // remove if want automatic
          pin: true, // remove if want automatic
          scrub: true, // remove if want automatic
        },
      });
      tl.fromTo(
        ".intro-head",
        { opacity: 0, y: "5rem" },
        {
          opacity: 1,
          y: 0,
        }
      );

      const paragraph = document.querySelector(".intro-text");
      if (!paragraph) return;

      splitWordsToSpans(paragraph);

      tl.fromTo(
        ".intro-text span",
        { opacity: 0, y: "1rem" },
        {
          opacity: 1,
          y: 0,
          // ease: "power3.inOut",
          stagger: 0.1,
        }
      );
    },
    { scope: container }
  );

  return container;
};

export default useAboutTimeline;
