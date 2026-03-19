import PlatformCards from "../componets/overview/PlatformCards";
import TodayFocus from "../componets/overview/TodaysSection";
import StatsCards from "../componets/overview/StatsCards";
import ReputationPulse from "../componets/overview/ReputationPulse";
import EarlySignals from "../componets/overview/EarlySignals";
import QuickActions from "../componets/overview/QuickActions";
import AIInsight from "../componets/overview/AIInsight";
import MarketPosition from "../componets/overview/MarketPosition";

export default function Overview() {
  return (
    <div className="space-y-6">
    <p className="text-[#9CA3AF] font-roboto text-[14px] font-normal leading-[20px]">
    Good morning, Ahmed
    </p>
      <PlatformCards />

      <TodayFocus />

      <StatsCards />

      <ReputationPulse />

      <EarlySignals />

      <QuickActions />

      <AIInsight />

      <MarketPosition />

    </div>
  );
}