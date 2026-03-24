import React from "react";
import refreshIcon from "@/assets/icons/review/refreshIcon.svg";
import exportIcon from "@/assets/icons/review/exportIcon.svg";
import readIcon from "@/assets/icons/review/readIcon.svg";

export const ReviewsHeader: React.FC = () => {
  // Reusable separator component
  const Separator = () => <span className="inline-block w-[4.171875px] h-[24px] opacity-50">•</span>;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Top Row */}
      <div className="flex justify-between items-start">
        {/* Left */}
        <div>
          <h1 className="text-[30px] leading-[36px] font-bold text-white font-roboto">
            Reviews Inbox
          </h1>

          <div className="flex items-center gap-2 mt-2 text-[16px] leading-[24px] font-medium font-roboto text-gray-400">
            <span>Burj Al Salam Hotel</span>
            <Separator />
            <span>Downtown Dubai</span>
            <Separator />
            {/* Stars */}
            <div className="flex items-center text-yellow-400">
              ★ ★ ★ ★ <span className="text-gray-500 ml-1">★</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          {/* Last Sync */}
          <div className="flex items-center gap-5 text-[14px] leading-[20px] font-roboto font-normal text-gray-400">
            <img src={refreshIcon} alt="sync icon" className="animate-spin-slow w-4 h-4" />
            <span>Last sync: 18 hours ago</span>
          </div>

          {/* Export Button */}
          <button className="flex items-center gap-2 w-[97.33px] h-[38px] px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-white/5 transition">
            <img src={exportIcon} alt="Download" className="w-[14.59375px] h-[20px]" />
            Export
          </button>

          {/* Mark All Read */}
          <button className="flex items-center justify-center gap-2 w-[141.83px] h-[38px] px-4 py-2 rounded-lg bg-teal-500 text-white hover:bg-teal-400 transition font-roboto font-medium text-[14px] leading-[20px]">
            <img src={readIcon} alt="Download" className="w-[14.578125px] h-[14px]" />
            Mark All Read
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <span className="flex items-center gap-2 text-[14px] leading-[20px] font-roboto font-normal">
          Total: <span className="text-white font-medium">1284</span>
        </span>
        <Separator />
        <span className="flex items-center gap-2 text-[14px] leading-[20px] font-roboto font-normal">
          Unanswered: <span className="text-red-400 font-medium">6</span>
        </span>
        <Separator />
        <span className="flex items-center gap-2 text-[14px] leading-[20px] font-roboto font-normal">
          Avg Rating: <span className="text-yellow-400 font-medium">4.3</span>
        </span>
        <Separator />
        <span className="flex items-center gap-2 text-[14px] leading-[20px] font-roboto font-normal">
          Response Rate: <span className="text-teal-400 font-medium">61%</span>
        </span>
      </div>
    </div>
  );
};