import { useState, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

const tones = ["Professional", "Empathetic", "Concise"];
const brands = ["Modern UAE Hospitality", "Luxury International", "Boutique Friendly"];

export default function AIReplyGenerator({ review, showAIReply, setShowAIReply, generateSectionRef }: any) {
  const [selectedTone, setSelectedTone] = useState(tones[0]);
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [openDropdown, setOpenDropdown] = useState<"tone" | "brand" | null>(null);

  const dropdownRefTone = useRef<HTMLDivElement>(null);
  const dropdownRefBrand = useRef<HTMLDivElement>(null);

  useClickOutside([dropdownRefTone, dropdownRefBrand], () => setOpenDropdown(null));

  return (
    <div ref={generateSectionRef} className="p-4 sm:p-6 rounded-md border border-white/10 bg-[rgba(17,19,24,1)]">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
        <h3 className="text-white font-roboto text-[13px] font-semibold leading-[20px]">
          ✦ AI Reply — Native Language Response
        </h3>
        <span className="text-[9px] px-3 py-1 rounded-lg bg-purple-500/20 text-[#A78BFA] border border-purple-500/30 font-roboto font-medium">
          [{review.language}]
        </span>
      </div>

      <p className="text-gray-400 text-[12px] sm:text-sm mb-[13px]">
        Generates a culturally respectful reply in the guest's language while protecting hotel reputation.
      </p>

      {/* Dropdowns — stack on mobile, side by side on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {/* Tone */}
        <div className="relative" ref={dropdownRefTone}>
          <label className="block text-[11px] text-gray-400 mb-[5px]">Reply Tone</label>
          <div
            onClick={() => setOpenDropdown(openDropdown === "tone" ? null : "tone")}
            className="h-[30px] w-full px-3 flex items-center justify-between bg-[#0A0D12] border border-white/10 rounded-md text-[11px] font-roboto text-white cursor-pointer"
          >
            {selectedTone}
            <span className="ml-2">▾</span>
          </div>
          {openDropdown === "tone" && (
            <div className="absolute w-full mt-1 rounded-xl border border-white/10 bg-[rgba(17,19,24,1)] z-50">
              {tones.map((item) => (
                <div key={item} onClick={() => { setSelectedTone(item); setOpenDropdown(null); }}
                  className="flex h-[30px] px-[13px] py-[9px] items-center text-[11px] font-roboto text-white cursor-pointer hover:bg-[rgba(13,148,136,1)] hover:rounded-md">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Brand */}
        <div className="relative" ref={dropdownRefBrand}>
          <label className="block text-[11px] text-gray-400 mb-[5px]">Brand Style</label>
          <div
            onClick={() => setOpenDropdown(openDropdown === "brand" ? null : "brand")}
            className="h-[30px] w-full px-3 flex items-center justify-between bg-[#0A0D12] border border-white/10 rounded-md text-[11px] font-roboto text-white cursor-pointer"
          >
            {selectedBrand}
            <span className="ml-2">▾</span>
          </div>
          {openDropdown === "brand" && (
            <div className="absolute w-full mt-1 rounded-xl border border-white/10 bg-[rgba(17,19,24,1)] z-50">
              {brands.map((item) => (
                <div key={item} onClick={() => { setSelectedBrand(item); setOpenDropdown(null); }}
                  className="flex h-[30px] px-[13px] py-[9px] items-center text-[11px] font-roboto text-white cursor-pointer hover:bg-[rgba(13,148,136,1)] hover:rounded-md">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={() => setShowAIReply(true)}
        className="h-[33px] w-full rounded-lg bg-teal-600 hover:bg-teal-500 transition-all"
      >
        <span className="block text-center text-white font-roboto font-medium text-[11px] leading-[16px]">
          {showAIReply ? "↺ Regenerate AI Reply" : "✦ Generate AI Reply"}
        </span>
      </button>
    </div>
  );
}
