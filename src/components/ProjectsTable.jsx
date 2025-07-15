import React from "react";
import Byewind from "../assets/byewind.png";
import Natali from "../assets/natalicraig.png";
import Drew from "../assets/drewcano.png";
import Orlando from "../assets/orlandodiggs.png";
import Andi from "../assets/andilane.png";

const projectData = [
  {
    img: Byewind,
    name: "ByeWind",
    date: "Jun 24, 2025",
    amount: "$942.00",
    status: "In Progress",
    color: "bg-purple-900",
  },
  {
    img: Natali,
    name: "Natali Craig",
    date: "Mar 10, 2025",
    amount: "$881.00",
    status: "Complete",
    color: "bg-green-900",
  },
  {
    img: Drew,
    name: "Drew Cano",
    date: "Nov 10, 2025",
    amount: "$409.00",
    status: "Pending",
    color: "bg-blue-800",
  },
  {
    img: Orlando,
    name: "Orlando Diggs",
    date: "Dec 20, 2025",
    amount: "$953.00",
    status: "Approved",
    color: "bg-yellow-700",
  },
  {
    img: Andi,
    name: "Andi Lane",
    date: "Jul 25, 2025",
    amount: "$907.00",
    status: "Rejected",
    color: "bg-zinc-800",
  },
];

const ProjectsTable = () => {
  return (
    <div className="mt-6 px-4 mx-auto max-w-[1136px] bg-white/10 shadow-sm rounded-[24px] p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-cyan-400">Projects</h2>
        <button className="bg-[#3E3E3E] rounded-xl px-3 py-1 text-white text-lg">⋯</button>
      </div>

      {/* Column Titles - Hidden on small screens */}
      <div className="hidden sm:grid grid-cols-4 text-sm text-gray-400 mb-4 px-2">
        <span>Manager</span>
        <span>Date</span>
        <span>Amount</span>
        <span className="text-right">Status</span>
      </div>

      {/* Table Rows */}
      {projectData.map((item, index) => (
        <div
          key={index}
          className="grid sm:grid-cols-4 grid-cols-1 gap-y-2 sm:items-center text-white bg-black/30 rounded-2xl px-3 py-4 mb-3"
        >
          {/* Manager */}
          <div className="flex items-center gap-3">
            <img
              src={item.img}
              alt={item.name}
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="font-medium">{item.name}</span>
          </div>

          {/* Mobile: Show Date + Amount inline */}
          <div className="sm:hidden flex justify-between text-sm text-gray-400">
            <span>Date:</span>
            <span className="text-white">{item.date}</span>
          </div>
          <div className="sm:hidden flex justify-between text-sm text-gray-400">
            <span>Amount:</span>
            <span className="text-white">{item.amount}</span>
          </div>

          {/* Tablet/Desktop */}
          <span className="hidden sm:block">{item.date}</span>
          <span className="hidden sm:block">{item.amount}</span>

          {/* Status */}
          <div className="flex sm:justify-end">
            <span
              className={`text-white px-3 py-1 text-sm rounded-xl ${item.color}`}
            >
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsTable;
