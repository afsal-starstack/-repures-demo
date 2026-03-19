// components/overview/TodayFocus.tsx

import { AlertTriangle, AlertCircle, Info, ArrowRight } from "lucide-react";

const data = [
  {
    icon: AlertTriangle,
    text: "6 unanswered reviews require attention",
    tag: "Attention",
    border: "border-orange-500",
    bg: "bg-orange-500/10",
    tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/30",
  },
  {
    icon: AlertCircle,
    text: "1 negative review mentioning housekeeping",
    tag: "Urgent",
    border: "border-red-500",
    bg: "bg-red-500/10",
    tagColor: "text-red-400 bg-red-500/10 border-red-500/30",
  },
  {
    icon: Info,
    text: "Competitor rating increased by 0.2 this week",
    tag: "Info",
    border: "border-indigo-500",
    bg: "bg-indigo-500/10",
    tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
  },
];

export default function TodayFocus() {
  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[#0D1117] p-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-[16px] font-semibold">
          Today’s Focus
        </h3>
        <span className="text-[#6B7280] text-[12px]">3 items</span>
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-4">
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`flex items-center justify-between rounded-xl border ${item.border} p-4`}
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                
                {/* ICON BOX */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.bg}`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* TEXT */}
                <div className="flex items-center gap-3">
                  <p className="text-[#D1D5DB] text-[14px]">
                    {item.text}
                  </p>

                  {/* TAG */}
                  <span
                    className={`text-[12px] px-3 py-[2px] rounded-full border ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-1 text-teal-400 cursor-pointer text-[14px]">
                View
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}