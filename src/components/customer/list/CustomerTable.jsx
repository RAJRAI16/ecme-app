import CustomerRow from "./CustomerRow";

export default function CustomerTable({
  customers,
  selectedRows,
  setSelectedRows,
}) {
  const isAllSelected =
    customers.length > 0 &&
    selectedRows.length === customers.length;

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(customers.map((c) => c.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id]
    );
  };

  return (
    <div
      className="
        w-full
        overflow-x-auto
        rounded-lg
        bg-[#2f2f2f]
        scrollbar-thin
        scrollbar-thumb-gray-600
        scrollbar-track-transparent
      "
    >
      {/* IMPORTANT:
          min-w forces horizontal scroll on small screens
      */}
      <table className="min-w-[900px] w-full text-left text-sm text-gray-300">
        {/* ================= TABLE HEAD ================= */}
        <thead className="bg-[#3a3a3a] text-gray-400">
          <tr>
            <th className="px-4 py-3">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </th>

            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Spent</th>
            <th className="px-4 py-3 text-right">
              Actions
            </th>
          </tr>
        </thead>

        {/* ================= TABLE BODY ================= */}
        <tbody>
          {customers.map((customer) => (
            <CustomerRow
              key={customer.id}
              customer={customer}
              isChecked={selectedRows.includes(customer.id)}
              onSelect={handleRowSelect}
            />
          ))}

          {customers.length === 0 && (
            <tr>
              <td
                colSpan="7"
                className="px-4 py-6 text-center text-gray-400"
              >
                No customers found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
