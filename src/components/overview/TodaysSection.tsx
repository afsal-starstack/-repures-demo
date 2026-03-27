import { ArrowRight } from "lucide-react";
import AlertTriangle from "@/assets/icons/overview/AlertTriangle.svg";
import AlertCircleRed from "@/assets/icons/overview/AlertCircleRed.svg";
import AlertCircleBlue from "@/assets/icons/overview/AlertCircleBlue.svg";

const data = [
  {
    icon: AlertTriangle,
    iconSize: "w-[16px] h-[14px]",
    text: "6 unanswered reviews require attention",
    tag: "Attention",
    border: "border-orange-500",
    hoverBg: "hover:bg-orange-500/10",
    hoverBorder: "hover:border-orange-400",
    tagColor: "text-[#FB923C] bg-orange-500/10 border-orange-500/30",
  },
  {
    icon: AlertCircleRed,
    iconSize: "w-[20px] h-[20px]",
    text: "1 negative review mentioning housekeeping",
    tag: "Urgent",
    border: "border-red-500",
    hoverBg: "hover:bg-red-500/10",
    hoverBorder: "hover:border-red-400",
    tagColor: "text-red-400 bg-red-500/10 border-red-500/30",
  },
  {
    icon: AlertCircleBlue,
    iconSize: "w-[20px] h-[20px]",
    text: "Competitor rating increased by 0.2 this week",
    tag: "Info",
    border: "border-indigo-500",
    hoverBg: "hover:bg-indigo-500/10",
    hoverBorder: "hover:border-indigo-400",
    tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
  },
];

export default function TodayFocus() {
  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[#0D1117] p-[25px]">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white font-roboto font-[600] text-[18px] leading-[28px]">
          Today's Focus
        </h3>
        <span className="text-[#6B7280] text-[12px]">3 items</span>
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className={`group flex items-center justify-between rounded-xl
              border border-l-[3.2px] ${item.border} ${item.hoverBorder} ${item.hoverBg}
              p-4 cursor-pointer min-h-[66px] flex-wrap gap-2`}
          >
            {/* LEFT */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-[32px] h-[32px] rounded-lg flex items-center justify-center bg-[#1F2937] flex-shrink-0">
                <img src={item.icon} className={`${item.iconSize} object-contain`} />
              </div>
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <p className="text-[#D1D5DB] font-roboto font-normal text-[14px] leading-[20px]">
                  {item.text}
                </p>
                <span className={`h-[22px] flex items-center justify-center whitespace-nowrap
                  font-roboto font-semibold text-[12px] leading-[16px]
                  px-[11px] py-[3px] rounded-full border ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-1 text-teal-400 font-roboto font-semibold text-[14px] leading-[20px] flex-shrink-0">
              View
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}