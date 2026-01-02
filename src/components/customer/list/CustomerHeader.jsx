import { Download, UserPlus, Trash } from "lucide-react";
import { Link } from "react-router-dom";

export default function CustomerHeader({
  selectedCount = 0,
  onDeleteSelected,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h1 className="text-2xl font-semibold text-white">
        Customers
      </h1>

      <div className="flex flex-wrap items-center gap-3">
        {selectedCount > 0 && (
          <button
            onClick={onDeleteSelected}
            className="flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-red-600 hover:bg-red-500 text-white transition"
          >
            <Trash size={18} />
            Delete ({selectedCount})
          </button>
        )}

        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg
          bg-gray-700 text-gray-200 hover:bg-gray-600 transition"
        >
          <Download size={18} />
          Download
        </button>

        <Link to="/customer/create">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg
            bg-blue-600 hover:bg-blue-500 text-white transition"
          >
            <UserPlus size={18} />
            Add new
          </button>
        </Link>
      </div>
    </div>
  );
}
