export default function CustomerAddresses({ customer }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-6">
        Addresses
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Address title="Billing Address" customer={customer} />
        <Address title="Delivery Address" customer={customer} />
      </div>
    </div>
  );
}

function Address({ title, customer }) {
  return (
    <div className="space-y-1 text-gray-300">
      <h4 className="text-white font-medium mb-2">
        {title}
      </h4>
      <p>{customer.address || "-"}</p>
      <p>{customer.city || "-"}</p>
      <p>{customer.postalCode || "-"}</p>
      <p>{customer.country || "-"}</p>
    </div>
  );
}
