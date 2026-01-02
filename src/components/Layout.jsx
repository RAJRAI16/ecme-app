import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function Layout() {
  const [open, setOpen] = useState(false);

  // ✅ Scroll lock ONLY for sidebar (mobile)
  useEffect(() => {
    if (open && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOPBAR */}
        <Topbar
          open={open}
          toggleSidebar={() => setOpen(!open)}
        />

        {/* MAIN CONTENT */}
        <main
          className={`
            flex-1 bg-[#0f0f0f]
            pt-20 md:pt-16 lg:pt-20
            transition-all duration-300 ease-in-out
            lg:ml-20 ${open ? "lg:ml-72" : ""}
            overflow-x-visible
          `}
        >
          <Outlet />
          <Footer />
        </main>
      </div>
    </div>
  );
}
