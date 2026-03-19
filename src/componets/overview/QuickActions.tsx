import { MessageCircle, Clock, ThumbsDown, BarChart2 } from "lucide-react";

const actions = [
  {
    title: "Unanswered Reviews",
    value: "6",
    icon: MessageCircle,
    border: "border-orange-500/40",
    hover: "hover:bg-orange-500/10",
    color: "text-orange-400",
  },
  {
    title: "Avg Response Time",
    value: "4.2 hrs",
    icon: Clock,
    border: "border-teal-500/40",
    hover:
      "hover:bg-gradient-to-r hover:from-teal-500/20 hover:to-transparent",
    color: "text-teal-400",
  },
  {
    title: "New Negative Reviews",
    value: "3",
    icon: ThumbsDown,
    border: "border-red-500/40",
    hover: "hover:bg-red-500/10",
    color: "text-red-400",
  },
  {
    title: "Competitor Mentions",
    value: "11",
    icon: BarChart2,
    border: "border-indigo-500/40",
    hover: "hover:bg-indigo-500/10",
    color: "text-indigo-400",
  },
];

export default function QuickActions() {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1117]">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`
                relative p-5 rounded-xl border ${item.border}
                bg-[#0E1621]
                transition-colors duration-300
                ${item.hover}
              `}
            >
              {/* Top Right Arrow */}
              <div className="absolute top-4 right-4 text-gray-500 text-sm">
                ↗
              </div>

              {/* Icon */}
              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5">
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>

              {/* Title */}
              <p className="text-sm text-gray-400 mb-2">{item.title}</p>

              {/* Value */}
              <p className={`text-2xl font-semibold ${item.color}`}>
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}