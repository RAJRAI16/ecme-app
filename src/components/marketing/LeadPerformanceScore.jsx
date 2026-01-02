export default function LeadPerformanceScore() {
  // values out of 100
  const scores = [
    { label: "Lead Volume", value: 78, color: "bg-emerald-400" },
    { label: "Conversion Rate", value: 57, color: "bg-yellow-400" },
    { label: "Lead Quality", value: 26, color: "bg-red-400" },
    { label: "Response Time", value: 76, color: "bg-emerald-400" },
    { label: "Cost per Lead", value: 42, color: "bg-yellow-400" },
  ];

  // Radar math (5 sides)
  const center = 150;
  const radius = 90;

  const points = scores.map((s, i) => {
    const angle = (Math.PI * 2 * i) / scores.length - Math.PI / 2;
    const r = (s.value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  });

  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6 h-full">
      {/* HEADER */}
      <h3 className="text-lg font-semibold mb-6">
        Lead performance score
      </h3>

      {/* RADAR */}
      <div className="flex justify-center mb-8">
        <svg width="300" height="300">
          {/* GRID */}
          {[1, 2, 3, 4, 5].map((level) => {
            const r = (radius / 5) * level;
            const gridPoints = scores
              .map((_, i) => {
                const angle =
                  (Math.PI * 2 * i) / scores.length -
                  Math.PI / 2;
                const x = center + r * Math.cos(angle);
                const y = center + r * Math.sin(angle);
                return `${x},${y}`;
              })
              .join(" ");

            return (
              <polygon
                key={level}
                points={gridPoints}
                fill="none"
                stroke="#555"
                strokeWidth="1"
              />
            );
          })}

          {/* AXES */}
          {scores.map((_, i) => {
            const angle =
              (Math.PI * 2 * i) / scores.length -
              Math.PI / 2;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);

            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="#555"
                strokeWidth="1"
              />
            );
          })}

          {/* DATA AREA */}
          <polygon
            points={points.join(" ")}
            fill="rgba(59,130,246,0.25)"
            stroke="#3b82f6"
            strokeWidth="2"
          />

          {/* POINTS */}
          {points.map((p, i) => {
            const [x, y] = p.split(",");
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="5"
                fill="#3b82f6"
                stroke="#fff"
                strokeWidth="1"
              />
            );
          })}

          {/* INDEX LABELS */}
          {scores.map((_, i) => {
            const angle =
              (Math.PI * 2 * i) / scores.length -
              Math.PI / 2;
            const x =
              center + (radius + 18) * Math.cos(angle);
            const y =
              center + (radius + 18) * Math.sin(angle);

            return (
              <text
                key={i}
                x={x}
                y={y}
                fill="#aaa"
                fontSize="12"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {i + 1}
              </text>
            );
          })}
        </svg>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {scores.map((item, i) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="h-7 w-7 flex items-center justify-center rounded-full border border-gray-500 text-xs">
              {i + 1}
            </div>

            <p className="flex-1 text-sm">{item.label}</p>

            <span
              className={`text-sm font-medium px-3 py-1 rounded-full text-black ${item.color}`}
            >
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
