import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import OrderHeader from "../../components/order/list/OrderHeader";
import OrderFilters from "../../components/order/list/OrderFilters";
import OrderTable from "../../components/order/list/OrderTable";
import OrderPagination from "../../components/order/list/OrderPagination";
import OrderDetailsModal from "../../components/order/OrderDetailsModal";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  /* DELETE */
  const handleDelete = (id) => {
    const updated = orders.filter(
      (o) => o.id !== id
    );
    setOrders(updated);
    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );
  };

  /* EDIT */
  const handleEdit = (id) => {
    navigate(`/orders/edit/${id}`);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-10">
      <div className="bg-[#262626] rounded-2xl p-4 sm:p-6 space-y-6">
        <OrderHeader />
        <OrderFilters />

        {/* ✅ TABLE WITH SCROLL */}
        <OrderTable
          orders={orders}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onView={(order) =>
            setSelectedOrder(order)
          }
        />

        <OrderPagination />
      </div>

      {/* DETAILS MODAL */}
      <OrderDetailsModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </div>
  );
}
