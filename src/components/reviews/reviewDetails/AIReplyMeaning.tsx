import roundIcon from "@/assets/icons/review/roundIcon.svg";

export default function AIReplyMeaning({ copied, handleCopyEnglish }: any) {
  return (
    <div className="p-[17.2px] rounded-md border border-white/10 bg-[#111318]">
      <h3 className="text-white font-roboto text-[11.467px] font-semibold leading-[16.381px] mb-4">
        AI Reply Meaning (English + Cultural Context)
      </h3>

      {/* English Meaning */}
      <div className="p-[13.9px] rounded-md border border-white/10 bg-[#0A0D12] mb-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[rgba(148,163,184,1)] font-roboto text-[9.828px] font-normal leading-[13.105px]">
            🌐 AI Reply Meaning (English)
          </p>
          <button
            onClick={() =>
              handleCopyEnglish(
                "We sincerely apologize that your stay did not meet our usual standards. The issues you described have been immediately discussed with the relevant department heads. We would be happy to give you the opportunity to experience our hotel at its best.",
              )
            }
            className="text-[#94A3B8] text-center font-roboto text-[9.828px] font-normal leading-[13.105px] px-3 py-1.5 border border-white/10 rounded-lg hover:bg-white/5 transition"
          >
            {copied ? "Copied" : "Copy English"}
          </button>
        </div>

        <p className="text-[#CBD5E1] font-roboto text-[11.467px] font-normal leading-[18.633px] break-words">
          We sincerely apologize that your stay did not meet our usual
          standards. The issues you described have been immediately discussed
          with the relevant department heads. We would be happy to give you the
          opportunity to experience our hotel at its best.
        </p>
      </div>

      {/* Cultural Context */}
      <div className="p-4 rounded-md border border-white/10 bg-[#0A0D12]">
        <p className="text-[#94A3B8] font-roboto text-[9.828px] font-normal leading-[13.105px] mb-3 flex items-center gap-1">
          <img src={roundIcon} alt="" className="w-3 h-3" />
          Cultural & Context Meaning
        </p>
        <ul className="text-[#CBD5E1] font-roboto text-[9.828px] font-normal leading-[13.105px] space-y-2">
          <li>
            <span className="text-[#2DD4BF] font-roboto text-[11.467px] font-normal leading-[16.381px] mr-2">
              ✓
            </span>
            Direct and factual tone preferred by German guests
          </li>
          <li>
            <span className="text-[#2DD4BF] font-roboto text-[11.467px] font-normal leading-[16.381px] mr-2">
              ✓
            </span>
            Concrete action steps mentioned — builds credibility
          </li>
          <li>
            <span className="text-[#2DD4BF] font-roboto text-[11.467px] font-normal leading-[16.381px] mr-2">
              ✓
            </span>
            Avoids over-apologising — focuses on resolution
          </li>
          <li>
            <span className="text-[#2DD4BF] font-roboto text-[11.467px] font-normal leading-[16.381px] mr-2">
              ✓
            </span>
            Formal address maintained
          </li>
          <li>
            <span className="text-[#2DD4BF] font-roboto text-[11.467px] font-normal leading-[16.381px] mr-2">
              ✓
            </span>
            Solution-oriented closing
          </li>
        </ul>
      </div>

      <div className="p-5 rounded-md border border-white/10 bg-[#0A0D12] mt-4 mb-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <p className="text-[#94A3B8] font-roboto text-[9.828px] font-normal leading-[13.105px]">
            Reply Relevance to Review
          </p>{" "}
          <span className="text-gray-500 text-xs">ⓘ</span>
        </div>

        {/* Percentage + Badge */}
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-[#2DD4BF] font-inter text-[19.657px] font-bold leading-[26.209px]">
            88%
          </h2>
          <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 font-roboto text-[9.828px] font-medium leading-[13.105px] text-[#4ADE80] flex items-center gap-1">
            <span className="text-[#4ADE80] text-[14px] pb-[3px]">■</span>
            Highly Relevant
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[6.5px] bg-[#1F2A37] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#14B8A6] rounded-full"
            style={{ width: "88%" }}
          ></div>
        </div>
      </div>

      <div className="p-5 rounded-md border border-white/10 bg-[#0A0D12]">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-[13px] h-[13px] rounded-full border-2 border-purple-400"></div>
          <p className="text-[#CBD5E1] font-roboto text-[9.828px] font-medium leading-[13.105px]">
            {" "}
            Unique Reply Guarantee
          </p>
        </div>

        {/* Description */}
        <p className="text-[#94A3B8] font-roboto text-[9.828px] font-normal leading-[13.105px] mb-4 break-words">
          {" "}
          Repures generates a new response every time — no templates, adapts
          phrasing per cultural norms and sentiment intensity.
        </p>

        {/* Tags */}
        <div className="flex gap-3 flex-wrap">
          <span className="px-3 py-1 rounded-full border border-teal-400/30 text-[#2DD4BF] font-roboto text-[9.828px] font-normal leading-[13.105px]">
            {" "}
            ✓ No template repetition
          </span>

          <span className="px-3 py-1 rounded-full border border-teal-400/30 text-[#2DD4BF] font-roboto text-[9.828px] font-normal leading-[13.105px]">
            {" "}
            ✓ Cultural tone preserved
          </span>

          <span className="px-3 py-1 rounded-full border border-teal-400/30 text-[#2DD4BF] font-roboto text-[9.828px] font-normal leading-[13.105px]">
            {" "}
            ✓ Reputation-safe language
          </span>
        </div>
      </div>
    </div>
  );
}
