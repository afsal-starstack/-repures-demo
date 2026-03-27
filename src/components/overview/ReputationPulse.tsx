import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, CartesianGrid,
} from "recharts";
import { LineChart as LineIcon, Smile, BarChart3 } from "lucide-react";

const reputationData = [
  { week: "Week 1", score: 85 },
  { week: "Week 2", score: 84 },
  { week: "Week 3", score: 86 },
  { week: "Week 4", score: 87 },
];

const sentimentData = [
  { week: "Week 1", sentiment: 72 },
  { week: "Week 2", sentiment: 70 },
  { week: "Week 3", sentiment: 75 },
  { week: "Week 4", sentiment: 74 },
];

const volumeData = [
  { week: "Week 1", volume: 45 },
  { week: "Week 2", volume: 52 },
  { week: "Week 3", volume: 48 },
  { week: "Week 4", volume: 56 },
];

const tooltipBoxStyle = {
  backgroundColor: "#111827",
  border: "1px solid #1F2937",
  borderRadius: "6px",
  width: 90,
  height: 50,
  padding: "6px",
  overflow: "hidden",
};

const labelTextStyle = { color: "#9CA3AF", fontSize: "11px", whiteSpace: "nowrap" as const };
const valueTextStyle = { color: "#14B8A6", fontSize: "11px", whiteSpace: "nowrap" as const };
const yAxisLabelStyle = { fill: "#9CA3AF", fontFamily: "Inter", fontSize: 11, fontWeight: 700 };
const yAxisTickStyle = { fill: "#6B7280", fontFamily: "Inter", fontSize: 11, fontWeight: 400 };
const xAxisTickStyle = { fill: "#6B7280", fontFamily: "Inter", fontSize: 11, fontWeight: 400 };
const tickLineStyle = { stroke: "#6B7280", strokeWidth: 1 };

const tabs = [
  { key: "reputation", label: "Reputation", icon: LineIcon },
  { key: "sentiment", label: "Sentiment", icon: Smile },
  { key: "volume", label: "Volume", icon: BarChart3 },
];

export default function ReputationPulse() {
  const [active, setActive] = useState("reputation");

  return (
    <div className="rounded-xl border border-[#1F2937] bg-[rgba(19,22,28,0.3)] p-3 sm:p-4">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-4 sm:mb-5">
        <div>
          <h3 className="text-white font-roboto text-[16px] sm:text-[18px] font-semibold leading-[24px] sm:leading-[28px]">
            Reputation Pulse
          </h3>
          <p className="text-[#6B7280] text-[10px] sm:text-[12px] mt-1">
            Last 30 days · Updated 18h ago
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap items-center gap-1 p-[4px] rounded-lg bg-[#0A0D12] border border-[#1F2937] w-full sm:w-auto">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-2 rounded-[6px] text-[11px] sm:text-[13px] border flex-1 sm:flex-none justify-center sm:justify-start
                ${active === key
                  ? "border-[rgba(20,184,166,0.4)] bg-[rgba(20,184,166,0.2)] text-teal-400"
                  : "border-transparent bg-transparent text-[#6B7280]"
                }`}
            >
              <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CHART */}
      <div className="h-[200px] sm:h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          {active === "reputation" ? (
            <LineChart data={reputationData}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} stroke="#374151" vertical={false} />
              <XAxis dataKey="week" stroke="#6B7280" tick={xAxisTickStyle} tickLine={tickLineStyle} tickSize={5} />
              <YAxis stroke="#6B7280" tick={yAxisTickStyle} tickLine={tickLineStyle} tickSize={5}
                label={{ value: "Score", angle: -90, position: "insideLeft", offset: 8, style: yAxisLabelStyle }} />
              <Tooltip contentStyle={tooltipBoxStyle} cursor={{ stroke: "#1F2937" }} labelStyle={labelTextStyle} itemStyle={valueTextStyle} />
              <Line type="monotone" dataKey="score" stroke="#14B8A6" strokeWidth={2}
                dot={{ r: 3, fill: "#14B8A6", stroke: "#14B8A6" }} activeDot={{ r: 4, fill: "#14B8A6", stroke: "#14B8A6" }} />
            </LineChart>
          ) : active === "sentiment" ? (
            <LineChart data={sentimentData}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} stroke="#374151" vertical={false} />
              <XAxis dataKey="week" stroke="#6B7280" tick={xAxisTickStyle} tickLine={tickLineStyle} tickSize={5} />
              <YAxis stroke="#6B7280" tick={yAxisTickStyle} tickLine={tickLineStyle} tickSize={5}
                label={{ value: "Positive", angle: -90, position: "insideLeft", offset: 8, style: yAxisLabelStyle }} />
              <Tooltip contentStyle={tooltipBoxStyle} cursor={{ stroke: "#1F2937" }} labelStyle={labelTextStyle} itemStyle={valueTextStyle} />
              <Line type="monotone" dataKey="sentiment" stroke="#6366F1" strokeWidth={2}
                dot={{ r: 3, fill: "#6366F1", stroke: "#6366F1" }} activeDot={{ r: 4, fill: "#6366F1", stroke: "#6366F1" }} />
            </LineChart>
          ) : (
            <BarChart data={volumeData}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} stroke="#374151" vertical={false} />
              <XAxis dataKey="week" stroke="#6B7280" tick={xAxisTickStyle} tickLine={tickLineStyle} tickSize={5} />
              <YAxis stroke="#6B7280" tick={yAxisTickStyle} tickLine={tickLineStyle} tickSize={5}
                label={{ value: "Reviews", angle: -90, position: "insideLeft", offset: 8, style: yAxisLabelStyle }} />
              <Tooltip contentStyle={tooltipBoxStyle} cursor={{ fill: "transparent" }} labelStyle={labelTextStyle} itemStyle={valueTextStyle} />
              <Bar dataKey="volume" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
