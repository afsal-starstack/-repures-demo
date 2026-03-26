import MessageCircle from "@/assets/icons/overview/reviewIcon.svg";
import Clock from "@/assets/icons/overview/clockIcon.svg";
import ThumbsDown from "@/assets/icons/overview/dislikeIcon.svg";
import BarChart from "@/assets/icons/overview/buildingIcon.svg";

const actions = [
  {
    title: "Unanswered Reviews",
    value: "6",
    image: MessageCircle,
    border: "border-[rgba(249,115,22,0.25)]",
    hover: "hover:bg-orange-500/10",
    color: "text-[rgba(251,146,60,1)]",
    bg: "bg-[rgba(249,115,22,0.10)]",
  },
  {
    title: "Avg Response Time",
    value: "4.2 hrs",
    image: Clock,
    border: "border-[rgba(20,184,166,0.25)]",
    hover: "hover:bg-blue-500/10",
    color: "text-[rgba(45,212,191,1)]",
    bg: "bg-[rgba(20,184,166,0.10)]",
  },
  {
    title: "New Negative Reviews",
    value: "3",
    image: ThumbsDown,
    border: "border-[rgba(239,68,68,0.25)]",
    hover: "hover:bg-red-500/10",
    color: "text-[rgba(248,113,113,1)]",
    bg: "bg-[rgba(239,68,68,0.10)]",
  },
  {
    title: "Competitor Mentions",
    value: "11",
    image: BarChart,
    border: "border-[rgba(99,102,241,0.25)]",
    hover: "hover:bg-[rgba(129,140,248,0.15)]",
    color: "text-[rgba(129,140,248,1)]",
    bg: "bg-[rgba(129,140,248,0.10)]",
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
  >
    <path
      d="M9.6329 5.48339L4.60636 10.5117L3.77832 9.68339L8.80486 4.65505H4.38477V3.48839H10.7991V9.90505H9.6329V5.48339Z"
      fill="#4B5563"
    />
  </svg>
);

export default function QuickActions() {
  return (
    <div>
      {/* Header */}
      <h2 className="text-white font-roboto text-[18px] font-semibold leading-[28px] mb-4">
        Quick Actions
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {actions.map((item, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col items-start flex-shrink-0
              w-[284px] h-[153px] p-[21px]
              rounded-[12px] border ${item.border}
              bg-[rgba(19,22,28,0.3)]
              transition-colors duration-300 cursor-pointer
              ${item.hover} hover:shadow-lg
            `}
          >
            {/* Icon + Arrow Row */}
            <div className="flex items-center justify-between w-full mb-4">
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-lg ${item.bg}`}
              >
                <img src={item.image} alt={item.title} className="w-5 h-5" />
              </div>
              <div className="pb-4">
                <ArrowIcon />
              </div>
            </div>

            {/* Title */}
            <p className="text-[12px] font-medium leading-[15px] text-[#6B7280] font-roboto mb-2">
              {item.title}
            </p>

            {/* Value */}
            <p
              className={`text-[30px] font-bold leading-[36px] font-inter ${item.color}`}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
