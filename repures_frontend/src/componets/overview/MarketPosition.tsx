import { ArrowUp } from "lucide-react";

const hotels = [
  { rank: 1, name: "Atlantis The Palm", score: 90.6 },
  { rank: 2, name: "Jumeirah Beach Hotel", score: 89.1 },
  { rank: 3, name: "Burj Al Salam Hotel (You)", score: 87.4, highlight: true },
  { rank: 4, name: "Address Downtown", score: 86.2 },
  { rank: 5, name: "Sofitel Dubai", score: 84.8 },
];

export default function MarketPosition() {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-[#0B1117]">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Market Position</h2>
          <p className="text-sm text-gray-400">
            Downtown Dubai · 18 hotels tracked
          </p>
        </div>

        {/* Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm">
          <ArrowUp className="w-4 h-4" />
          Up from #5 last month
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
       {/* LEFT SIDE */}
<div className="flex flex-col justify-center gap-6 max-w-xs">
  
  {/* Rank */}
  <div>
    <p className="text-sm text-gray-400">Your Rank</p>
    <h1 className="text-6xl font-bold leading-tight">#3</h1>
    <p className="text-sm text-gray-400">of 18 hotels</p>
  </div>

  {/* Stats */}
  <div className="space-y-3 text-sm">
    
    <div className="flex justify-between">
      <span className="text-gray-400">Your Score</span>
      <span className="text-emerald-400 font-medium">87.4</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-400">Gap to #1</span>
      <span className="text-orange-400 font-medium">-3.2 pts</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-400">Ahead of #4 by</span>
      <span className="text-emerald-400 font-medium">+1.2 pts</span>
    </div>

  </div>
</div>
        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-4">
          {hotels.map((hotel) => {
            const width = `${(hotel.score / 100) * 100}%`;

            return (
              <div
                key={hotel.rank}
                className={`p-4 rounded-xl border ${
                  hotel.highlight
                    ? "border-emerald-500/40 bg-emerald-500/5"
                    : "border-white/5 bg-white/5"
                }`}
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-sm">
                      #{hotel.rank}
                    </span>
                    <p
                      className={`text-sm ${
                        hotel.highlight ? "text-emerald-400" : "text-gray-300"
                      }`}
                    >
                      {hotel.name}
                    </p>
                  </div>

                  <span
                    className={`text-sm font-medium ${
                      hotel.highlight ? "text-emerald-400" : "text-gray-300"
                    }`}
                  >
                    {hotel.score}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      hotel.highlight
                        ? "bg-gradient-to-r from-emerald-400 to-emerald-300"
                        : "bg-gray-400/40"
                    }`}
                    style={{ width }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}