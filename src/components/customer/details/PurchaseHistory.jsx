const DATA = [
  { status: "Pending", color: "bg-yellow-400", date: "02/10/2025" },
  { status: "Paid", color: "bg-green-400", date: "01/13/2025" },
  { status: "Paid", color: "bg-green-400", date: "12/13/2024" },
];

export default function PurchaseHistory() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        Purchase history
      </h3>

      <div className="space-y-4">
        {DATA.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-4 gap-4
                       py-4 border-b border-gray-700"
          >
            <p className="text-gray-300">
              Acme pro plan (monthly)
            </p>

            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
              <span className="text-white">{item.status}</span>
            </div>

            <p className="text-gray-300">{item.date}</p>
            <p className="text-gray-300 md:text-right">$59.90</p>
          </div>
        ))}
      </div>
    </div>
  );
}
