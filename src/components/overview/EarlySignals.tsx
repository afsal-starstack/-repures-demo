import { AlertTriangle, Info, ArrowRight } from "lucide-react";

const signals = [
  {
    type: "warning",
    text: 'Spike in negative mentions around "Wi-Fi speed" – last 72 hours',
    time: "2 hours ago",
  },
  {
    type: "warning",
    text: "Response rate dropped to 61% this week",
    time: "5 hours ago",
  },
  {
    type: "info",
    text: "3 new reviews on Booking.com not yet acknowledged",
    time: "8 hours ago",
  },
  {
    type: "info",
    text: "Average rating improved by 0.3 points this month",
    time: "1 day ago",
  },
];

export default function EarlySignals() {
  return (
    <div className="rounded-2xl border border-white/10 p-4 sm:p-6 bg-[rgba(13,16,23,0.3)] backdrop-blur-xl">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-white font-roboto text-[18px] font-[600] leading-[28px]">
            Early Signals
          </h2>
          <p className="text-[#6B7280] font-roboto text-[12px] font-normal leading-[16px]">
            AI-detected patterns from the last 72 hours
          </p>
        </div>
        <span className="text-[rgba(75,85,99,1)] font-inter text-[12px] font-normal leading-[16px]">
          {signals.length} signals
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {signals.map((item, index) => {
          const isWarning = item.type === "warning";
          return (
            <div
              key={index}
              className={`relative rounded-xl p-[17px] border
                ${isWarning
                  ? "border-yellow-500/40 bg-[rgba(245,158,11,0.05)] hover:bg-[rgba(245,158,11,0.15)]"
                  : "border-blue-500/40 bg-[rgba(59,130,246,0.05)] hover:bg-[rgba(59,130,246,0.15)]"}
                transition-colors duration-200 ease-in-out`}
            >
              {/* Top Right Time */}
              <span className="absolute top-4 right-4 text-xs text-gray-500">{item.time}</span>

              {/* Content */}
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0
                  ${isWarning ? "bg-yellow-500/10 text-yellow-400" : "bg-blue-500/10 text-blue-400"}`}>
                  {isWarning ? <AlertTriangle size={18} /> : <Info size={18} />}
                </div>

                <div className="flex-1 pr-12">
                  <span className={`text-[12px] font-roboto font-semibold leading-[16px] px-2 py-1 rounded-full border
                    ${isWarning
                      ? "border-yellow-500 text-[rgba(251,191,36,1)]"
                      : "border-blue-400 text-[rgba(96,165,250,1)]"}`}>
                    {isWarning ? "Warning" : "Info"}
                  </span>
                  <p className="text-[rgba(229,231,235,1)] font-roboto text-[14px] font-normal leading-[22.75px] mt-2">
                    {item.text}
                  </p>
                  <div className="flex items-center gap-1 text-[#2DD4BF] text-[12px] font-roboto font-semibold leading-[16px] mt-1 cursor-pointer">
                    Review <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
