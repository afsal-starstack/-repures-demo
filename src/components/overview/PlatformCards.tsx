// components/overview/PlatformCards.tsx

import googleIcon from "@/assets/images/overview/google.png";
import bookingIcon from "@/assets/images/overview/booking.com.png";
import tripadvisorIcon from "@/assets/images/overview/tripAdvisor.png";

const platforms = [
  {
    name: "Google",
    rating: "4.6",
    reviews: "842",
    icon: googleIcon,
  },
  {
    name: "Booking.com",
    rating: "8.9",
    reviews: "1,204",
    icon: bookingIcon,
  },
  {
    name: "TripAdvisor",
    rating: "4.5",
    reviews: "637",
    icon: tripadvisorIcon,
  },
];

export default function PlatformCards() {
  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[#0D1117] p-6">

      {/* TODAY STATUS TITLE */}
      <p className="text-[#6B7280] text-[14px] font-roboto mb-3">
        Today&apos;s Reputation Status
      </p>

      {/* STATUS ROW */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg border border-green-500/30 bg-green-500/10 text-green-400 text-[14px] font-medium">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          STABLE
        </div>

        <p className="text-[#9CA3AF] text-[14px] font-roboto">
          No new reputation risks detected. Guest sentiment remains stable across all platforms.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#1F2937] mb-6"></div>

      {/* PLATFORMS TITLE */}
      <p className="text-[#6B7280] text-[14px] font-roboto mb-4">
        Platforms
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-3 gap-4">
        {platforms.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-[#1F2937] bg-[#111827] p-5"
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#1F2937] flex items-center justify-center">
                <img src={item.icon} className="w-5 h-5" alt={item.name} />
              </div>

              <span className="text-[#D1D5DB] text-[14px] font-medium">
                {item.name}
              </span>
            </div>

            {/* RATING */}
            <div className="text-white text-[28px] font-bold leading-[36px]">
              {item.rating}
              <span className="text-[#6B7280] text-[14px] ml-1">
                / 10
              </span>
            </div>

            {/* REVIEWS */}
            <div className="flex items-center gap-2 mt-3 text-[#6B7280] text-[12px]">
              <span>💬</span>
              {item.reviews} reviews
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}