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
  CartesianGrid,
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
  width: 100,
  height: 60,
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

  const yAxisLabelStyle = {
    fill: "#9CA3AF",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: "normal",
  };

  const yAxisTickStyle = {
    fill: "#6B7280",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "normal",
  };

  const xAxisTickStyle = {
    fill: "#6B7280",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "normal",
  };

  const tickLineStyle = { stroke: "#6B7280", strokeWidth: 1 };

  return (
    <div className="rounded-2xl border border-[#1F2937] bg-[rgba(19, 22, 28, 0.3)] p-6 h-[450px]">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-[#FFFFFF] font-roboto text-[18px] font-semibold leading-[28px]">
            Reputation Pulse
          </h3>
          <p className="text-[#6B7280] font-roboto text-[12px] font-normal leading-[16px] mt-1">
            Last 30 days · Updated 18 hours ago
          </p>
        </div>

        {/* TABS */}
        <div className="flex items-center w-[527.359px] h-[56px] p-[5px] gap-[4px] flex-shrink-0 rounded-[12px] bg-[#0A0D12] border border-[#1F2937]">
          <button
            onClick={() => setActive("reputation")}
            className={`flex items-center w-[170px] h-[46px] px-[21px] py-[11px] gap-[8px] flex-shrink-0 rounded-[8px] shadow-sm text-[13px] border ${
              active === "reputation"
                ? "border-[rgba(20,184,166,0.4)] bg-[rgba(20,184,166,0.2)] text-teal-400"
                : "border-transparent bg-transparent text-[#6B7280]"
            }`}
          >
            <LineIcon className="w-4 h-4" />
            Reputation Score
          </button>

          <button
            onClick={() => setActive("sentiment")}
            className={`flex items-center w-[163px] h-[46px] px-[21px] py-[11px] gap-[8px] flex-shrink-0 rounded-[8px] shadow-sm text-[13px] border ${
              active === "sentiment"
                ? "border-[rgba(20,184,166,0.4)] bg-[rgba(20,184,166,0.2)] text-indigo-400"
                : "border-transparent bg-transparent text-[#6B7280]"
            }`}
          >
            <Smile className="w-4 h-4" />
            Sentiment Trend
          </button>

          <button
            onClick={() => setActive("volume")}
            className={`flex items-center w-[175.188px] h-[46px] px-[21px] py-[11px] gap-[8px] flex-shrink-0 rounded-[8px] shadow-sm text-[13px] border ${
              active === "volume"
                ? "border-[rgba(20,184,166,0.4)] bg-[rgba(20,184,166,0.2)] text-teal-400"
                : "border-transparent bg-transparent text-[#6B7280]"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Review Volume
          </button>
        </div>
      </div>

      {/* CHART */}
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          {/* REPUTATION */}
          {active === "reputation" && (
            <LineChart data={reputationData}>
              <CartesianGrid
                strokeDasharray="3 3"
                strokeOpacity={0.3}
                stroke="#374151"
                vertical={false}
              />
              <XAxis
                dataKey="week"
                stroke="#6B7280"
                tick={xAxisTickStyle}
                tickLine={tickLineStyle}
                tickSize={6}
              />
              <YAxis
                stroke="#6B7280"
                tick={yAxisTickStyle}
                tickLine={tickLineStyle}
                tickSize={6}
                label={{
                  value: "Score",
                  angle: -90,
                  position: "insideLeft",
                  offset: 10,
                  style: yAxisLabelStyle,
                }}
              />
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
              <CartesianGrid
                strokeDasharray="3 3"
                strokeOpacity={0.3}
                stroke="#374151"
                vertical={false}
              />
              <XAxis
                dataKey="week"
                stroke="#6B7280"
                tick={xAxisTickStyle}
                tickLine={tickLineStyle}
                tickSize={6}
              />
              <YAxis
                stroke="#6B7280"
                tick={yAxisTickStyle}
                tickLine={tickLineStyle}
                tickSize={6}
                label={{
                  value: "Positive",
                  angle: -90,
                  position: "insideLeft",
                  offset: 10,
                  style: yAxisLabelStyle,
                }}
              />
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
              <CartesianGrid
                strokeDasharray="3 3"
                strokeOpacity={0.3}
                stroke="#374151"
                vertical={false}
              />
              <XAxis
                dataKey="week"
                stroke="#6B7280"
                tick={xAxisTickStyle}
                tickLine={tickLineStyle}
                tickSize={6}
              />
              <YAxis
                stroke="#6B7280"
                tick={yAxisTickStyle}
                tickLine={tickLineStyle}
                tickSize={6}
                label={{
                  value: "Reviews",
                  angle: -90,
                  position: "insideLeft",
                  offset: 10,
                  style: yAxisLabelStyle,
                }}
              />
              <Tooltip
                contentStyle={tooltipBoxStyle}
                cursor={{ fill: "transparent" }}
                labelStyle={labelTextStyle}
                itemStyle={valueTextStyle}
              />
              <Bar dataKey="volume" fill="#10B981" radius={[6, 6, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
