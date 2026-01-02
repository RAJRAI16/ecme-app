import { useEffect, useState } from "react";

import CustomerHeader from "../../components/customer/list/CustomerHeader";
import CustomerFilters from "../../components/customer/list/CustomerFilters";
import CustomerTable from "../../components/customer/list/CustomerTable";
import CustomerPagination from "../../components/customer/list/CustomerPagination";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("customers")) || [];
    setCustomers(data);
  }, []);

  /* ================= DELETE SELECTED ================= */
  const handleDeleteSelected = () => {
    if (selectedRows.length === 0) return;

    if (!window.confirm("Delete selected customers?")) return;

    const updated = customers.filter(
      (c) => !selectedRows.includes(c.id)
    );

    setCustomers(updated);
    setSelectedRows([]);

    localStorage.setItem(
      "customers",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="px-6 py-6 space-y-6">
      <CustomerHeader
        selectedCount={selectedRows.length}
        onDeleteSelected={handleDeleteSelected}
      />

      <CustomerFilters />

      <CustomerTable
        customers={customers}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
      />

      <CustomerPagination />
    </div>
  );
}
