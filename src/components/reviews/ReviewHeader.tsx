import React from "react";
import { Download, Check } from "lucide-react";

export const ReviewsHeader: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-4">

      {/* Top Row */}
      <div className="flex justify-between items-start">

        {/* Left */}
        <div>
          <h1 className="text-3xl font-semibold text-white">
            Reviews Inbox
          </h1>

          <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
            <span>Burj Al Salam Hotel</span>
            <span>•</span>
            <span>Downtown Dubai</span>

            {/* Stars */}
            <div className="flex items-center ml-2 text-yellow-400">
              ★ ★ ★ ★ <span className="text-gray-500 ml-1">★</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Last Sync */}
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <span className="animate-spin-slow">↻</span>
            <span>Last sync: 18 hours ago</span>
          </div>

          {/* Export Button */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-white/5 transition">
            <Download size={16} />
            Export
          </button>

          {/* Mark All Read */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 text-white hover:bg-teal-400 transition">
            <Check size={16} />
            Mark All Read
          </button>

        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center gap-6 text-sm text-gray-400">

        <span>
          Total: <span className="text-white font-medium">1284</span>
        </span>

        <span>
          Unanswered:{" "}
          <span className="text-red-400 font-medium">6</span>
        </span>

        <span>
          Avg Rating:{" "}
          <span className="text-yellow-400 font-medium">4.3</span>
        </span>

        <span>
          Response Rate:{" "}
          <span className="text-teal-400 font-medium">61%</span>
        </span>

      </div>

    </div>
  );
};