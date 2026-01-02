import { Image } from "lucide-react";

export default function ImageSection({ image, onChange }) {
  /* ================= HANDLE FILE ================= */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result); // base64 string
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-[#262626] rounded-2xl p-6 sm:p-8">
      {/* ================= TITLE ================= */}
      <h2 className="text-xl font-semibold text-white mb-6">
        Image
      </h2>

      {/* ================= UPLOAD CARD ================= */}
      <div
        className="bg-[#3a3a3a] rounded-xl
                   flex flex-col items-center justify-center
                   py-10 px-6 text-center"
      >
        {/* IMAGE PREVIEW */}
        {image ? (
          <img
            src={image}
            alt="Customer"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
        ) : (
          <div className="mb-6 text-white">
            <Image size={56} strokeWidth={1.5} />
          </div>
        )}

        {/* FILE INPUT */}
        <label
          className="bg-blue-500 hover:bg-blue-600
                     text-white font-medium
                     px-6 py-2.5 rounded-lg
                     transition cursor-pointer"
        >
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
