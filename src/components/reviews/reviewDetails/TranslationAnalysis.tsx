export default function TranslationAnalysis({ review }: any) {
  const translationText =
    review.language === "English"
      ? "✓ No translation needed - review is in English. Cultural analysis still applied based on guest origin."
      : review.sentiment === "Negative" ? "Very poor experience. Bad reception and delays in service. The room was not clean and the staff were not cooperative. I do not recommend this hotel at all.": "The hotel is okay, but there is room for improvement. The location is good, but the service could be faster. The room was clean but somewhat outdated."

  const getSentimentClass = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "positive": return "bg-green-500/20 text-green-400";
      case "negative": return "bg-red-500/20 text-red-400";
      default: return "bg-orange-500/20 text-orange-400";
    }
  };

  const getToneClass = (tone: string) => {
    switch (tone.toLowerCase()) {
      case "angry": return "bg-red-500/20 text-red-400";
      case "pleased": return "bg-green-500/20 text-green-400";
      default: return "bg-orange-500/20 text-orange-400";
    }
  };

  const getIntentClass = (intent: string) => {
    switch (intent.toLowerCase()) {
      case "warning others": return "bg-red-500/20 text-red-400";
      case "recommending": return "bg-green-500/20 text-green-400";
      default: return "bg-orange-500/20 text-orange-400";
    }
  };

  const aiTags = (() => {
    const sentiment = review.sentiment?.toLowerCase() || "neutral";
    switch (sentiment) {
      case "positive": return { tone: "Pleased", intent: "Recommending", risk: "Low", sentimentLabel: "Positive" };
      case "negative": return { tone: "Angry", intent: "Warning others", risk: "High", sentimentLabel: "Negative" };
      default: return { tone: "Medium", intent: "Warning others", risk: "Medium", sentimentLabel: "Neutral" };
    }
  })();

  const getRiskClass = () => {
    switch (aiTags.sentimentLabel.toLowerCase()) {
      case "positive": return "bg-green-500/20 text-green-400";
      case "negative": return "bg-red-500/20 text-red-400";
      default: return "bg-orange-500/20 text-orange-400";
    }
  };

  return (
    <div className="p-4 sm:p-[17.2px] rounded-md border border-white/10 bg-[#111318] mt-4 sm:mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 sm:mb-6">
        <h2 className="text-white font-roboto text-sm font-semibold leading-5">
          Translation & AI Analysis
          <span className="text-[#A78BFA] ml-2 font-roboto text-[11px] font-semibold">✦ Cultural AI</span>
        </h2>
        <p className="text-[#64748B] font-roboto text-[11px] font-normal">
          Auto-detected: <span className="text-[#CBD5E1]">{review.language}</span> &nbsp; Cultural Mode
          <span className="ml-2 inline-flex items-center gap-1 font-roboto text-[9px] font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-[#2DD4BF]">ON</span>
          </span>
        </p>
      </div>

      {/* Two Columns — stacked on mobile, side by side on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Original Review */}
        <div className="p-[13px] rounded-md border border-white/10 bg-[#0A0D12]">
          <div className="flex justify-between mb-3">
            <p className="text-[#94A3B8] font-roboto text-[9px] font-normal tracking-[0.5px]">Original Review</p>
            <p className="text-[#2DD4BF] font-roboto text-[9px] font-medium">
              {review.language !== "Arabic" && review.language}
            </p>
          </div>
          <p
            dir={review.language === "Arabic" ? "rtl" : "ltr"}
            className={`overflow-hidden break-words font-roboto text-[11px] font-normal leading-[18px] text-[#CBD5E1] mt-3 ${review.language === "Arabic" ? "text-right" : "text-left"}`}
          >
            {review.text}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-[#1E2128] border-none rounded-[3px] px-[6px] pt-[2px] pb-[3px] text-[10px]">🌐 {review.language}</span>
            <span className="bg-[#1E2128] border border-white/10 rounded-[3px] px-[6px] pt-[2px] text-[10px]">{review.platform}</span>
            <span className="bg-[#1E2128] border border-white/10 rounded-[3px] px-[6px] pt-[2px] text-[9px]">⭐ {review.rating}.0</span>
            <span className={`rounded-[3px] px-[6px] pt-[2px] text-[9px] ${getSentimentClass(review.sentiment)}`}>{review.sentiment}</span>
          </div>
        </div>

        {/* English Translation + AI */}
        <div className="p-[13px] rounded-md border border-white/10 bg-[#0A0D12]">
          <div className="flex justify-between mb-3">
            <p className="text-[#94A3B8] font-roboto text-[9px] font-normal tracking-[0.5px]">English Translation</p>
            <p className="text-[#A78BFA] font-roboto text-[9px] font-medium">✦ AI</p>
          </div>
     <p
  style={{ color: review.language === "English" ? "rgba(45,212,191,1)" : "#CBD5E1" }}
  className={`overflow-hidden break-words font-roboto text-[11px] font-normal leading-[18px] mt-3 ${review.language === "English" ? "italic" : ""}`}
>
  {translationText}
</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className={`rounded-[3px] px-[6px] pt-[2px] text-[9px] ${getToneClass(aiTags.tone)}`}>Tone: {aiTags.tone}</span>
            <span className={`rounded-[3px] px-[6px] pt-[2px] text-[9px] ${getSentimentClass(aiTags.sentimentLabel)}`}>Sentiment: {aiTags.sentimentLabel}</span>
            <span className={`rounded-[3px] px-[6px] pt-[2px] text-[9px] ${getRiskClass()}`}>Risk: {aiTags.risk}</span>
            <span className={`rounded-[3px] px-[6px] pt-[2px] text-[9px] ${getIntentClass(aiTags.intent)}`}>Intent: {aiTags.intent}</span>
          </div>
          <p className="break-words text-[#64748B] font-roboto text-[9px] italic font-normal leading-[13px] mt-4">
            "Culturally adapted to preserve implicit meaning and tone common in guest communication."
          </p>
        </div>
      </div>
    </div>
  );
}
