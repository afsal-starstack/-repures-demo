import googleIcon from "@/assets/images/overview/google.svg";
import bookingIcon from "@/assets/images/overview/booking.com.svg";
import tripadvisorIcon from "@/assets/images/overview/tripAdvisor.png";
import messageIcon from "@/assets/icons/overview/messageIcon.svg";

const platforms = [
  {
    name: "Google",
    rating: "4.6",
    reviews: "842",
    icon: googleIcon,
    iconW: "w-[36px]",
    iconH: "h-[36px]",
    bg: "bg-[#EF44441A]",
  },
  {
    name: "Booking.com",
    rating: "8.9",
    reviews: "1,204",
    icon: bookingIcon,
    iconW: "w-[27px]",
    iconH: "h-[26px]",
    bg: "bg-[#3B82F61A]",
  },
  {
    name: "TripAdvisor",
    rating: "4.5",
    reviews: "637",
    icon: tripadvisorIcon,
    iconW: "w-[32px]",
    iconH: "h-[32px]",
    bg: "bg-[#10B9811A]",
  },
];

export default function PlatformCards() {
  return (
    <div className=" h-[339px] p-[25px] rounded-[12px] border border-[#0D1017] bg-[#0D1117]">
      {/* TODAY STATUS TITLE */}
      <p className="text-[#6B7280] text-[14px] font-roboto font-medium leading-[20px] tracking-[1.4px] align-middle mb-3">
        Today&apos;s Reputation Status
      </p>

      {/* STATUS ROW */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg border border-[#10B981]/25 bg-[#10B981]/10 text-[#10B981] text-[14px] font-medium">
          {" "}
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          STABLE
        </div>

        <p className="text-[#D1D5DB] text-[14px] font-roboto leading-[22.75px]">
          No new reputation risks detected. Guest sentiment remains stable
          across all platforms.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#1F2937] mb-5"></div>

      {/* PLATFORMS TITLE */}
      <p className="text-[#6B7280] text-[12px] font-roboto font-normal leading-[16px] tracking-[0.6px] align-middle mb-4">
        Platforms
      </p>

      {/* CARDS */}
      {/* CARDS */}
      <div className="grid grid-cols-3 gap-3 w-[850px]">
        {" "}
        {/*remove 850 for long  */}
        {platforms.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-[#1F2937] bg-[#1d232e] p-5 h-[152px] w-full 
          hover:bg-[#232938] hover:border-[#374151] transition-all duration-200 cursor-pointer"
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 mb-[16px]">
              <div
                className={`w-[36px] h-[36px] rounded-lg flex items-center justify-center ${item.bg}`}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`${item.iconW} ${item.iconH} object-contain`}
                />
              </div>

              <span className="text-[#6B7280] font-roboto font-medium text-sm leading-5">
                {item.name}
              </span>
            </div>

            {/* RATING */}
            <div className="flex items-end gap-2 w-[216.5px] h-[28px]">
              <span className="text-white font-inter font-bold text-2xl leading-6 w-[39px] h-[24px]">
                {item.rating}
              </span>
              <span className="text-[#6B7280] font-roboto font-normal text-xs leading-4 tracking-normal align-middle w-[22px] h-[16px]">
                / 10
              </span>
            </div>

            {/* REVIEWS */}
            <div className="flex items-center gap-[6px] mt-[14px] text-[#6B7280] w-[216.5px] h-[20px]">
              <img
                src={messageIcon}
                alt="reviews"
                className="w-[14px] h-[20px] object-contain"
              />

              <span className="font-roboto font-normal text-xs leading-4">
                {item.reviews} reviews
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
