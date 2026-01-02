import { useEffect, useState } from "react";

import ProductHeader from "../../components/product2.0/list/ProductHeader";
import ProductFilters from "../../components/product2.0/list/ProductFilters";
import ProductTable from "../../components/product2.0/list/ProductTable";
import ProductPagination from "../../components/product2.0/list/ProductPagination";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("products")) || [];
    setProducts(data);
  }, []);

  /* ================= DELETE SELECTED ================= */
  const handleDeleteSelected = () => {
    if (selectedRows.length === 0) return;

    if (!window.confirm("Delete selected products?")) return;

    const updated = products.filter(
      (p) => !selectedRows.includes(p.id)
    );

    setProducts(updated);
    setSelectedRows([]);

    localStorage.setItem(
      "products",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-10">
      <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-6">

        <ProductHeader
          selectedCount={selectedRows.length}
          onDeleteSelected={handleDeleteSelected}
        />

        <ProductFilters />

        <ProductTable
          products={products}
          selectedRows={selectedRows}
          setSelectedRows={setSelectedRows}
        />

        <ProductPagination />

      </div>
    </div>
  );
}
