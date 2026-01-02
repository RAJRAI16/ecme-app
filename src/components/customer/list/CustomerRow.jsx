import { Eye, Pencil } from "lucide-react";
import { Link } from "react-router-dom";

export default function CustomerRow({
  customer,
  isChecked,
  onSelect,
}) {
  const {
    id,
    firstName,
    userName,
    email,
    country,
    image,
  } = customer;

  const initials =
    `${firstName?.[0] || ""}${userName?.[0] || ""}`.toUpperCase();

  return (
    <tr className="border-b border-gray-700 last:border-none">
      {/* CHECKBOX */}
      <td className="px-4 py-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onSelect(id)}
        />
      </td>

      {/* NAME */}
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          {image ? (
            <img
              src={image}
              alt="avatar"
              className="w-9 h-9 rounded-full object-cover"
            />
          ) : (
            <div className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center text-sm">
              {initials || "NA"}
            </div>
          )}

          <span className="font-medium text-white">
            {firstName} {userName}
          </span>
        </div>
      </td>

      {/* EMAIL */}
      <td className="px-4 py-3 text-gray-400">
        {email}
      </td>

      {/* LOCATION */}
      <td className="px-4 py-3">
        {country || "-"}
      </td>

      {/* STATUS */}
      <td className="px-4 py-3">
        <span className="px-3 py-1 rounded-full text-xs bg-green-600/20 text-green-400">
          Active
        </span>
      </td>

      {/* SPENT */}
      <td className="px-4 py-3 font-medium text-white">
        $0.00
      </td>

      {/* ACTIONS */}
      <td className="px-4 py-3 text-right">
        <div className="flex items-center justify-end gap-3">
          <Link
            to={`/customer/details/${id}`}
            className="hover:text-blue-400 transition"
          >
            <Eye size={18} />
          </Link>

          <Link
            to={`/customer/edit/${id}`}
            className="hover:text-yellow-400 transition"
          >
            <Pencil size={18} />
          </Link>
        </div>
      </td>
    </tr>
  );
}
