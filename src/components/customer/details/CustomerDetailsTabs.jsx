export default function CustomerDetailsTabs() {
  return (
    <div className="flex gap-6 border-b border-gray-600 mb-8">
      <button className="pb-3 text-blue-500 border-b-2 border-blue-500 font-medium">
        Billing
      </button>
      <button className="pb-3 text-gray-400 hover:text-white transition">
        Activity
      </button>
    </div>
  );
}
