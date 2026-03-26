import { ArrowUp } from "lucide-react";

const hotels = [
  { rank: 1, name: "Atlantis The Palm", score: 90.6 },
  { rank: 2, name: "Jumeirah Beach Hotel", score: 89.1 },
  { rank: 3, name: "Burj Al Salam Hotel (You)", score: 87.4, highlight: true },
  { rank: 4, name: "Address Downtown", score: 86.2 },
  { rank: 5, name: "Sofitel Dubai", score: 84.8 },
];

export default function MarketPosition() {
  return (
    <div
      className="
  h-[490px]
  p-[25px]
  rounded-[12px]
  border border-[rgba(255,255,255,0.07)]
  bg-[rgba(13,16,23,0.30)]
"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 h-[50px]">
        <div>
          <h2 className="text-[18px] font-semibold leading-[28px] text-white font-['Roboto']">
            Market Position
          </h2>
          <p className="text-[14px] font-normal leading-[20px] text-[#6B7280] font-['Roboto']">
            Downtown Dubai · 18 hotels tracked
          </p>
        </div>

        {/* Badge */}
        <div
          className="
  flex items-center gap-2
  w-[207px] h-[34px]
  px-[13px] py-[7px]
  rounded-[8px]
  border border-[rgba(16,185,129,0.20)]
  bg-[rgba(16,185,129,0.10)]
  text-[#34D399]
  text-sm font-semibold leading-5
  font-['Roboto']
  flex-shrink-0
"
        >
          {" "}
          <ArrowUp className="w-3 h-3" />▲ Up from #5 last month{" "}
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center   h-[348px]">
          {/* Rank */}
          <div>
            <p className="text-[#6B7280] font-roboto text-[12px] font-normal leading-[16px] tracking-[1.2px] mb-[8px]">
              Your Rank
            </p>
            <h1 className="text-white font-inter text-[60px] font-bold leading-[60px] pb-[3px]">
              #3
            </h1>
            <p className="text-[#6B7280] font-roboto text-[14px] font-normal leading-[20px] mb-[16px]">
              of 18 hotels
            </p>{" "}
          </div>

          {/* Stats */}
          <div className="space-y-[6px] text-sm ">
            <div className="flex justify-between">
              <span className="text-[#6B7280] font-roboto text-[12px] font-normal leading-[16px]">
                Your Score
              </span>
              <span className="text-[#2DD4BF] font-inter text-xs font-bold leading-4">
                87.4
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#6B7280] font-roboto text-[12px] font-normal leading-[16px]">
                Gap to #1
              </span>
              <span className="text-[#FB923C] font-inter text-xs font-bold leading-4 pr-[8px]">
                -3.2 pts
              </span>{" "}
            </div>

            <div className="flex justify-between">
              <span className="text-[#6B7280] font-roboto text-[12px] font-normal leading-[16px]">
                Ahead of #4 by
              </span>
              <span className="text-[#34D399] font-inter text-xs font-bold leading-4 pr-[8px]">
                +1.2 pts
              </span>{" "}
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-4 h-[60px">
          {hotels.map((hotel) => {
            const width = `${(hotel.score / 100) * 100}%`;

            return (
              <div
                key={hotel.rank}
                className={`p-3 rounded-xl border h-[60px] ${
                  hotel.highlight
                    ? "border-none bg-emerald-500/5"
                    : "border-none bg-white/5"
                }`}
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[#4B5563] text-center font-inter text-xs font-bold leading-4">
                      #{hotel.rank}
                    </span>{" "}
                    <p
                      className={`truncate font-roboto text-sm font-medium leading-5 ${
                        hotel.highlight
                          ? "text-emerald-400"
                          : "text-[rgba(209,213,219,1)]"
                      }`}
                    >
                      {hotel.name}
                    </p>
                  </div>

                  <span
                    className={`text-sm font-medium leading-5 font-roboto ${
                      hotel.highlight
                        ? "text-emerald-400"
                        : "text-[rgba(156,163,175,1)]"
                    }`}
                  >
                    {hotel.score}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      hotel.highlight
                        ? "bg-gradient-to-r from-emerald-400 to-emerald-300"
                        : "bg-gray-400/40"
                    }`}
                    style={{ width }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
