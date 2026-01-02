import { useState } from "react";

export default function TaskOverview() {
  const [view, setView] = useState("weekly");

  const DATA = {
    daily: {
      total: 48,
      ongoing: 28,
      finished: 20,
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      ongoingData: [10, 14, 18, 16, 20, 22, 28],
      finishedData: [8, 10, 12, 14, 15, 18, 20],
    },
    weekly: {
      total: 213,
      ongoing: 126,
      finished: 87,
      labels: [
        "21 Jan",
        "22 Jan",
        "23 Jan",
        "24 Jan",
        "25 Jan",
        "26 Jan",
        "27 Jan",
      ],
      ongoingData: [45, 52, 68, 80, 102, 112, 128],
      finishedData: [35, 40, 60, 58, 72, 80, 87],
    },
  };

  const current = DATA[view];
  const maxValue = Math.max(
    ...current.ongoingData,
    ...current.finishedData
  );

  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6 h-full">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Task overview</h3>

        {/* TOGGLE */}
        <div className="flex bg-[#2a2a2a] rounded-lg p-1 text-sm">
          <button
            onClick={() => setView("daily")}
            className={`px-3 py-1 rounded-md transition ${
              view === "daily"
                ? "bg-[#3a3a3a] text-white"
                : "text-gray-400"
            }`}
          >
            Daily
          </button>
          <button
            onClick={() => setView("weekly")}
            className={`px-3 py-1 rounded-md transition ${
              view === "weekly"
                ? "bg-[#3a3a3a] text-white"
                : "text-gray-400"
            }`}
          >
            Weekly
          </button>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-2xl font-bold">{current.total}</p>
          <p className="text-sm text-gray-400">Total Tasks</p>
        </div>

        <div className="flex gap-6">
          <StatDot
            color="bg-orange-400"
            value={current.ongoing}
            label="On Going"
          />
          <StatDot
            color="bg-sky-400"
            value={current.finished}
            label="Finished"
          />
        </div>
      </div>

      {/* ================= GRAPH ================= */}
      <div className="relative h-52 overflow-hidden">
        {/* Y axis lines */}
        {[0, 50, 100, 150].map((val) => (
          <div
            key={val}
            className="absolute left-0 right-0 border-t border-gray-700 text-xs text-gray-500"
            style={{ bottom: `${(val / 150) * 100}%` }}
          >
            <span className="absolute -left-6 -top-2">{val}</span>
          </div>
        ))}

        {/* BARS */}
        <div className="absolute bottom-0 left-0 right-0 h-full px-6">
          <div className="grid grid-cols-7 h-full items-end gap-3">
            {current.labels.map((label, i) => (
              <div
                key={label}
                className="flex flex-col items-center justify-end gap-2"
              >
                {/* Bars */}
                <div className="flex items-end gap-1 h-40">
                  {/* Ongoing */}
                  <div
                    className="w-3 rounded-md bg-orange-400"
                    style={{
                      height: `${
                        (current.ongoingData[i] / maxValue) * 100
                      }%`,
                    }}
                  />
                  {/* Finished */}
                  <div
                    className="w-3 rounded-md bg-sky-400"
                    style={{
                      height: `${
                        (current.finishedData[i] / maxValue) * 100
                      }%`,
                    }}
                  />
                </div>

                {/* X label */}
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatDot({ color, value, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      <div className="text-sm">
        <p className="font-semibold">{value}</p>
        <p className="text-gray-400 text-xs">{label}</p>
      </div>
    </div>
  );
}
