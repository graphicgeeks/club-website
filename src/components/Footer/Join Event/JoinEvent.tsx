import "./join-event.css";
import JoinEventContent from "./JoinEventContent";
import JoinEventQRCard from "./JoinEventQRCard";

const JoinEvent = () => {
  return (
    <section id="join-event" className="event max-w-6xl mx-auto px-8 lg:px-4 py-16 pt-20">
      <div className="flex justify-between gap-5 items-center flex-col lg:flex-row">
        <JoinEventContent />
        <div className="separator border-[0.1rem] border-[--member-card-shadow] w-full lg:h-[50vh] lg:w-0"></div>
        <JoinEventQRCard />
      </div>
    </section>
  );
};

export default JoinEvent;
