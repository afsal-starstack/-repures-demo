type GuestMeaningProps = {
  sentiment?: "Positive" | "Neutral" | "Negative";
};

export default function GuestMeaning({ sentiment = "Neutral" }: GuestMeaningProps) {
  // Determine icon and its color
  const getIcon = () => {
    if (sentiment === "Positive") return { symbol: "✓", color: "text-green-400" };
    if (sentiment === "Negative") return { symbol: "△", color: "text-yellow-400" };
    return { symbol: "△", color: "text-gray-400" }; // Neutral
  };

  // Determine card background color based on sentiment
  const getBg = () => {
    // if (sentiment === "Positive") return "bg-gradient-to-br from-green-600 to-green-800";
    // if (sentiment === "Negative") return "bg-gradient-to-br from-red-600 to-red-800";
    return "bg-[linear-gradient(135deg,_#1E1B4B_0%,_#1A1838_100%)]"; // Neutral
  };

  const icon = getIcon();
  const bgClass = getBg();

  return (
    <div className={`rounded-md w-full h-full p-[20px] ${bgClass}`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-white font-roboto text-[13.105px] font-semibold leading-[19.657px] pb-[6px]">
            What the Guest REALLY Means
          </h3>
          <p className="text-[rgba(196,181,253,0.7)] font-roboto text-[11.467px] font-normal leading-[16.381px]">
            Deep cultural sentiment analysis
          </p>
        </div>

        <span className="text-[#A78BFA] font-inter text-[13.105px] font-bold leading-[19.657px]">
          Confidence 86%
        </span>
      </div>

      {/* Points */}
      <div className="space-y-3 mb-5">
        <div className="flex items-start gap-3 text-sm text-gray-300">
          <span className={`${icon.color} mt-[2px]`}>{icon.symbol}</span>
          <p>The guest is upset due to service delays and felt ignored by staff</p>
        </div>

        <div className="flex items-start gap-3 text-sm text-gray-300">
          <span className={`${icon.color} mt-[2px]`}>{icon.symbol}</span>
          <p>They are warning future guests not to book here — high churn risk</p>
        </div>

        <div className="flex items-start gap-3 text-sm text-gray-300">
          <span className={`${icon.color} mt-[2px]`}>{icon.symbol}</span>
          <p>The review implies poor management responsiveness and accountability</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-[rgba(46,16,101,0.50)] overflow-hidden">
        <div className="h-full w-[86%] bg-[rgba(139,92,246,1)] rounded-full" />
      </div>
      <div className="text-right text-xs text-gray-400 mt-1">86%</div>
    </div>
  );
}