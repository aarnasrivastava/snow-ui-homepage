import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";

// 48 bars (4 per month for 12 months)
const data = [
  { name: "Jan W1", all: 10, snowui: 20, dashboard: 60 },
  { name: "Jan W2", all: 12, snowui: 18, dashboard: 55 },
  { name: "Jan W3", all: 11, snowui: 20, dashboard: 52 },
  { name: "Jan W4", all: 14, snowui: 22, dashboard: 60 },
  { name: "Feb W1", all: 16, snowui: 24, dashboard: 65 },
  { name: "Feb W2", all: 13, snowui: 20, dashboard: 62 },
  { name: "Feb W3", all: 10, snowui: 18, dashboard: 55 },
  { name: "Feb W4", all: 11, snowui: 20, dashboard: 60 },
  { name: "Mar W1", all: 12, snowui: 19, dashboard: 58 },
  { name: "Mar W2", all: 10, snowui: 17, dashboard: 53 },
  { name: "Mar W3", all: 13, snowui: 21, dashboard: 57 },
  { name: "Mar W4", all: 11, snowui: 20, dashboard: 56 },
  { name: "Apr W1", all: 14, snowui: 22, dashboard: 61 },
  { name: "Apr W2", all: 13, snowui: 20, dashboard: 59 },
  { name: "Apr W3", all: 15, snowui: 23, dashboard: 63 },
  { name: "Apr W4", all: 14, snowui: 22, dashboard: 60 },
  { name: "May W1", all: 15, snowui: 24, dashboard: 62 },
  { name: "May W2", all: 12, snowui: 20, dashboard: 58 },
  { name: "May W3", all: 13, snowui: 21, dashboard: 60 },
  { name: "May W4", all: 11, snowui: 19, dashboard: 57 },
  { name: "Jun W1", all: 14, snowui: 22, dashboard: 63 },
  { name: "Jun W2", all: 15, snowui: 23, dashboard: 61 },
  { name: "Jun W3", all: 13, snowui: 20, dashboard: 59 },
  { name: "Jun W4", all: 12, snowui: 19, dashboard: 58 },
  { name: "Jul W1", all: 13, snowui: 21, dashboard: 60 },
  { name: "Jul W2", all: 12, snowui: 20, dashboard: 58 },
  { name: "Jul W3", all: 11, snowui: 18, dashboard: 55 },
  { name: "Jul W4", all: 14, snowui: 22, dashboard: 62 },
  { name: "Aug W1", all: 13, snowui: 21, dashboard: 59 },
  { name: "Aug W2", all: 15, snowui: 24, dashboard: 63 },
  { name: "Aug W3", all: 14, snowui: 22, dashboard: 61 },
  { name: "Aug W4", all: 13, snowui: 21, dashboard: 60 },
  { name: "Sep W1", all: 16, snowui: 25, dashboard: 65 },
  { name: "Sep W2", all: 14, snowui: 23, dashboard: 62 },
  { name: "Sep W3", all: 15, snowui: 24, dashboard: 63 },
  { name: "Sep W4", all: 13, snowui: 21, dashboard: 60 },
  { name: "Oct W1", all: 12, snowui: 19, dashboard: 58 },
  { name: "Oct W2", all: 14, snowui: 22, dashboard: 60 },
  { name: "Oct W3", all: 13, snowui: 21, dashboard: 59 },
  { name: "Oct W4", all: 11, snowui: 18, dashboard: 56 },
  { name: "Nov W1", all: 13, snowui: 21, dashboard: 60 },
  { name: "Nov W2", all: 14, snowui: 22, dashboard: 62 },
  { name: "Nov W3", all: 12, snowui: 20, dashboard: 58 },
  { name: "Nov W4", all: 11, snowui: 19, dashboard: 57 },
  { name: "Dec W1", all: 13, snowui: 21, dashboard: 60 },
  { name: "Dec W2", all: 12, snowui: 19, dashboard: 58 },
  { name: "Dec W3", all: 11, snowui: 18, dashboard: 56 },
  { name: "Dec W4", all: 10, snowui: 17, dashboard: 55 },
];

const ProductTrafficChart = () => {
  return (
    <div className="bg-[#FFFFFF0A] p-4 sm:p-6 rounded-[24px] shadow w-full max-w-[1136px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
        <h2 className="text-[#FF4D4D] font-medium text-[16px]">Product Traffic</h2>
        <div className="flex gap-4 text-sm flex-wrap">
          <span className="flex items-center gap-1 text-white">
            <span className="w-2 h-2 rounded-full bg-white"></span> All
          </span>
          <span className="flex items-center gap-1 text-[#A0A0A0]">
            <span className="w-2 h-2 rounded-full bg-[#A0A0A0]"></span> SnowUI
          </span>
          <span className="flex items-center gap-1 text-[#FF4D4D]">
            <span className="w-2 h-2 rounded-full bg-[#FF4D4D]"></span> Dashboard
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[720px] sm:min-w-full h-[240px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap={6} barGap={2}>
              <XAxis
                dataKey="name"
                tickFormatter={(tick) => {
                  const [month, week] = tick.split(" ");
                  return week === "W1" ? month : "";
                }}
                interval={0}
                tick={{ fill: "#aaa", fontSize: 10 }}
              />
              <Bar dataKey="dashboard" stackId="a" fill="#FF4D4D" radius={[80, 80, 0, 0]} barSize={4} />
              <Bar dataKey="snowui" stackId="a" fill="#A0A0A0" radius={[80, 80, 0, 0]} barSize={4} />
              <Bar dataKey="all" stackId="a" fill="#FFFFFF" radius={[80, 80, 0, 0]} barSize={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProductTrafficChart;
