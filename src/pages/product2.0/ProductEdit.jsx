import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BasicInfoSection from "../../components/product2.0/edit/BasicInfoSection";
import ProductImageEditSection from "../../components/product2.0/edit/ProductImageEditSection";
import AttributeSection from "../../components/product2.0/edit/AttributeSection";
import PricingSection from "../../components/product2.0/edit/PricingSection";

export default function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  /* ================= LOAD PRODUCT ================= */
  useEffect(() => {
    const products =
      JSON.parse(localStorage.getItem("products")) || [];

    const found = products.find(
      (p) => String(p.id) === String(id)
    );

    if (!found) {
      navigate("/product/list");
      return;
    }

    setProduct(found);
  }, [id, navigate]);

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

    const updated = products.map((p) =>
      String(p.id) === String(id) ? product : p
    );

    localStorage.setItem(
      "products",
      JSON.stringify(updated)
    );

    navigate("/product/list");
  };

  if (!product) {
    return (
      <div className="p-6 text-gray-400">
        Loading product...
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-28 space-y-6 text-white">
      <h1 className="text-2xl font-semibold">
        Edit product
      </h1>

      <BasicInfoSection
        data={product}
        onChange={handleChange}
      />

      <ProductImageEditSection
        image={product.image}
        onChange={(img) =>
          handleChange("image", img)
        }
      />

      <AttributeSection
        data={product}
        onChange={handleChange}
      />

      <PricingSection
        data={product}
        onChange={handleChange}
      />

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
