import { Plus, Trash } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductHeader({
  selectedCount = 0,
  onDeleteSelected,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h1 className="text-2xl font-semibold text-white">
        Products
      </h1>

      <div className="flex items-center gap-3">
        {selectedCount > 0 && (
          <button
            onClick={onDeleteSelected}
            className="flex items-center gap-2 bg-red-600
                       hover:bg-red-500 px-4 py-2.5 rounded-lg
                       text-white transition"
          >
            <Trash size={18} />
            Delete ({selectedCount})
          </button>
        )}

        <Link to="/product/create">
          <button
            className="flex items-center gap-2 bg-blue-500
                       hover:bg-blue-600 px-4 py-2.5 rounded-lg
                       text-white font-medium transition"
          >
            <Plus size={18} />
            Add products
          </button>
        </Link>
      </div>
    </div>
  );
}
