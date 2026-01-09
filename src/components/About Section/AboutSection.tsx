import useAboutTimeline from "@/animations/About Section Animation/useAboutTimeline";
import "./about-section.css";

const AboutSection = () => {
  const containerRef = useAboutTimeline();

  return (
    <section
      ref={containerRef}
      id="about"
      className="intro-section min-h-screen w-full bg-[#487BCA] dark:bg-[#111] text-center py-[5rem] pb-[10rem] overflow-hidden flex flex-col justify-center items-center"
    >
      <h2 className="intro-head text-4xl md:text-5xl font-bold pb-4 text-white dark:gradient-text">
        Welcome to Graphic Geeks
      </h2>
      <p className="intro-text w-[90%] lg:w-[70%] mx-auto text-sm lg:text-lg lg:mt-6 text-white">
        We are the premier technology club of Graphic Era College, fostering
        innovation, creativity, and technical excellence among students. Our
        mission is to bridge the gap between theoretical knowledge and practical
        application.
      </p>
    </section>
  );
};

export default AboutSection;
