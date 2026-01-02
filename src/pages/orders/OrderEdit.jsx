import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SelectProductsSection from "../../components/order/edit/SelectProductsSection";
import CustomerDetailsSection from "../../components/order/edit/CustomerDetailsSection";
import AddressInformationSection from "../../components/order/edit/AddressInformationSection";
import PaymentSection from "../../components/order/edit/PaymentSection";

/* ================= SAFE DEFAULT ================= */
const EMPTY_ORDER = {
  id: "",
  products: [],
  firstName: "",
  userName: "",
  email: "",
  phone: "",
  country: "",
  address: "",
  city: "",
  postalCode: "",
  paymentMethod: "",
  paypalEmail: "",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
  bankName: "",
  accountNumber: "",
  total: "0.00",
};

export default function OrderEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(EMPTY_ORDER);
  const [loading, setLoading] = useState(true);

  /* ================= LOAD ORDER ================= */
  useEffect(() => {
    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const found = orders.find(
      (o) => String(o.id) === String(id)
    );

    if (!found) {
      navigate("/orders/list");
      return;
    }

    setOrder({ ...EMPTY_ORDER, ...found });
    setLoading(false);
  }, [id, navigate]);

  /* ================= COMMON CHANGE ================= */
  const handleChange = (key, value) => {
    setOrder((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /* ================= SAVE ================= */
  const handleSave = () => {
    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const updated = orders.map((o) =>
      String(o.id) === String(id) ? order : o
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(updated)
    );

    navigate("/orders/list");
  };

  if (loading) {
    return (
      <div className="p-6 text-gray-400">
        Loading order...
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-28 space-y-6 text-white">
      <h1 className="text-2xl font-semibold">
        Edit Order
      </h1>

      <SelectProductsSection
        data={order}
        onChange={handleChange}
      />

      <CustomerDetailsSection
        data={order}
        onChange={handleChange}
      />

      <AddressInformationSection
        data={order}
        onChange={handleChange}
      />

      <PaymentSection
        data={order}
        onChange={handleChange}
      />

      {/* ================= FOOTER ================= */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1c1c1c] border-t border-[#2f2f2f]">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                     h-16 flex items-center justify-between"
        >
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-white"
          >
            ← Back
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl
                       bg-blue-500 hover:bg-blue-600
                       text-white"
          >
            Save Order
          </button>
        </div>
      </div>
    </div>
  );
}
