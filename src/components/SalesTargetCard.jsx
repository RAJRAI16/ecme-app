import { useState } from "react";

// =====================
// DATA BY TIME RANGE
// =====================
const DATA = {
  monthly: {
    percent: 75,
    achieved: "1.3K",
    total: "1.8K",
    label: "Made this month",
  },
  weekly: {
    percent: 62,
    achieved: "420",
    total: "680",
    label: "Made this week",
  },
  yearly: {
    percent: 88,
    achieved: "15.9K",
    total: "18K",
    label: "Made this year",
  },
};

export default function SalesTargetCard() {
  const [timeRange, setTimeRange] = useState("monthly");

  const current = DATA[timeRange];

  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-9">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sales target</h2>

        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="bg-[#2a2a2a] text-sm px-3 py-1 rounded-lg outline-none cursor-pointer"
        >
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="flex items-center gap-6">
        {/* CIRCLE (same design, dynamic value) */}
        <div className="relative w-24 h-24 rounded-full border-8 border-blue-500 flex items-center justify-center">
          <span className="text-lg font-semibold">
            {current.percent}%
          </span>
        </div>

        {/* STATS */}
        <div>
          <h3 className="text-2xl font-bold">{current.achieved}</h3>
          <p className="text-gray-400 text-sm">
            / {current.total} Units
          </p>
          <p className="text-gray-400 text-sm mt-1">
            {current.label}
          </p>
        </div>
      </div>
    </div>
  );
}
