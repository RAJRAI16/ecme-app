export default function BasicInfoSection({ data, onChange }) {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Basic Information
      </h2>

      <Input
        label="Product name"
        value={data.name}
        onChange={(v) => onChange("name", v)}
      />

      <Input
        label="Product code"
        value={data.code}
        onChange={(v) => onChange("code", v)}
      />

      {/* DESCRIPTION */}
      <div className="space-y-2">
        <label className="text-sm text-gray-300">
          Description
        </label>
        <textarea
          rows="4"
          value={data.description}
          onChange={(e) =>
            onChange("description", e.target.value)
          }
          className="w-full bg-[#3a3a3a] rounded-lg p-3
                     text-white outline-none resize-none"
        />
      </div>
    </div>
  );
}

function Input({ label, value, onChange }) {
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
