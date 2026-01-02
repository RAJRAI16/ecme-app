export default function AddressSection({ data, onChange }) {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8">
      {/* ================= TITLE ================= */}
      <h2 className="text-xl font-semibold text-white mb-6">
        Address Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Country (full width) */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm text-gray-300">
            Country
          </label>
          <select
            value={data.country}
            onChange={(e) =>
              onChange("country", e.target.value)
            }
            className="w-full h-12 rounded-lg bg-[#3a3a3a] px-4
                       text-white
                       focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
        </div>

        {/* Address (full width) */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm text-gray-300">
            Address
          </label>
          <input
            type="text"
            placeholder="Address"
            value={data.address}
            onChange={(e) =>
              onChange("address", e.target.value)
            }
            className="w-full h-12 rounded-lg bg-[#3a3a3a] px-4
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">
            City
          </label>
          <input
            type="text"
            placeholder="City"
            value={data.city}
            onChange={(e) =>
              onChange("city", e.target.value)
            }
            className="w-full h-12 rounded-lg bg-[#3a3a3a] px-4
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Postal Code */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">
            Postal Code
          </label>
          <input
            type="text"
            placeholder="Postal Code"
            value={data.postalCode}
            onChange={(e) =>
              onChange("postalCode", e.target.value)
            }
            className="w-full h-12 rounded-lg bg-[#3a3a3a] px-4
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

      </div>
    </div>
  );
}
