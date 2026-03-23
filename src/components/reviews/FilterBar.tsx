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

  // Dynamic chip config
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
    <div className="mt-6 p-[1px] rounded-2xl bg-gradient-to-r from-white/10 via-transparent to-white/10">
      <div className="rounded-2xl bg-[#0B0F19]/90 p-4 space-y-4">
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300"
            >
              <LayoutGrid size={16} />
              {platform}
              <ChevronDown
                size={16}
                className={openPlatform ? "rotate-180" : ""}
              />
            </button>

            {openPlatform && (
              <div className="absolute mt-2 w-44 rounded-xl border border-white/10 bg-[#0B1220] z-50">
                {platforms.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      updateFilter("platform", item);
                      setOpenPlatform(false);
                    }}
                    className="px-4 py-3 text-sm cursor-pointer text-gray-300 hover:bg-white/5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 border border-gray-700 rounded-lg px-2 py-1">
            <button
              onClick={() => updateFilter("rating", null)}
              className={`px-3 py-1 text-sm rounded-md ${
                rating === null ? "bg-teal-500 text-white" : "text-gray-300"
              }`}
            >
              All
            </button>

            {ratings.map((r) => (
              <button
                key={r}
                onClick={() => updateFilter("rating", r)}
                className={`px-3 py-1 rounded-md text-sm ${
                  rating === r ? "bg-teal-500 text-white" : "text-yellow-400"
                }`}
              >
                {"★".repeat(r)}
              </button>
            ))}
          </div>

          {/* Sentiment */}
          <div className="flex border border-gray-700 rounded-lg overflow-hidden">
            {["All", "Positive", "Neutral", "Negative"].map((item) => (
              <button
                key={item}
                onClick={() => updateFilter("sentiment", item)}
                className={`px-4 py-2 text-sm ${
                  sentiment === item
                    ? "bg-teal-500 text-white"
                    : "text-gray-400 hover:bg-white/5"
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300"
            >
              <Globe size={16} />
              {language}
              <ChevronDown size={16} />
            </button>

            {openLanguage && (
              <div className="absolute mt-2 w-44 rounded-xl border border-white/10 bg-[#0B1220] z-50">
                {languages.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      updateFilter("language", item);
                      setOpenLanguage(false);
                    }}
                    className="px-4 py-3 text-sm cursor-pointer text-gray-300 hover:bg-white/5"
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
          <div className="flex border border-gray-700 rounded-lg overflow-hidden">
            {["All", "Unanswered", "Answered", "Pending"].map((item) => (
              <button
                key={item}
                onClick={() => updateFilter("status", item)}
                className={`px-4 py-2 text-sm ${
                  status === item
                    ? "bg-teal-500 text-white"
                    : "text-gray-400 hover:bg-white/5"
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300"
            >
              <Calendar size={16} />
              {date}
              <ChevronDown size={16} />
            </button>

            {openDate && (
              <div className="absolute mt-2 w-44 rounded-xl border border-white/10 bg-[#0B1220] z-50">
                {dates.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      updateFilter("date", item);
                      setOpenDate(false);
                    }}
                    className="px-4 py-3 text-sm cursor-pointer text-gray-300 hover:bg-white/5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 flex-1 px-4 py-2 rounded-lg border border-gray-700 text-gray-400 min-w-[250px]">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search by keyword, guest name"
              value={search}
              onChange={(e) => updateFilter("search", e.target.value)}
              className="bg-transparent outline-none w-full text-sm"
            />
            {search && (
              <button onClick={() => updateFilter("search", "")}>
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/5 flex-wrap">
          {chipConfig.map((chip) => {
            if (chip.value === chip.defaultValue || !chip.value) return null;

            return (
              <div
                key={chip.key}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm border border-teal-500/20"
              >
                {chip.label || chip.value}
                <button
                  onClick={() =>
                    updateFilter(chip.key, chip.defaultValue)
                  }
                >
                  <X size={12} />
                </button>
              </div>
            );
          })}

          {chipConfig.some(
            (chip) => chip.value !== chip.defaultValue && chip.value
          ) && (
            <button
              onClick={clearAll}
              className="text-gray-400 text-sm hover:text-white transition"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
};