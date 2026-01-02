import { useState } from "react";
import { useNavigate } from "react-router-dom";

import OverviewSection from "../../components/customer/create/OverviewSection";
import AddressSection from "../../components/customer/create/AddressSection";
import ImageSection from "../../components/customer/create/ImageSection";
import CustomerTagSection from "../../components/customer/create/CustomerTagSection";

export default function CustomerCreate() {
  const navigate = useNavigate();

  /* ================= CUSTOMER STATE ================= */
  const [customer, setCustomer] = useState({
    firstName: "",
    userName: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    country: "",
    address: "",
    city: "",
    postalCode: "",
    tags: [],
    image: null,
  });

  /* ================= COMMON CHANGE HANDLER ================= */
  const handleChange = (key, value) => {
    setCustomer((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /* ================= SAVE CUSTOMER ================= */
  const handleSave = () => {
    const oldCustomers =
      JSON.parse(localStorage.getItem("customers")) || [];

    const newCustomer = {
      id: Date.now(),
      ...customer,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "customers",
      JSON.stringify([...oldCustomers, newCustomer])
    );

    navigate("/customer/list");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-24">
      {/* ================= PAGE TITLE ================= */}
      <h1 className="text-2xl font-semibold text-white mb-6">
        Create customer
      </h1>

      {/* ================= PAGE LAYOUT ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* LEFT COLUMN */}
        <div className="xl:col-span-8 space-y-6">
          <OverviewSection
            data={customer}
            onChange={handleChange}
          />

          <AddressSection
            data={customer}
            onChange={handleChange}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="xl:col-span-4 space-y-6">
          <ImageSection
            image={customer.image}
            onChange={(img) => handleChange("image", img)}
          />

          <CustomerTagSection
            value={customer.tags}
            onChange={(tags) => handleChange("tags", tags)}
          />
        </div>
      </div>

      {/* ================= FOOTER ================= */}
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
            <button className="px-5 py-2 rounded-xl border border-gray-600 text-gray-300">
              Delete
            </button>

            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-blue-500 text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
