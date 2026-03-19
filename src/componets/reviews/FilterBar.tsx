

import React, { useState, useRef } from "react";
import { ChevronDown, LayoutGrid, Search, Calendar, Globe, X } from "lucide-react";
import { useClickOutside } from "../../hooks/useClickOutside"; // Adjust the import path as needed

type Props = {
  platform: string;
  setPlatform: (v: string) => void;
  rating: number | null;
  setRating: (v: number | null) => void;
  sentiment: string;
  setSentiment: (v: string) => void;
  status: string;
  setStatus: (v: string) => void;
  language: string;
  setLanguage: (v: string) => void;
  date: string;
  setDate: (v: string) => void;
};

export const FiltersBar: React.FC<Props> = ({
  platform,
  setPlatform,
  rating,
  setRating,
  sentiment,
  setSentiment,
  status,
  setStatus,
  language,
  setLanguage,
  date,
  setDate,
}) => {
  // ✅ Default = ALL

  const [openLanguage, setOpenLanguage] = useState(false);
  const [openDate, setOpenDate] = useState(false);
  const [openPlatform, setOpenPlatform] = useState(false);

  // Create refs for each dropdown
  const platformRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  // Use the custom hook to handle click outside for all dropdowns
  useClickOutside([platformRef, languageRef, dateRef], () => {
    setOpenPlatform(false);
    setOpenLanguage(false);
    setOpenDate(false);
  });

  // DATA
  const platforms = ["Platform", "Google", "TripAdvisor", "Booking.com"];
  const ratings = [1, 2, 3, 4, 5];
  const languages = ["English", "Arabic", "Japanese", "Chinese", "Russian"];
  const dates = ["Last 30 days", "Last 7 days", "Month", "Year"];

  // ✅ Clear all filters
  const clearAll = () => {
    setRating(null);
    setSentiment("All");
    setStatus("All");
    setPlatform("Platform");
    setLanguage("Language");
    setDate("Last 30 days");
  };

  return (
    <div className="mt-6 p-[1px] rounded-2xl bg-gradient-to-r from-white/10 via-transparent to-white/10">
      <div className="rounded-2xl bg-[#0B0F19]/90 p-4 space-y-4">

        {/* Top Row */}
        <div className="flex flex-wrap items-center gap-3">

          {/* PLATFORM DROPDOWN */}
          <div className="relative" ref={platformRef}>
            <button
              onClick={() => {
                setOpenPlatform(!openPlatform);
                setOpenLanguage(false);
                setOpenDate(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition"
            >
              <LayoutGrid size={16} className="text-gray-400" />
              {platform}
              <ChevronDown size={16} className={`transition-transform ${openPlatform ? 'rotate-180' : ''}`} />
            </button>

            {openPlatform && (
              <div className="absolute mt-2 w-44 rounded-xl border border-white/10 bg-[#0B1220] shadow-lg overflow-hidden z-50">
                {platforms.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setPlatform(item);
                      setOpenPlatform(false);
                    }}
                    className={`px-4 py-3 text-sm cursor-pointer transition ${
                      platform === item
                        ? "bg-teal-500/20 text-teal-400"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ⭐ Rating */}
          <div className="flex items-center gap-2 border border-gray-700 rounded-lg px-2 py-1">
            {/* All */}
            <button
              onClick={() => setRating(null)}
              className={`px-3 py-1 text-sm rounded-md ${
                rating === null
                  ? "bg-teal-500 text-white"
                  : "text-gray-300"
              }`}
            >
              All
            </button>

            {/* Stars */}
            {ratings.map((r) => (
              <button
                key={r}
                onClick={() => setRating(r)}
                className={`px-3 py-1 rounded-md text-sm ${
                  rating === r
                    ? "bg-teal-500 text-white"
                    : "text-yellow-400"
                }`}
              >
                {"★".repeat(r)}
              </button>
            ))}
          </div>

          {/* Sentiment */}
          <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
            {["All", "Positive", "Neutral", "Negative"].map((item) => (
              <button
                key={item}
                onClick={() => setSentiment(item)}
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

          {/* LANGUAGE DROPDOWN */}
          <div className="relative" ref={languageRef}>
            <button
              onClick={() => {
                setOpenLanguage(!openLanguage);
                setOpenPlatform(false);
                setOpenDate(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition"
            >
              <Globe size={16} />
              {language}
              <ChevronDown size={16} className={`transition-transform ${openLanguage ? 'rotate-180' : ''}`} />
            </button>

            {openLanguage && (
              <div className="absolute mt-2 w-44 rounded-xl border border-white/10 bg-[#0B1220] shadow-lg overflow-hidden z-50">
                {languages.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setLanguage(item);
                      setOpenLanguage(false);
                    }}
                    className={`px-4 py-3 text-sm cursor-pointer ${
                      language === item
                        ? "bg-teal-500/20 text-teal-400"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
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
          <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
            {["All", "Unanswered", "Answered", "Pending"].map((item) => (
              <button
                key={item}
                onClick={() => setStatus(item)}
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

          {/* DATE DROPDOWN */}
          <div className="relative" ref={dateRef}>
            <button
              onClick={() => {
                setOpenDate(!openDate);
                setOpenPlatform(false);
                setOpenLanguage(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition"
            >
              <Calendar size={16} />
              {date}
              <ChevronDown size={16} className={`transition-transform ${openDate ? 'rotate-180' : ''}`} />
            </button>

            {openDate && (
              <div className="absolute mt-2 w-44 rounded-xl border border-white/10 bg-[#0B1220] shadow-lg overflow-hidden z-50">
                {dates.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setDate(item);
                      setOpenDate(false);
                    }}
                    className={`px-4 py-3 text-sm cursor-pointer ${
                      date === item
                        ? "bg-teal-500/20 text-teal-400"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
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
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* Active Filters */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/5 flex-wrap">
          {/* Platform Chip */}
          {platform !== "Platform" && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm border border-teal-500/20">
              <LayoutGrid size={12} />
              {platform}
              <button onClick={() => setPlatform("Platform")}>
                <X size={12} />
              </button>
            </div>
          )}

          {/* ⭐ Rating Chip */}
          {rating && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm border border-teal-500/20">
              {rating} {rating === 1 ? "star" : "stars"}
              <button onClick={() => setRating(null)}>
                <X size={12} />
              </button>
            </div>
          )}

          {/* Sentiment Chip */}
          {sentiment !== "All" && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm border border-teal-500/20">
              {sentiment}
              <button onClick={() => setSentiment("All")}>
                <X size={12} />
              </button>
            </div>
          )}

          {/* Status Chip */}
          {status !== "All" && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm border border-teal-500/20">
              {status}
              <button onClick={() => setStatus("All")}>
                <X size={12} />
              </button>
            </div>
          )}

          {/* Language Chip */}
          {language !== "Language" && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm border border-teal-500/20">
              <Globe size={12} />
              {language}
              <button onClick={() => setLanguage("Language")}>
                <X size={12} />
              </button>
            </div>
          )}

          {/* Date Chip */}
          {date !== "Last 30 days" && (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm border border-teal-500/20">
              <Calendar size={12} />
              {date}
              <button onClick={() => setDate("Last 30 days")}>
                <X size={12} />
              </button>
            </div>
          )}

          {/* Clear All */}
          {(platform !== "Platform" || rating || sentiment !== "All" || status !== "All" || language !== "Language" || date !== "Last 30 days") && (
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


// import React, { useState, useRef } from "react";
// import { ChevronDown, LayoutGrid, Calendar, Globe, X } from "lucide-react";
// import { useClickOutside } from "../../hooks/useClickOutside";

// type Props = {
//   platform: string;
//   setPlatform: (v: string) => void;
//   rating: number | null;
//   setRating: (v: number | null) => void;
//   sentiment: string;
//   setSentiment: (v: string) => void;
//   status: string;
//   setStatus: (v: string) => void;
//   language: string;
//   setLanguage: (v: string) => void;
//   date: string;
//   setDate: (v: string) => void;
// };

// export const FiltersBar: React.FC<Props> = ({
//   platform,
//   setPlatform,
//   rating,
//   setRating,
//   sentiment,
//   setSentiment,
//   status,
//   setStatus,
//   language,
//   setLanguage,
//   date,
//   setDate,
// }) => {
//   const [openPlatform, setOpenPlatform] = useState(false);
//   const [openLanguage, setOpenLanguage] = useState(false);
//   const [openDate, setOpenDate] = useState(false);

//   const platformRef = useRef<HTMLDivElement>(null);
//   const languageRef = useRef<HTMLDivElement>(null);
//   const dateRef = useRef<HTMLDivElement>(null);

//   useClickOutside([platformRef, languageRef, dateRef], () => {
//     setOpenPlatform(false);
//     setOpenLanguage(false);
//     setOpenDate(false);
//   });

//   const platforms = ["All", "Google", "TripAdvisor", "Booking.com"];
//   const ratings = [1, 2, 3, 4, 5];
//   const languages = ["English", "Arabic", "Japanese", "Chinese", "Russian"];
//   const dates = ["Last 30 days", "Last 7 days", "Month", "Year"];

//   const clearAll = () => {
//     setPlatform("All");
//     setRating(null);
//     setSentiment("All");
//     setStatus("All");
//     setLanguage("Language");
//     setDate("Last 30 days");
//   };

//   return (
//     <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-4">
//       {/* Platform */}
//       <div className="flex gap-3 flex-wrap">

//         <div className="relative" ref={platformRef}>
//           <button
//             onClick={() => {
//               setOpenPlatform(!openPlatform);
//               setOpenLanguage(false);
//               setOpenDate(false);
//             }}
//             className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg"
//           >
//             <LayoutGrid size={16} />
//             {platform}
//             <ChevronDown size={16} />
//           </button>

//           {openPlatform && (
//             <div className="absolute mt-2 bg-[#0B1220] border border-white/10 rounded-lg">
//               {platforms.map((p) => (
//                 <div
//                   key={p}
//                   onClick={() => {
//                     setPlatform(p);
//                     setOpenPlatform(false);
//                   }}
//                   className="px-4 py-2 hover:bg-white/5 cursor-pointer"
//                 >
//                   {p}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Rating */}
//         <div className="flex border rounded-lg p-1">
//           <button onClick={() => setRating(null)}>All</button>
//           {ratings.map((r) => (
//             <button key={r} onClick={() => setRating(r)}>
//               {r}★
//             </button>
//           ))}
//         </div>

//         {/* Language */}
//         <div className="relative" ref={languageRef}>
//           <button onClick={() => setOpenLanguage(!openLanguage)}>
//             <Globe size={16} /> {language}
//           </button>

//           {openLanguage && (
//             <div className="absolute mt-2 bg-[#0B1220] border rounded-lg">
//               {languages.map((l) => (
//                 <div key={l} onClick={() => setLanguage(l)}>
//                   {l}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Date */}
//         <div className="relative" ref={dateRef}>
//           <button onClick={() => setOpenDate(!openDate)}>
//             <Calendar size={16} /> {date}
//           </button>

//           {openDate && (
//             <div className="absolute mt-2 bg-[#0B1220] border rounded-lg">
//               {dates.map((d) => (
//                 <div key={d} onClick={() => setDate(d)}>
//                   {d}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Clear */}
//         <button onClick={clearAll} className="text-gray-400">
//           Clear All
//         </button>
//       </div>
//     </div>
//   );
// };