import { Search, SlidersHorizontal } from "lucide-react";

export default function OrdersFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
      {/* SEARCH */}
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          placeholder="Search"
          className="w-full h-11 sm:h-12
                     pl-11 pr-4 rounded-lg
                     bg-[#3a3a3a] text-white placeholder-gray-400
                     focus:outline-none"
        />
      </div>

      {/* FILTER BUTTON */}
      <button
        className="w-full sm:w-auto
                   bg-[#3a3a3a] hover:bg-[#4a4a4a]
                   px-4 py-2.5 h-11 sm:h-12
                   rounded-lg text-white
                   flex items-center justify-center gap-2
                   cursor-pointer"
      >
        <SlidersHorizontal size={18} />
        Filter
      </button>
    </div>
  );
}
