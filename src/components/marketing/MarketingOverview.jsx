import {
  User,
  DollarSign,
  RefreshCw,
  Magnet,
} from "lucide-react";

export default function MarketingOverview() {
  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6">
      {/* HEADER */}
      <h3 className="text-lg font-semibold mb-6">Kpi summary</h3>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
        <KpiItem
          icon={User}
          iconBg="bg-pink-200"
          title="Total marketing spend"
          value="$192,817"
          change="+5.3%"
        />

        <KpiItem
          icon={DollarSign}
          iconBg="bg-sky-200"
          title="ROI"
          value="270%"
          change="+8.1%"
        />

        <KpiItem
          icon={RefreshCw}
          iconBg="bg-emerald-200"
          title="Conversion rates"
          value="4.5%"
          change="+0.9%"
        />

        <KpiItem
          icon={Magnet}
          iconBg="bg-purple-200"
          title="Total leads"
          value="1,289"
          change="+16.2%"
        />
      </div>
    </div>
  );
}

function KpiItem({ icon: Icon, iconBg, title, value, change }) {
  return (
    <div className="flex items-start gap-4 px-0 sm:px-6 py-6">
      {/* ICON */}
      <div
        className={`h-12 w-12 rounded-full flex items-center justify-center ${iconBg}`}
      >
        <Icon size={20} className="text-black" />
      </div>

      {/* TEXT */}
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-2xl font-bold mt-1">{value}</p>
        <p className="text-sm text-green-400 mt-1">
          {change} <span className="text-gray-400">vs last month</span>
        </p>
      </div>
    </div>
  );
}
