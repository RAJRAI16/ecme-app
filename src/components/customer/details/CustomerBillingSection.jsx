import CustomerDetailsTabs from "./CustomerDetailsTabs";
import CustomerAddresses from "./CustomerAddresses";
import PaymentMethods from "./PaymentMethods";
import PurchaseHistory from "./PurchaseHistory";

export default function CustomerBillingSection({ customer }) {
  return (
    <div className="bg-[#262626] rounded-2xl p-6">
      <CustomerDetailsTabs />

      <div className="space-y-10">
        <CustomerAddresses customer={customer} />
        <PaymentMethods />
        <PurchaseHistory />
      </div>
    </div>
  );
}
