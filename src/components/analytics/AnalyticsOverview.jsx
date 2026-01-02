import { useState } from "react";

/* ===================== DATA ===================== */

const DATA = {
  annually: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    natural: [50,46,55,61,48,52,57,51,46,54,61,57],
    referral: [42,41,45,53,48,45,49,42,51,48,45,50],
    direct: [57,65,61,54,59,64,67,61,55,59,64,67],
  },
  monthly: {
    labels: ["Week 1","Week 2","Week 3","Week 4"],
    natural: [52,58,49,61],
    referral: [45,48,43,50],
    direct: [60,63,58,65],
  },
  weekly: {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    natural: [48,52,50,55,53,51,54],
    referral: [44,45,46,48,47,46,49],
    direct: [58,60,59,61,62,60,63],
  },
};

export default function AnalyticsOverview() {
  const [view, setView] = useState("annually");
  const [hover, setHover] = useState(null);

  const current = DATA[view];
  const min = 40;
  const max = 70;

  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-4 sm:p-6 w-full overflow-hidden">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold">Analytics overview</h2>
          <p className="text-sm text-gray-400">
            Explore traffic trends across channels
          </p>
        </div>

        <select
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="bg-[#2a2a2a] text-sm px-4 py-2 rounded-lg outline-none w-fit"
        >
          <option value="annually">Annually</option>
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      {/* LEGEND */}
      <div className="flex flex-wrap gap-4 sm:gap-6 text-sm mb-4">
        <Legend color="bg-blue-500" label="Natural" />
        <Legend color="bg-orange-400" label="Referral" />
        <Legend color="bg-sky-400" label="Direct" />
      </div>

      {/* GRAPH */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">

        {/* GRID */}
        {[40, 50, 60, 70].map((v) => (
          <div
            key={v}
            className="absolute left-0 right-0 border-t border-gray-700 text-xs text-gray-500"
            style={{ bottom: `${((v - min) / (max - min)) * 100}%` }}
          >
            {/* 🔑 mobile: label inside | desktop unchanged */}
            <span className="absolute left-1 sm:-left-8 -top-2">
              {v}k
            </span>
          </div>
        ))}

        {/* SVG — DESKTOP SAME */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <SmoothLine data={current.natural} color="#3b82f6" min={min} max={max} />
          <SmoothLine data={current.referral} color="#f59e0b" min={min} max={max} />
          <SmoothLine data={current.direct} color="#38bdf8" min={min} max={max} />

          {hover !== null && (
            <line
              x1={(hover / (current.labels.length - 1)) * 100}
              x2={(hover / (current.labels.length - 1)) * 100}
              y1="0"
              y2="100"
              stroke="#9ca3af"
              strokeWidth="0.4"
              opacity="0.4"
            />
          )}

          {current.labels.map((_, i) => (
            <rect
              key={i}
              x={(i / current.labels.length) * 100}
              y="0"
              width={100 / current.labels.length}
              height="100"
              fill="transparent"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            />
          ))}
        </svg>

        {/* TOOLTIP — mobile safe, desktop same */}
        {hover !== null && (
          <div
            className="absolute bg-[#111] text-xs rounded-lg px-3 py-2 shadow-lg pointer-events-none max-w-[90%]"
            style={{
              left: `${(hover / (current.labels.length - 1)) * 100}%`,
              bottom: "65%",
              transform:
                hover === 0
                  ? "translateX(0%)"
                  : hover === current.labels.length - 1
                  ? "translateX(-100%)"
                  : "translateX(-50%)",
            }}
          >
            <p className="font-medium mb-1">{current.labels[hover]}</p>
            <p className="text-blue-400">Natural: {current.natural[hover]}k</p>
            <p className="text-orange-400">Referral: {current.referral[hover]}k</p>
            <p className="text-sky-400">Direct: {current.direct[hover]}k</p>
          </div>
        )}

        {/* X AXIS */}
        <div className="absolute -bottom-1 left-0 right-0 flex justify-between text-xs text-gray-400 px-1 sm:px-2">
          {current.labels.map((l) => (
            <span
              key={l}
              className="truncate max-w-[2.2rem] sm:max-w-none"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================== HELPERS ===================== */

function SmoothLine({ data, color, min, max }) {
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((v - min) / (max - min)) * 100;
    return { x, y };
  });

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpX = (prev.x + curr.x) / 2;

    d += ` C ${cpX} ${prev.y}, ${cpX} ${curr.y}, ${curr.x} ${curr.y}`;
  }

  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-3 w-3 rounded-full ${color}`} />
      <span className="text-gray-300">{label}</span>
    </div>
  );
}
