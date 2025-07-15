import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/DashboardHeader";
import StatCard from "./components/StatCard";
import AnalyticsChart from "./components/AnalyticsChart";
import DeviceTrafficChart from "./components/DeviceTrafficChart";
import LocationTrafficChart from "./components/LocationTrafficChart";
import ProductTrafficChart from "./components/ProductTrafficChart";
import ProjectsTable from "./components/ProjectsTable";
import Footer from "./components/Footer";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex bg-[#2A2A2A] text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content Area */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-[208px]" : "ml-[64px]"
        }`}
      >
        {/* Header */}
        <Header onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        {/* Main Scrollable Content */}
        <main className="flex-grow">
          {/* ✅ Updated Stat Cards Grid with tighter horizontal spacing */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-4 sm:gap-4 px-4 pt-[64px] mx-auto max-w-[1136px]">
            <StatCard
              title="Views"
              value="7,265"
              percentage="+11.01%"
              bg={`linear-gradient(0deg, #0A84FF, #0A84FF), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.4) 100%)`}
            />
            <StatCard
              title="Visits"
              value="3,671"
              percentage="-0.03%"
              bg={`linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.24) 100%)`}
            />
            <StatCard
              title="New Users"
              value="256"
              percentage="+15.03%"
              bg={`linear-gradient(0deg, #0A84FF, #0A84FF), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.4) 100%)`}
            />
            <StatCard
              title="Active Users"
              value="2,318"
              percentage="+6.08%"
              bg={`linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.24) 100%)`}
            />
          </div>

          {/* Other Dashboard Sections */}
          <div className="px-4 mt-8 mx-auto max-w-[1136px]">
            <AnalyticsChart />
          </div>

          <div className="px-4 mt-8 mx-auto max-w-[1136px]">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="w-full md:w-[552px]">
                <DeviceTrafficChart />
              </div>
              <div className="w-full md:w-[552px]">
                <LocationTrafficChart />
              </div>
            </div>
          </div>

          <div className="px-4 mt-8 mx-auto max-w-[1136px]">
            <ProductTrafficChart />
          </div>

          <div className="px-4 mt-8 mx-auto max-w-[1136px]">
            <ProjectsTable />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
