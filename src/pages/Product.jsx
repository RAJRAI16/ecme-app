import ProductOverview from "../components/product/ProductOverview";
import ProductSchedule from "../components/product/ProductSchedule";
import CurrentTasks from "../components/product/CurrentTasks";
import TaskOverview from "../components/product/TaskOverview";
import RecentActivity from "../components/product/RecentActivity";

export default function Product() {
  return (
    <div
      className="
        px-4 sm:px-6 lg:px-9
        pb-6
        space-y-6
      "
    >
      {/* ================= TOP ================= */}
      <ProductOverview />

      {/* ================= MIDDLE ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* LEFT (Schedule) */}
        <div className="xl:col-span-8">
          <ProductSchedule />
        </div>

        {/* RIGHT (Activity) */}
        <div className="xl:col-span-4">
          <RecentActivity />
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CurrentTasks />
        <TaskOverview />
      </div>
    </div>
  );
}
