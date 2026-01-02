import { Search, Filter } from "lucide-react";

export default function CustomerFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      {/* SEARCH INPUT */}
      <div className="relative w-full">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Quick search..."
          className="
            w-full pl-10 pr-4 py-2 rounded-lg
            bg-[#3a3a3a] text-gray-200
            placeholder-gray-400
            focus:outline-none
          "
        />
      </div>

      {/* FILTER BUTTON */}
      <button
        className="
          flex items-center justify-center gap-2
          px-4 py-2 rounded-lg
          bg-[#3a3a3a] text-gray-200
          hover:bg-[#444] transition
          sm:w-auto w-full
          shrink-0
        "
      >
        <Filter size={18} />
        Filter
      </button>
    </div>
  );
}
