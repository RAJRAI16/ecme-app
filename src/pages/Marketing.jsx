import MarketingOverview from "../components/marketing/MarketingOverview";
import AdsPerformance from "../components/marketing/AdsPerformance";
import LeadPerformanceScore from "../components/marketing/LeadPerformanceScore";
import Campaigns from "../components/marketing/Campaigns";

export default function Marketing() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-9 pb-6 space-y-6">
      {/* KPI OVERVIEW */}
      <MarketingOverview />

      {/* ADS PERFORMANCE */}
      <AdsPerformance />

      {/* LEAD SCORE + CAMPAIGNS */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-4">
          <LeadPerformanceScore />
        </div>

        <div className="xl:col-span-8">
          <Campaigns />
        </div>
      </div>
    </div>
  );
}
