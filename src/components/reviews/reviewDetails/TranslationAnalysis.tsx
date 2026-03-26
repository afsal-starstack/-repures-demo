export default function TranslationAnalysis({ review }: any) {
  const translationText =
    review.language === "English"
      ? "✓ No translation needed - review is in English. Cultural analysis still applied based on guest origin."
      : review.translation || "This is a translated version of the review.";

  const getSentimentClass = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "positive":
        return "bg-green-500/20 text-green-400";
      case "negative":
        return "bg-red-500/20 text-red-400";
      case "neutral":
      default:
        return "bg-orange-500/20 text-orange-400";
    }
  };

  const getToneClass = (tone: string) => {
    switch (tone.toLowerCase()) {
      case "angry":
        return "bg-red-500/20 text-red-400";
      case "pleased":
        return "bg-green-500/20 text-green-400";
      case "neutral":
      default:
        return "bg-orange-500/20 text-orange-400";
    }
  };

  const getIntentClass = (intent: string) => {
    switch (intent.toLowerCase()) {
      case "warning others":
        return "bg-red-500/20 text-red-400";
      case "recommending":
        return "bg-green-500/20 text-green-400";
      case "informative":
      default:
        return "bg-orange-500/20 text-orange-400";
    }
  };

  // Map sentiment to all AI tag values dynamically
const aiTags = (() => {
  const sentiment = review.sentiment?.toLowerCase() || "neutral";

  switch (sentiment) {
    case "positive":
      return { tone: "Pleased", intent: "Recommending", risk: "Low", sentimentLabel: "Positive" };
    case "negative":
      return { tone: "Angry", intent: "Warning others", risk: "High", sentimentLabel: "Negative" };
    case "neutral":
    default:
      return { tone: "Medium", intent: "Warning others", risk: "Medium", sentimentLabel: "Neutral" };
  }
})();

  // Determine risk class based on sentiment
  const getRiskClass = (risk: string) => {
    switch (aiTags.sentimentLabel.toLowerCase()) {
      case "positive":
        return "bg-green-500/20 text-green-400";
      case "negative":
        return "bg-red-500/20 text-red-400";
      case "neutral":
      default:
        return "bg-orange-500/20 text-orange-400";
    }
  };

  return (
    <div className="p-[17.2px] rounded-md border border-white/10 bg-[#111318] mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white font-['Roboto'] text-sm font-semibold leading-5">
          Translation & AI Analysis
          <span className="text-[#A78BFA] ml-2 font-['Roboto'] text-[11.467px] font-semibold leading-[16.381px]">
            ✦ Cultural AI
          </span>
        </h2>

        <p className="text-[#64748B] font-['Roboto'] text-[11.467px] font-normal leading-[16.381px]">
          Auto-detected:{" "}
          <span className="text-[#CBD5E1] font-['Roboto'] text-[11.467px] font-normal leading-[16.381px]">
            {review.language}
          </span>{" "}
          &nbsp; Cultural Mode
          <span className="ml-2 inline-flex items-center gap-1 font-['Roboto'] text-[9.828px] font-medium leading-[13.105px]">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            <span className="text-[#2DD4BF]">ON</span>
          </span>
        </p>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-2 gap-6">
        {/* LEFT — Original Review */}
        <div className="p-[13.92px] rounded-md border border-white/10 bg-[#0A0D12]">
          <div className="flex justify-between mb-3">
            <p className="text-[#94A3B8] font-['Roboto'] text-[9.828px] font-normal leading-[13.105px] tracking-[0.491px]">
              Original Review
            </p>
            <p className="text-[#2DD4BF] font-['Roboto'] text-[9.828px] font-medium leading-[13.105px]">
              {review.language !== "Arabic" && review.language}
            </p>
          </div>

          <p
            dir={review.language === "Arabic" ? "rtl" : "ltr"}
            className={`overflow-hidden break-words font-roboto text-[11.467px] font-normal leading-[18.633px] text-[#CBD5E1] mt-4 ${
              review.language === "Arabic" ? "text-right" : "text-left"
            }`}
          >
            {review.text}
          </p>

          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-[#1E2128] border-none rounded-[3.276px] px-[6.552px] pt-[2px] pb-[3px] text-[10px]">
              🌐 {review.language}
            </span>

            <span className="bg-[#1E2128] border border-white/10 rounded-[3.276px] px-[6.552px] pt-[2px] text-[10px]">
              {review.platform}
            </span>

            <span className="bg-[#1E2128] border border-white/10 rounded-[3.276px] px-[6.552px] pt-[2px] text-[9px]">
              ⭐ {review.rating}.0
            </span>

            <span
              className={`rounded-[3.276px] px-[6.552px] pt-[2px] text-[9px] ${getSentimentClass(
                review.sentiment
              )}`}
            >
              {review.sentiment}
            </span>
          </div>
        </div>

        {/* RIGHT — English Translation + AI */}
        <div className="p-[13.92px] rounded-md border border-white/10 bg-[#0A0D12]">
          <div className="flex justify-between mb-3">
            <p className="text-[#94A3B8] font-['Roboto'] text-[9.828px] font-normal leading-[13.105px] tracking-[0.491px]">
              English Translation
            </p>
            <p className="text-[#A78BFA] font-['Roboto'] text-[9.828px] font-medium leading-[13.105px]">
              ✦ AI
            </p>
          </div>

          {/* Translation Text */}
          <p
            style={{ color: review.language === "English" ? "rgba(45,212,191,1)" : "#CBD5E1" }}
            className="overflow-hidden break-words font-roboto text-[11.467px] font-normal leading-[18.633px] mt-4"
          >
            {translationText}
          </p>

          {/* AI Tags — fully dynamic */}
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className={`rounded-[3.276px] px-[6.552px] pt-[2px] text-[9px] ${getToneClass(aiTags.tone)}`}>
              Tone: {aiTags.tone}
            </span>
            <span
              className={`rounded-[3.276px] px-[6.552px] pt-[2px] text-[9px] ${getSentimentClass(
                aiTags.sentimentLabel
              )}`}
            >
              Sentiment: {aiTags.sentimentLabel}
            </span>
            <span className={`rounded-[3.276px] px-[6.552px] pt-[2px] text-[9px] ${getRiskClass(aiTags.risk)}`}>
              Risk: {aiTags.risk}
            </span>
            <span className={`rounded-[3.276px] px-[6.552px] pt-[2px] text-[9px] ${getIntentClass(aiTags.intent)}`}>
              Intent: {aiTags.intent}
            </span>
          </div>

          <p className="break-words text-[#64748B] font-roboto text-[9.828px] italic font-normal leading-[13.105px] mt-4">
            "Culturally adapted to preserve implicit meaning and tone common in guest communication."
          </p>
        </div>
      </div>
    </div>
  );
}