export default function OverviewSection({ data, onChange }) {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8">
      {/* ================= TITLE ================= */}
      <h2 className="text-xl font-semibold text-white mb-6">
        Overview
      </h2>

      {/* ================= FORM GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* First Name */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            value={data.firstName}
            onChange={(e) =>
              onChange("firstName", e.target.value)
            }
            className="w-full h-12 rounded-lg bg-[#3a3a3a] px-4
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* User Name */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">
            User Name
          </label>
          <input
            type="text"
            placeholder="User Name"
            value={data.userName}
            onChange={(e) =>
              onChange("userName", e.target.value)
            }
            className="w-full h-12 rounded-lg bg-[#3a3a3a] px-4
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Email (full width) */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) =>
              onChange("email", e.target.value)
            }
            className="w-full h-12 rounded-lg bg-[#3a3a3a] px-4
                       text-white placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Phone Number */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm text-gray-300">
            Phone number
          </label>

          <div className="flex gap-3">
            {/* Country code */}
            <select
              value={data.phoneCode}
              onChange={(e) =>
                onChange("phoneCode", e.target.value)
              }
              className="h-12 w-20 rounded-lg bg-[#3a3a3a]
                         text-white px-2
                         focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>

            {/* Phone input */}
            <input
              type="tel"
              placeholder="Phone Number"
              value={data.phone}
              onChange={(e) =>
                onChange("phone", e.target.value)
              }
              className="flex-1 h-12 rounded-lg bg-[#3a3a3a] px-4
                         text-white placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
