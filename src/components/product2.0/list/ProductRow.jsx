import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductRow({
  product,
  isChecked,
  onSelect,
}) {
  const {
    id,
    name,
    code,
    price,
    image,
  } = product;

  return (
    <tr className="border-b border-gray-700">
      {/* CHECKBOX */}
      <td className="py-5">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onSelect(id)}
        />
      </td>

      {/* PRODUCT */}
      <td className="py-5 flex items-center gap-4">
        {image ? (
          <img
            src={image}
            className="w-14 h-14 rounded-lg object-cover"
          />
        ) : (
          <div className="w-14 h-14 bg-gray-600 rounded-lg" />
        )}

        <div>
          <p className="text-white font-medium">
            {name || "Unnamed product"}
          </p>
          <p className="text-gray-400 text-sm">
            ID: {code || "-"}
          </p>
        </div>
      </td>

      {/* PRICE */}
      <td className="text-white">
        ${price || "0.00"}
      </td>

      {/* QTY (dummy for now) */}
      <td className="text-white">0</td>

      {/* SALES (dummy UI) */}
      <td>
        <p className="text-gray-300 text-sm mb-1">
          0 Sales
        </p>
        <div className="w-32 h-2 bg-gray-600 rounded">
          <div className="h-2 bg-green-500 rounded w-[10%]" />
        </div>
      </td>

      {/* ACTIONS */}
      <td className="text-right space-x-3">
        <Link
          to={`/product/edit/${id}`}
          className="text-gray-400 hover:text-white"
        >
          <Pencil size={18} />
        </Link>

        {/* <button className="text-gray-400 hover:text-red-500">
          <Trash2 size={18} />
        </button> */}
      </td>
    </tr>
  );
}
