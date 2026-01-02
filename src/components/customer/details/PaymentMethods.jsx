export default function PaymentMethods() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-6">
        Payment Methods
      </h3>

      <PaymentCard
        brand="VISA"
        number="0392"
        expiry="Expired Dec 2025"
        primary
      />

      <PaymentCard
        brand="MASTERCARD"
        number="8461"
        expiry="Expired Jun 2025"
      />
    </div>
  );
}

function PaymentCard({ brand, number, expiry, primary }) {
  return (
    <div className="flex items-center justify-between
                    py-4 border-b border-gray-700">
      <div>
        <p className="text-white font-medium">
          Angelina Gotelli •••• {number}
          {primary && (
            <span className="ml-2 bg-blue-500/20 text-blue-400
                             text-xs px-2 py-0.5 rounded">
              Primary
            </span>
          )}
        </p>
        <p className="text-gray-400 text-sm">{expiry}</p>
      </div>

      <button className="bg-[#3a3a3a] hover:bg-[#4a4a4a]
                         px-4 py-2 rounded-lg text-sm text-white">
        Edit
      </button>
    </div>
  );
}
