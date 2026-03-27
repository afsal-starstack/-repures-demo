import PlatformCards from "@/components/overview/PlatformCards";
import TodayFocus from "@/components/overview/TodaysSection";
import StatsCards from "@/components/overview/StatsCards";
import ReputationPulse from "@/components/overview/ReputationPulse";
import EarlySignals from "@/components/overview/EarlySignals";
import QuickActions from "@/components/overview/QuickActions";
import AIInsight from "@/components/overview/AIInsight";
import MarketPosition from "@/components/overview/MarketPosition";

export default function Overview() {
  return (
    <div className="space-y-6 lg:mt-[115px]">
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