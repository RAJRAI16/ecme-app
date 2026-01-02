import { Search } from "lucide-react";

export default function SelectProductsSection() {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Select products
      </h2>

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            placeholder="Search product"
            className="w-full h-12 pl-11 pr-4 rounded-lg
                       bg-[#3a3a3a] text-white placeholder-gray-400"
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-600
                           px-6 py-3 rounded-lg text-white font-medium">
          Browse products
        </button>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-12 text-gray-400 text-sm border-b border-gray-700 pb-3">
        <div className="col-span-6">PRODUCT</div>
        <div className="col-span-3">PRICE</div>
        <div className="col-span-3">QUANTITY</div>
      </div>

      {/* Empty state */}
      <div className="text-center text-gray-400 py-12">
        No product selected!
      </div>

      <div className="text-right text-lg font-semibold text-white">
        Total: $0.00
      </div>
    </div>
  );
}
