import { Plus } from "lucide-react";

export default function ProfileInfoSection() {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Personal information
      </h2>

      {/* AVATAR */}
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/150"
          className="w-20 h-20 rounded-full object-cover"
        />

        <button className="flex items-center gap-2 bg-blue-500
                           hover:bg-blue-600 px-4 py-2.5
                           rounded-lg text-white">
          <Plus size={18} />
          Upload Image
        </button>

        <button className="bg-[#3a3a3a] hover:bg-[#4a4a4a]
                           px-4 py-2.5 rounded-lg text-white">
          Remove
        </button>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="First name" value="Angelina" />
        <Input label="User name" value="Gotelli" />
      </div>

      <Input label="Email" value="carolyn_h@hotmail.com" />

      {/* PHONE */}
      <div className="space-y-2">
        <label className="text-sm text-gray-300">Phone number</label>
        <div className="flex gap-3">
          <select className="h-12 w-24 bg-[#3a3a3a] rounded-lg px-3 text-white">
            <option>+1</option>
          </select>
          <input
            value="121231234"
            className="flex-1 h-12 bg-[#3a3a3a]
                       rounded-lg px-4 text-white"
          />
        </div>
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
