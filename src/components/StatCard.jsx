import React from "react";

const StatCard = ({ title, value, percentage, bg }) => {
  const isPositive = percentage.trim().startsWith("+");

  return (
    <div
      className={`
        w-full
        rounded-[24px]
        p-4 sm:p-6
        min-w-[160px] sm:min-w-[272px]
        h-[100px] sm:h-[132px]
        flex flex-col justify-between
        text-white
        backdrop-blur-sm
        shadow-md
      `}
      style={{ background: bg }}
    >
      <div className="text-sm sm:text-base font-medium opacity-80">{title}</div>

      <div>
        <div className="text-xl sm:text-2xl font-bold">{value}</div>
        <div
          className={`text-xs sm:text-sm ${
            isPositive ? "text-green-300" : "text-red-300"
          }`}
        >
          {percentage}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
