// components/overview/StatsCards.tsx

import { ArrowUp, ArrowDown } from "lucide-react";

const statsData = [
  {
    title: "Reputation Score",
    value: "87.4",
    change: "+2.3%",
    trend: "up",
    description: "Overall review performance",
  },
  {
    title: "Revenue Risk Index",
    value: "Low",
    change: "Stable",
    trend: "neutral",
    description: "Revenue impact from sentiment",
  },
  {
    title: "Sentiment Split",
    value: null,
    change: "+3%",
    trend: "up",
    sentiment: {
      positive: 74,
      neutral: 14,
      negative: 12,
    },
    description: "Positive / Neutral / Negative",
  },
  {
    title: "Total Reviews",
    value: "1,284",
    change: "+47",
    trend: "up",
    description: "Across all sources",
  },
  {
    title: "Response Rate",
    value: "61%",
    change: "-4%",
    trend: "down",
    description: "Reviews responded to",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {statsData.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-[#1F2937] bg-[#0D1117] p-5"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-[#9CA3AF] text-[14px]">
              {item.title}
            </p>

            {/* CHANGE */}
            {item.trend === "up" && (
              <span className="flex items-center gap-1 text-green-400 text-[12px]">
                <ArrowUp className="w-3 h-3" />
                {item.change}
              </span>
            )}

            {item.trend === "down" && (
              <span className="flex items-center gap-1 text-red-400 text-[12px]">
                <ArrowDown className="w-3 h-3" />
                {item.change}
              </span>
            )}

            {item.trend === "neutral" && (
              <span className="text-[#6B7280] text-[12px]">
                {item.change}
              </span>
            )}
          </div>

          {/* CONTENT */}
          {item.title === "Sentiment Split" ? (
            <>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[conic-gradient(#10B981_74%,#6B7280_14%,#EF4444_12%)]"></div>

                <div className="text-[12px] text-[#9CA3AF] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    {item.sentiment?.positive}%
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    {item.sentiment?.neutral}%
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    {item.sentiment?.negative}%
                  </div>
                </div>
              </div>
            </>
          ) : item.title === "Response Rate" ? (
            <>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-[6px] border-teal-400 flex items-center justify-center text-white text-[12px]">
                  {item.value}
                </div>

                <div>
                  <p className="text-white text-[20px] font-semibold">
                    {item.value}
                  </p>
                  <p className="text-[#6B7280] text-[12px]">
                    of reviews
                  </p>
                </div>
              </div>
            </>
          ) : (
            <h2 className="text-white text-[28px] font-bold">
              {item.value}
            </h2>
          )}

          {/* FOOTER */}
          <p className="text-[#6B7280] text-[12px] mt-3">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}