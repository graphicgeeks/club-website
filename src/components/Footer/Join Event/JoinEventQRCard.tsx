import EventQR from "../../../assets/EventQR.webp";

const JoinEventQRCard = () => {
  return (
    <div className="event-QR-card-wrapper flex justify-center">
      <div className="event-QR-card bg-white dark:bg-transparent rounded-2xl p-8 flex flex-col items-center gap-4">
        <p className="text-sm font-medium text-gray-600">Scan to Register</p>

        <img
          src={EventQR}
          alt="CompetentiaX Registration QR"
          className="w-56 h-56 object-contain rounded-md"
        />

        <p className="text-xs text-black dark:text-gray-500 text-center">
          Scan using your phone camera
        </p>
      </div>
    </div>
  );
};

export default JoinEventQRCard;
