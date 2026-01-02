export default function AttributeSection({ data, onChange }) {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Attribute
      </h2>

      <Select
        label="Category"
        value={data.category}
        onChange={(v) => onChange("category", v)}
      />

      <Input
        label="Tags"
        value={data.tags}
        onChange={(v) => onChange("tags", v)}
      />

      <Input
        label="Brand"
        value={data.brand}
        onChange={(v) => onChange("brand", v)}
      />
    </div>
  );
}

function Select({ label, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 px-4 rounded-lg
                   bg-[#3a3a3a] text-white"
      >
        <option value="">Select...</option>
        <option>Electronics</option>
        <option>Furniture</option>
        <option>Fashion</option>
      </select>
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 px-4 rounded-lg
                   bg-[#3a3a3a] text-white"
      />
    </div>
  );
}
