
type Status = "completed" | "pending";

type TimelineItem = {
  title: string;
  subtitle: string;
  time: string;
  status: Status;
};

type ReplyStatusTimelineProps = {
  status: "Replied" | "Pending" | string;
};

const timelineData: TimelineItem[] = [
  {
    title: "Review received",
    subtitle: "TripAdvisor · German · Rating 3.0 · Auto-detected Neutral",
    time: "Today · 9:32 AM",
    status: "completed",
  },
  {
    title: "AI translation generated",
    subtitle: "German → English · Cultural Mode ON · Confidence 82%",
    time: "Today · 9:32 AM",
    status: "completed",
  },
  {
    title: "AI reply generated",
    subtitle:
      "Language: German · Tone: Professional · Brand: Modern UAE Hospitality",
    time: "Today · 2:10 PM",
    status: "completed",
  },
  {
    title: "Reply sent",
    subtitle: "Awaiting hotel manager action",
    time: "Pending",
    status: "pending",
  },
];

function StatusDot({ status }: { status: Status }) {
  return status === "completed" ? (
    <span className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)] flex-shrink-0" />
  ) : (
    <span className="mt-1 w-2.5 h-2.5 rounded-full border-2 border-gray-600 bg-transparent flex-shrink-0" />
  );
}

export default function ReplyStatusTimeline({
  status,
}: ReplyStatusTimelineProps) {
  const statusColors: Record<string, string> = {
    Answered:
      "bg-[rgba(20,184,166,.20)] text-[rgba(45,212,191)] border-[rgba(20,184,166,.30)",
    Unanswered:
      "bg-[rgba(239,68,68,0.2)] text-[rgba(248,113,113,1)] border-[rgba(239,68,68,0.30)]",
    Draft:
      "bg-[rgba(245,158,11,.20)] text-[rgba(251,191,36)] border-[rgba(245,158,11,.20)]",
  };

  const currentStatuses: Record<string, string> = {
    Answered: "Replied",
    Unanswered: "Not Replied",
    Draft: "Draft Saved",
  };

  const statusColor =
    statusColors[status] || "bg-gray-200 text-gray-600 border-gray-300";
  const currentStatus = currentStatuses[status] || "pending";

  return (
    <div className="p-[17.2px] rounded-md border border-white/10 bg-[#111318] font-roboto">
      {/* Header */}
      <h3 className="text-white font-semibold text-[11.467px] leading-[16.381px] mb-4">
        Reply Status & Storage
      </h3>

      {/* Current Status */}
      <div className="flex items-center gap-3 mb-[16.38px]">
        <span className="text-[#94A3B8] text-[9.828px] leading-[13.105px]">
          Current Status:
        </span>
        <span
          className={`flex items-center flex-shrink-0 w-[74px] h-[22px] px-[10.648px] py-[4.095px] rounded-[9999px] border ${statusColor} text-[9.828px] font-medium leading-[13.105px] justify-center`}
        >
          {currentStatus}
        </span>
      </div>

      {/* Timeline Label */}
      <p className="text-[#94A3B8] font-medium text-[9.828px] leading-[13.105px] tracking-[0.491px] mb-2">
        Status Timeline
      </p>

      {/* Timeline Items */}
      <div className="w-full py-2">
        {timelineData.map((item, index) => (
          <div key={index} className={`flex items-start justify-between py-2`}>
            {/* Left: dot + text */}
            <div className="flex items-start gap-3">
              <StatusDot status={item.status} />
              <div className="flex flex-col gap-0.5">
                <span
                  className={`text-white font-roboto text-[9.828px] font-medium leading-[13.105px] ${item.status === "completed" ? "" : "text-gray-500"
                    }`}
                >
                  {item.title}
                </span>
                <span className="text-[#64748B] font-roboto text-[9.828px] font-normal leading-[13.105px]">
                  {item.subtitle}
                </span>
              </div>
            </div>

            {/* Right: time */}
            <span className="ml-4 mt-0.5 flex-shrink-0 text-[#475569] font-roboto text-[9.828px] font-normal leading-[13.105px] whitespace-nowrap">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
