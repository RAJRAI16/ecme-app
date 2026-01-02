import { Download } from "lucide-react";

const DATA = [
  {
    source: "Direct",
    visits: 1500,
    unique: 1200,
    bounce: "40%",
    duration: "00:03:45",
    progress: 60,
    color: "bg-yellow-400",
  },
  {
    source: "Natural",
    visits: 3000,
    unique: 2500,
    bounce: "35%",
    duration: "00:04:20",
    progress: 75,
    color: "bg-green-400",
  },
  {
    source: "Referral",
    visits: 1000,
    unique: 850,
    bounce: "45%",
    duration: "00:03:10",
    progress: 80,
    color: "bg-green-400",
  },
  {
    source: "Social Media",
    visits: 2000,
    unique: 1800,
    bounce: "50%",
    duration: "00:02:50",
    progress: 40,
    color: "bg-red-400",
  },
  {
    source: "Email Campaign",
    visits: 800,
    unique: 700,
    bounce: "30%",
    duration: "00:05:00",
    progress: 55,
    color: "bg-yellow-400",
  },
];

export default function TrafficData() {
  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Traffic data</h3>

        <button className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-lg text-sm hover:bg-[#333] transition">
          <Download size={16} />
          Export data
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead className="text-gray-400 border-b border-gray-700">
            <tr>
              <th className="text-left py-3">SOURCE</th>
              <th className="text-left">VISITS</th>
              <th className="text-left">UNIQUE VISITORS</th>
              <th className="text-left">BOUNCE RATE</th>
              <th className="text-left">AVG. SESSION DURATION</th>
              <th className="text-left">PROGRESS TO GOAL (%)</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {DATA.map((row) => (
              <tr key={row.source} className="hover:bg-[#242424] transition">
                <td className="py-4 font-medium">{row.source}</td>
                <td className="text-gray-300">{row.visits}</td>
                <td className="text-gray-300">{row.unique}</td>
                <td className="text-gray-300">{row.bounce}</td>
                <td className="text-gray-300">{row.duration}</td>

                {/* PROGRESS */}
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-[#333] rounded-full overflow-hidden">
                      <div
                        className={`h-full ${row.color} rounded-full`}
                        style={{ width: `${row.progress}%` }}
                      />
                    </div>
                    <span className="font-medium">{row.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
