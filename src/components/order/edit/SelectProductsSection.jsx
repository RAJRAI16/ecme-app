import { Search, Minus, Plus } from "lucide-react";

export default function SelectProductsSection() {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Select products
      </h2>

      {/* SEARCH */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search product"
            className="w-full h-12 pl-11 pr-4 rounded-lg
                       bg-[#3a3a3a] text-white placeholder-gray-400"
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-600
                           px-6 py-2.5 rounded-lg
                           text-white font-medium">
          Browse products
        </button>
      </div>

      {/* PRODUCTS */}
      <ProductRow name="Snövalla" price="504.00" qty={2} />
      <ProductRow name="Maneki Neko Poster" price="389.00" qty={1} />
      <ProductRow name="Ektöra" price="869.00" qty={1} />

      <div className="flex justify-end text-lg font-semibold text-white">
        Total: $1,762.00
      </div>
    </div>
  );
}

function ProductRow({ name, price, qty }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center
                    justify-between gap-4 border-b border-gray-700 py-4">
      <div className="flex items-center gap-4">
        <img
          src="https://via.placeholder.com/48"
          className="w-12 h-12 rounded-lg"
        />
        <div>
          <p className="text-white font-medium">{name}</p>
          <p className="text-gray-400 text-sm">ID: 098359NT</p>
        </div>
      </div>

      <p className="text-white font-medium">${price}</p>

      <div className="flex items-center gap-3">
        <button className="w-9 h-9 bg-[#3a3a3a] rounded-lg">
          <Minus size={16} />
        </button>
        <span className="text-white">{qty}</span>
        <button className="w-9 h-9 bg-[#3a3a3a] rounded-lg">
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
