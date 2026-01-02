import { RotateCw, CheckCircle, ArrowDownToLine } from "lucide-react";

export default function ProductOverview() {
  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Overview</h2>
        <button className="text-sm bg-[#2a2a2a] px-4 py-2 rounded-lg hover:bg-[#333] transition">
          All projects
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <OverviewCard
          title="Ongoing project"
          value="12"
          bg="bg-[#e6f4ff]"
          icon={RotateCw}
        />
        <OverviewCard
          title="Project completed"
          value="68"
          bg="bg-[#dcfce7]"
          icon={CheckCircle}
        />
        <OverviewCard
          title="Upcoming project"
          value="7"
          bg="bg-[#f3e8ff]"
          icon={ArrowDownToLine}
        />
      </div>
    </div>
  );
}

function OverviewCard({ title, value, bg, icon: Icon }) {
  return (
    <div
      className={`
        ${bg}
        text-black
        rounded-xl
        p-5
        flex items-center justify-between
      `}
    >
      {/* LEFT */}
      <div>
        <p className="text-sm opacity-80">{title}</p>
        <h3 className="text-3xl font-bold mt-4">{value}</h3>
      </div>

      {/* ICON */}
      <div className="h-11 w-11 rounded-full bg-black/80 flex items-center justify-center">
        <Icon size={20} className="text-white" />
      </div>
    </div>
  );
}
