import {
  User,
  Lock,
  Bell,
  CreditCard,
  RefreshCcw,
} from "lucide-react";

const MENU = [
  { label: "Profile", icon: User, active: true },
  { label: "Security", icon: Lock },
  { label: "Notification", icon: Bell },
  { label: "Billing", icon: CreditCard },
  { label: "Integration", icon: RefreshCcw },
];

export default function SettingsSidebar() {
  return (
    <div className="bg-[#262626] rounded-2xl p-3">
      {MENU.map(({ label, icon: Icon, active }) => (
        <div
          key={label}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg
            cursor-pointer transition
            ${active
              ? "bg-[#3a3a3a] text-white"
              : "text-gray-400 hover:bg-[#333]"
            }`}
        >
          <Icon size={18} />
          <span className="font-medium">{label}</span>
        </div>
      ))}
    </div>
  );
}
