import React from "react";

export default function Activities() {
  return (
    <div className="w-90">
      <div className="flex justify-between mb-2 mt-6">
        <h2 className="text-lg font-semibold">Activities</h2>
        <button className="text-xs text-green-400 underline">See all</button>
      </div>
      <div className="bg-gray-800 rounded-xl p-3">
        <div className="flex justify-between items-center mb-3">
          <button className="bg-green-600 text-white text-xs px-2 py-1 rounded">
            Day Plan
          </button>
          <span className="text-xs">14 Activities</span>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {["27", "28", "29", "30", "31", "1", "2"].map((day, idx) => (
            <div
              key={idx}
              className={`rounded-xl px-3 py-1 text-center ${
                day === "27"
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-300"
              } hover:scale-105 transition`}
            >
              <p className="text-xs">{day === "27" ? "JAN" : "FEB"}</p>
              <p className="text-sm font-bold">{day}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
