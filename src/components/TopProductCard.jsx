// components/TopProductCard.jsx
const products = [
  { name: "Maneki Neko Poster", sold: 1249, change: "+15.2%" },
  { name: "Echoes Necklace", sold: 1145, change: "+13.9%" },
  { name: "Spiky Ring", sold: 1073, change: "+9.5%" },
  { name: "Pastel Petals Poster", sold: 1022, change: "+2.3%" },
  { name: "Il Limone", sold: 992, change: "-0.7%", negative: true },
];

export default function TopProductCard() {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Top product</h2>
        <button className="text-sm text-gray-400 hover:text-white">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {products.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-400 text-sm">Sold: {item.sold}</p>
            </div>

            <span
              className={`text-sm px-2 py-1 rounded-lg ${
                item.negative
                  ? "text-red-400 bg-red-400/10"
                  : "text-green-400 bg-green-400/10"
              }`}
            >
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

