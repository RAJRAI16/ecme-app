export default function PricingSection({ data, onChange }) {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Pricing
      </h2>

      <PriceInput
        label="Price"
        value={data.price}
        onChange={(v) => onChange("price", v)}
      />

      <PriceInput
        label="Cost price"
        value={data.costPrice}
        onChange={(v) => onChange("costPrice", v)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PriceInput
          label="Bulk discount price"
          value={data.bulkPrice}
          onChange={(v) => onChange("bulkPrice", v)}
        />
        <NumberInput
          label="Tax rate (%)"
          value={data.taxRate}
          onChange={(v) => onChange("taxRate", v)}
        />
      </div>
    </div>
  );
}

function PriceInput({ label, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">
        {label}
      </label>
      <div className="flex items-center h-12 bg-[#3a3a3a] rounded-lg px-4">
        <span className="text-gray-400 mr-2">$</span>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent w-full text-white outline-none"
        />
      </div>
    </div>
  );
}

function NumberInput({ label, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 px-4 rounded-lg
                   bg-[#3a3a3a] text-white outline-none"
      />
    </div>
  );
}
