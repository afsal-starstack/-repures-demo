import React from "react";
import { Star } from "lucide-react";

const platforms = [
  {
    name: "Google",
    icon: "G",
    reviews: 487,
    rating: 4.4,
    unanswered: 3,
    trend: "+0.2",
    trendUp: true,
    color: "from-red-500/20 to-transparent",
  },
  {
    name: "Booking.com",
    icon: "B.",
    reviews: 312,
    rating: 4.1,
    unanswered: 2,
    trend: "-0.1",
    trendUp: false,
    color: "from-blue-500/20 to-transparent",
  },
  {
    name: "TripAdvisor",
    icon: "👁",
    reviews: 298,
    rating: 4.5,
    unanswered: 1,
    trend: "+0.3",
    trendUp: true,
    color: "from-green-500/20 to-transparent",
  },
];

export const PlatformCards: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-6">

      {platforms.map((item, i) => (
        <div
          key={i}
          className="p-[1px] rounded-2xl bg-gradient-to-r from-white/10 via-transparent to-white/10"
        >
          <div className="rounded-2xl bg-[#0B0F19]/90 p-5 h-full">

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${item.color} text-white font-semibold`}>
                {item.icon}
              </div>

              <div>
                <p className="text-white font-medium">{item.name}</p>
                <p className="text-xs text-gray-400">
                  Synced {i === 0 ? "18 min ago" : i === 1 ? "1 hr ago" : "2 hr ago"}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 text-sm">

              {/* Reviews */}
              <div className="flex justify-between text-gray-400">
                <span>Reviews</span>
                <span className="text-white">{item.reviews}</span>
              </div>

              {/* Rating */}
              <div className="flex justify-between items-center text-gray-400">
                <span>Avg Rating</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className={
                        star <= Math.floor(item.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }
                    />
                  ))}
                  <span className="text-white ml-1 text-xs">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Unanswered */}
              <div className="flex justify-between items-center text-gray-400">
                <span>Unanswered</span>
                <span className="text-red-400 text-xs px-2 py-0.5 rounded-full border border-red-500/30 bg-red-500/10">
                  {item.unanswered}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/5" />

              {/* Trend */}
              <div className="flex justify-between text-gray-400">
                <span>30-day trend</span>
                <span
                  className={`text-sm font-medium ${
                    item.trendUp ? "text-teal-400" : "text-red-400"
                  }`}
                >
                  {item.trendUp ? "↑" : "↓"} {item.trend}
                </span>
              </div>

            </div>
          </div>
        </div>
      ))}

    </div>
  );
};