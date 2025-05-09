import React from "react";

const hotels = [
  {
    name: "Shinagawa Prince Hotel",
    checkIn: "26.01.2025, 11:15 pm",
    checkOut: "28.01.2025, 11:15 am",
    nights: 2,
    status: "Confirmed",
    rating: 4.0,
    image: "/public/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg/150"
      ,
  },
  {
    name: "Mercure Tokyo Hotel",
    checkIn: "28.01.2025, 6:00 pm",
    checkOut: "30.01.2025, 11:15 am",
    nights: 2,
    status: "Pending",
    rating: 4.1,
    image: "/public/valeriia-bugaiova-_pPHgeHz1uk-unsplash (1).jpg/150",
  },
];

export default function Accommodation() {
  return (
    <div>
      <div className="flex justify-between mb-2 mt-6">
        <h2 className="text-lg font-semibold">Accommodation</h2>
        <button className="text-xs text-green-400 underline">See all</button>
      </div>
      <div className="flex space-x-4 overflow-x-auto">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-3 w-64 shrink-0 hover:scale-105 transition"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="rounded-lg mb-2"
            />
            <p className="text-xs bg-blue-500 w-fit px-2 rounded-full text-white mb-1">
              ⭐ {hotel.rating} Very Good
            </p>
            <h3 className="text-sm font-bold">{hotel.name}</h3>
            <p className="text-xs">Check in: {hotel.checkIn}</p>
            <p className="text-xs">Check out: {hotel.checkOut}</p>
            <p className="text-xs">{hotel.nights} Nights</p>
            <p
              className={`text-xs font-medium mt-1 ${
                hotel.status === "Confirmed"
                  ? "text-green-400"
                  : "text-orange-400"
              }`}
            >
              {hotel.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
