import OverviewCards from "../components/OverviewCards";
import SalesTargetCard from "../components/SalesTargetCard";
import TopProductCard from "../components/TopProductCard";
import NewStatsSection from "../components/NewStatsSection";
import RecentOrders from "../components/RecentOrders";

export default function Dashboard() {
  return (
    <>
      {/* CONTENT WRAPPER */}
      <div className="px-4 sm:px-6 lg:px-9 pb-6 space-y-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <OverviewCards />
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-6">
            <SalesTargetCard />
            <TopProductCard />
          </div>
        </div>

        <NewStatsSection />
        <RecentOrders />
      </div>
    </>
  );
}
