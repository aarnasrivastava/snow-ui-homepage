import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 20 },
  { name: "Mar", value: 25 },
  { name: "Apr", value: 40 },
  { name: "May", value: 28 },
  { name: "Jun", value: 34 },
];

const AnalyticsChart = () => {
  return (
    <div className="bg-white/10 shadow-sm rounded-[24px] p-4 sm:p-6 w-full max-w-[1136px] mx-auto mt-6">
      {/* Tabs + Filter Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div className="flex gap-4 text-sm font-medium">
          <button className="text-purple-400">Users</button>
          <button className="text-gray-400">Projects</button>
          <button className="text-gray-400">Operating Status</button>
        </div>
        <div className="flex gap-2 sm:gap-3">
          <button className="bg-[#2F2F2F] text-white text-sm px-3 py-1 rounded-md">Week ▼</button>
          <button className="bg-[#2F2F2F] text-white text-sm px-3 py-1 rounded-md">📈</button>
          <button className="bg-[#2F2F2F] text-white text-sm px-3 py-1 rounded-md">⋯</button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[240px] sm:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#444" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" stroke="#ccc" />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#A855F7"
              strokeWidth={2.5}
              dot={{ stroke: "#fff", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;
