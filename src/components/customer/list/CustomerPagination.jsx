import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomerPagination() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
      {/* LEFT: PAGE INFO */}
      <p className="text-sm text-gray-400">
        Showing <span className="text-white">1–10</span> of{" "}
        <span className="text-white">100</span>
      </p>

      {/* RIGHT: PAGINATION CONTROLS */}
      <div className="flex items-center gap-2">
        {/* PREV */}
        <button
          className="p-2 rounded-md bg-[#3a3a3a] text-gray-300
          hover:bg-[#444] transition"
        >
          <ChevronLeft size={16} />
        </button>

        {/* PAGE NUMBERS */}
        <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
          1
        </button>
        <button
          className="px-3 py-1 rounded-md bg-[#3a3a3a] text-gray-300
          hover:bg-[#444] transition"
        >
          2
        </button>
        <button
          className="px-3 py-1 rounded-md bg-[#3a3a3a] text-gray-300
          hover:bg-[#444] transition"
        >
          3
        </button>

        {/* NEXT */}
        <button
          className="p-2 rounded-md bg-[#3a3a3a] text-gray-300
          hover:bg-[#444] transition"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
