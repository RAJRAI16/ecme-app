import {
  Users,
  Percent,
  MousePointerClick,
} from "lucide-react";

export default function AnalyticsStatsCards() {
  const stats = [
    {
      title: "Visitor",
      value: "149,328",
      change: "+5.2%",
      positive: true,
      icon: Users,
      iconBg: "bg-orange-200",
      iconColor: "text-orange-600",
    },
    {
      title: "Conversion rate",
      value: "6.8%",
      change: "-1.8%",
      positive: false,
      icon: Percent,
      iconBg: "bg-green-200",
      iconColor: "text-green-600",
    },
    {
      title: "Ad campaign clicks",
      value: "17,333",
      change: "+2.3%",
      positive: true,
      icon: MousePointerClick,
      iconBg: "bg-purple-200",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              bg-[#1c1c1c]
              rounded-2xl
              p-5 sm:p-6
              flex
              items-start
              justify-between
              w-full
              h-full
            "
          >
            {/* LEFT */}
            <div className="min-w-0">
              <p className="text-sm text-gray-400 mb-2 truncate">
                {item.title}
              </p>

              <p className="text-2xl font-bold mb-1 break-words">
                {item.value}
              </p>

              <p
                className={`text-sm ${
                  item.positive
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {item.change}{" "}
                <span className="text-gray-400">
                  vs last month
                </span>
              </p>
            </div>

            {/* RIGHT ICON */}
            <div
              className={`
                h-12 w-12
                shrink-0
                rounded-full
                flex
                items-center
                justify-center
                ${item.iconBg}
              `}
            >
              <Icon className={item.iconColor} size={22} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
