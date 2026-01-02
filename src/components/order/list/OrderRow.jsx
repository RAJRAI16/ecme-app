import { Eye, Trash2, Pencil } from "lucide-react";

export default function OrderRow({
  order,
  onDelete,
  onView,
  onEdit,
}) {
  const {
    id,
    firstName,
    userName,
    paymentMethod,
    cardNumber,
    total,
  } = order;

  const date = new Date(id).toLocaleDateString();

  const renderPayment = () => {
    if (paymentMethod === "card") {
      return (
        <span className="text-blue-400 font-medium">
          Card •••• {cardNumber?.slice(-4) || "----"}
        </span>
      );
    }
    if (paymentMethod === "paypal") {
      return (
        <span className="text-yellow-400 font-medium">
          Paypal
        </span>
      );
    }
    if (paymentMethod === "bank") {
      return (
        <span className="text-green-400 font-medium">
          Bank Transfer
        </span>
      );
    }
    return <span className="text-gray-400">—</span>;
  };

  return (
    <tr className="border-b border-gray-700 text-white whitespace-nowrap">
      <td className="py-5 px-2 font-medium">
        #{String(id).slice(-5)}
      </td>

      <td className="px-2 text-gray-300">{date}</td>

      <td className="px-2 text-gray-300">
        {firstName} {userName}
      </td>

      <td className="px-2">
        <span className="bg-green-500/20 text-green-400
                         px-3 py-1 rounded-full text-sm">
          Paid
        </span>
      </td>

      <td className="px-2">{renderPayment()}</td>

      <td className="px-2 font-semibold">
        ${total || "0.00"}
      </td>

      {/* ACTIONS */}
      <td className="px-2">
        <div className="flex items-center justify-end gap-4">
          {/* VIEW */}
          <button
            onClick={() => onView(order)}
            className="text-gray-400 hover:text-white transition"
          >
            <Eye size={18} />
          </button>

          {/* EDIT */}
          <button
            onClick={() => onEdit(id)}
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <Pencil size={18} />
          </button>

          {/* DELETE */}
          <button
            onClick={() => onDelete(id)}
            className="text-gray-400 hover:text-red-500 transition"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}
