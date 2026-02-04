const JoinEventContent = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-extrabold text-blue-700">CompetentiaX</h1>

      <p className="text-sm lg:text-lg text-gray-600">
        Where logic battles and coders rise
      </p>

      <div className="text-sm flex flex-col gap-2 text-gray-700 dark:text-white">
        <p>
          <span className="font-semibold">Date:</span> February 14, 2026
        </p>
        <p>
          <span className="font-semibold">Time:</span> 12:00 PM - 4:00 PM
        </p>
        <p className="sm:col-span-2">
          <span className="font-semibold">Venue:</span> New Lab - 1 & 2, CSIT
          Block, GEU
        </p>
        <p>
          <span className="font-semibold">Prize Pool:</span> ₹3000
        </p>
        <p>
          <span className="font-semibold">Registration Fee:</span> ₹100 /
          participant
        </p>
      </div>

      <div className="pt-4">
        <a
          href="https://forms.gle/JhFpQwymsfP8DJWA7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-md px-4 py-2 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition"
        >
          Go to Registration Form
        </a>
      </div>

      <p className="text-sm text-gray-500 lg:block">
        Registration will open in a new tab
      </p>
    </div>
  );
};

export default JoinEventContent;
