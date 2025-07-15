import React, { useState } from "react";
import logo from "../assets/snow-logo.png";

// Icons
import overview from "../assets/overview-icon.png";
import ecommerce from "../assets/eCommerce-icon.png";
import projects from "../assets/projects-icon.png";
import user from "../assets/user-icon.png";
import account from "../assets/account-icon.png";
import corporate from "../assets/corporate-icon.png";
import blog from "../assets/blog-icon.png";
import social from "../assets/social-icon.png";

const Sidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState("Overview");

  const navItems = [
    { label: "Overview", icon: overview },
    { label: "eCommerce", icon: ecommerce },
    { label: "Projects", icon: projects },
    { label: "User Profile", icon: user },
    { label: "Account", icon: account },
    { label: "Corporate", icon: corporate },
    { label: "Blog", icon: blog },
    { label: "Social", icon: social },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-[#1e1e1e] text-white p-4 transition-all duration-300 z-50 ${
        isOpen ? "w-[208px]" : "w-0 overflow-hidden"
      }`}
    >
      {/* Logo section */}
      <div className="flex items-center gap-2 mb-4">
        <img src={logo} alt="Snow UI Logo" className="h-6 w-6" />
        {isOpen && <h1 className="text-lg font-semibold">SNOWUI</h1>}
      </div>

      {/* Navigation items */}
      {isOpen && (
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.label}
              onClick={() => setActiveItem(item.label)}
            />
          ))}
        </div>
      )}
    </aside>
  );
};

const NavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-gray-700 transition ${
      active ? "bg-gray-800" : ""
    }`}
  >
    <img src={icon} alt={label} className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

export default Sidebar;
