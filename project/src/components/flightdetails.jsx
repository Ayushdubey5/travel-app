import React from "react";

export default function FlightDetails() {
  return (
    <div className="bg-blue-600 rounded-xl p-4 text-white shadow-md w-80 hover:scale-[1.01] transition">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">Flight Details</p>
          <p className="text-xs">26.01.2025, 10:50 am</p>
        </div>
        <button className="text-xs underline">See all</button>
      </div>
      <div className="flex items-center mt-2 space-x-4">
        <div>
          <p className="text-lg font-bold">DEL</p>
          <p className="text-xs">Delhi, India</p>
        </div>
        <span>➡️</span>
        <div>
          <p className="text-lg font-bold">NRT</p>
          <p className="text-xs">Narita, Tokyo</p>
        </div>
      </div>
    </div>
  );
}
