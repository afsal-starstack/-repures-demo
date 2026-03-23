export default function AIReplyMeaning({ copied, handleCopyEnglish }: any) {
  return (
   <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1C2E]">
    <h3 className="text-white font-semibold mb-4">
      AI Reply Meaning (English + Cultural Context)
    </h3>

    {/* English Meaning */}
<div className="p-5 rounded-2xl border border-white/10 bg-[#0B1C2E] mb-4">
  <div className="flex items-center justify-between mb-3">
    <p className="text-gray-400 text-sm">
      🌐 AI Reply Meaning (English)
    </p>

    <button
      onClick={() =>
        handleCopyEnglish(
          "We sincerely apologize that your stay did not meet our usual standards. The issues you described have been immediately discussed with the relevant department heads. We would be happy to give you the opportunity to experience our hotel at its best."
        )
      }
      className="text-xs px-3 py-1.5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/5 transition"
    >
      {copied ? "Copied" : "Copy English"}
    </button>
  </div>

  <p className="text-gray-300 text-sm leading-6">
    We sincerely apologize that your stay did not meet our usual standards.
    The issues you described have been immediately discussed with the relevant
    department heads. We would be happy to give you the opportunity to
    experience our hotel at its best.
  </p>
</div>

    {/* Cultural Context */}
    <div className="p-4 rounded-xl border border-white/10 bg-[#091521]">
      <p className="text-gray-300 text-sm mb-3">
       🌐 Cultural & Context Meaning
      </p>

      <ul className="text-sm text-gray-400 space-y-2">
        <li>✓ Direct and factual tone preferred by German guests</li>
        <li>✓ Concrete action steps mentioned — builds credibility</li>
        <li>✓ Avoids over-apologising — focuses on resolution</li>
        <li>✓ Formal address maintained</li>
        <li>✓ Solution-oriented closing</li>
      </ul>
    </div>

    <div className="p-5 rounded-2xl border border-white/10 bg-[#0B1C2E] mb-4">
  {/* Header */}
  <div className="flex items-center gap-2 mb-3">
    <p className="text-gray-400 text-sm">Reply Relevance to Review</p>
    <span className="text-gray-500 text-xs">ⓘ</span>
  </div>

  {/* Percentage + Badge */}
  <div className="flex items-center gap-3 mb-3">
    <h2 className="text-3xl font-semibold text-teal-400">88%</h2>
    <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
      Relevant
    </span>
  </div>

  {/* Progress Bar */}
  <div className="w-full h-2 bg-[#1F2A37] rounded-full overflow-hidden">
    <div
      className="h-full bg-teal-400 rounded-full"
      style={{ width: "88%" }}
    ></div>
  </div>
</div>

<div className="p-5 rounded-2xl border border-white/10 bg-[#0B1C2E] mb-4">
  {/* Header */}
  <div className="flex items-center gap-3 mb-2">
    <div className="w-4 h-4 rounded-full border-2 border-purple-400"></div>
    <p className="text-gray-300 text-sm font-medium">
      Unique Reply Guarantee
    </p>
  </div>

  {/* Description */}
  <p className="text-gray-400 text-sm mb-4">
    Repures generates a new response every time — no templates, adapts phrasing
    per cultural norms and sentiment intensity.
  </p>

  {/* Tags */}
  <div className="flex gap-3 flex-wrap">
    <span className="text-xs px-3 py-1 rounded-full border border-teal-400/30 text-teal-400">
      ✓ No template repetition
    </span>

    <span className="text-xs px-3 py-1 rounded-full border border-teal-400/30 text-teal-400">
      ✓ Cultural tone preserved
    </span>

    <span className="text-xs px-3 py-1 rounded-full border border-teal-400/30 text-teal-400">
      ✓ Reputation-safe language
    </span>
  </div>
</div>
  </div>
  );
}