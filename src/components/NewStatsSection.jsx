import { ShoppingCart, Store, Share2 } from "lucide-react";
import worldMap from "../assets/worldmapfinal.png";

export default function NewStatsSection() {
  return (
    <section className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">

      {/* LEFT CARD – TOP COUNTRIES */}
      <div className="xl:col-span-2 bg-[#1f1f1f] rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Top countries</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* MAP (WORLD MAP IMAGE FROM ASSETS) */}
          <div className="flex items-center justify-center">
            <div className="w-full h-56 rounded-xl bg-[#262626] flex items-center justify-center overflow-hidden">
              <img
                src={worldMap}
                alt="World map"
                className="w-full h-full object-cover opacity-40"
              />
            </div>
          </div>

          {/* COUNTRY LIST */}
          <div className="space-y-4">
            {[
              { name: "United States", value: "38.61%", flag: "🇺🇸" },
              { name: "Brazil", value: "32.79%", flag: "🇧🇷" },
              { name: "India", value: "26.42%", flag: "🇮🇳", active: true },
              { name: "United Kingdom", value: "17.42%", flag: "🇬🇧" },
              { name: "Turkey", value: "12.85%", flag: "🇹🇷" },
            ].map((c, i) => (
              <div
                key={i}
                className={`group p-3 rounded-lg transition-all duration-200 hover:bg-[#262626] ${
                  c.active ? "bg-[#262626]" : ""
                }`}
              >
                <div className="flex items-center justify-between text-sm mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#1f1f1f] flex items-center justify-center text-lg">
                      {c.flag}
                    </div>
                    <span>{c.name}</span>
                  </div>
                  <span className="text-gray-400">{c.value}</span>
                </div>

                {/* ✅ UPDATED PROGRESS BAR DESIGN */}
                <div className="h-1 bg-[#2f2f2f] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300 group-hover:bg-blue-400"
                    style={{ width: c.value }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* RIGHT CARD – CHANNEL REVENUE */}
      <div className="bg-[#1f1f1f] rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Channel revenue</h3>
          <select className="bg-[#262626] text-sm px-3 py-1 rounded-md">
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>

        <p className="text-3xl font-bold mb-1">3.4%</p>
        <p className="text-gray-400 text-sm mb-4">Growth Rate</p>

        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>28%</span>
          <span>32%</span>
          <span>40%</span>
        </div>

        <div className="flex gap-2 mb-6">
          <div className="h-2 bg-blue-500 rounded-full flex-1" />
          <div className="h-2 bg-green-400 rounded-full flex-1" />
          <div className="h-2 bg-yellow-400 rounded-full flex-1" />
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <Revenue icon={<ShoppingCart />} value="$2.9K" label="Online store" />
          <Revenue icon={<Store />} value="$2.6K" label="Physical store" />
          <Revenue icon={<Share2 />} value="$2.1K" label="Social Media" />
        </div>
      </div>

    </section>
  );
}

function Revenue({ icon, value, label }) {
  return (
    <div className="bg-[#262626] rounded-xl p-4">
      <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-[#1f1f1f]">
        {icon}
      </div>
      <p className="font-semibold">{value}</p>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  );
}
