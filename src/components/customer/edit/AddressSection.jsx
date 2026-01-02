export default function AddressInformation({ data, onChange }) {
  return (
    <div className="bg-[#242424] rounded-2xl p-6 md:p-8">
      <h2 className="text-lg font-semibold text-white mb-6">
        Address Information
      </h2>

      {/* Country */}
      <div className="space-y-2 mb-6">
        <label className="text-sm text-gray-400">
          Country
        </label>

        <select
          value={data.country || ""}
          onChange={(e) =>
            onChange("country", e.target.value)
          }
          className="w-full bg-[#3a3a3a] text-white rounded-xl px-4 py-3
                     outline-none focus:ring-2 focus:ring-gray-600"
        >
          <option value="">Select country</option>
          <option value="United States">United States</option>
          <option value="India">India</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
      </div>

      {/* Address */}
      <div className="space-y-2 mb-6">
        <label className="text-sm text-gray-400">
          Address
        </label>
        <input
          type="text"
          value={data.address || ""}
          onChange={(e) =>
            onChange("address", e.target.value)
          }
          className="w-full bg-[#3a3a3a] text-white rounded-xl px-4 py-3
                     outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      {/* City + Postal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-gray-400">
            City
          </label>
          <input
            type="text"
            value={data.city || ""}
            onChange={(e) =>
              onChange("city", e.target.value)
            }
            className="w-full bg-[#3a3a3a] text-white rounded-xl px-4 py-3
                       outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">
            Postal Code
          </label>
          <input
            type="text"
            value={data.postalCode || ""}
            onChange={(e) =>
              onChange("postalCode", e.target.value)
            }
            className="w-full bg-[#3a3a3a] text-white rounded-xl px-4 py-3
                       outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
