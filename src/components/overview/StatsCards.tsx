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
    value: "61",
    change: "-4%",
    trend: "down",
    description: "Reviews responded to",
  },
];

const value1 = 74;
const value2 = 14;
const value3 = 12;
const size = 60;

const total = value1 + value2 + value3;
const angle1 = (value1 / total) * 360;
const angle2 = (value2 / total) * 360;
const angle3 = (value3 / total) * 360;

const radius = size / 2;
const thickness = radius * 0.40;
const outerRadius = radius;
const innerRadius = radius - thickness;

const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
  const rad = ((angle - 90) * Math.PI) / 180.0;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const createDonutSlice = (start: number, sweep: number) => {
  const end = start + sweep;
  const startOuter = polarToCartesian(radius, radius, outerRadius, end);
  const endOuter = polarToCartesian(radius, radius, outerRadius, start);
  const startInner = polarToCartesian(radius, radius, innerRadius, start);
  const endInner = polarToCartesian(radius, radius, innerRadius, end);
  const largeArcFlag = sweep <= 180 ? "0" : "1";
  return ["M", startOuter.x, startOuter.y, "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    "L", startInner.x, startInner.y, "A", innerRadius, innerRadius, 0, largeArcFlag, 1, endInner.x, endInner.y, "Z"].join(" ");
};

let startAngle = 0;
const path1 = createDonutSlice(startAngle, angle1); startAngle += angle1;
const path2 = createDonutSlice(startAngle, angle2); startAngle += angle2;
const path3 = createDonutSlice(startAngle, angle3);

export default function StatsCards() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-[#1F2937] bg-[#0D1117] p-5 h-[175px] w-full transition-all duration-300
              hover:bg-gradient-to-br hover:from-[#11244a99] hover:to-[#2956b099]"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between mb-3">
              <p className="text-[#9CA3AF] font-roboto text-[14px] sm:text-[14px] font-medium leading-[17.5px] truncate pr-1">
                {item.title}
              </p>

              {item.trend === "up" && (
                <span className="flex items-center gap-1 text-[#10B981] font-roboto text-xs sm:text-xs font-normal leading-4 flex-shrink-0">
                  <ArrowUp className="w-3 h-3" />
                  {item.change}
                </span>
              )}
              {item.trend === "down" && (
                <span className="flex items-center gap-1 text-[rgba(248,113,113,1)] font-roboto text-xs sm:text-xs font-normal leading-4 flex-shrink-0">
                  <ArrowDown className="w-3 h-3" />
                  {item.change}
                </span>
              )}
              {item.trend === "neutral" && (
                <span className="flex items-center gap-1 text-[#10B981] font-roboto text-xs sm:text-xs font-normal leading-4 flex-shrink-0">
                  {item.change}
                </span>
              )}
            </div>

            {/* CONTENT */}
            {item.title === "Sentiment Split" ? (
              <div className="flex items-center gap-6 mb-[15px]">
             <div className="relative pl-2" style={{ width: size, height: size }}>
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
    <path d={path1} fill="#10B981" />
    <path d={path2} fill="#6B7280" />
    <path d={path3} fill="#EF4444" />
  </svg>
</div>
                <div className="text-[12px] sm:text-[12px] text-[#9CA3AF] space-y-1">
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
            ) : item.title === "Response Rate" ? (
              <div className="flex items-center gap-4">
                <div className="relative w-[65px] h-[65px] flex-shrink-0">
                  <svg className="w-[65px] h-[65px]" viewBox="0 0 56 56">
                    <circle cx="28" cy="28" r="22" className="stroke-gray-800" strokeWidth="7" fill="transparent" />
                    <circle
                      cx="28" cy="28" r="22"
                      className="stroke-[rgba(20,184,166,1)]"
                      strokeWidth="7" fill="transparent"
                      strokeDasharray={2 * Math.PI * 22}
                      strokeDashoffset={2 * Math.PI * 22 * (1 - Number(item.value) / 100)}
                      strokeLinecap="round"
                      transform="rotate(-90 28 28)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-[12px]">
                    {item.value}%
                  </div>
                </div>
                <div>
                  <p className="text-white font-inter text-[24px] font-bold leading-[32px] pb-[4px] pt-[4px]">
                    {item.value}%
                  </p>
                  <p className="text-[#6B7280] text-[12px]">of reviews</p>
                </div>
              </div>
            ) : (
              <h2 className="text-white font-inter text-[30px] font-bold leading-[36px]">
                {item.value}
              </h2>
            )}

            {/* FOOTER */}
            <p className="text-[#6B7280] text-[12px] mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}