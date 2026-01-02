import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CustomerProfileCard from "../../components/customer/details/CustomerProfileCard";
import CustomerBillingSection from "../../components/customer/details/CustomerBillingSection";

export default function CustomerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const customers =
      JSON.parse(localStorage.getItem("customers")) || [];

    const found = customers.find(
      (c) => String(c.id) === String(id)
    );

    if (!found) {
      navigate("/customer/list");
      return;
    }

    setCustomer(found);
  }, [id, navigate]);

  if (!customer) {
    return (
      <div className="p-6 text-gray-400">
        Loading customer...
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-10">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="xl:col-span-4">
          <CustomerProfileCard customer={customer} />
        </div>

        {/* RIGHT */}
        <div className="xl:col-span-8">
          <CustomerBillingSection customer={customer} />
        </div>
      </div>
    </div>
  );
}
