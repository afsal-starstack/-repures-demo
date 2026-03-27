import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutside";

export const ReviewList = ({
  reviews,
  selected,
  onSelect,
  sort,
  setSort,
  setShowAIReply,
}: any) => {
  const [openSort, setOpenSort] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useClickOutside([sortRef], () => setOpenSort(false));

  const options = [
    "Newest",
    "Needs Response",
    "Negative First",
    "Priority Reviews",
    "Positive Reviews",
  ];

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "Answered": return "Replied";
      case "Unanswered": return "Not Replied";
      case "Draft": return "Draft Saved";
      default: return status || "Unknown";
    }
  };

  return (
    <div className="bg-[rgba(17,19,24,0.50)] p-4 sm:p-[17px] rounded-md border border-white/10 w-full max-w-[464px] mx-auto lg:mx-0">

      {/* Header */}
      {reviews.length > 0 ? (
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-[10px] gap-2 sm:gap-0">
            <p className="text-[#94A3B8] font-roboto text-[11px] sm:text-[11.466px]">
              Showing {reviews.length} reviews
            </p>

            {/* Sort Dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => setOpenSort(!openSort)}
                className="flex text-[12px] items-center justify-between w-full sm:w-[150px] h-[32px] px-3 sm:px-4 rounded-md border border-white/10 bg-[#111318] text-gray-300"
              >
                {sort}
                <ChevronDown size={14} className={`ml-auto transition-transform ${openSort ? "rotate-180" : ""}`} />
              </button>

              {openSort && (
                <div className="absolute right-0 mt-1 w-full sm:w-[150px] rounded-md border border-white/10 bg-[#111318] overflow-hidden z-50">
                  {options.filter((item) => item !== sort).map((item) => (
                    <div
                      key={item}
                      onClick={() => { setSort(item); setOpenSort(false); }}
                      className="text-[12px] h-[32px] px-4 py-2 cursor-pointer rounded-md text-[#CBD5E1] hover:bg-teal-500 hover:text-white transition-all duration-150"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="border-b border-white/10 mt-[13px]"></div>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No reviews found with the given filters
        </div>
      )}

      {/* Review Cards */}
      <div className="space-y-[14px]">
        {reviews.map((r: any, i: number) => (
          <div
            key={r.id}
            onClick={() => {
              onSelect(i);
              setShowAIReply?.(false);
            }}
            className={`cursor-pointer items-start flex-shrink-0
              w-full
              pt-[13px] pr-[13px] pb-[13px] pl-[15px]
              rounded-[7px]
              border-t border-r border-b
              border-l-[3px]
              transition-all duration-150
              ${selected === i
                ? "bg-[#141A14] border-[#14B8A6]"
                : "bg-white/5 border-transparent hover:border-white/20"
              }`}
          >
            {/* Top */}
            <div className="flex justify-between flex-wrap sm:flex-nowrap">
              <div className="flex gap-3 items-center flex-1 min-w-0">
                {r.avatar ? (
                  <img src={r.avatar} alt={r.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center text-white text-xs flex-shrink-0">
                    {r.name.charAt(0)}
                  </div>
                )}
                <div className="truncate">
                  <h3 className="text-white font-roboto text-[12px] font-medium leading-[16px] truncate">{r.name}</h3>
                  <span className="inline-flex items-center flex-shrink-0 pt-[2px] pb-[2px] pl-[7px] pr-[7px] rounded-[3px] border border-[rgba(99,102,241,0.30)] bg-[rgba(99,102,241,0.20)] text-[#818CF8] font-roboto text-[9px] leading-[13px] truncate">
                    {r.platform}
                  </span>
                </div>
              </div>
              <span className="text-[#94A3B8] font-roboto text-[9px] font-normal leading-[13px] whitespace-nowrap ml-2 mt-2 sm:mt-0">
                {r.time}
              </span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2 mt-3 ml-[14px] flex-wrap">
              <div className="text-[#475569] font-roboto text-[18px] font-normal leading-[20px]">
                {"☆".repeat(r.rating)}
              </div>
              <span className="text-white font-inter text-[11px] font-normal leading-[16px]">
                {r.rating}.0
              </span>
            </div>

            {/* Text */}
            <p className="mt-3 text-gray-300 text-[11px] leading-relaxed line-clamp-3">{r.text}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-[9px] text-xs">
              <span className="inline-flex items-center flex-shrink-0 px-[7px] py-[2px] bg-purple-500/20 text-purple-400 rounded-[3px] text-[9px] leading-[13px] truncate">
                {r.language}
              </span>

              <span className={`inline-flex items-center flex-shrink-0 px-[7px] py-[2px] rounded-[3px] text-[9px] leading-[13px] truncate ${
                r.sentiment === "Positive" ? "bg-green-500/20 text-green-400"
                : r.sentiment === "Negative" ? "bg-red-500/20 text-red-400"
                : "bg-gray-500/20 text-gray-400"
              }`}>
                {r.sentiment}
              </span>

              {r.urgent && (
                <span className="inline-flex items-center flex-shrink-0 px-[6px] py-[1px] rounded-[3px] bg-[#EF4444] text-white font-roboto text-[9px] font-medium leading-[13px] truncate">
                  Urgent
                </span>
              )}

              <span className={`inline-flex items-center flex-shrink-0 px-[7px] py-[2px] rounded-[3px] text-[9px] leading-[13px] truncate ${
                r.status === "Answered" ? "bg-green-500/20 text-green-400"
                : r.status === "Unanswered" ? "border border-red-500 text-red-400 bg-[rgba(239,68,68,0.2)]"
                : "bg-yellow-500/20 text-yellow-400"
              }`}>
                {getStatusLabel(r.status)}
              </span>

              {r.culturalAi && (
                <span className="inline-flex items-center flex-shrink-0 px-[7px] py-[2px] rounded-[3px] border border-[rgba(20,184,166,0.30)] bg-[rgba(20,184,166,0.20)] text-[#2DD4BF] font-roboto text-[9px] leading-[13px] truncate">
                  Cultural AI Available
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};