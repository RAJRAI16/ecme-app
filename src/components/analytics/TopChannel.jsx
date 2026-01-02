import {
  Globe,
  Instagram,
  Facebook,
  X,
  Download,
} from "lucide-react";

export default function TopChannel() {
  const channels = [
    {
      name: "Google",
      percent: 40,
      total: "31,731",
      color: "bg-yellow-500",
      icon: Globe,
    },
    {
      name: "Instagram",
      percent: 30,
      total: "23,798",
      color: "bg-pink-500",
      icon: Instagram,
    },
    {
      name: "Facebook",
      percent: 15,
      total: "11,899",
      color: "bg-blue-500",
      icon: Facebook,
    },
    {
      name: "X",
      percent: 13,
      total: "10,313",
      color: "bg-gray-400",
      icon: X,
    },
  ];

  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-5 sm:p-6 h-full w-full">
      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h3 className="text-lg font-semibold">
          Top channel
        </h3>

        <button className="flex items-center gap-2 bg-[#2a2a2a] px-3 sm:px-4 py-2 rounded-lg text-sm hover:bg-[#333] transition shrink-0">
          <Download size={16} />
          <span className="hidden sm:inline">
            Export data
          </span>
        </button>
      </div>

      {/* VISITORS */}
      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-1">
          Visitors
        </p>
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">
            79,328
          </h2>
          <span className="text-green-400 text-sm font-medium">
            +2.6%
          </span>
        </div>
      </div>

      {/* TABLE HEADER */}
      <div className="grid grid-cols-3 text-xs text-gray-400 pb-3 border-b border-gray-700">
        <span>CHANNEL</span>
        <span className="text-center">
          PERCENTAGE
        </span>
        <span className="text-right">
          TOTAL
        </span>
      </div>

      {/* ROWS */}
      <div className="divide-y divide-gray-800">
        {channels.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="
                grid grid-cols-3 items-center py-4
                hover:bg-[#242424] transition
                rounded-lg px-1
              "
            >
              {/* CHANNEL */}
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={`h-9 w-9 rounded-full flex items-center justify-center ${item.color}`}
                >
                  <Icon size={18} className="text-black" />
                </div>
                <span className="font-medium truncate">
                  {item.name}
                </span>
              </div>

              {/* PERCENT */}
              <span className="text-center text-gray-300">
                {item.percent}%
              </span>

              {/* TOTAL */}
              <span className="text-right text-gray-300">
                {item.total}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
