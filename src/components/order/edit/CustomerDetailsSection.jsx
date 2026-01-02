export default function CustomerDetailsSection({
  data,
  onChange,
}) {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Customer details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          value={data.firstName}
          onChange={(v) =>
            onChange("firstName", v)
          }
        />
        <Input
          label="User Name"
          value={data.userName}
          onChange={(v) =>
            onChange("userName", v)
          }
        />
      </div>

      <Input
        label="Email"
        value={data.email}
        onChange={(v) =>
          onChange("email", v)
        }
      />

      <Input
        label="Phone"
        value={data.phone}
        onChange={(v) =>
          onChange("phone", v)
        }
      />
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
