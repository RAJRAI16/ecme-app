export default function ProductPagination() {
  return (
    <div className="flex items-center justify-between pt-4">
      <div className="flex gap-2">
        <button className="w-8 h-8 rounded bg-blue-500 text-white">1</button>
        <button className="w-8 h-8 rounded bg-[#3a3a3a] text-white">2</button>
      </div>

      <select className="bg-[#3a3a3a] text-white px-3 py-2 rounded-lg">
        <option>10 / page</option>
        <option>20 / page</option>
      </select>
    </div>
  );
}
