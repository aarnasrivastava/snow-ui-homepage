import React from "react";
import sidebarIcon from "../assets/sidebar-icon.png";
import sunIcon from "../assets/bg_mode-icon.png";
import refreshIcon from "../assets/refresh-icon.png";
import bellIcon from "../assets/notification-icon.png";
import favoriteIcon from "../assets/favourites-icon.png";

const DashboardHeader = ({ onToggleSidebar, sidebarOpen }) => {
  return (
    <header
      className={`bg-[#2A2A2A] h-[56px] flex items-center justify-between px-6 transition-all duration-300 ${
        sidebarOpen ? "ml-[208px]" : "ml-[64px]"
      }`}
    >
      {/* Left section: Sidebar toggle + breadcrumb */}
      <div className="flex items-center gap-3 text-sm font-medium text-gray-300">
        {/* Sidebar Toggle Button */}
        <button
          onClick={onToggleSidebar}
          className="hover:scale-110 transition transform"
        >
          <img src={sidebarIcon} alt="Sidebar" className="w-5 h-5" />
        </button>

        {/* Favorite button */}
        <button className="hover:scale-110 transition transform">
          <img src={favoriteIcon} alt="Favorite" className="w-5 h-5" />
        </button>

        {/* Breadcrumb */}
        <span className="text-gray-500">Dashboards</span>
        <span className="text-white">/ Overview</span>
      </div>

      {/* Right section: Search + icons */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#2c2c2c] placeholder-gray-400 text-white px-3 py-1 rounded-md text-sm w-40 focus:outline-none"
        />
        <button>
          <img src={sunIcon} alt="Sun" className="w-5 h-5" />
        </button>
        <button>
          <img src={refreshIcon} alt="Refresh" className="w-5 h-5" />
        </button>
        <button>
          <img src={bellIcon} alt="Bell" className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
