export default function RecentOrders() {
  const orders = [
    {
      id: "#92627",
      status: "Paid",
      statusColor: "text-green-400",
      date: "09/07/2022",
      customer: "Tara Fletcher",
      amount: "$279.00",
      active: false,
    },
    {
      id: "#92509",
      status: "Pending",
      statusColor: "text-yellow-400",
      date: "26/06/2022",
      customer: "Joyce Freeman",
      amount: "$831.00",
      active: false,
    },
    {
      id: "#91631",
      status: "Paid",
      statusColor: "text-green-400",
      date: "18/06/2022",
      customer: "Brittany Hale",
      amount: "$142.00",
      active: true,
    },
    {
      id: "#90963",
      status: "Paid",
      statusColor: "text-green-400",
      date: "11/06/2022",
      customer: "Luke Cook",
      amount: "$232.00",
      active: false,
    },
    {
      id: "#89332",
      status: "Pending",
      statusColor: "text-yellow-400",
      date: "02/06/2022",
      customer: "Eileen Horton",
      amount: "$597.00",
      active: false,
    },
    {
      id: "#89107",
      status: "Failed",
      statusColor: "text-red-400",
      date: "16/04/2022",
      customer: "Frederick Adams",
      amount: "$72.00",
      active: false,
    },
    {
      id: "#89021",
      status: "Paid",
      statusColor: "text-green-400",
      date: "13/04/2022",
      customer: "Lee Wheeler",
      amount: "$110.00",
      active: false,
    },
  ];

  return (
    <div className="bg-[#1f1f1f] rounded-2xl p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent Orders</h3>
        <button className="bg-[#262626] px-4 py-2 rounded-lg text-sm hover:bg-[#303030] transition">
          View Orders
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-gray-700">
            <tr>
              <th className="text-left py-3">ORDER</th>
              <th className="text-left py-3">STATUS</th>
              <th className="text-left py-3">DATE</th>
              <th className="text-left py-3">CUSTOMER</th>
              <th className="text-right py-3">AMOUNT SPENT</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, i) => (
              <tr
                key={i}
                className={`border-b border-gray-800 transition ${
                  order.active ? "bg-[#262626]" : "hover:bg-[#262626]"
                }`}
              >
                <td className="py-4 text-gray-300">{order.id}</td>

                <td className="py-4">
                  <span className={`flex items-center gap-2 ${order.statusColor}`}>
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {order.status}
                  </span>
                </td>

                <td className="py-4 text-gray-400">{order.date}</td>
                <td className="py-4 text-gray-400">{order.customer}</td>
                <td className="py-4 text-right font-semibold">
                  {order.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
