import { useState, useRef, useEffect } from "react";

const PREDEFINED_TAGS = ["Frequent Shoppers", "Inactive", "New"];

export default function CustomerTagSection({ value = [], onChange }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const wrapperRef = useRef(null);

  /* ================= CLOSE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ================= ADD TAG ================= */
  const addTag = (tag) => {
    if (!value.includes(tag)) {
      onChange([...value, tag]);
    }
    setInput("");
    setOpen(false);
  };

  /* ================= ENTER KEY ================= */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      addTag(input.trim());
    }
  };

  /* ================= REMOVE TAG ================= */
  const removeTag = (tag) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
    <div
      ref={wrapperRef}
      className="bg-[#242424] rounded-2xl p-6 md:p-8"
    >
      {/* ================= TITLE ================= */}
      <h2 className="text-lg font-semibold text-white mb-4">
        Customer Tags
      </h2>

      {/* ================= INPUT BOX ================= */}
      <div
        onClick={() => setOpen(true)}
        className={`relative bg-[#3a3a3a] rounded-xl px-4 py-3
        border ${open ? "border-blue-500" : "border-transparent"}
        cursor-text`}
      >
        {/* SELECTED TAGS */}
        <div className="flex flex-wrap gap-2 mb-2">
          {value.map((tag) => (
            <span
              key={tag}
              className="bg-[#1f1f1f] text-white text-sm
                         px-3 py-1 rounded-lg flex items-center gap-2"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </span>
          ))}
        </div>

        {/* TEXT INPUT */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add tags for customer..."
          className="bg-transparent text-white placeholder-gray-400
                     outline-none w-full"
        />

        {/* CHEVRON */}
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2
                     w-4 h-4 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/* ================= DROPDOWN ================= */}
      {open && (
        <div className="mt-2 bg-[#141414] rounded-xl shadow-xl overflow-hidden">
          {PREDEFINED_TAGS.map((tag) => (
            <div
              key={tag}
              onClick={() => addTag(tag)}
              className="px-4 py-3 text-white cursor-pointer
                         hover:bg-[#1f1f1f]"
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
