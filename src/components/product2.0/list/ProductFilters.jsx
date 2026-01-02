import { Search, SlidersHorizontal } from "lucide-react";

export default function ProductFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          placeholder="Search"
          className="w-full h-12 pl-11 pr-4 rounded-lg
                     bg-[#3a3a3a] text-white placeholder-gray-400
                     focus:outline-none"
        />
      </div>

      <button className="flex items-center gap-2 bg-[#3a3a3a]
                         hover:bg-[#4a4a4a] px-4 py-2.5 rounded-lg
                         text-white transition">
        <SlidersHorizontal size={18} />
        Filter
      </button>
    </div>
  );
}
