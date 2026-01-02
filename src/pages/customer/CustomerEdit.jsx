import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

/* ✅ IMPORTS MUST MATCH FILE NAMES EXACTLY */
import OverviewSection from "../../components/customer/edit/OverviewSection";
import AddressSection from "../../components/customer/edit/AddressSection";
import ImageSection from "../../components/customer/edit/ImageSection";
import CustomTagSection from "../../components/customer/edit/CustomTagSection";
import AccountSection from "../../components/customer/edit/AccountSection";

export default function CustomerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  /* ================= CUSTOMER STATE ================= */
  const [customer, setCustomer] = useState(null);

  /* ================= LOAD CUSTOMER ================= */
  useEffect(() => {
    const customers =
      JSON.parse(localStorage.getItem("customers")) || [];

    const foundCustomer = customers.find(
      (c) => String(c.id) === String(id)
    );

    if (!foundCustomer) {
      navigate("/customer/list");
      return;
    }

    setCustomer(foundCustomer);
  }, [id, navigate]);

  /* ================= COMMON CHANGE HANDLER ================= */
  const handleChange = (key, value) => {
    setCustomer((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /* ================= SAVE UPDATE ================= */
  const handleSave = () => {
    const customers =
      JSON.parse(localStorage.getItem("customers")) || [];

    const updatedCustomers = customers.map((c) =>
      String(c.id) === String(id) ? customer : c
    );

    localStorage.setItem(
      "customers",
      JSON.stringify(updatedCustomers)
    );

    navigate("/customer/list");
  };

  /* ================= LOADING ================= */
  if (!customer) {
    return (
      <div className="p-6 text-gray-400">
        Loading customer...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="px-4 sm:px-6 lg:px-8 pb-28">
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
              onChange={(img) =>
                handleChange("image", img)
              }
            />

            <CustomTagSection
              value={customer.tags || []}
              onChange={(tags) =>
                handleChange("tags", tags)
              }
            />

            <AccountSection
              data={customer}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

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
            <button
              className="px-5 py-2 rounded-xl border border-gray-600 text-gray-300"
            >
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
