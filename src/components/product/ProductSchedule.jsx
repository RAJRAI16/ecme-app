import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

const SCHEDULE = [
  {
    title: "UI Design",
    percent: 70,
    color: "from-sky-400 to-blue-500",
    start: "Jan 18",
    end: "Jan 24",
  },
  {
    title: "Frontend Development",
    percent: 45,
    color: "from-emerald-400 to-green-500",
    start: "Jan 22",
    end: "Jan 30",
  },
  {
    title: "Backend Integration",
    percent: 25,
    color: "from-purple-400 to-fuchsia-500",
    start: "Jan 25",
    end: "Feb 05",
  },
];

export default function ProductSchedule() {
  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6 h-full">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Schedule</h3>
          <p className="text-xs text-gray-400">
            Project timeline & progress
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#333] transition">
            <ChevronLeft size={18} />
          </button>
          <button className="p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#333] transition">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* ================= TIMELINE ================= */}
      <div className="space-y-6">
        {SCHEDULE.map((item) => (
          <ScheduleCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

function ScheduleCard({ title, percent, color, start, end }) {
  return (
    <div className="relative bg-[#222] rounded-xl p-4 overflow-hidden">
      {/* soft glow */}
      <div
        className={`absolute inset-0 opacity-10 bg-gradient-to-r ${color}`}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* TOP */}
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium">{title}</h4>
          <span className="text-xs text-gray-400">{percent}%</span>
        </div>

        {/* PROGRESS BAR */}
        <div className="h-2 w-full bg-[#2f2f2f] rounded-full overflow-hidden mb-3">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-500`}
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>
              {start} – {end}
            </span>
          </div>

          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-medium
              ${
                percent >= 70
                  ? "bg-green-400/20 text-green-400"
                  : percent >= 40
                  ? "bg-yellow-400/20 text-yellow-400"
                  : "bg-red-400/20 text-red-400"
              }`}
          >
            {percent >= 70
              ? "On Track"
              : percent >= 40
              ? "At Risk"
              : "Delayed"}
          </span>
        </div>
      </div>
    </div>
  );
}
