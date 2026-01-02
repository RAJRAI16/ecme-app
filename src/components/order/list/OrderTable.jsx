import OrderRow from "./OrderRow";

export default function OrderTable({
  orders,
  onDelete,
  onView,
  onEdit,
}) {
  return (
    <div
      className="
        w-full
        overflow-x-auto
        scrollbar-thin
        scrollbar-thumb-gray-600
        scrollbar-track-transparent
      "
    >
      <table className="w-full min-w-[1100px]">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700 text-left whitespace-nowrap">
            <th className="py-4 px-2">Order</th>
            <th className="px-2">Date</th>
            <th className="px-2">Customer</th>
            <th className="px-2">Status</th>
            <th className="px-2">Payment</th>
            <th className="px-2">Total</th>
            <th className="px-2 text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <OrderRow
              key={order.id}
              order={order}
              onDelete={onDelete}
              onEdit={onEdit}
              onView={onView}
            />
          ))}

          {orders.length === 0 && (
            <tr>
              <td
                colSpan="7"
                className="py-10 text-center text-gray-400"
              >
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
