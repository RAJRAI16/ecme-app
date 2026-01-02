import { Image } from "lucide-react";

export default function ProductImageSection({ image, onChange }) {
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    onChange(preview);
  };

  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8 space-y-3">
      <h2 className="text-xl font-semibold text-white">
        Product Image
      </h2>

      <label className="border-2 border-dashed border-gray-600
                        rounded-xl h-56 flex flex-col
                        items-center justify-center text-center
                        cursor-pointer">
        {image ? (
          <img
            src={image}
            alt="preview"
            className="h-full object-contain"
          />
        ) : (
          <>
            <Image size={40} className="text-gray-400 mb-3" />
            <p className="text-white">
              Click to upload image
            </p>
          </>
        )}

        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImage}
        />
      </label>
    </div>
  );
}
