import React from "react";

import googleIcon from "@/assets/images/review/google.svg";
import bookingIcon from "@/assets/images/review/booking.com.svg";
import tripadvisorIcon from "@/assets/images/review/tripAdvisor.png";

const platforms = [
  {
    name: "Google",
    icon: googleIcon,
    reviews: 487,
    rating: 4.4,
    unanswered: 3,
    trend: "0.2",
    trendUp: true,
    color: "from-red-500/20 to-transparent",
    iconW: "w-[36px]",
    iconH: "h-[36px]",
  },
  {
    name: "Booking.com",
    icon: bookingIcon,
    reviews: 312,
    rating: 4.1,
    unanswered: 2,
    trend: "0.1",
    trendUp: false,
    color: "from-blue-500/20 to-transparent",
    iconW: "w-[27px]",
    iconH: "h-[26px]",
  },
  {
    name: "TripAdvisor",
    icon: tripadvisorIcon,
    reviews: 298,
    rating: 4.5,
    unanswered: 1,
    trend: "0.3",
    trendUp: true,
    color: "from-green-500/20 to-transparent",
    iconW: "w-[32px]",
    iconH: "h-[32px]",
  },
];

const FilledStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
    <g clipPath="url(#clip0_1_3596)">
      <path
        d="M6.25004 9.45018L2.72004 11.4302L3.51004 7.46018L0.540039 4.72018L4.56004 4.24018L6.25004 0.570176L7.94004 4.24018L11.96 4.72018L8.99004 7.46018L9.78004 11.4302L6.25004 9.45018Z"
        fill="#FACC15"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_3596">
        <rect width="12.5" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const EmptyStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
    <g clipPath="url(#clip0_1_3596)">
      <path
        d="M6.25004 9.45018L2.72004 11.4302L3.51004 7.46018L0.540039 4.72018L4.56004 4.24018L6.25004 0.570176L7.94004 4.24018L11.96 4.72018L8.99004 7.46018L9.78004 11.4302L6.25004 9.45018Z"
        fill="#D1D5DB"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_3596">
        <rect width="12.5" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const PlatformCards: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {platforms.map((item, i) => (
        <div
          key={i}
          className="w-[272px] h-[201px] p-[1px] rounded-2xl"
        >
          <div className="w-full h-full rounded-[12px] border border-gray-700 bg-rgba(rgba(17, 19, 24, 0.35)) p-[21px] flex flex-col gap-3">
            
            {/* Header */}
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-white font-semibold`}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`${item.iconW} ${item.iconH} object-contain`}
                />
              </div>
              <div>
                <p className="text-white font-medium">{item.name}</p>
                <p className="text-xs text-gray-400">
                  Synced {i === 0 ? "18 min ago" : i === 1 ? "1 hr ago" : "2 hr ago"}
                </p>
              </div>
            </div>

            {/* Stats & Content */}
            <div className="flex-1 flex flex-col justify-start gap-2 text-sm">

              {/* Reviews */}
              <div className="flex justify-between">
                <span className="font-roboto font-normal text-[12px] leading-[16px] text-gray-400">
                  Reviews
                </span>
                <span className="text-white font-inter font-bold text-[14px] leading-[20px]">
                  {item.reviews}
                </span>
              </div>

              {/* Rating */}
              <div className="flex justify-between items-center">
                <span className="font-roboto font-normal text-[12px] leading-[16px] text-gray-400">
                  Avg Rating
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                      {star <= Math.floor(item.rating) ? <FilledStar /> : <EmptyStar />}
                    </span>
                  ))}
                  <span className="ml-1 text-[#D1D5DB] font-inter font-bold text-[12px] leading-[16px]">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Unanswered */}
              <div className="flex justify-between items-center">
                <span className="font-roboto font-normal text-[12px] leading-[16px] text-gray-400">
                  Unanswered
                </span>
                <span className="flex w-[25.203px] h-[22px] px-[9px] py-[3px] items-center flex-shrink-0 rounded-full border border-[rgba(239,68,68,0.25)] bg-[rgba(239,68,68,0.15)] text-[#F87171] font-inter font-bold text-[12px] leading-[16px]">
                  {item.unanswered}
                </span>
              </div>

              {/* Divider line */}
              <div className="w-full h-px bg-white/5" />

              {/* Trend */}
              <div className="flex justify-between items-center">
                <span className="font-roboto font-normal text-[12px] leading-[16px] text-gray-400">
                  30-day trend
                </span>
                <span className={`flex items-center gap-1 text-sm font-medium ${item.trendUp ? "text-teal-400" : "text-red-500"}`}>
                  {item.trendUp ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                      <path
                        d="M6.24982 5.46994L3.77982 7.93994L3.06982 7.23994L6.24982 4.05994L9.42982 7.23994L8.71982 7.93994L6.24982 5.46994Z"
                        fill="#14B8A6"
                      />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                      <path
                        d="M6.24982 6.52994L8.71982 4.05994L9.42982 4.75994L6.24982 7.93994L3.06982 4.75994L3.77982 4.05994L6.24982 6.52994Z"
                        fill="#F87171"
                      />
                    </svg>
                  )}
                  {item.trend}
                </span>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};