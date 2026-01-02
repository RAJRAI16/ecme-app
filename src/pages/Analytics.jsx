import AnalyticsOverview from "../components/analytics/AnalyticsOverview";
import AnalyticsStatsCards from "../components/analytics/AnalyticsStatsCards";
import TopPages from "../components/analytics/TopPages";
import SessionDevices from "../components/analytics/SessionDevices";
import TopChannel from "../components/analytics/TopChannel";
import TrafficData from "../components/analytics/TrafficData";

export default function Analytics() {
  return (
    <div className="
      w-full
      max-w-screen-xl
      mx-auto
      px-4 sm:px-6 lg:px-9
      pb-6
      space-y-6
    ">

      {/* PAGE TITLE */}
      <h1 className="text-xl font-semibold">
        Analytics
      </h1>

      {/* OVERVIEW */}
      <AnalyticsOverview />

      {/* STATS CARDS */}
      <AnalyticsStatsCards />

      {/* MIDDLE SECTION — EXACT MARKETING LOGIC */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        {/* LEFT */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          <TopPages />
        </div>

        {/* RIGHT */}
        <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <SessionDevices />
          <TopChannel />
        </div>

      </div>

      {/* BOTTOM */}
      <TrafficData />

    </div>
  );
}
