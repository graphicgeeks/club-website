import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useIntroductionAnimation = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".intro-card");

      panels.forEach((panel) => {
        const textEls = panel.querySelectorAll("h3, p");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              end: "+=100%",
              pin: true,
              pinSpacing: false,
            },
          })
          .fromTo(
            panel,
            { opacity: 0, scale: 2 },
            { opacity: 1, scale: 1, ease: "spring(1, 100, 20, 0)" }
          )
          .fromTo(
            textEls,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.2,
              ease: "power2.out",
              duration: 0.6,
            },
            "-=0.3"
          );
      });
    },
    { scope: container }
  );

  return container;
};

export default useIntroductionAnimation;
