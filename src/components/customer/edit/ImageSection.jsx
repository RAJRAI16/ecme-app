import { useRef } from "react";

export default function CustomerImageUpload({ image, onChange }) {
  const fileRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-[#242424] rounded-2xl p-6 md:p-8">
      <h2 className="text-lg font-semibold text-white mb-6">
        Image
      </h2>

      <div className="bg-[#3a3a3a] rounded-xl py-10 flex flex-col items-center gap-6">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
          {image && (
            <img
              src={image}
              alt="Customer"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <button
          onClick={() => fileRef.current.click()}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >
          Upload Image
        </button>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}
