import React, { useState } from 'react';
import TripDetails from './TripDetails';
import PlanTrip from './PlanTrip';

export default function Dashboard() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showPlanTrip, setShowPlanTrip] = useState(false);
  
  const upcomingTrips = [
    {
      id: 1,
      destination: 'Paris, France',
      date: '15-20 March 2024',
      image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg',
      flight: {
        departure: 'JFK - 10:30 AM',
        arrival: 'CDG - 11:45 PM',
        airline: 'Air France',
        flightNumber: 'AF123'
      },
      accommodation: {
        name: 'Le Grand Hotel Paris',
        address: '123 Rue de Rivoli, 75001 Paris',
        checkIn: 'March 15, 3:00 PM',
        checkOut: 'March 20, 11:00 AM'
      },
      activities: [
        { day: 'Day 1', items: ['Eiffel Tower Tour', 'Seine River Cruise', 'Dinner at Le Cheval Blanc'] },
        { day: 'Day 2', items: ['Louvre Museum', 'Notre-Dame Cathedral', 'Wine Tasting Experience'] }
      ]
    },
    {
      id: 2,
      destination: 'Tokyo, Japan',
      date: '5-12 April 2024',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
      flight: {
        departure: 'LAX - 1:15 PM',
        arrival: 'HND - 5:30 PM',
        airline: 'Japan Airlines',
        flightNumber: 'JL456'
      },
      accommodation: {
        name: 'Park Hyatt Tokyo',
        address: '3-7-1-2 Nishi Shinjuku, Tokyo',
        checkIn: 'April 5, 3:00 PM',
        checkOut: 'April 12, 11:00 AM'
      },
      activities: [
        { day: 'Day 1', items: ['Senso-ji Temple', 'Sushi Making Class', 'Shibuya Crossing'] },
        { day: 'Day 2', items: ['TeamLab Borderless', 'Harajuku Shopping', 'Robot Restaurant Show'] }
      ]
    }
  ];

  return (
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
        <button 
          onClick={() => setShowPlanTrip(true)}
          className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
        >
          Plan New Trip
        </button>
      </div>

      <div className="flex gap-8">
        <div className="w-1/2">
          <h2 className="text-xl font-semibold text-text-primary mb-6">Your Upcoming Trips</h2>
          <div className="space-y-6">
            {upcomingTrips.map(trip => (
              <div 
                key={trip.id}
                onClick={() => setSelectedTrip(trip)}
                className={`bg-white rounded-2xl overflow-hidden cursor-pointer transition-all ${
                  selectedTrip?.id === trip.id 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : 'hover:shadow-md'
                }`}
              >
                <img 
                  src={trip.image} 
                  alt={trip.destination}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-text-primary">{trip.destination}</h3>
                  <p className="text-text-secondary">{trip.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedTrip && (
          <div className="w-1/2 bg-white rounded-2xl p-8">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-text-primary">{selectedTrip.destination}</h3>
                    <p className="text-text-secondary mt-1">{selectedTrip.date}</p>
                  </div>
                  <button className="text-primary hover:text-primary/80">
                    Edit Trip
                  </button>
                </div>
                <img 
                  src={selectedTrip.image} 
                  alt={selectedTrip.destination}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Flight Details</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Departure</p>
                    <p className="font-medium text-text-primary">{selectedTrip.flight.departure}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Arrival</p>
                    <p className="font-medium text-text-primary">{selectedTrip.flight.arrival}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Airline</p>
                    <p className="font-medium text-text-primary">{selectedTrip.flight.airline}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Flight Number</p>
                    <p className="font-medium text-text-primary">{selectedTrip.flight.flightNumber}</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Accommodation</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-text-primary">{selectedTrip.accommodation.name}</p>
                    <p className="text-sm text-text-secondary mt-1">{selectedTrip.accommodation.address}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-text-secondary mb-1">Check-in</p>
                      <p className="font-medium text-text-primary">{selectedTrip.accommodation.checkIn}</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary mb-1">Check-out</p>
                      <p className="font-medium text-text-primary">{selectedTrip.accommodation.checkOut}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Activities</h4>
                <div className="space-y-6">
                  {selectedTrip.activities.map((day, index) => (
                    <div key={index}>
                      <p className="font-medium text-text-primary mb-3">{day.day}</p>
                      <ul className="space-y-2">
                        {day.items.map((activity, actIndex) => (
                          <li 
                            key={actIndex} 
                            className="text-text-secondary bg-white rounded-lg p-3 shadow-sm"
                          >
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {showPlanTrip && (
        <PlanTrip onClose={() => setShowPlanTrip(false)} />
      )}
    </div>
  );
}