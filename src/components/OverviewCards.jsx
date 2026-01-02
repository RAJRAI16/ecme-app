import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* =====================
   CARD CONFIG
===================== */
const stats = [
  {
    title: "Total profit",
    icon: "💰",
    color: "#22c55e",
  },
  {
    title: "Total order",
    icon: "🛒",
    color: "#3b82f6",
  },
  {
    title: "Impression",
    icon: "👁️",
    color: "#a855f7",
  },
];

/* =====================
   DATA BY TIME RANGE
===================== */
const DATA = {
  monthly: {
    cards: [
      { value: "$82,373.21", change: "+3.4%", positive: true },
      { value: "7,234", change: "-2.8%", positive: false },
      { value: "3.1M", change: "+4.6%", positive: true },
    ],
    charts: [
      [
        { name: "Jan", value: 12000 },
        { name: "Feb", value: 18000 },
        { name: "Mar", value: 15000 },
        { name: "Apr", value: 22000 },
        { name: "May", value: 30000 },
      ],
      [
        { name: "Jan", value: 300 },
        { name: "Feb", value: 420 },
        { name: "Mar", value: 380 },
        { name: "Apr", value: 500 },
        { name: "May", value: 720 },
      ],
      [
        { name: "Jan", value: 400000 },
        { name: "Feb", value: 620000 },
        { name: "Mar", value: 780000 },
        { name: "Apr", value: 910000 },
        { name: "May", value: 1200000 },
      ],
    ],
  },

  weekly: {
    cards: [
      { value: "$18,420", change: "+1.2%", positive: true },
      { value: "1,320", change: "-0.6%", positive: false },
      { value: "640K", change: "+2.1%", positive: true },
    ],
    charts: [
      [
        { name: "Mon", value: 2400 },
        { name: "Tue", value: 3100 },
        { name: "Wed", value: 2800 },
        { name: "Thu", value: 3600 },
        { name: "Fri", value: 4200 },
        { name: "Sat", value: 5100 },
        { name: "Sun", value: 3900 },
      ],
      [
        { name: "Mon", value: 180 },
        { name: "Tue", value: 220 },
        { name: "Wed", value: 210 },
        { name: "Thu", value: 260 },
        { name: "Fri", value: 300 },
        { name: "Sat", value: 340 },
        { name: "Sun", value: 280 },
      ],
      [
        { name: "Mon", value: 90000 },
        { name: "Tue", value: 110000 },
        { name: "Wed", value: 130000 },
        { name: "Thu", value: 150000 },
        { name: "Fri", value: 180000 },
        { name: "Sat", value: 200000 },
        { name: "Sun", value: 170000 },
      ],
    ],
  },

  yearly: {
    cards: [
      { value: "$1.02M", change: "+12.5%", positive: true },
      { value: "84,200", change: "+6.1%", positive: true },
      { value: "38M", change: "+18.9%", positive: true },
    ],
    charts: [
      [
        { name: "2021", value: 420000 },
        { name: "2022", value: 560000 },
        { name: "2023", value: 720000 },
        { name: "2024", value: 1020000 },
      ],
      [
        { name: "2021", value: 21000 },
        { name: "2022", value: 34000 },
        { name: "2023", value: 52000 },
        { name: "2024", value: 84200 },
      ],
      [
        { name: "2021", value: 12000000 },
        { name: "2022", value: 18000000 },
        { name: "2023", value: 26000000 },
        { name: "2024", value: 38000000 },
      ],
    ],
  },
};

/* =====================
   COMPONENT
===================== */
export default function OverviewCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeRange, setTimeRange] = useState("monthly");

  const current = DATA[timeRange];

  return (
    <div className="w-full overflow-hidden">
      <div className="bg-[#1a1a1a] rounded-2xl p-6 w-full">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Overview</h2>

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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((item, idx) => {
            const card = current.cards[idx];
            const isActive = activeIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`
                  rounded-xl p-5 flex flex-col gap-3 cursor-pointer
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#050505] ring-1 ring-gray-700"
                      : "bg-[#111] hover:bg-[#0a0a0a]"
                  }
                `}
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-400 text-sm">{item.title}</p>
                <h3 className="text-2xl font-bold">{card.value}</h3>

                <p
                  className={`text-sm ${
                    card.positive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {card.change} from last {timeRange}
                </p>
              </div>
            );
          })}
        </div>

        {/* Chart */}
        <div className="h-[260px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={current.charts[activeIndex]}>
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke={stats[activeIndex].color}
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
