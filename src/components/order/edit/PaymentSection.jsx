export default function PaymentSection({ data, onChange }) {
  const method = data.paymentMethod;

  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Payment
      </h2>

      {/* PAYMENT METHOD */}
      <Select
        label="Payment method"
        value={method}
        onChange={(v) => onChange("paymentMethod", v)}
      >
        <option value="">Select...</option>
        <option value="paypal">Paypal</option>
        <option value="card">Credit / Debit Card</option>
        <option value="bank">Bank Transfer</option>
      </Select>

      {/* ================= PAYPAL ================= */}
      {method === "paypal" && (
        <Input
          label="Paypal Email"
          value={data.paypalEmail || ""}
          onChange={(v) =>
            onChange("paypalEmail", v)
          }
        />
      )}

      {/* ================= CARD ================= */}
      {method === "card" && (
        <>
          <Input
            label="Card Holder Name"
            value={data.cardName || ""}
            onChange={(v) =>
              onChange("cardName", v)
            }
          />

          <Input
            label="Card Number"
            value={data.cardNumber || ""}
            onChange={(v) =>
              onChange("cardNumber", v)
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Expiry Date"
              value={data.expiry || ""}
              onChange={(v) =>
                onChange("expiry", v)
              }
            />
            <Input
              label="CVV"
              value={data.cvv || ""}
              onChange={(v) =>
                onChange("cvv", v)
              }
            />
          </div>
        </>
      )}

      {/* ================= BANK ================= */}
      {method === "bank" && (
        <>
          <Input
            label="Bank Name"
            value={data.bankName || ""}
            onChange={(v) =>
              onChange("bankName", v)
            }
          />
          <Input
            label="Account Number"
            value={data.accountNumber || ""}
            onChange={(v) =>
              onChange("accountNumber", v)
            }
          />
        </>
      )}
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

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
                   bg-[#3a3a3a] text-white
                   outline-none"
      />
    </div>
  );
}

function Select({ label, value, onChange, children }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 px-4 rounded-lg
                   bg-[#3a3a3a] text-white
                   outline-none"
      >
        {children}
      </select>
    </div>
  );
}
