import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Search,
  Globe,
  Bell,
  Settings,
  User,
  Activity,
  LogOut,
  WifiOff,
} from "lucide-react";

export default function Topbar({ toggleSidebar, open }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const profileRef = useRef(null);

  /* ================= ONLINE / OFFLINE ================= */
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  /* ================= CLOSE DROPDOWN ================= */
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* ================= OFFLINE BANNER ================= */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 z-[60]
                        bg-[#2b2b2b] text-gray-300
                        flex items-center justify-center gap-2
                        h-9 text-sm">
          <WifiOff size={16} className="text-yellow-400" />
          You’re offline. Showing saved data.
        </div>
      )}

      {/* ================= TOPBAR ================= */}
      <div
        className={`
          fixed right-0 h-16 z-50
          flex items-center justify-between px-4
          transition-all duration-300
          bg-[#262626]

          /* OFFSET IF OFFLINE BANNER */
          ${!isOnline ? "top-9" : "top-0"}

          /* MOBILE */
          ${open ? "hidden lg:flex" : "flex"}

          /* DESKTOP */
          left-0
          ${open ? "lg:left-72" : "lg:left-20"}
        `}
      >
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar} className="cursor-pointer">
            <Menu size={26} />
          </button>

          <Search size={22} className="cursor-pointer" />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5 relative" ref={profileRef}>
          <Globe size={22} className="cursor-pointer" />
          <Bell size={22} className="cursor-pointer" />
          <Settings size={22} className="cursor-pointer" />

          {/* PROFILE ICON */}
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="cursor-pointer"
          >
            <User size={22} />
          </button>

          {/* PROFILE DROPDOWN */}
          {profileOpen && (
            <div
              className="absolute right-0 top-14 w-64
                         bg-[#1f1f1f] rounded-xl shadow-xl
                         border border-[#2f2f2f] p-3"
            >
              {/* USER INFO */}
              <div className="flex items-center gap-3 pb-3 border-b border-[#2f2f2f]">
                <img
                  src="https://i.pravatar.cc/100"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <div>
                  <p className="text-white font-medium">
                    Angelina Gotelli
                  </p>
                  <p className="text-sm text-gray-400">
                    admin-01@ecme.com
                  </p>
                </div>
              </div>

              {/* MENU */}
              <div className="mt-3 space-y-1">
                <Link
                  to="/profile"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg
                             text-gray-300 hover:bg-[#2f2f2f]"
                >
                  <User size={18} />
                  Profile
                </Link>

                <Link
                  to="/account/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg
                             text-gray-300 hover:bg-[#2f2f2f]"
                >
                  <Settings size={18} />
                  Account Setting
                </Link>

                <div className="flex items-center gap-3 px-3 py-2 rounded-lg
                                text-gray-300 hover:bg-[#2f2f2f]">
                  <Activity size={18} />
                  Activity Log
                </div>

                <div className="border-t border-[#2f2f2f] my-2" />

                <div className="flex items-center gap-3 px-3 py-2 rounded-lg
                                text-red-400 hover:bg-red-500/10">
                  <LogOut size={18} />
                  Sign Out
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
