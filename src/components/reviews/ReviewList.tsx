import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useClickOutside } from "../../hooks/useClickOutside";

export const ReviewList = ({
  reviews,
  selected,
  onSelect,
  sort,
  setSort,
}: any) => {
  const [openSort, setOpenSort] = useState(false);

  const sortRef = useRef<HTMLDivElement>(null);

  useClickOutside([sortRef], () => {
    setOpenSort(false);
  });

  const options = [
    "Newest",
    "Needs Response",
    "Negative First",
    "Priority Reviews",
    "Positive Reviews",
  ];

  return (
    <div className="bg-[rgba(17, 19, 24, 0.50))] p-[17px] rounded-md border border-white/10 w-[464px]">
      {/* Header */}
      {reviews.length > 0 ? (
        <div className="mb-4">
          <div className="flex justify-between items-center w-[429.174px] h-[38.495px] pb-[10.647px]">
            <p className="text-[#94A3B8] font-roboto text-[11.466px]">
              Showing {reviews.length} reviews
            </p>

            {/* Custom Dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => setOpenSort(!openSort)}
                className="flex text-[12px] items-center justify-between w-[150px] h-[32px] px-4 pt-[3px]  rounded-md border border-white/10 bg-[#111318] text-gray-300 text-sm"
              >
                {sort}
                <ChevronDown
                  size={14}
                  className={`ml-auto transition-transform ${
                    openSort ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSort && (
                <div className="absolute right-0 mt-1 w-[150px] rounded-md border border-white/10 bg-[#111318] overflow-hidden z-50">
                  {options
                    .filter((item) => item !== sort)
                    .map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setSort(item);
                          setOpenSort(false);
                        }}
                        className="text-[12px] h-[32px] px-4 py-2 cursor-pointer rounded-md text-[#CBD5E1] hover:bg-teal-500 hover:text-white transition-all duration-150"
                      >
                        {item}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>

          <div className="border-b border-white/10 mt-[13px]"></div>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No reviews found with the given filters
        </div>
      )}

      {/* Review Cards */}
      <div className="space-y-[14px]">
        {reviews.map((r: any, i: number) => (
          <div
            key={r.id}
            onClick={() => onSelect(i)}
            className={`cursor-pointer items-start flex-shrink-0
    w-[422.621px] min-h-[163.807px]
    pt-[13.924px] pr-[13.924px] pb-[13.924px] pl-[15.562px]
    rounded-[6.552px]
    border-t-[0.819px] border-r-[0.819px] border-b-[0.819px] border-l-[2.457px]
    transition-all duration-150
    ${
      selected === i
        ? "bg-[#141A14] border-[#14B8A6]"
        : "bg-white/5 border-transparent hover:border-white/20"
    }`}
          >
            {/* Top */}
            <div className="flex justify-between">
              <div className="flex gap-3">
                {r.avatar ? (
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-[32.761px] h-[32.761px] rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-[32.761px] h-[32.761px] rounded-full bg-[#DC2626] flex items-center justify-center text-white text-xs flex-shrink-0">
                    {r.name.charAt(0)}
                  </div>
                )}

                <div>
                  <h3 className="text-white font-roboto text-[12px] font-medium leading-[16.381px]">
                    {r.name}
                  </h3>
                  <span
                    className="inline-flex items-center flex-shrink-0
  pt-[2.457px] pb-[2.457px] pl-[7.371px] pr-[7.371px]
  rounded-[3.276px]
  border border-[rgba(99,102,241,0.30)]
  bg-[rgba(99,102,241,0.20)]
  text-[#818CF8]
  font-roboto text-[9.828px] leading-[13.105px]"
                  >
                    {r.platform}
                  </span>
                </div>
              </div>

              <span className="text-[#94A3B8] font-roboto text-[9.828px] font-normal leading-[13.105px]">
                {r.time}
              </span>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2 mt-3 ml-[15px]">
              <div className="text-[#475569] font-roboto text-[18px] font-normal leading-[19.657px]">
                {"☆".repeat(r.rating)}
              </div>
              <span className="text-white font-inter text-[11.466px] font-normal leading-[16.381px]">
                {r.rating}.0
              </span>
            </div>

            {/* Text */}
            <p className="mt-3 text-gray-300 text-[11.466px] leading-relaxed">
              {r.text}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-[9px] text-xs">
              {/* Language Tag */}
              <span
                className="inline-flex items-center flex-shrink-0
      px-[7.371px] py-[2.457px]
      bg-purple-500/20 text-purple-400
      rounded-[3.276px]
      text-[9.828px] leading-[13.105px]"
              >
                {r.language}
              </span>

              {/* Sentiment Tag */}
              <span
                className={`inline-flex items-center flex-shrink-0
      px-[7.371px] py-[2.457px]
      rounded-[3.276px] text-[9.828px] leading-[13.105px] ${
        r.sentiment === "Positive"
          ? "bg-green-500/20 text-green-400"
          : r.sentiment === "Negative"
            ? "bg-red-500/20 text-red-400"
            : "bg-gray-500/20 text-gray-400"
      }`}
              >
                {r.sentiment}
              </span>

              {r.urgent && (
                <span
                  className="inline-flex items-center flex-shrink-0
      px-[6.552px] py-[1.638px]
      w-[45px] h-[17px]
      rounded-[3.276px]
      bg-[#EF4444] text-white
      font-roboto text-[9.828px] font-medium leading-[13.105px]"
                >
                  Urgent
                </span>
              )}

              {/* Status Tag */}
              <span
                className={`inline-flex items-center flex-shrink-0
      px-[7.371px] py-[2.457px]
      rounded-[3.276px] text-[9.828px] leading-[13.105px] ${
        r.status === "Answered"
          ? "bg-green-500/20 text-green-400"
          : r.status === "Unanswered"
            ? "border border-red-500 text-red-400 bg-[rgba(239,68,68,0.2)]"
            : "bg-yellow-500/20 text-yellow-400"
      }`}
              >
                {r.status}
              </span>
              {r.culturalAi && (
                <span
                  className="inline-flex items-center flex-shrink-0
      px-[7.371px] py-[2.457px]
       h-[18.019px]
      rounded-[3.276px]
      border border-[rgba(20,184,166,0.30)]
      bg-[rgba(20,184,166,0.20)]
      text-[#2DD4BF]
      font-roboto text-[9.828px] leading-[13.105px]"
                >
                  Cultural AI Available
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
