export default function AddressInformationSection({
  data,
  onChange,
}) {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Address Information
      </h2>

      <Input
        label="Country"
        value={data.country}
        onChange={(v) =>
          onChange("country", v)
        }
      />

      <Input
        label="Address"
        value={data.address}
        onChange={(v) =>
          onChange("address", v)
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="City"
          value={data.city}
          onChange={(v) =>
            onChange("city", v)
          }
        />
        <Input
          label="Postal Code"
          value={data.postalCode}
          onChange={(v) =>
            onChange("postalCode", v)
          }
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
        value={value || ""}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full h-12 px-4 rounded-lg
                   bg-[#3a3a3a] text-white"
      />
    </div>
  );
}
