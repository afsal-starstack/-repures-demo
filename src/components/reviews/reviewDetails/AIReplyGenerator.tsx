export default function AIReplyGenerator({
  review,
  showAIReply,
  setShowAIReply,
  generateSectionRef,
}: any) {
  return (
    <div
      ref={generateSectionRef}
      className="p-6 rounded-2xl border border-white/10 bg-[#0B1C2E]"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-semibold">
          ✦ AI Reply — Native Language Response
        </h3>

        <span className="text-xs px-3 py-1 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30">
          [{review.language}]
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-5">
        Generates a culturally respectful reply in the guest's language while
        protecting hotel reputation.
      </p>

      {/* Dropdowns */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <label className="text-gray-400 text-xs">Reply Tone</label>
          <select className="w-full mt-1 bg-[#091521] border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 outline-none">
            <option>Professional</option>
            <option>Empathetic</option>
            <option>concise</option>
          </select>
        </div>

        <div>
          <label className="text-gray-400 text-xs">Brand Voice</label>
          <select className="w-full mt-1 bg-[#091521] border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-300 outline-none">
            <option>Modern UAE Hospitality</option>
            <option>Luxury Hotel</option>
            <option>Budget Hotel</option>
          </select>
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={() => setShowAIReply(true)}
        className="w-full py-3 rounded-lg bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all"
      >
        {showAIReply ? "✦ Regenerate AI Reply" : "✦ Generate AI Reply"}
      </button>
    </div>
  );
}
