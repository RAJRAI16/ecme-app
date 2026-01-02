import { Facebook, Linkedin, X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CustomerProfileCard({ customer }) {
  const navigate = useNavigate();

  const initials =
    `${customer.firstName?.[0] || ""}${customer.userName?.[0] || ""}`.toUpperCase();

  return (
    <div className="bg-[#262626] rounded-2xl p-6 flex flex-col items-center text-center">

      {/* IMAGE */}
      {customer.image ? (
        <img
          src={customer.image}
          alt="Customer"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-600
                        flex items-center justify-center text-2xl mb-4">
          {initials}
        </div>
      )}

      {/* NAME */}
      <h2 className="text-xl font-semibold text-white mb-6">
        {customer.firstName} {customer.userName}
      </h2>

      {/* INFO */}
      <div className="w-full text-left space-y-4 text-sm">
        <Info label="Email" value={customer.email} />
        <Info
          label="Phone"
          value={`${customer.phoneCode || ""} ${customer.phone || ""}`}
        />
        <Info label="Country" value={customer.country} />
        <Info label="City" value={customer.city} />
      </div>

      {/* SOCIAL (UI only) */}
      <div className="w-full text-left mt-6">
        <p className="text-gray-400 text-sm mb-3">Social</p>
        <div className="flex gap-3">
          <SocialIcon><Facebook size={18} /></SocialIcon>
          <SocialIcon><X size={18} /></SocialIcon>
          <SocialIcon><Linkedin size={18} /></SocialIcon>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="w-full mt-8 space-y-3">
        <button
          className="w-full bg-blue-500 hover:bg-blue-600
                     text-white py-2.5 rounded-lg font-medium transition"
        >
          Send Message
        </button>

        <button
          onClick={() => navigate(`/customer/edit/${customer.id}`)}
          className="w-full bg-[#3a3a3a] hover:bg-[#4a4a4a]
                     text-white py-2.5 rounded-lg transition"
        >
          Edit Customer
        </button>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-400">{label}</p>
      <p className="text-white font-medium">
        {value || "-"}
      </p>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div
      className="w-10 h-10 rounded-lg bg-[#3a3a3a]
                 flex items-center justify-center
                 text-white cursor-pointer
                 hover:bg-[#4a4a4a] transition"
    >
      {children}
    </div>
  );
}
