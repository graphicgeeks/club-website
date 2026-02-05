import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useIntroTimeline = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".intro-card");

      cards.forEach((card, index) => {
        const textEls = card.querySelectorAll("h3, p");

        // stacking order
        gsap.set(card, { zIndex: index + 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "+=100%",
            pin: true,
            pinSpacing: false,
            scrub: true,
          },
        });

        // card animation
        tl.fromTo(
          card,
          {
            opacity: 0,
            scale: 1.1,
          },
          {
            opacity: 1,
            scale: 1,
            ease: "power3.out",
          }
        );

        // text animation 
        tl.fromTo(
          textEls,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "power2.out",
          },
          "-=0.3"
        );

        // Gives the last panel a smooth scroll exit
        if (index === cards.length - 1) {
          tl.to(
            textEls,
            {
              y: -20,
              opacity: 0,
              stagger: 0.1,
              ease: "power1.inOut",
            },
            "-=0.2"
          );
        }
      });
    },
    { scope: container }
  );

  return container;
};

export default useIntroTimeline;
