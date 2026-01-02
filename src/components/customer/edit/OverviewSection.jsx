export default function CustomerOverview({ data, onChange }) {
  return (
    <div className="space-y-4">
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold text-white">
        Edit customer
      </h1>

      {/* CARD */}
      <div className="bg-[#242424] rounded-2xl p-6 md:p-8">
        <h2 className="text-lg font-semibold text-white mb-6">
          Overview
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400">
              First Name
            </label>
            <input
              type="text"
              value={data.firstName || ""}
              onChange={(e) =>
                onChange("firstName", e.target.value)
              }
              className="w-full bg-[#3a3a3a] text-white rounded-xl px-4 py-3
                         outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* User Name */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400">
              User Name
            </label>
            <input
              type="text"
              value={data.userName || ""}
              onChange={(e) =>
                onChange("userName", e.target.value)
              }
              className="w-full bg-[#3a3a3a] text-white rounded-xl px-4 py-3
                         outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-6 space-y-2">
          <label className="text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            value={data.email || ""}
            onChange={(e) =>
              onChange("email", e.target.value)
            }
            className="w-full bg-[#3a3a3a] text-white rounded-xl px-4 py-3
                       outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Phone */}
        <div className="mt-6 space-y-2">
          <label className="text-sm text-gray-400">
            Phone number
          </label>

          <div className="flex gap-4">
            {/* Country Code */}
            <select
              value={data.phoneCode || "+1"}
              onChange={(e) =>
                onChange("phoneCode", e.target.value)
              }
              className="bg-[#3a3a3a] text-white rounded-xl px-4 py-3 w-32
                         outline-none focus:ring-2 focus:ring-gray-600"
            >
              <option value="+1">+1</option>
              <option value="+91">+91</option>
              <option value="+44">+44</option>
            </select>

            {/* Phone Input */}
            <input
              type="text"
              value={data.phone || ""}
              onChange={(e) =>
                onChange("phone", e.target.value)
              }
              className="flex-1 bg-[#3a3a3a] text-white rounded-xl px-4 py-3
                         outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
