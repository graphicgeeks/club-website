import { splitWordsToSpans } from "@/utils/splitWordsToSpans";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const useHeroTimeline = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        },
      });

      tl.fromTo(
        ".hero-h1",
        {
          y: "8rem",
          scale: 0.5,
          opacity: 0,
        },
        {
          y: "5rem",
          opacity: 1,
          delay: 0.6,
        }
      );

      tl.to(".hero-h1", {
        y: 0,
        scale: 1,
      });

      const paragraph = document.querySelector(".hero-text");
      if (!paragraph) return;
      splitWordsToSpans(paragraph);

      tl.fromTo(
        ".hero-text span",
        {
          y: "2rem",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
        }
      );

      tl.fromTo(
        ".hero-btn-container button",
        {
          opacity: 0,
          y: "2rem",
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
        }
      );

      tl.fromTo(
        ".glass-card",
        {
          opacity: 0,
          rotate: 20,
          y: 30,
        },
        {
          opacity: 1,
          rotate: 0,
          y: 0,
          stagger: 0.5,
          onComplete: () => {
            document.querySelector(".hero-h1").classList.add("animate-float");
          },
        }
      );
    },
    { scope: container }
  );

  return container;
};

export default useHeroTimeline;
