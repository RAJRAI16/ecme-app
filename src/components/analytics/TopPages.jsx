export default function TopPages() {
  const pages = [
    {
      url: "/dashboard",
      views: 6465,
      viewsChange: "+1.7%",
      viewsUp: true,
      visitors: 1078,
      visitorsChange: "+1.2%",
      visitorsUp: true,
    },
    {
      url: "/affiliate",
      views: 3687,
      viewsChange: "+1.4%",
      viewsUp: true,
      visitors: 801,
      visitorsChange: "+0.9%",
      visitorsUp: true,
    },
    {
      url: "/contract",
      views: 2918,
      viewsChange: "+2.6%",
      viewsUp: true,
      visitors: 655,
      visitorsChange: "+1.4%",
      visitorsUp: true,
    },
    {
      url: "/products",
      views: 4882,
      viewsChange: "-0.7%",
      viewsUp: false,
      visitors: 936,
      visitorsChange: "-0.3%",
      visitorsUp: false,
    },
    {
      url: "/sign-in",
      views: 1527,
      viewsChange: "+1.1%",
      viewsUp: true,
      visitors: 389,
      visitorsChange: "+0.8%",
      visitorsUp: true,
    },
    {
      url: "/about",
      views: 2103,
      viewsChange: "-0.9%",
      viewsUp: false,
      visitors: 450,
      visitorsChange: "-1.5%",
      visitorsUp: false,
    },
  ];

  return (
    <div className="bg-[#1c1c1c] rounded-2xl p-6">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Top pages</h3>

        <button className="bg-[#2a2a2a] px-4 py-2 rounded-lg text-sm hover:bg-[#333] transition">
          Export data
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] text-sm">
          <thead className="text-gray-400 border-b border-gray-700">
            <tr>
              <th className="text-left py-3">PAGE URL</th>
              <th className="text-left">VIEWS</th>
              <th className="text-left">UNIQUE VISITORS</th>
            </tr>
          </thead>

          <tbody>
            {pages.map((page) => (
              <tr
                key={page.url}
                className="border-b border-gray-800 last:border-0"
              >
                {/* URL */}
                <td className="py-4 font-medium">{page.url}</td>

                {/* VIEWS */}
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300">
                      {page.views}
                    </span>
                    <span
                      className={`text-sm ${
                        page.viewsUp
                          ? "text-emerald-400"
                          : "text-red-400"
                      }`}
                    >
                      {page.viewsChange}
                    </span>
                  </div>
                </td>

                {/* VISITORS */}
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300">
                      {page.visitors}
                    </span>
                    <span
                      className={`text-sm ${
                        page.visitorsUp
                          ? "text-emerald-400"
                          : "text-red-400"
                      }`}
                    >
                      {page.visitorsChange}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
