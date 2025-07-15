import React from "react";

const locationData = [
  { label: "US", value: 80 },
  { label: "Canada", value: 140 },
  { label: "Mexico", value: 120 },
  { label: "China", value: 60 },
  { label: "Japan", value: 150 },
  { label: "Australia", value: 90 },
];

const LocationTrafficChart = () => {
  return (
    <div className="bg-white/10 rounded-[24px] p-6 shadow-sm w-full sm:w-[560px] h-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-green-500 font-semibold text-md">Location Traffic</h2>
        <button className="bg-[#3E3E3E] rounded-xl px-2 py-1 text-white text-lg">⋯</button>
      </div>

      {/* Vertical Bars Chart */}
      <div className="flex justify-between items-end h-[168px] w-full overflow-x-auto gap-3 sm:gap-0">
        {locationData.map((bar, index) => (
          <div key={index} className="flex flex-col items-center min-w-[40px]">
            {/* Bar */}
            <div
              className={`bg-gray-500 rounded-[12px]`}
              style={{ height: `${bar.value}px`, width: "32px" }}
            ></div>

            {/* Label */}
            <div className="mt-2 text-xs sm:text-sm text-white">{bar.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationTrafficChart;
