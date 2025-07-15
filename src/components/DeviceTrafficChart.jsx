import React from "react";

const data = [
  { label: "Linux", value: 60, color: "bg-gray-500" },
  { label: "Mac", value: 110, color: "bg-gray-500" },
  { label: "iOS", value: 90, color: "bg-gray-500" },
  { label: "Windows", value: 130, color: "bg-gray-500" },
  { label: "Android", value: 160, color: "bg-[#0A84FF]", highlight: true, labelTop: "243K" },
  { label: "Other", value: 50, color: "bg-gray-500" },
];

const DeviceTrafficChart = () => {
  return (
    <div className="bg-white/10 rounded-[24px] p-6 shadow-sm w-full sm:w-[560px] h-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-blue-500 font-semibold text-md">Device Traffic</h2>
        <button className="bg-[#3E3E3E] rounded-xl px-2 py-1 text-white text-lg">⋯</button>
      </div>

      {/* Chart */}
      <div className="flex justify-between items-end h-[168px] w-full overflow-x-auto gap-3 sm:gap-0">
        {data.map((bar, index) => (
          <div key={index} className="flex flex-col items-center relative min-w-[40px]">
            {/* Top Label (e.g., 243K) */}
            {bar.highlight && bar.labelTop && (
              <div className="absolute -top-8 text-xs px-2 py-1 rounded-full bg-[#3A3A3A] text-white">
                {bar.labelTop}
              </div>
            )}

            {/* Bar */}
            <div
              className={`rounded-[12px] ${bar.color}`}
              style={{ height: `${bar.value}px`, width: "32px" }}
            ></div>

            {/* Bottom Label */}
            <div className="mt-2 text-xs sm:text-sm text-white">{bar.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceTrafficChart;
