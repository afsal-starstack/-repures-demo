// components/overview/ReputationPulse.tsx

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { LineChart as LineIcon, Smile, BarChart3 } from "lucide-react";

const reputationData = [
  { name: "Week 1", value: 85 },
  { name: "Week 2", value: 84 },
  { name: "Week 3", value: 86 },
  { name: "Week 4", value: 87 },
];

const sentimentData = [
  { name: "Week 1", value: 72 },
  { name: "Week 2", value: 70 },
  { name: "Week 3", value: 75 },
  { name: "Week 4", value: 74 },
];

const volumeData = [
  { name: "Week 1", value: 45 },
  { name: "Week 2", value: 52 },
  { name: "Week 3", value: 48 },
  { name: "Week 4", value: 56 },
];

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
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#14B8A6"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          )}

          {/* SENTIMENT */}
          {active === "sentiment" && (
            <LineChart data={sentimentData}>
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          )}

          {/* VOLUME */}
          {active === "volume" && (
            <BarChart data={volumeData}>
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip />
              <Bar dataKey="value" fill="#14B8A6" radius={[6, 6, 0, 0]} />
            </BarChart>
          )}

        </ResponsiveContainer>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   BarChart,
//   Bar,
// } from "recharts";

// import { LineChart as LineIcon, Smile, BarChart3 } from "lucide-react";

// // ------------------
// // Dummy Data
// // ------------------
// const scoreData = [
//   { name: "Week 1", value: 85 },
//   { name: "Week 2", value: 84 },
//   { name: "Week 3", value: 86 },
//   { name: "Week 4", value: 88 },
// ];

// const sentimentData = [
//   { name: "Week 1", value: 72 },
//   { name: "Week 2", value: 70 },
//   { name: "Week 3", value: 75 },
//   { name: "Week 4", value: 74 },
// ];

// const volumeData = [
//   { name: "Week 1", value: 45 },
//   { name: "Week 2", value: 52 },
//   { name: "Week 3", value: 48 },
//   { name: "Week 4", value: 56 },
// ];

// // ------------------
// // Custom Tooltip
// // ------------------
// const CustomTooltip = ({ active, payload, label, type }: any) => {
//   if (active && payload && payload.length) {
//     const value = payload[0].value;

//     return (
//       <div className="bg-[#0B0F14] border border-white/10 px-3 py-2 rounded-lg shadow-lg">
//         <p className="text-xs text-gray-400">{label}</p>
//         <p className="text-sm text-teal-400 font-medium">
//           {type === "score" && `score : ${value}`}
//           {type === "sentiment" && `Sentiment : ${value}`}
//           {type === "volume" && `Volume : ${value}`}
//         </p>
//       </div>
//     );
//   }
//   return null;
// };

// // ------------------
// // Component
// // ------------------
// export default function ReputationPulse() {
//   const [activeTab, setActiveTab] = useState("score");

//   return (
//     <div className="rounded-2xl border border-white/10 p-6 bg-[rgba(13,16,23,0.30)] backdrop-blur-xl">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h2 className="text-white text-lg font-semibold">
//             Reputation Pulse
//           </h2>
//           <p className="text-gray-400 text-sm">
//             Last 30 days · Updated 18 hours ago
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex bg-[#0B0F14] p-1 rounded-xl border border-white/10">
//           <button
//             onClick={() => setActiveTab("score")}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
//               activeTab === "score"
//                 ? "bg-teal-500/20 text-teal-400"
//                 : "text-gray-400"
//             }`}
//           >
//             <LineIcon size={16} /> Reputation Score
//           </button>

//           <button
//             onClick={() => setActiveTab("sentiment")}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
//               activeTab === "sentiment"
//                 ? "bg-indigo-500/20 text-indigo-400"
//                 : "text-gray-400"
//             }`}
//           >
//             <Smile size={16} /> Sentiment Trend
//           </button>

//           <button
//             onClick={() => setActiveTab("volume")}
//             className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
//               activeTab === "volume"
//                 ? "bg-teal-500/20 text-teal-400"
//                 : "text-gray-400"
//             }`}
//           >
//             <BarChart3 size={16} /> Review Volume
//           </button>
//         </div>
//       </div>

//       {/* Graph */}
//       <div className="w-full h-[300px]">
//         <ResponsiveContainer width="100%" height="100%">

//           {/* SCORE */}
//           {activeTab === "score" && (
//             <LineChart data={scoreData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
//               <XAxis dataKey="name" stroke="#6B7280" />
//               <YAxis stroke="#6B7280" />
//               <Tooltip
//                 content={<CustomTooltip type="score" />}
//                 cursor={{ stroke: "#374151", strokeWidth: 1 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#14B8A6"
//                 strokeWidth={2}
//                 dot={{ r: 4 }}
//               />
//             </LineChart>
//           )}

//           {/* SENTIMENT */}
//           {activeTab === "sentiment" && (
//             <LineChart data={sentimentData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
//               <XAxis dataKey="name" stroke="#6B7280" />
//               <YAxis stroke="#6B7280" />
//               <Tooltip
//                 content={<CustomTooltip type="sentiment" />}
//                 cursor={{ stroke: "#374151", strokeWidth: 1 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="value"
//                 stroke="#6366F1"
//                 strokeWidth={2}
//                 dot={{ r: 4 }}
//               />
//             </LineChart>
//           )}

//           {/* VOLUME */}
//           {activeTab === "volume" && (
//             <BarChart data={volumeData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
//               <XAxis dataKey="name" stroke="#6B7280" />
//               <YAxis stroke="#6B7280" />
//               <Tooltip
//                 content={<CustomTooltip type="volume" />}
//                 cursor={{ fill: "rgba(255,255,255,0.02)" }}
//               />
//               <Bar dataKey="value" fill="#14B8A6" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           )}

//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }