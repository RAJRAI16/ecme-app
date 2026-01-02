import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SelectProductsSection from "../../components/order/create/SelectProductsSection";
import CustomerDetailsSection from "../../components/order/create/CustomerDetailsSection";
import AddressInformationSection from "../../components/order/create/AddressInformationSection";
import PaymentSection from "../../components/order/create/PaymentSection";

export default function OrderCreate() {
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    id: Date.now(),

    products: [],
    total: 0,

    firstName: "",
    userName: "",
    email: "",
    phoneCode: "+1",
    phone: "",

    country: "",
    address: "",
    city: "",
    postalCode: "",

    paymentMethod: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (key, value) => {
    setOrder((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...orders, order])
    );

    navigate("/orders/list");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-28 space-y-6 text-white">
      <h1 className="text-2xl font-semibold">
        Create order
      </h1>

      <SelectProductsSection
        products={order.products}
        total={order.total}
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

      {/* FOOTER */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1c1c1c] border-t border-[#2f2f2f]">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16
                     flex items-center justify-between"
        >
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-white"
          >
            ← Back
          </button>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-xl border border-gray-600">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-blue-500"
            >
              Save Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
