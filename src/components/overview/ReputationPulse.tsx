// components/overview/ReputationPulse.tsx

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
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
  borderRadius: "8px",
  width: 100,       // Tooltip width
  height: 60,       // Tooltip height
  padding: "10px",
  overflow: "hidden",
};

const labelTextStyle = {
  color: "#9CA3AF",
  fontSize: "12px",
  whiteSpace: "nowrap",
};

const valueTextStyle = {
  color: "#14B8A6",
  fontSize: "12px",
  whiteSpace: "nowrap",
};

export default function ReputationPulse() {
  const [active, setActive] = useState("reputation");

  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[#0D1117] p-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white text-[16px] font-semibold">
            Reputation Pulse
          </h3>
          <p className="text-[#6B7280] text-[12px] mt-1">
            Last 30 days · Updated 18 hours ago
          </p>
        </div>

        {/* TABS */}
        <div className="flex items-center bg-[#0B0F14] border border-[#1F2937] rounded-xl p-1">
          
          <button
            onClick={() => setActive("reputation")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] ${
              active === "reputation"
                ? "bg-teal-500/20 text-teal-400"
                : "text-[#6B7280]"
            }`}
          >
            <LineIcon className="w-4 h-4" />
            Reputation Score
          </button>

          <button
            onClick={() => setActive("sentiment")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] ${
              active === "sentiment"
                ? "bg-indigo-500/20 text-indigo-400"
                : "text-[#6B7280]"
            }`}
          >
            <Smile className="w-4 h-4" />
            Sentiment Trend
          </button>

          <button
            onClick={() => setActive("volume")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] ${
              active === "volume"
                ? "bg-teal-500/20 text-teal-400"
                : "text-[#6B7280]"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Review Volume
          </button>

        </div>
      </div>

      {/* CHART */}
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">

          {/* REPUTATION */}
          {active === "reputation" && (
            <LineChart data={reputationData}>
              <XAxis dataKey="week" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={tooltipBoxStyle}
                cursor={{ stroke: "#1F2937" }}
                labelStyle={labelTextStyle}
                itemStyle={valueTextStyle}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#14B8A6"
                strokeWidth={3}
                dot={{ r: 4, fill: "#14B8A6", stroke: "#14B8A6" }}
                activeDot={{ r: 5, fill: "#14B8A6", stroke: "#14B8A6" }}
              />
            </LineChart>
          )}

          {/* SENTIMENT */}
          {active === "sentiment" && (
            <LineChart data={sentimentData}>
              <XAxis dataKey="week" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={tooltipBoxStyle}
                cursor={{ stroke: "#1F2937" }}
                labelStyle={labelTextStyle}
                itemStyle={valueTextStyle}
              />
              <Line
                type="monotone"
                dataKey="sentiment"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{ r: 4, fill: "#6366F1", stroke: "#6366F1" }}
                activeDot={{ r: 5, fill: "#6366F1", stroke: "#6366F1" }}
              />
            </LineChart>
          )}

          {/* VOLUME */}
          {active === "volume" && (
            <BarChart data={volumeData}>
              <XAxis dataKey="week" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={tooltipBoxStyle}
                cursor={{ fill: "transparent" }}
                labelStyle={labelTextStyle}
                itemStyle={valueTextStyle}
              />
              <Bar
                dataKey="volume"
                fill="#14B8A6"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          )}

        </ResponsiveContainer>
      </div>
    </div>
  );
}
