import useIntroTimeline from "@/animations/Intro Section Animation/useIntroTimeline";
import { introCardData } from "@/data/introCards";
import "./intro-section.css";

const IntroSection = () => {
  const containerRef = useIntroTimeline();

  return (
    <section
      ref={containerRef}
      className="intro-card-wrapper relative text-white text-center overflow-x-hidden overflow-y-hidden mb-[10vh]"
    >
      {introCardData.map((card) => (
        <div
          key={card.id}
          className="intro-card h-screen w-full mx-auto rounded-md bg-cover bg-center"
        >
          <div
            className="h-full w-full absolute z-[1] bg-cover bg-center"
            style={{ backgroundImage: `url(${card.img})` }}
          />
          <div className="h-full w-full absolute z-[1] bg-black/60" />
          <div className="intro-text-box h-full w-full flex flex-col items-center justify-center gap-10 relative z-[2]">
            <h3 className="text-4xl md:text-6xl lg:text-6xl font-semibold">{card.title}</h3>
            <p className="text-sm md:text-xl lg:text-xl w-[80%]">{card.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default IntroSection;
