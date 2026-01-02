import { Download, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrdersHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h1 className="text-2xl font-semibold text-white">Orders</h1>

      <div className="flex gap-3">
        <button
          className="bg-[#3a3a3a] hover:bg-[#4a4a4a]
                     px-4 py-2.5 rounded-lg text-white flex gap-2"
        >
          <Download size={18} />
          Download
        </button>

        {/* ✅ ADD NEW → CREATE ORDER */}
        <Link to="/orders/create">
          <button
            className="bg-blue-500 hover:bg-blue-600
                       px-4 py-2.5 rounded-lg text-white flex gap-2"
          >
            <Plus size={18} />
            Add new
          </button>
        </Link>
      </div>
    </div>
  );
}
