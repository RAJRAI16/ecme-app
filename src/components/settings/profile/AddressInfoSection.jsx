export default function AddressInfoSection() {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Address information
      </h2>

      <Select label="Country" value="United States" />
      <Input label="Address" value="123 Main St" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="City" value="New York" />
        <Input label="Postal Code" value="10001" />
      </div>

      {/* SAVE */}
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600
                           px-6 py-2.5 rounded-lg
                           text-white font-medium">
          Save
        </button>
      </div>
    </div>
  );
}

function Input({ label, value }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">{label}</label>
      <input
        value={value}
        className="w-full h-12 px-4 rounded-lg
                   bg-[#3a3a3a] text-white"
      />
    </div>
  );
}

function Select({ label, value }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">{label}</label>
      <select className="w-full h-12 px-4 rounded-lg
                         bg-[#3a3a3a] text-white">
        <option>{value}</option>
      </select>
    </div>
  );
}
