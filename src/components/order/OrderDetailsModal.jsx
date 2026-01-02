import { X } from "lucide-react";

export default function OrderDetailsModal({
  order,
  onClose,
}) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />

      {/* MODAL */}
      <div
        className="relative bg-[#262626] w-full max-w-2xl
                   rounded-2xl p-6 text-white z-10"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            Order Details
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="space-y-4 text-sm">
          <Info label="Order ID" value={`#${order.id}`} />
          <Info
            label="Customer"
            value={`${order.firstName} ${order.userName}`}
          />
          <Info
            label="Payment Method"
            value={order.paymentMethod}
          />
          <Info
            label="Total Amount"
            value={`$${order.total}`}
          />

          {/* CARD */}
          {order.paymentMethod === "card" && (
            <>
              <Info
                label="Card Number"
                value={`•••• ${order.cardNumber?.slice(-4)}`}
              />
              <Info label="Expiry" value={order.expiry} />
            </>
          )}

          {/* PAYPAL */}
          {order.paymentMethod === "paypal" && (
            <Info
              label="Paypal Email"
              value={order.paypalEmail}
            />
          )}

          {/* BANK */}
          {order.paymentMethod === "bank" && (
            <>
              <Info
                label="Account Name"
                value={order.accountName}
              />
              <Info
                label="Account Number"
                value={order.accountNumber}
              />
              <Info label="IFSC" value={order.ifsc} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* SMALL REUSABLE */
function Info({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-gray-400">
        {label}
      </span>
      <span className="font-medium text-white">
        {value || "—"}
      </span>
    </div>
  );
}
