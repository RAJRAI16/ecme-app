import ProductRow from "./ProductRow";

export default function ProductTable({
  products,
  selectedRows,
  setSelectedRows,
}) {
  const isAllSelected =
    products.length > 0 &&
    selectedRows.length === products.length;

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(products.map((p) => p.id));
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
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px]">
        <thead>
          <tr className="text-left text-gray-400 border-b border-gray-700">
            <th className="py-4 w-10">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
              />
            </th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sales</th>
            <th className="text-right pr-2"></th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              isChecked={selectedRows.includes(product.id)}
              onSelect={handleRowSelect}
            />
          ))}

          {products.length === 0 && (
            <tr>
              <td
                colSpan="6"
                className="py-6 text-center text-gray-400"
              >
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
