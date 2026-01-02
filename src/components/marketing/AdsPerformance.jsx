import { useState } from "react";

export default function AdsPerformance() {
  const [tab, setTab] = useState("all");

  const LABELS = [
    "01 Jan","02 Jan","03 Jan","04 Jan","05 Jan","06 Jan",
    "07 Jan","08 Jan","09 Jan","10 Jan","11 Jan","12 Jan"
  ];

  const DATA = {
    campaign: {
      bars: [450, 500, 410, 670, 230, 410, 200, 340, 750, 0, 0, 0],
    },
    email: {
      bars: [0, 0, 0, 0, 0, 0, 0, 0, 0, 320, 260, 160],
      line: [25, 35, 40, 33, 42, 24, 20, 30, 22, 22, 12, 18],
    },
  };

  /* ================= DATA ================= */

  const mergedBars = DATA.campaign.bars.map(
    (v, i) => v + DATA.email.bars[i]
  );

  const barsData =
    tab === "campaign"
      ? DATA.campaign.bars
      : mergedBars;

  const lineData = DATA.email.line;

  const showBars = tab !== "email";
  const showLine = tab !== "campaign";

  // ✅ IMPORTANT FIX
  const maxBar =
    tab === "campaign"
      ? Math.max(...DATA.campaign.bars, 1)
      : Math.max(...mergedBars, 1);

  const maxLine = 50;

  /* ================= UI ================= */

  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6 h-full">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Ads performance</h3>

        <div className="flex bg-[#2a2a2a] rounded-lg p-1 text-sm">
          {["all", "campaign", "email"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-md transition ${
                tab === t
                  ? "bg-[#3a3a3a] text-white"
                  : "text-gray-400"
              }`}
            >
              {t[0].toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* GRAPH */}
      <div className="relative h-64 overflow-hidden">
        {/* GRID */}
        {[0, 200, 400, 600, 800].map((v) => (
          <div
            key={v}
            className="absolute left-0 right-0 border-t border-gray-700 text-xs text-gray-500"
            style={{ bottom: `${(v / 800) * 100}%` }}
          >
            <span className="absolute -left-8 -top-2">{v}</span>
          </div>
        ))}

        {/* BARS (ON TOP OF LINE) */}
        {showBars && (
          <div className="absolute inset-0 px-6 flex items-end z-10">
            <div className="grid grid-cols-12 gap-3 w-full h-full items-end">
              {LABELS.map((label, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-end gap-2"
                >
                  <div
                    className="w-6 rounded-md bg-emerald-300/80"
                    style={{
                      height: `${(barsData[i] / maxBar) * 100}%`,
                    }}
                  />

                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* LINE (BEHIND BARS) */}
        {showLine && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth={tab === "email" ? 1.5 : 2.5}
              points={lineData
                .map(
                  (v, i) =>
                    `${(i / (LABELS.length - 1)) * 100},${
                      100 - (v / maxLine) * 100
                    }`
                )
                .join(" ")}
            />
          </svg>
        )}
      </div>
    </div>
  );
}
