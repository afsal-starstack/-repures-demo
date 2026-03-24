import React, { useState, useRef } from "react";
import {
  ChevronDown,
  LayoutGrid,
  Search,
  Calendar,
  Globe,
  X,
} from "lucide-react";
import { useClickOutside } from "../../hooks/useClickOutside";

type Filters = {
  platform: string;
  rating: number | null;
  sentiment: string;
  status: string;
  language: string;
  date: string;
  search: string;
};

type Props = {
  filters: Filters;
  updateFilter: (key: string, value: any) => void;
  clearAll: () => void;
};

export const FiltersBar: React.FC<Props> = ({
  filters,
  updateFilter,
  clearAll,
}) => {
  const { platform, rating, sentiment, status, language, date, search } =
    filters;

  const [openLanguage, setOpenLanguage] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [openPlatform, setOpenPlatform] = useState(false);

  const platformRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  useClickOutside([platformRef, languageRef, dateRef], () => {
    setOpenPlatform(false);
    setOpenLanguage(false);
    setOpenDate(false);
  });

  const platforms = ["Platform", "Google", "TripAdvisor", "Booking.com"];
  const ratings = [1, 2, 3, 4, 5];
  const languages = ["English", "Arabic", "Japanese", "Chinese", "Russian"];
  const dates = ["Last 30 days", "Last 7 days", "Month", "Year"];


    // Filter chips config
  const chipConfig = [
    { key: "platform", value: platform, defaultValue: "Platform" },
    {
      key: "rating",
      value: rating,
      defaultValue: null,
      label: rating ? `${rating} ${rating === 1 ? "star" : "stars"}` : "",
    },
    { key: "sentiment", value: sentiment, defaultValue: "All" },
    { key: "status", value: status, defaultValue: "All" },
    { key: "language", value: language, defaultValue: "Language" },
    { key: "date", value: date, defaultValue: "Last 30 days" },
    { key: "search", value: search, defaultValue: "" },
  ];

  return (
    <div className="mt-6 p-[1px] rounded-lg bg-gradient-to-r from-white/10 via-transparent to-white/10 mb-6">
      <div className="rounded-2xl bg-[rgba(30,33,40,0.5)] p-4 space-y-4 min-h-[121px]">
        
        {/* Top Row */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Platform */}
          <div className="relative" ref={platformRef}>
            <button
              onClick={() => {
                setOpenPlatform(!openPlatform);
                setOpenLanguage(false);
                setOpenDate(false);
              }}
              className="flex w-[155px] h-[38px] px-[13px] pr-[10px] py-[9px] items-center gap-2 rounded-lg border border-white/10 bg-[rgba(17,19,24,1)] text-sm text-gray-300"
            >
              <LayoutGrid size={16} />
              {platform}
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform ${
                  openPlatform ? "rotate-180" : ""
                }`}
              />
            </button>

            {openPlatform && (
              <div className="absolute w-[155px] rounded-xl border border-white/10 bg-[rgba(17,19,24,1)] z-50">
                {platforms.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      updateFilter("platform", item);
                      setOpenPlatform(false);
                    }}
                    className="flex h-[38px] px-[13px] py-[9px] items-center text-sm cursor-pointer text-gray-300 hover:bg-[rgba(20,184,166,1)] hover:rounded-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="flex border border-gray-700 bg-[rgba(17,19,24,1)] rounded-lg w-[395px] h-[38px] overflow-hidden p-[4.5px]">
            <button
              onClick={() => updateFilter("rating", null)}
              className={`h-[28px] w-[38px] flex justify-center items-center text-[12px] text-white rounded-md ${
                rating === null ? "bg-teal-500" : "bg-transparent"
              }`}
            >
              All
            </button>

            {ratings.map((r) => (
              <button
                key={r}
                onClick={() => updateFilter("rating", r)}
                className={`flex items-center justify-center px-3 rounded-md ${
                  rating === r ? "bg-teal-500 text-white" : "text-white"
                }`}
              >
                <span className="flex gap-[2px]">
                  {Array.from({ length: r }).map((_, i) => (
                    <span key={i} className="text-[10px]">
                      ⭐
                    </span>
                  ))}
                </span>
              </button>
            ))}
          </div>

          {/* Sentiment */}
          <div className="flex border border-gray-700 bg-[rgba(17,19,24,1)] rounded-lg h-[38px] overflow-hidden p-[4.5px]">
            {["All", "Positive", "Neutral", "Negative"].map((item) => (
              <button
                key={item}
                onClick={() => updateFilter("sentiment", item)}
                className={`h-[28px] px-3 flex items-center justify-center text-[12px] text-white rounded-md ${
                  sentiment === item ? "bg-teal-500" : "bg-transparent"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Language */}
          <div className="relative" ref={languageRef}>
            <button
              onClick={() => {
                setOpenLanguage(!openLanguage);
                setOpenPlatform(false);
                setOpenDate(false);
              }}
              className="flex w-[155px] h-[38px] px-[13px] pr-[10px] py-[9px] items-center gap-2 rounded-lg border border-white/10 bg-[rgba(17,19,24,1)] text-sm text-gray-300"
            >
              <Globe size={14} className="pt=[13px]" />
              {language}
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform ${
                  openLanguage ? "rotate-180" : ""
                }`}
              />
            </button>

            {openLanguage && (
              <div className="absolute w-[155px] rounded-xl border border-white/10 bg-[rgba(17,19,24,1)] z-50">
                {languages.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      updateFilter("language", item);
                      setOpenLanguage(false);
                    }}
                    className="flex h-[38px] px-[13px] py-[9px] items-center text-sm cursor-pointer text-gray-300 hover:bg-[rgba(20,184,166,1)] hover:rounded-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Status */}
          <div className="flex border border-gray-700 bg-[rgba(17,19,24,1)] rounded-lg h-[38px] overflow-hidden p-[4.5px]">
            {["All", "Unanswered", "Answered", "Pending"].map((item) => (
              <button
                key={item}
                onClick={() => updateFilter("status", item)}
                className={`h-[28px] px-3 flex items-center justify-center text-[12px] text-white rounded-md ${
                  status === item ? "bg-teal-500" : "bg-transparent"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Date */}
          <div className="relative" ref={dateRef}>
            <button
              onClick={() => {
                setOpenDate(!openDate);
                setOpenPlatform(false);
                setOpenLanguage(false);
              }}
              className="flex w-[155px] h-[38px] px-[13px] pr-[10px] py-[9px] items-center gap-2 rounded-lg border border-white/10 bg-[rgba(17,19,24,1)] text-sm text-gray-300"
            >
              <Calendar size={14} />
              {date}
              <ChevronDown
                size={16}
                className={`ml-auto transition-transform ${
                  openDate ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDate && (
              <div className="absolute w-[155px] rounded-xl border border-white/10 bg-[rgba(17,19,24,1)] z-50">
                {dates.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      updateFilter("date", item);
                      setOpenDate(false);
                    }}
                    className="flex h-[38px] px-[13px] py-[9px] items-center text-sm cursor-pointer text-gray-300 hover:bg-[rgba(20,184,166,1)] hover:rounded-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className=" flex items-center gap-2 flex-1 px-4 py-2 rounded-lg border border-gray-700 text-gray-400 max-w-[528px] bg-[rgba(17,19,24,1)]">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search by keyword, guest name"
              value={search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="bg-transparent outline-none w-full text-[12px] pl-[9px]"
            />
            {search && (
              <button onClick={() => updateFilter("search", "")}>
                <X size={14} />
              </button>
            )}
          </div>
        </div>
        {/* Filter Chips */}
        {chipConfig.some(
          (chip) => chip.value !== chip.defaultValue && chip.value,
        ) && (
          <div className="flex items-center gap-3 pt-3 border-t border-white/5 flex-wrap">
            {chipConfig.map((chip) => {
              if (chip.value === chip.defaultValue || !chip.value) return null;

              return (
                <div
                  key={chip.key}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-[12px] border border-teal-500/20"
                >
                  {chip.label || chip.value}
                  <button
                    onClick={() => updateFilter(chip.key, chip.defaultValue)}
                  >
                    <X size={12} />
                  </button>
                </div>
              );
            })}

            <button
              onClick={clearAll}
              className="text-gray-400 text-[12px] hover:text-white transition"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};