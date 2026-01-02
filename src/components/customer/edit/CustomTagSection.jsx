import { useState, useRef, useEffect } from "react";

const PREDEFINED_TAGS = ["Frequent Shoppers", "Inactive", "New"];

export default function CustomerTags({ value = [], onChange }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const wrapperRef = useRef(null);

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

  const addTag = (tag) => {
    if (!value.includes(tag)) {
      onChange([...value, tag]);
    }
    setInput("");
    setOpen(false);
  };

  const removeTag = (tag) => {
    onChange(value.filter((t) => t !== tag));
  };

  return (
    <div
      ref={wrapperRef}
      className="bg-[#242424] rounded-2xl p-6 md:p-8"
    >
      <h2 className="text-lg font-semibold text-white mb-4">
        Customer Tags
      </h2>

      <div
        onClick={() => setOpen(true)}
        className={`relative bg-[#3a3a3a] rounded-xl px-4 py-3
        border ${open ? "border-blue-500" : "border-transparent"}`}
      >
        <div className="flex flex-wrap gap-2 mb-2">
          {value.map((tag) => (
            <span
              key={tag}
              className="bg-[#1f1f1f] text-white text-sm
                         px-3 py-1 rounded-lg flex items-center gap-2"
            >
              {tag}
              <button onClick={() => removeTag(tag)}>×</button>
            </span>
          ))}
        </div>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && addTag(input.trim())
          }
          placeholder="Add tags..."
          className="bg-transparent outline-none text-white w-full"
        />
      </div>

      {open && (
        <div className="mt-2 bg-[#141414] rounded-xl">
          {PREDEFINED_TAGS.map((tag) => (
            <div
              key={tag}
              onClick={() => addTag(tag)}
              className="px-4 py-3 cursor-pointer hover:bg-[#1f1f1f]"
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
