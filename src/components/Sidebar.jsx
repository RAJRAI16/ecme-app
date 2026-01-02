import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import finallogo from "../assets/slidebarlogo.png";

import {
  ShoppingCart,
  FolderKanban,
  Megaphone,
  BarChart3,
  Brain,
  Users,
  Package,
  ShoppingBag,
  CreditCard,
  HelpCircle,
  Calendar,
  FileText,
  Mail,
  MessageCircle,
  Layout,
  MessageSquare,
  Table,
  FileInput,
  LogIn,
  UserPlus,
  KeyRound,
  ShieldAlert,
  Globe,
  BookOpen,
  Layers,
  Wrench,
  ScrollText,
  X,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  const location = useLocation();
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  const [openDropdown, setOpenDropdown] = useState(null);

  const [popupItem, setPopupItem] = useState(null);
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });
  const [hoveringPopup, setHoveringPopup] = useState(false);
  const closeTimer = useRef(null);

  const isItemActive = (item) => {
    if (item.path) return location.pathname === item.path;
    if (item.dropdown)
      return item.dropdown.some((d) =>
        location.pathname.startsWith(d.path)
      );
    return false;
  };

  const getPopupItems = (item) =>
    item.dropdown ?? [{ label: item.label, path: item.path }];

  const openPopup = (e, item) => {
    if (open || !isDesktop) return;
    clearTimeout(closeTimer.current);

    const rect = e.currentTarget.getBoundingClientRect();
    setPopupPos({
      top: rect.top,
      left: rect.right + 10,
    });
    setPopupItem(item);
  };

  const scheduleClosePopup = () => {
    closeTimer.current = setTimeout(() => {
      if (!hoveringPopup) setPopupItem(null);
    }, 120);
  };

  /* SECTIONS (UNCHANGED) */
  const sections = [
    {
      title: "Dashboard",
      items: [
        { icon: ShoppingCart, label: "Ecommerce", path: "/" },
        { icon: Package, label: "Products", path: "/product" },
        { icon: Megaphone, label: "Marketing", path: "/marketing" },
        { icon: BarChart3, label: "Analytics", path: "/analytics" },
      ],
    },
    {
      title: "Concept",
      items: [
        { icon: Brain, label: "AI", path: "/ai" },
        { icon: FolderKanban, label: "Project", path: "/project" },
        {
          icon: Users,
          label: "Customer",
          dropdown: [
            { label: "List", path: "/customer/list" },
            { label: "Create", path: "/customer/create" },
            { label: "Edit", path: "/customer/edit/1" },
            { label: "Detail", path: "/customer/details/1" },
          ],
        },
        {
          icon: Package,
          label: "Product",
          dropdown: [
            { label: "List", path: "/product/list" },
            { label: "Create", path: "/product/create" },
            { label: "Edit", path: "/product/edit/1" },
          ],
        },
        {
          icon: ShoppingBag,
          label: "Orders",
          dropdown: [
            { label: "List", path: "/orders/list" },
            { label: "Create", path: "/orders/create" },
            { label: "Edit", path: "/orders/edit/1" },
          ],
        },
        {
          icon: CreditCard,
          label: "Accounts",
          dropdown: [{ label: "Settings", path: "/account/settings" }],
        },
        { icon: HelpCircle, label: "Help Center", path: "/help" },
        { icon: Calendar, label: "Calendar", path: "/calendar" },
        { icon: FileText, label: "File Manager", path: "/files" },
        { icon: Mail, label: "Mail", path: "/mail" },
        { icon: MessageCircle, label: "Chat", path: "/chat" },
      ],
    },
    {
      title: "UI Components",
      items: [
        { icon: Layout, label: "Common", path: "/ui/common" },
        { icon: MessageSquare, label: "Feedback", path: "/ui/feedback" },
        { icon: Table, label: "Data Display", path: "/ui/data" },
        { icon: FileInput, label: "Forms", path: "/ui/forms" },
      ],
    },
    {
      title: "Authentication",
      items: [
        { icon: LogIn, label: "Sign In", path: "/auth/sign-in" },
        { icon: UserPlus, label: "Sign Up" },
        { icon: KeyRound, label: "Forgot Password", path: "/auth/forgot-password" },
        { icon: ShieldAlert, label: "Reset Password", path: "/auth/reset-password" },
      ],
    },
    {
      title: "Other",
      items: [
        { icon: ShieldAlert, label: "Access Denied", path: "/access-denied" },
        { icon: Globe, label: "Landing", path: "/landing" },
      ],
    },
    {
      title: "Guide",
      items: [
        { icon: BookOpen, label: "Documentation", path: "/docs" },
        { icon: Layers, label: "Shared Components", path: "/shared" },
        { icon: Wrench, label: "Utilities", path: "/utils" },
        { icon: ScrollText, label: "Changelog", path: "/changelog" },
      ],
    },
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      {open && !isDesktop && (
        <div
          className="fixed inset-0 bg-black/70 z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-[100dvh] bg-[#262629] z-40
        transition-all duration-300
        ${open ? "translate-x-0 w-[80vw] max-w-[320px]" : "-translate-x-full"}
        lg:translate-x-0
        ${open ? "lg:w-72" : "lg:w-20"}`}
      >
        {/* HEADER */}
        <div
          className={`flex items-center p-4 ${
            open ? "justify-between" : "justify-center"
          }`}
        >
          <img src={finallogo} className={open ? "w-28" : "w-9"} />
          <button onClick={() => setOpen(false)} className="lg:hidden">
            <X />
          </button>
        </div>

        {/* MENU */}
        <div className="px-2 h-[calc(100dvh-72px)] overflow-y-auto">
          {sections.map((section) => (
            <div key={section.title} className="mb-4">
              {open && (
                <p className="px-3 mb-2 text-xs text-gray-400 uppercase">
                  {section.title}
                </p>
              )}

              {section.items.map((item) => {
                const Icon = item.icon;
                const active = isItemActive(item);
                const popupActive = popupItem?.label === item.label;

                return (
                  <div key={item.label}>
                    <div
                      onMouseEnter={(e) => openPopup(e, item)}
                      onMouseLeave={scheduleClosePopup}
                      onClick={() => {
                        if (open || !isDesktop) {
                          item.dropdown &&
                            setOpenDropdown(
                              openDropdown === item.label
                                ? null
                                : item.label
                            );
                        }
                      }}
                      className={`flex items-center
                        ${open ? "gap-3 px-3" : "justify-center px-2"}
                        py-2 rounded-lg cursor-pointer
                        ${
                          active || popupActive
                            ? "bg-gray-800 text-white"
                            : "hover:bg-gray-800"
                        }`}
                    >
                      <Icon size={22} />
                      {open && <span>{item.label}</span>}
                    </div>

                    {(open || !isDesktop) &&
                      item.dropdown &&
                      openDropdown === item.label && (
                        <ul className="ml-10 mt-1 space-y-1">
                          {item.dropdown.map((sub) => (
                            <Link key={sub.path} to={sub.path}>
                              <li className="px-3 py-1.5 text-sm rounded-lg hover:bg-gray-800">
                                {sub.label}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP HOVER POPUP */}
      {!open &&
        isDesktop &&
        popupItem &&
        createPortal(
          <div
            style={{ top: popupPos.top, left: popupPos.left }}
            onMouseEnter={() => setHoveringPopup(true)}
            onMouseLeave={() => {
              setHoveringPopup(false);
              setPopupItem(null);
            }}
            className="fixed z-[9999] bg-[#1f1f1f]
            rounded-xl border border-[#2f2f2f]
            shadow-2xl min-w-[220px] p-2"
          >
            <p className="px-3 py-2 text-white font-semibold">
              {popupItem.label}
            </p>

            {getPopupItems(popupItem).map((sub) => (
              <Link key={sub.path} to={sub.path}>
                <div className="px-3 py-2 text-sm rounded-lg text-gray-300 hover:bg-[#2f2f2f]">
                  {sub.label}
                </div>
              </Link>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
