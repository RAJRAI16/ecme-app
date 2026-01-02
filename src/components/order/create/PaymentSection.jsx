export default function PaymentSection({ data, onChange }) {
  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">
      <h2 className="text-xl font-semibold text-white">
        Payment
      </h2>

      {/* PAYMENT METHOD */}
      <Select
        label="Payment method"
        value={data.paymentMethod}
        onChange={(v) =>
          onChange("paymentMethod", v)
        }
      >
        <option value="">Select...</option>
        <option value="card">Credit / Debit Card</option>
        <option value="paypal">Paypal</option>
        <option value="bank">Bank Transfer</option>
      </Select>

      {/* ================= CARD ================= */}
      {data.paymentMethod === "card" && (
        <>
          <Input
            label="Card holder name"
            value={data.cardName}
            onChange={(v) =>
              onChange("cardName", v)
            }
          />

          <Input
            label="Card number"
            value={data.cardNumber}
            onChange={(v) =>
              onChange("cardNumber", v)
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Expiration date"
              placeholder="MM/YY"
              value={data.expiry}
              onChange={(v) =>
                onChange("expiry", v)
              }
            />
            <Input
              label="CVV"
              value={data.cvv}
              onChange={(v) =>
                onChange("cvv", v)
              }
            />
          </div>
        </>
      )}

      {/* ================= PAYPAL ================= */}
      {data.paymentMethod === "paypal" && (
        <Input
          label="Paypal email"
          value={data.paypalEmail}
          onChange={(v) =>
            onChange("paypalEmail", v)
          }
        />
      )}

      {/* ================= BANK ================= */}
      {data.paymentMethod === "bank" && (
        <>
          <Input
            label="Account holder name"
            value={data.accountName}
            onChange={(v) =>
              onChange("accountName", v)
            }
          />

          <Input
            label="Account number"
            value={data.accountNumber}
            onChange={(v) =>
              onChange("accountNumber", v)
            }
          />

          <Input
            label="IFSC / Swift code"
            value={data.ifsc}
            onChange={(v) =>
              onChange("ifsc", v)
            }
          />
        </>
      )}
    </div>
  );
}

/* ================= REUSABLE INPUT ================= */

function Input({
  label,
  value,
  onChange,
  placeholder = "",
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">
        {label}
      </label>
      <input
        value={value || ""}
        placeholder={placeholder}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full h-12 px-4 rounded-lg
                   bg-[#3a3a3a] text-white
                   placeholder-gray-400
                   focus:outline-none"
      />
    </div>
  );
}

/* ================= SELECT ================= */

function Select({
  label,
  value,
  onChange,
  children,
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full h-12 px-4 rounded-lg
                   bg-[#3a3a3a] text-white
                   focus:outline-none"
      >
        {children}
      </select>
    </div>
  );
}
