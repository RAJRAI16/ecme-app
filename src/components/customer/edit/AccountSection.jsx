export default function AccountSection({ data, onChange }) {
  const banned = data.banned ?? false;
  const verified = data.verified ?? true;

  return (
    <div className="bg-[#242424] rounded-2xl p-6 md:p-8">
      <h2 className="text-lg font-semibold text-white mb-6">
        Account
      </h2>

      {/* BANNED */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-white font-medium">Banned</p>
          <p className="text-sm text-gray-400">
            Disable this account
          </p>
        </div>

        <button
          onClick={() => onChange("banned", !banned)}
          className={`relative w-12 h-7 rounded-full transition-colors
          ${banned ? "bg-blue-500" : "bg-[#3a3a3a]"}`}
        >
          <span
            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full
            transition-transform
            ${banned ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
      </div>

      {/* VERIFIED */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white font-medium">
            Account Verified
          </p>
          <p className="text-sm text-gray-400 max-w-md">
            Disabling sends a verification request to the customer.
          </p>
        </div>

        <button
          onClick={() => onChange("verified", !verified)}
          className={`relative w-12 h-7 rounded-full transition-colors
          ${verified ? "bg-blue-500" : "bg-[#3a3a3a]"}`}
        >
          <span
            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full
            transition-transform
            ${verified ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
      </div>
    </div>
  );
}
