export default function TranslationAnalysis({ review }: any) {
  return (
   <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1C2E] mt-6">
  {/* Header */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-white font-semibold">
      Translation & AI Analysis
      <span className="text-purple-400 ml-2 text-sm">✦ Cultural AI</span>
    </h2>

    <p className="text-gray-400 text-sm">
      Auto-detected: {review.language} &nbsp; Cultural Mode
      <span className="text-green-400 ml-2">● ON</span>
    </p>
  </div>

  {/* Two Columns */}
  <div className="grid grid-cols-2 gap-6">
    {/* LEFT — Original Review */}
    <div className="p-5 rounded-xl border border-white/10 bg-[#091521]">
      <div className="flex justify-between mb-3">
        <p className="text-gray-400 text-sm">Original Review</p>
        <p className="text-teal-400 text-sm">{review.language}</p>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">
        {review.text}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4 text-xs">
        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">
          {review.language}
        </span>

        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">
          {review.platform}
        </span>

        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">
          ⭐ {review.rating}.0
        </span>

        <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">
          {review.sentiment}
        </span>
      </div>
    </div>

    {/* RIGHT — English Translation + AI */}
    <div className="p-5 rounded-xl border border-white/10 bg-[#091521]">
      <div className="flex justify-between mb-3">
        <p className="text-gray-400 text-sm">English Translation</p>
        <p className="text-purple-400 text-sm">✦ AI</p>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">
        {review.translation}
      </p>

      {/* AI Tags */}
      <div className="flex flex-wrap gap-2 mt-4 text-xs">
        <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">
          Tone: Angry
        </span>

        <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded">
          Sentiment: Negative
        </span>

        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">
          Risk: High
        </span>

        <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded">
          Intent: Warning others
        </span>
      </div>

      <p className="text-gray-500 text-xs mt-4 italic">
        "Culturally adapted to preserve implicit meaning and tone common in guest communication."
      </p>
    </div>
  </div>
</div>
  );
}