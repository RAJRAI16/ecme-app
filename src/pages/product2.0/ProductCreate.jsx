import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BasicInfoSection from "../../components/product2.0/create/BasicInfoSection";
import AttributeSection from "../../components/product2.0/create/AttributeSection";
import PricingSection from "../../components/product2.0/create/PricingSection";
import ProductImageSection from "../../components/product2.0/create/ProductImageSection";

export default function ProductCreate() {
  const navigate = useNavigate();

  /* ================= PRODUCT STATE ================= */
  const [product, setProduct] = useState({
    id: Date.now(),
    name: "",
    code: "",
    description: "",
    price: "",
    costPrice: "",
    bulkPrice: "",
    taxRate: "",
    category: "",
    tags: "",
    brand: "",
    image: "",
  });

  /* ================= COMMON CHANGE ================= */
  const handleChange = (key, value) => {
    setProduct((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /* ================= SAVE ================= */
  const handleSave = () => {
    const products =
      JSON.parse(localStorage.getItem("products")) || [];

    localStorage.setItem(
      "products",
      JSON.stringify([...products, product])
    );

    navigate("/product/list");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-28 text-white">
      <h1 className="text-2xl font-semibold mb-6">
        Create Product
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="xl:col-span-8 space-y-6">
          <BasicInfoSection
            data={product}
            onChange={handleChange}
          />
          <PricingSection
            data={product}
            onChange={handleChange}
          />
        </div>

        {/* RIGHT */}
        <div className="xl:col-span-4 space-y-6">
          <ProductImageSection
            image={product.image}
            onChange={(img) =>
              handleChange("image", img)
            }
          />
          <AttributeSection
            data={product}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* FOOTER */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1c1c1c] border-t border-[#2f2f2f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16
                        flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-white"
          >
            ← Back
          </button>

          <div className="flex gap-3">
            <button className="px-5 py-2 rounded-xl border border-gray-600">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-blue-500"
            >
              Save Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
