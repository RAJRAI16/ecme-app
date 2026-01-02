export default function CustomerDetailsSection({ data, onChange }) {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Customer details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          value={data.firstName}
          onChange={(v) => onChange("firstName", v)}
        />
        <Input
          label="last Name"
          value={data.userName}
          onChange={(v) => onChange("userName", v)}
        />
      </div>

      <Input
        label="Email"
        value={data.email}
        onChange={(v) => onChange("email", v)}
      />

      <div className="space-y-2">
        <label className="text-sm text-gray-300">
          Phone number
        </label>
        <div className="flex gap-3">
          <select
            value={data.phoneCode}
            onChange={(e) =>
              onChange("phoneCode", e.target.value)
            }
            className="w-20 h-12 bg-[#3a3a3a] rounded-lg text-white"
          >
            <option>+1</option>
            <option>+91</option>
          </select>

          <input
            value={data.phone}
            onChange={(e) =>
              onChange("phone", e.target.value)
            }
            className="flex-1 h-12 bg-[#3a3a3a]
                       rounded-lg px-4 text-white"
          />
        </div>
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
                   bg-[#3a3a3a] text-white"
      />
    </div>
  );
}
