import { Sparkles, ArrowRight } from "lucide-react";

export default function AIInsight() {
  return (
    <div className="relative p-[1px] rounded-2xl overflow-hidden">
      
      {/* Outer Border Gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-purple-500/30 opacity-40"></div>

      {/* Card */}
      <div className="relative p-6 rounded-2xl bg-[#0B1117] overflow-hidden">
        
        {/* LEFT EDGE LINE (this was missing) */}
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 opacity-70"></div>

        {/* LEFT GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(139,92,246,0.25),transparent_45%)] pointer-events-none"></div>

        {/* RIGHT GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(59,130,246,0.18),transparent_40%)] pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-5">
          
          {/* Top */}
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>

              <div>
                <p className="text-sm font-medium text-purple-400 tracking-wide">
                  AI Insight
                </p>
                <p className="text-xs text-gray-400">
                  Generated just now · Based on last 7 days
                </p>
              </div>
            </div>

            <span className="px-3 py-1 text-xs rounded-full border border-purple-400/30 text-purple-300 bg-purple-500/5">
              High Confidence
            </span>
          </div>

          {/* Text */}
          <p className="text-gray-200 text-[15px] leading-relaxed max-w-3xl">
            Guests frequently mention slow check-in this week. Consider reviewing
            front desk staffing during peak hours.
          </p>

          {/* Button */}
          <div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-400/20 bg-purple-500/5 text-purple-300 hover:bg-purple-500/10 transition-colors">
              <span className="w-5 h-5 flex items-center justify-center rounded-full border border-purple-400/30">
                <ArrowRight className="w-3 h-3" />
              </span>
              View Action Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}