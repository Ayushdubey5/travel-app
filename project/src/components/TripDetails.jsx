import React from 'react';
import { format } from 'date-fns';

export default function TripDetails({ trip, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-end">
      <div className="w-[480px] bg-white h-full p-6 overflow-y-auto animate-slide-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">{trip.destination}</h2>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
            ✕
          </button>
        </div>
        
        <img 
          src={trip.image} 
          alt={trip.destination}
          className="w-full h-48 object-cover rounded-xl mb-6"
        />

        <div className="space-y-6">
          <div className="bg-secondary rounded-lg p-4">
            <h3 className="font-semibold mb-3">Flight Details</h3>
            <div className="space-y-2">
              <p className="text-text-secondary">
                <span className="font-medium text-text-primary">Departure:</span> {trip.flight.departure}
              </p>
              <p className="text-text-secondary">
                <span className="font-medium text-text-primary">Arrival:</span> {trip.flight.arrival}
              </p>
              <p className="text-text-secondary">
                <span className="font-medium text-text-primary">Airline:</span> {trip.flight.airline}
              </p>
              <p className="text-text-secondary">
                <span className="font-medium text-text-primary">Flight:</span> {trip.flight.flightNumber}
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-4">
            <h3 className="font-semibold mb-3">Accommodation</h3>
            <div className="space-y-2">
              <p className="font-medium text-text-primary">{trip.accommodation.name}</p>
              <p className="text-text-secondary">{trip.accommodation.address}</p>
              <p className="text-text-secondary">
                Check-in: {trip.accommodation.checkIn}
              </p>
              <p className="text-text-secondary">
                Check-out: {trip.accommodation.checkOut}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Activities</h3>
            <div className="space-y-3">
              {trip.activities.map((day, index) => (
                <div key={index} className="bg-secondary rounded-lg p-4">
                  <p className="font-medium text-text-primary mb-2">{day.day}</p>
                  <ul className="space-y-2">
                    {day.items.map((activity, actIndex) => (
                      <li key={actIndex} className="text-text-secondary">
                        • {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}