import { AlertTriangle, Info, ArrowRight } from "lucide-react";

// ------------------
// Dummy Data
// ------------------
const signals = [
  {
    type: "warning",
    text: 'Spike in negative mentions around "Wi-Fi speed" – last 72 hours',
    time: "2 hours ago",
  },
  {
    type: "warning",
    text: "Response rate dropped to 61% this week",
    time: "5 hours ago",
  },
  {
    type: "info",
    text: "3 new reviews on Booking.com not yet acknowledged",
    time: "8 hours ago",
  },
  {
    type: "info",
    text: "Average rating improved by 0.3 points this month",
    time: "1 day ago",
  },
];

// ------------------
// Card Component
// ------------------
const SignalCard = ({ item }: any) => {
  const isWarning = item.type === "warning";

  return (
    <div
      className={`
        group relative rounded-xl p-5 border transition-all duration-300
        ${
          isWarning
            ? "border-yellow-500/30 hover:border-yellow-500 bg-gradient-to-r from-yellow-500/10 to-transparent"
            : "border-blue-500/20 hover:border-blue-500 bg-gradient-to-r from-blue-500/10 to-transparent"
        }
      `}
    >
      {/* Top Right Time */}
      <span className="absolute top-4 right-4 text-xs text-gray-500">
        {item.time}
      </span>

      {/* Content */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`
            w-10 h-10 flex items-center justify-center rounded-lg
            ${
              isWarning
                ? "bg-yellow-500/10 text-yellow-400"
                : "bg-blue-500/10 text-blue-400"
            }
          `}
        >
          {isWarning ? <AlertTriangle size={18} /> : <Info size={18} />}
        </div>

        {/* Text */}
        <div className="flex-1">
          {/* Badge */}
          <span
            className={`
              text-xs px-2 py-1 rounded-full border
              ${
                isWarning
                  ? "border-yellow-500/40 text-yellow-400"
                  : "border-blue-500/40 text-blue-400"
              }
            `}
          >
            {isWarning ? "Warning" : "Info"}
          </span>

          {/* Message */}
          <p className="text-sm text-gray-200 mt-2 leading-relaxed">
            {item.text}
          </p>

          {/* Action */}
          <div className="flex items-center gap-1 text-teal-400 text-sm mt-3 cursor-pointer">
            Review <ArrowRight size={14} />
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`
          absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition
          ${
            isWarning
              ? "bg-gradient-to-r from-yellow-500/20 to-transparent"
              : "bg-gradient-to-r from-blue-500/20 to-transparent"
          }
        `}
      />
    </div>
  );
};

// ------------------
// Main Component
// ------------------
export default function EarlySignals() {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-[rgba(13,16,23,0.30)] backdrop-blur-xl">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-white text-lg font-semibold">
            Early Signals
          </h2>
          <p className="text-gray-400 text-sm">
            AI-detected patterns from the last 72 hours
          </p>
        </div>

        <span className="text-gray-500 text-sm">4 signals</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {signals.map((item, index) => (
          <SignalCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}